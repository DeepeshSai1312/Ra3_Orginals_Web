export enum LIVE_STAT_SOURCE {
  NONE = 'none',
  INSTAGRAM_FOLLOWERS = 'instagram-followers',
  YOUTUBE_SUBSCRIBERS = 'youtube-subscribers',
  YOUTUBE_CHANNEL_VIEWS = 'youtube-channel-views',
  YOUTUBE_VIDEO_VIEWS = 'youtube-video-views',
}

export const LIVE_STAT_SOURCES = Object.values(LIVE_STAT_SOURCE);

export interface ILiveStatRequest {
  source: LIVE_STAT_SOURCE;
  /** Instagram username, YouTube channel ID (UC...) or YouTube video ID. */
  id: string;
}

/** Live values keyed by `${source}:${id}`. `null` means the lookup failed. */
export type LiveStatValues = Record<string, number | null>;

export const liveStatKey = ({ source, id }: ILiveStatRequest) =>
  `${source}:${id.trim().replace(/^@/, '').toLowerCase()}`;

export const SOCIAL_STATS_CACHE_TAG = 'social-stats';
