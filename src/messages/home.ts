import { LIVE_STAT_SOURCE } from '@constants/liveStats';
import {
  IBrandMarquee,
  ICollectivesSection,
  IFinalCtaSection,
  IFounderTeamSection,
  IHeroSection,
  IManifestoSection,
  INumbersSection,
  IProcessSection,
  IServicesSection,
  IStudioGallery,
  IWorkSection,
} from '@/types/sections';

/**
 * Homepage copy from the v1 design. These are the defaults for each section:
 * used when Builder.io has no published page, and as Builder's default input values.
 * Media fields are empty until the final files are uploaded to Builder.
 */
export const homePageMessage: {
  hero: IHeroSection;
  brands: IBrandMarquee;
  manifesto: IManifestoSection;
  numbers: INumbersSection;
  work: IWorkSection;
  services: IServicesSection;
  studio: IStudioGallery;
  process: IProcessSection;
  founder: IFounderTeamSection;
  collectives: ICollectivesSection;
  finalCta: IFinalCtaSection;
} = {
  hero: {
    eyebrow: 'Branding & Creative Agency · Est. 2025',
    headlineLines: [{ text: 'Great branding' }, { text: "isn't just seen." }],
    headlineAccent: "It's felt.",
    description:
      'We write, shoot, edit and post content that turns founders into brands, and brands into the one everyone remembers. For businesses across India, with a little extra love for the South.',
    primaryCtaLabel: 'Book a free strategy call',
    secondaryCta: { label: 'See our work', href: '#work' },
    slotsLead: 'We take only 10 brands a month',
    reels: [{}, {}, {}],
    reelsCaption: 'Now playing · Client reels',
    bottomLeft: 'Strategy · Content · Production',
    bottomRight: 'ra3originals.com',
  },
  brands: {
    brands: [
      { name: 'Undr Ctrl Burgers' },
      { name: 'Bridal Blossom Studio' },
      { name: 'Fabriplay.AI' },
      { name: 'Nawaz Mohamed' },
      { name: 'FinanceWithGowtham' },
      { name: 'House of Maverick' },
      { name: 'Inspire with Ram' },
      { name: 'Vision Excellence' },
    ],
  },
  manifesto: {
    eyebrow: 'All about us',
    headline: "This isn't a showreel.",
    headlineAccent: "It's a statement.",
    showreelCta: 'Watch the RA3 reel',
    lead: "RA3 Originals was built on one belief: great branding isn't just seen, it's felt. Every frame we shoot, every script we write, every campaign we build is designed with one goal: real business impact.",
    body: 'Our team members worked with agencies and brands as freelance creators and strategists before we officially founded RA3 Originals in 2025, to combine creativity with structured strategy and deliver performance-driven results.',
    closing: "We don't follow trends.",
    closingAccent: 'We set them.',
  },
  numbers: {
    items: [
      {
        value: '60K',
        suffix: '+',
        caption: 'Followers from 300, in 3 months',
        label: 'RA3 Originals · own page',
        liveSource: LIVE_STAT_SOURCE.INSTAGRAM_FOLLOWERS,
        liveId: 'ra3.originals',
      },
      {
        value: '92K',
        caption: 'Up from 64.6K in 2 months, with 20 pieces of content',
        label: 'Bridal Blossom Studio',
      },
      {
        from: '0',
        value: '5K',
        caption: 'In 3 months, with 25 scripted talking-head videos',
        label: 'Undr Ctrl Burgers',
      },
      {
        from: '0',
        value: '4K',
        caption: 'In 2 months, with 20 videos, and a steady flow of leads',
        label: 'GM Group',
      },
    ],
  },
  work: {
    eyebrow: 'Selected work',
    headline: 'Three seconds.',
    headlineAccent: 'We make every one count.',
    featured: {
      eyebrow: 'Featured case · Brand launch',
      title: 'Undr Ctrl Burgers',
      description:
        'How to launch a brand, our style. He built the shop, and our branding team made the first burger with him: the first burger of Undr Ctrl. From the intro reel to the brand voice, we built the page from zero.',
      chips: [
        { text: 'Brand voice' },
        { text: 'Launch reels' },
        { text: '0 → 5K in 3 months' },
      ],
    },
    items: [
      {
        tag: 'Reel',
        client: 'Bridal Blossom Studio',
        title: 'A high-retention reel planned for founder Sumathi',
      },
      {
        tag: 'Founder story',
        client: 'Nawaz Mohamed',
        title:
          'Cinematic storytelling for the founder of Coal Barbeque & The Wedding Biryani',
      },
      {
        tag: 'Podcast',
        client: 'House of Maverick',
        title:
          'An IIT dropout who helped build one of India’s biggest tech companies',
      },
      {
        tag: 'Breakdown',
        client: 'Strategy series',
        title: 'MRF didn’t just sponsor cricket. They owned it.',
      },
      {
        tag: 'Brand film',
        client: 'Tamil software brand',
        title: 'Tech doesn’t have to be boring. We proved it.',
      },
      {
        tag: 'AI film',
        client: 'Amarva',
        title: 'No face. No shoot. A full brand film made with AI.',
      },
    ],
  },
  services: {
    eyebrow: 'Things we specialise in',
    headline: 'Creativity with',
    headlineAccent: 'structured strategy.',
    description:
      'From the first positioning call to the post that goes live, one team handles your brand end to end.',
    services: [
      {
        title: 'Brand strategy & positioning',
        items: [
          { text: 'Brand identity development' },
          { text: 'Market positioning strategy' },
          { text: 'Target audience analysis' },
          { text: 'Content direction planning' },
        ],
      },
      {
        title: 'Social media management',
        items: [
          { text: 'Content calendar planning' },
          { text: 'Reels & post production' },
          { text: 'Caption strategy & storytelling' },
          { text: 'Community management' },
        ],
      },
      {
        title: 'Creative content production',
        items: [
          { text: 'Talking-head videos' },
          { text: 'Product shoots' },
          { text: 'Ad creatives' },
          { text: 'Corporate & promotional videos' },
        ],
      },
      {
        title: 'Podcasts & long-form',
        items: [
          { text: 'RA3 Collectives' },
          { text: 'YouTube long-form' },
          { text: 'Podcast shoots & edits' },
          { text: 'Broadcast production' },
        ],
      },
    ],
  },
  studio: {
    eyebrow: 'From the studio',
    headline: 'Product shoots. Posters. Carousels.',
    headlineAccent: 'Brand films.',
    description:
      'Food, wellness, products and people, all shot, designed and finished in-house.',
    rowA: [
      { alt: 'Biryani product shoot' },
      { alt: 'Amarva Ashwagandha product poster' },
      { alt: 'South Indian meals on banana leaf shoot' },
      { alt: 'Sol tek product range poster' },
      { alt: 'Amarva supplement splash shoot' },
      { alt: 'Chicken fry product shoot' },
    ],
    rowB: [
      { alt: 'Vision Excellence social post' },
      { alt: 'Amarva brand grid' },
      { alt: 'Meals product shoot' },
      { alt: 'Kleen shampoo poster' },
      { alt: 'Amarva minimal product shoot' },
      { alt: 'MRF strategy breakdown reel cover' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    headline: 'Done for you.',
    headlineAccent: 'Every single month.',
    timeLabel: 'Your time, per month',
    timeValue: '3 calls + 1 shoot day',
    timeNote: 'We handle everything else.',
    steps: [
      {
        title: 'Free strategy call',
        description:
          "We study your business, your audience and your competitors, then show you exactly how we'd position your brand.",
      },
      {
        title: 'Plan & scripts',
        description:
          'Content direction, calendar and topics, locked over our monthly calls. We write every script.',
      },
      {
        title: 'One shoot day',
        description:
          'We arrive with the crew, the scripts and the direction. You show up and be yourself on camera.',
      },
      {
        title: 'Edit, post, grow',
        description:
          'We edit, post and manage the page through the month. You get the reach, and the leads.',
      },
    ],
  },
  founder: {
    photoAlt: 'RA3 Originals crew on a shoot day',
    photoCaption: 'On set · RA3 shoot day',
    eyebrow: 'The founder',
    headline: "Hello, I'm",
    headlineAccent: 'R R Ranjiv.',
    bio: 'Founder and Creative Director of RA3 Originals. After years working alongside agencies and brands as a freelance strategist, I founded RA3 Originals in 2025 to build a team that combines creativity with structured marketing strategy.',
    name: 'R R Ranjiv',
    role: 'Founder & Creative Director',
    teamHeading: 'The team behind the frames',
    teamNote: 'Names & photos to come',
    team: [
      { name: '[Team member name]', role: 'Content Strategist' },
      { name: '[Team member name]', role: 'Scriptwriter' },
      { name: '[Team member name]', role: 'Cinematographer' },
      { name: '[Team member name]', role: 'Video Editor' },
      { name: '[Team member name]', role: 'Designer' },
    ],
  },
  collectives: {
    eyebrow: 'A unit of RA3 Originals',
    headline: 'RA3',
    headlineAccent: 'Collectives',
    description:
      'Podcasts, long-form and broadcast production. We shoot, produce, edit and post YouTube long-forms and podcasts, from House of Maverick to The Art of Noticing.',
    cta: {
      label: 'Explore RA3 Collectives',
      href: 'https://instagram.com/ra3collectives',
    },
    projects: [
      { caption: 'House of Maverick · Podcast' },
      { caption: '[Long-form project]' },
    ],
  },
  finalCta: {
    eyebrow: 'Only 10 brands a month',
    headline: 'Ready to build',
    headlineAccent: 'something big?',
    description:
      "Let's get on a free strategy call and take your brand to the next level.",
    ctaLabel: 'Chat with us on WhatsApp',
    slotsSuffix: 'slots open this month',
  },
};
