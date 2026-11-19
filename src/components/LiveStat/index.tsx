'use client';

import { useEffect, useState } from 'react';
import { useLiveStats } from '@components/SiteData';
import { LIVE_STAT_SOURCE, liveStatKey } from '@constants/liveStats';
import { formatCount } from '@utils/formatCount';

const canFetchOnClient =
  process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' ||
  process.env.NODE_ENV === 'development';

/**
 * A number that can come from YouTube/Instagram. Uses the value fetched on the server
 * when there is one; otherwise shows the manual fallback. In preview (Builder editor),
 * a newly added source is fetched from /api/social-stats so editors see it live.
 */
const LiveStat = ({
  fallback,
  source,
  id,
}: {
  fallback: string;
  source?: LIVE_STAT_SOURCE;
  id?: string;
}) => {
  const serverValues = useLiveStats();
  const hasSource = !!source && source !== LIVE_STAT_SOURCE.NONE && !!id;
  const key = hasSource ? liveStatKey({ source, id }) : '';
  const serverValue = hasSource ? serverValues[key] : undefined;
  const [clientValue, setClientValue] = useState<number | null>(null);

  useEffect(() => {
    if (!hasSource || serverValue !== undefined || !canFetchOnClient) return;
    const controller = new AbortController();
    fetch(`/api/social-stats?${new URLSearchParams({ source, id })}`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { value?: number | null } | null) =>
        setClientValue(data?.value ?? null)
      )
      .catch(() => undefined);
    return () => controller.abort();
  }, [hasSource, serverValue, source, id]);

  const live = serverValue ?? clientValue;
  return <>{typeof live === 'number' ? formatCount(live) : fallback}</>;
};

export default LiveStat;
