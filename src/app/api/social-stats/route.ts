import { NextRequest } from 'next/server';
import { LIVE_STAT_SOURCE } from '@constants/liveStats';
import { getLiveStat, isValidLiveStatRequest } from '@utils/socialStats';

const isPreviewEnabled =
  process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' ||
  process.env.NODE_ENV === 'development';

/**
 * Live number lookup for the Builder editor (preview / dev only), so editors see a
 * newly configured source immediately. Production pages get their numbers on the
 * server at render time and never call this.
 */
export async function GET(request: NextRequest) {
  if (!isPreviewEnabled) {
    return Response.json({ error: 'Not available' }, { status: 404 });
  }
  const statRequest = {
    source: request.nextUrl.searchParams.get('source') as LIVE_STAT_SOURCE,
    id: request.nextUrl.searchParams.get('id') ?? '',
  };
  if (!isValidLiveStatRequest(statRequest)) {
    return Response.json({ error: 'Invalid source or id' }, { status: 400 });
  }
  return Response.json({ value: await getLiveStat(statRequest) });
}
