import { Metadata } from 'next';
import { RenderBuilderContent } from '@components/Builderio/RenderBuilderContent';
import { LiveStatsProvider } from '@components/SiteData';
import HomePageSections from '@components/Webpages/HomePageSections';
import { BUILDER_MODELS } from '@constants/builder';
import { homePageMessage } from '@messages/home';
import {
  collectDefaultLiveStatRequests,
  collectLiveStatRequests,
} from '@utils/collectLiveStatRequests';
import { getPageContent } from '@utils/getPageContent';
import { getPageMetadata } from '@utils/getPageMetadata';
import { getLiveStats } from '@utils/socialStats';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await getPageContent('/'), '/');
}

export default async function HomePage() {
  const content = await getPageContent('/');
  // Fetch live YouTube/Instagram numbers on the server, for whichever version renders.
  const liveStats = await getLiveStats(
    content
      ? collectLiveStatRequests(content)
      : collectDefaultLiveStatRequests(homePageMessage.numbers.items)
  );

  return (
    <LiveStatsProvider value={liveStats}>
      <RenderBuilderContent
        content={content as never}
        model={BUILDER_MODELS.PAGE}
        fallback={<HomePageSections />}
      />
    </LiveStatsProvider>
  );
}
