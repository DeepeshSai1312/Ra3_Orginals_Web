import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RenderBuilderContent } from '@components/Builderio/RenderBuilderContent';
import { LiveStatsProvider } from '@components/SiteData';
import { BUILDER_MODELS } from '@constants/builder';
import { collectLiveStatRequests } from '@utils/collectLiveStatRequests';
import { getBuilderPagePaths, getPageContent } from '@utils/getPageContent';
import { getPageMetadata } from '@utils/getPageMetadata';
import { getLiveStats } from '@utils/socialStats';

const isPreviewEnabled =
  process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' ||
  process.env.NODE_ENV === 'development';

/** Placeholder param so the route builds before any Builder pages exist. */
const NO_PAGES_PLACEHOLDER = '__no-builder-pages__';

const toUrlPath = (slug: string[]) => `/${slug.join('/')}`;

/** Pre-render every page published in Builder; new ones render on first visit. */
export async function generateStaticParams() {
  const paths = await getBuilderPagePaths();
  if (!paths.length) return [{ slug: [NO_PAGES_PLACEHOLDER] }];
  return paths.map((path) => ({ slug: path.split('/').filter(Boolean) }));
}

export async function generateMetadata(
  props: PageProps<'/[...slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const urlPath = toUrlPath(slug);
  return getPageMetadata(await getPageContent(urlPath), urlPath);
}

export default async function BuilderPage(props: PageProps<'/[...slug]'>) {
  const { slug } = await props.params;
  const content = await getPageContent(toUrlPath(slug));

  // Outside preview, a URL with no Builder page is a real 404.
  // In preview the editor still needs to load an empty page to build it.
  if (!content && !isPreviewEnabled) notFound();

  const liveStats = await getLiveStats(collectLiveStatRequests(content));
  return (
    <LiveStatsProvider value={liveStats}>
      <RenderBuilderContent
        content={content as never}
        model={BUILDER_MODELS.PAGE}
      />
    </LiveStatsProvider>
  );
}
