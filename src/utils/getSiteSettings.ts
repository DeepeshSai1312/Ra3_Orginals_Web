import { BUILDER_MODELS } from '@constants/builder';
import { DEFAULT_SITE_SETTINGS, ISiteSettings } from '@constants/siteSettings';
import { builderFetch, IBuilderContent } from './builderRequestWrapper';

/** Site settings from the Builder `site-settings` data model, merged over the defaults. */
export const getSiteSettings = async (): Promise<ISiteSettings> => {
  const entry = (await builderFetch<Partial<ISiteSettings>>(
    BUILDER_MODELS.SITE_SETTINGS
  )) as IBuilderContent<Partial<ISiteSettings>> | null;

  const fromBuilder = Object.fromEntries(
    Object.entries(entry?.data ?? {}).filter(
      ([key, value]) =>
        key in DEFAULT_SITE_SETTINGS && value !== '' && value !== null
    )
  ) as Partial<ISiteSettings>;

  return { ...DEFAULT_SITE_SETTINGS, ...fromBuilder };
};
