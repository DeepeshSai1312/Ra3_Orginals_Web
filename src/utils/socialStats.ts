import { cacheLife, cacheTag } from 'next/cache';
import {
  ILiveStatRequest,
  LIVE_STAT_SOURCE,
  LiveStatValues,
  liveStatKey,
  SOCIAL_STATS_CACHE_TAG,
} from '@constants/liveStats';

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3';
const GRAPH_API = `https://graph.facebook.com/${process.env.INSTAGRAM_GRAPH_API_VERSION || 'v23.0'}`;

/** Instagram usernames, YouTube channel IDs/handles and video IDs. */
const VALID_ID = /^@?[A-Za-z0-9._-]{1,100}$/;

export const isValidLiveStatRequest = (
  request: Partial<ILiveStatRequest>
): request is ILiveStatRequest =>
  !!request.source &&
  request.source !== LIVE_STAT_SOURCE.NONE &&
  Object.values(LIVE_STAT_SOURCE).includes(request.source) &&
  !!request.id &&
  VALID_ID.test(request.id.trim());

const toNumber = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `Social stats request failed: ${response.status} ${response.statusText}`
      );
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error('Social stats request failed', error);
    return null;
  }
}

/**
 * Follower count for any Instagram Business/Creator account, via the Graph API
 * Business Discovery endpoint. Needs our own IG professional account ID + a token.
 */
async function getInstagramFollowers(username: string) {
  const igUserId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!igUserId || !token) return null;

  const fields = `business_discovery.username(${username}){followers_count}`;
  const data = await getJson<{
    business_discovery?: { followers_count?: number };
  }>(
    `${GRAPH_API}/${igUserId}?fields=${encodeURIComponent(fields)}&access_token=${encodeURIComponent(token)}`
  );
  return toNumber(data?.business_discovery?.followers_count);
}

/** Channel statistics by channel ID (UC...) or @handle. */
async function getYouTubeChannelStats(channel: string) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return null;

  const selector = /^UC[A-Za-z0-9_-]{22}$/.test(channel)
    ? `id=${channel}`
    : `forHandle=${encodeURIComponent(channel.startsWith('@') ? channel : `@${channel}`)}`;
  const data = await getJson<{
    items?: { statistics?: { subscriberCount?: string; viewCount?: string } }[];
  }>(`${YOUTUBE_API}/channels?part=statistics&${selector}&key=${key}`);
  return data?.items?.[0]?.statistics ?? null;
}

async function getYouTubeVideoViews(videoId: string) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return null;

  const data = await getJson<{
    items?: { statistics?: { viewCount?: string } }[];
  }>(
    `${YOUTUBE_API}/videos?part=statistics&id=${encodeURIComponent(videoId)}&key=${key}`
  );
  return toNumber(data?.items?.[0]?.statistics?.viewCount);
}

/** One live number. Cached for a few hours so we stay far inside API quotas. */
export async function getLiveStat({
  source,
  id,
}: ILiveStatRequest): Promise<number | null> {
  'use cache';
  cacheTag(SOCIAL_STATS_CACHE_TAG);
  cacheLife('hours');

  const cleanId = id.trim().replace(/^@/, '');
  switch (source) {
    case LIVE_STAT_SOURCE.INSTAGRAM_FOLLOWERS:
      return getInstagramFollowers(cleanId);
    case LIVE_STAT_SOURCE.YOUTUBE_SUBSCRIBERS:
      return toNumber(
        (await getYouTubeChannelStats(id.trim()))?.subscriberCount
      );
    case LIVE_STAT_SOURCE.YOUTUBE_CHANNEL_VIEWS:
      return toNumber((await getYouTubeChannelStats(id.trim()))?.viewCount);
    case LIVE_STAT_SOURCE.YOUTUBE_VIDEO_VIEWS:
      return getYouTubeVideoViews(cleanId);
    default:
      return null;
  }
}

/** Resolve many live numbers at once, de-duplicated and keyed by liveStatKey(). */
export const getLiveStats = async (
  requests: Partial<ILiveStatRequest>[]
): Promise<LiveStatValues> => {
  const unique = new Map<string, ILiveStatRequest>();
  requests.filter(isValidLiveStatRequest).forEach((request) => {
    unique.set(liveStatKey(request), request);
  });

  const entries = await Promise.all(
    [...unique.entries()].map(
      async ([key, request]) => [key, await getLiveStat(request)] as const
    )
  );
  return Object.fromEntries(entries);
};
