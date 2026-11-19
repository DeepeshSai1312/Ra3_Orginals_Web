import { timingSafeEqual } from 'node:crypto';
import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import { BUILDER_CACHE_TAG } from '@constants/builder';
import { SOCIAL_STATS_CACHE_TAG } from '@constants/liveStats';

const isAuthorized = (request: NextRequest) => {
  const secret = process.env.REVALIDATE_SECRET;
  const provided = request.headers.get('x-revalidate-secret');
  if (!secret || !provided) return false;
  const a = Buffer.from(secret);
  const b = Buffer.from(provided);
  return a.length === b.length && timingSafeEqual(a, b);
};

/**
 * Builder.io publish webhook. In Builder: Models → each model → Webhooks →
 * POST https://<site>/api/revalidate with header `x-revalidate-secret: <REVALIDATE_SECRET>`.
 * `?target=stats` refreshes the YouTube/Instagram numbers instead.
 */
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return Response.json({ revalidated: false }, { status: 401 });
  }
  const tag =
    request.nextUrl.searchParams.get('target') === 'stats'
      ? SOCIAL_STATS_CACHE_TAG
      : BUILDER_CACHE_TAG;
  revalidateTag(tag, 'max');
  return Response.json({ revalidated: true, tag });
}
