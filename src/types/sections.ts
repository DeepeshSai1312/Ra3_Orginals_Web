import { LIVE_STAT_SOURCE } from '@constants/liveStats';

export interface ILink {
  label: string;
  href: string;
}

export interface IHeroSection {
  eyebrow: string;
  headlineLines: { text: string }[];
  headlineAccent: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: ILink;
  slotsLead: string;
  reels: { video?: string; poster?: string }[];
  reelsCaption: string;
  bottomLeft: string;
  bottomRight: string;
}

export interface IBrandMarquee {
  brands: { name: string }[];
}

export interface IManifestoSection {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  showreelVideo?: string;
  showreelPoster?: string;
  /** Link to the full reel with sound (YouTube / Instagram). */
  fullReelUrl?: string;
  showreelCta: string;
  lead: string;
  body: string;
  closing: string;
  closingAccent: string;
}

export interface IStatItem {
  /** Shown before an arrow, e.g. "0" in "0→5K". Leave empty for a single number. */
  from?: string;
  /** Fallback value shown when there is no live source, or the lookup fails. */
  value: string;
  /** Red suffix such as "+". */
  suffix?: string;
  caption: string;
  label: string;
  liveSource?: LIVE_STAT_SOURCE;
  /** Instagram username, YouTube channel ID or video ID, depending on liveSource. */
  liveId?: string;
}

export interface INumbersSection {
  items: IStatItem[];
}

export interface IWorkItem {
  video?: string;
  poster?: string;
  tag: string;
  client: string;
  title: string;
  href?: string;
}

export interface IWorkSection {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  viewAll?: ILink;
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    chips: { text: string }[];
    videoA?: string;
    videoB?: string;
    href?: string;
  };
  items: IWorkItem[];
}

export interface IServicesSection {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  services: { title: string; items: { text: string }[] }[];
}

export interface IStudioGallery {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  rowA: { image?: string; alt: string }[];
  rowB: { image?: string; alt: string }[];
}

export interface IProcessSection {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  timeLabel: string;
  timeValue: string;
  timeNote: string;
  steps: { title: string; description: string }[];
}

export interface IFounderTeamSection {
  photo?: string;
  photoAlt: string;
  photoCaption: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  bio: string;
  avatar?: string;
  name: string;
  role: string;
  teamHeading: string;
  teamNote?: string;
  team: { name: string; role: string; photo?: string }[];
}

export interface ICollectivesSection {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  cta?: ILink;
  ribbon?: string;
  projects: {
    video?: string;
    poster?: string;
    caption: string;
    href?: string;
  }[];
}

export interface IFinalCtaSection {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  ctaLabel: string;
  slotsSuffix: string;
  ribbon?: string;
}
