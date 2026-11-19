export const BUILDER_MODELS = {
  PAGE: 'website-pages',
  SITE_SETTINGS: 'site-settings',
} as const;

/** Page models that the registered section components can be dropped into. */
export const CONTENT_PAGE_MODELS = [BUILDER_MODELS.PAGE];

/** Cache tag for everything fetched from Builder; the publish webhook revalidates it. */
export const BUILDER_CACHE_TAG = 'builder';

/** File types accepted by Builder file inputs. */
export const ALLOWED_VIDEO_FILE_TYPES = ['mp4', 'webm', 'mov'];
export const ALLOWED_IMAGE_FILE_TYPES = ['jpeg', 'jpg', 'png', 'webp', 'avif'];

export const VIDEO_HELPER_TEXT = 'Muted loop, 6–8 s, under 300 KB';
