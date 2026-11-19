import { cacheLife, cacheTag } from 'next/cache';
import { BUILDER_CACHE_TAG } from '@constants/builder';

const apiKey = process.env.NEXT_PUBLIC_BUILDERIO;
const contentApi =
  process.env.NEXT_BUILDER_API || 'https://cdn.builder.io/api/v3/content/';
const isDevelopment = process.env.NODE_ENV === 'development';
const isPreviewEnabled = process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';

export interface IBuilderContent<TData = Record<string, unknown>> {
  id?: string;
  name?: string;
  data?: TData & {
    title?: string;
    description?: string;
    blocks?: IBuilderBlock[];
  };
  [key: string]: unknown;
}

export interface IBuilderBlock {
  component?: { name?: string; options?: Record<string, unknown> };
  children?: IBuilderBlock[];
  [key: string]: unknown;
}

type IBuilderFetchOptions = {
  /** Targeting, e.g. { urlPath: '/about' } for page models. */
  userAttributes?: Record<string, string>;
  /** Return the whole result list instead of only the first entry. */
  fetchAsList?: boolean;
  limit?: number;
};

const flatten = (
  obj: Record<string, unknown>,
  prefix = '',
  out: Record<string, string> = {}
) => {
  Object.entries(obj).forEach(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object') {
      flatten(value as Record<string, unknown>, fullKey, out);
    } else if (value !== undefined) {
      out[fullKey] = String(value);
    }
  });
  return out;
};

/**
 * Fetch content from Builder's Content API.
 * Cached with `'use cache'` and tagged so the Builder publish webhook
 * (/api/revalidate) can refresh it immediately.
 */
export async function builderFetch<TData = Record<string, unknown>>(
  model: string,
  options: IBuilderFetchOptions = {}
): Promise<IBuilderContent<TData> | IBuilderContent<TData>[] | null> {
  'use cache';
  cacheTag(BUILDER_CACHE_TAG, `${BUILDER_CACHE_TAG}:${model}`);
  // 'minutes' keeps pages prerenderable (shorter profiles become request-time data).
  // Publishing in Builder refreshes immediately via the webhook, and the visual
  // editor fetches its own live preview, so a short cache is never needed.
  cacheLife('minutes');

  if (!apiKey) return null;

  const { fetchAsList, limit, userAttributes } = options;
  const query = new URLSearchParams(
    flatten({
      apiKey,
      limit: limit ?? (fetchAsList ? 100 : 1),
      enrich: true,
      includeUnpublished: isPreviewEnabled || isDevelopment,
      cachebust: isPreviewEnabled || isDevelopment,
      userAttributes,
    })
  );

  try {
    const response = await fetch(`${contentApi}${model}?${query}`);
    if (!response.ok) {
      console.error(
        `Builder fetch failed for "${model}": ${response.status} ${response.statusText}`
      );
      return null;
    }
    const content = (await response.json()) as {
      results?: IBuilderContent<TData>[];
    };
    return fetchAsList
      ? (content.results ?? [])
      : (content.results?.[0] ?? null);
  } catch (error) {
    console.error(`Builder fetch failed for "${model}"`, error);
    return null;
  }
}

export const isBuilderConfigured = () => Boolean(apiKey);
