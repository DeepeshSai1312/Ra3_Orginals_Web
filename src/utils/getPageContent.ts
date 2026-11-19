import { BUILDER_MODELS } from '@constants/builder';
import { builderFetch, IBuilderContent } from './builderRequestWrapper';

/** The Builder `website-pages` entry targeted at this URL path, if any. */
export const getPageContent = async (urlPath: string) =>
  (await builderFetch(BUILDER_MODELS.PAGE, {
    userAttributes: { urlPath },
  })) as IBuilderContent | null;

/** URL paths of every published Builder page except the homepage. */
export const getBuilderPagePaths = async () => {
  const pages = (await builderFetch(BUILDER_MODELS.PAGE, {
    fetchAsList: true,
  })) as IBuilderContent[] | null;

  return (pages ?? [])
    .map((page) => {
      const query = page.query as
        { property?: string; value?: unknown }[] | undefined;
      const urlPath = query?.find((q) => q.property === 'urlPath')?.value;
      return typeof urlPath === 'string' ? urlPath : null;
    })
    .filter((path): path is string => !!path && path !== '/');
};
