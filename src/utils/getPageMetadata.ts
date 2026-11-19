import { Metadata } from 'next';
import { pageTitleAndDescription, siteName } from '@messages/seo/pageSeo';
import { IBuilderContent } from './builderRequestWrapper';

/** Metadata from a Builder page's title/description fields, falling back to the site defaults. */
export const getPageMetadata = (
  content: IBuilderContent | null,
  urlPath: string
): Metadata => {
  const title = content?.data?.title || pageTitleAndDescription.home.title;
  const description =
    content?.data?.description || pageTitleAndDescription.home.description;
  return {
    title: urlPath === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: urlPath },
    openGraph: { title, description, url: urlPath, siteName, type: 'website' },
  };
};
