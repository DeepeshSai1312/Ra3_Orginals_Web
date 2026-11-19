/**
 * Site-wide settings. Editable in Builder.io through the `site-settings` data model;
 * these defaults are used when Builder has no entry (or no API key is configured).
 */
export interface ISiteSettings {
  slotsOpen: number;
  totalSlots: number;
  whatsappNumber: string;
  whatsappMessage: string;
  phoneDisplay: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  collectivesInstagramUrl: string;
  collectivesInstagramHandle: string;
  footerBlurb: string;
}

export const DEFAULT_SITE_SETTINGS: ISiteSettings = {
  slotsOpen: 3,
  totalSlots: 10,
  whatsappNumber: '918438412722',
  whatsappMessage: "Hi RA3 Originals, I'd like to book a free strategy call",
  phoneDisplay: '+91 84384 12722',
  email: 'rrranjiv.ra3originals@gmail.com',
  instagramUrl: 'https://instagram.com/ra3.originals',
  instagramHandle: 'ra3.originals',
  collectivesInstagramUrl: 'https://instagram.com/ra3collectives',
  collectivesInstagramHandle: 'ra3collectives',
  footerBlurb:
    'Branding & creative agency. Strategy, content and production for brands across India.',
};

export const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'RA3 Collectives', href: '/#collectives' },
];
