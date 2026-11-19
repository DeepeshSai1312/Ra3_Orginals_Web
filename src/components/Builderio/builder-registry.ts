'use client';

import { Builder } from '@builder.io/sdk';
import BrandMarquee from '@components/Webpages/BrandMarquee';
import CollectivesSection from '@components/Webpages/CollectivesSection';
import FinalCtaSection from '@components/Webpages/FinalCtaSection';
import FounderTeamSection from '@components/Webpages/FounderTeamSection';
import HeroSection from '@components/Webpages/HeroSection';
import ManifestoSection from '@components/Webpages/ManifestoSection';
import NumbersSection from '@components/Webpages/NumbersSection';
import ProcessSection from '@components/Webpages/ProcessSection';
import ServicesSection from '@components/Webpages/ServicesSection';
import StudioGallery from '@components/Webpages/StudioGallery';
import WorkSection from '@components/Webpages/WorkSection';
import {
  ALLOWED_IMAGE_FILE_TYPES,
  ALLOWED_VIDEO_FILE_TYPES,
  CONTENT_PAGE_MODELS,
  VIDEO_HELPER_TEXT,
} from '@constants/builder';
import { LIVE_STAT_SOURCE, LIVE_STAT_SOURCES } from '@constants/liveStats';
import { homePageMessage } from '@messages/home';
import { BUILDER_COMPONENT_NAMES } from './builderComponentNames';

//11 components
Builder.registerComponent(HeroSection, {
  name: BUILDER_COMPONENT_NAMES.HERO_SECTION,
  friendlyName: 'Hero',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.hero.eyebrow,
    },
    {
      name: 'headlineLines',
      friendlyName: 'Headline Lines',
      type: 'list',
      required: true,
      defaultValue: homePageMessage.hero.headlineLines,
      subFields: [
        {
          name: 'text',
          friendlyName: 'Line',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.hero.headlineAccent,
    },
    {
      name: 'description',
      friendlyName: 'Description',
      type: 'longText',
      defaultValue: homePageMessage.hero.description,
    },
    {
      name: 'primaryCtaLabel',
      friendlyName: 'WhatsApp Button Label',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.hero.primaryCtaLabel,
    },
    {
      name: 'secondaryCta',
      friendlyName: 'Secondary Button',
      type: 'object',
      defaultValue: homePageMessage.hero.secondaryCta,
      subFields: [
        {
          name: 'label',
          friendlyName: 'Label',
          type: 'string',
        },
        {
          name: 'href',
          friendlyName: 'Link (URL or #section)',
          type: 'string',
        },
      ],
    },
    {
      name: 'slotsLead',
      friendlyName: 'Slots Pill Text',
      type: 'string',
      defaultValue: homePageMessage.hero.slotsLead,
    },
    {
      name: 'reels',
      friendlyName: 'Hero Reels (3)',
      type: 'list',
      defaultValue: homePageMessage.hero.reels,
      subFields: [
        {
          name: 'video',
          friendlyName: 'Video (9:16)',
          type: 'file',
          allowedFileTypes: ALLOWED_VIDEO_FILE_TYPES,
          helperText: VIDEO_HELPER_TEXT,
        },
        {
          name: 'poster',
          friendlyName: 'First Frame',
          type: 'file',
          allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
        },
      ],
    },
    {
      name: 'reelsCaption',
      friendlyName: 'Reels Caption',
      type: 'string',
      defaultValue: homePageMessage.hero.reelsCaption,
    },
    {
      name: 'bottomLeft',
      friendlyName: 'Bottom-left Text',
      type: 'string',
      defaultValue: homePageMessage.hero.bottomLeft,
    },
    {
      name: 'bottomRight',
      friendlyName: 'Bottom-right Text',
      type: 'string',
      defaultValue: homePageMessage.hero.bottomRight,
    },
  ],
});

Builder.registerComponent(BrandMarquee, {
  name: BUILDER_COMPONENT_NAMES.BRAND_MARQUEE,
  friendlyName: 'Brand Marquee',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'brands',
      friendlyName: 'Brands',
      type: 'list',
      required: true,
      defaultValue: homePageMessage.brands.brands,
      subFields: [
        {
          name: 'name',
          friendlyName: 'Brand Name',
          type: 'string',
          required: true,
        },
      ],
    },
  ],
});

Builder.registerComponent(ManifestoSection, {
  name: BUILDER_COMPONENT_NAMES.MANIFESTO_SECTION,
  friendlyName: 'Manifesto + Showreel',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.manifesto.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.manifesto.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.manifesto.headlineAccent,
    },
    {
      name: 'showreelVideo',
      friendlyName: 'Showreel Loop (16:9)',
      type: 'file',
      allowedFileTypes: ALLOWED_VIDEO_FILE_TYPES,
      helperText: VIDEO_HELPER_TEXT,
    },
    {
      name: 'showreelPoster',
      friendlyName: 'Showreel First Frame',
      type: 'file',
      allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
    },
    {
      name: 'fullReelUrl',
      friendlyName: 'Full Reel Link (optional)',
      type: 'url',
      helperText:
        'YouTube or Instagram link. Empty: the play button plays the loop with sound.',
    },
    {
      name: 'showreelCta',
      friendlyName: 'Play Button Label',
      type: 'string',
      defaultValue: homePageMessage.manifesto.showreelCta,
    },
    {
      name: 'lead',
      friendlyName: 'Lead Paragraph',
      type: 'longText',
      defaultValue: homePageMessage.manifesto.lead,
    },
    {
      name: 'body',
      friendlyName: 'Body Paragraph',
      type: 'longText',
      defaultValue: homePageMessage.manifesto.body,
    },
    {
      name: 'closing',
      friendlyName: 'Closing Line',
      type: 'string',
      defaultValue: homePageMessage.manifesto.closing,
    },
    {
      name: 'closingAccent',
      friendlyName: 'Closing Accent (red)',
      type: 'string',
      defaultValue: homePageMessage.manifesto.closingAccent,
    },
  ],
});

Builder.registerComponent(NumbersSection, {
  name: BUILDER_COMPONENT_NAMES.NUMBERS_SECTION,
  friendlyName: 'Numbers (live stats)',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'items',
      friendlyName: 'Numbers',
      type: 'list',
      required: true,
      defaultValue: homePageMessage.numbers.items,
      subFields: [
        {
          name: 'from',
          friendlyName: 'From (optional)',
          type: 'string',
          helperText: 'e.g. "0" shows as 0→5K',
        },
        {
          name: 'value',
          friendlyName: 'Value',
          type: 'string',
          required: true,
          helperText:
            'Shown as-is, and used as the fallback when a live source is set',
        },
        {
          name: 'suffix',
          friendlyName: 'Red Suffix (optional)',
          type: 'string',
          helperText: 'e.g. "+"',
        },
        {
          name: 'caption',
          friendlyName: 'Caption',
          type: 'string',
        },
        {
          name: 'label',
          friendlyName: 'Label (small caps)',
          type: 'string',
        },
        {
          name: 'liveSource',
          friendlyName: 'Live Source',
          type: 'enum',
          enum: LIVE_STAT_SOURCES,
          defaultValue: LIVE_STAT_SOURCE.NONE,
          helperText:
            'Pull this number from Instagram or YouTube, refreshed every few hours',
        },
        {
          name: 'liveId',
          friendlyName: 'Live Source ID',
          type: 'string',
          helperText:
            'Instagram username, YouTube channel ID (UC…) or @handle, or YouTube video ID',
        },
      ],
    },
  ],
});

Builder.registerComponent(WorkSection, {
  name: BUILDER_COMPONENT_NAMES.WORK_SECTION,
  friendlyName: 'Selected Work',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.work.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.work.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.work.headlineAccent,
    },
    {
      name: 'viewAll',
      friendlyName: '"View All Work" Button (optional)',
      type: 'object',
      subFields: [
        {
          name: 'label',
          friendlyName: 'Label',
          type: 'string',
        },
        {
          name: 'href',
          friendlyName: 'Link (URL or #section)',
          type: 'string',
        },
      ],
    },
    {
      name: 'featured',
      friendlyName: 'Featured Case',
      type: 'object',
      defaultValue: homePageMessage.work.featured,
      subFields: [
        {
          name: 'eyebrow',
          friendlyName: 'Label',
          type: 'string',
        },
        {
          name: 'title',
          friendlyName: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          friendlyName: 'Description',
          type: 'longText',
        },
        {
          name: 'chips',
          friendlyName: 'Chips',
          type: 'list',
          subFields: [
            {
              name: 'text',
              friendlyName: 'Chip',
              type: 'string',
            },
          ],
        },
        {
          name: 'videoA',
          friendlyName: 'Video 1 (4:3)',
          type: 'file',
          allowedFileTypes: ALLOWED_VIDEO_FILE_TYPES,
          helperText: VIDEO_HELPER_TEXT,
        },
        {
          name: 'videoB',
          friendlyName: 'Video 2 (4:3)',
          type: 'file',
          allowedFileTypes: ALLOWED_VIDEO_FILE_TYPES,
          helperText: VIDEO_HELPER_TEXT,
        },
        {
          name: 'href',
          friendlyName: 'Link (optional)',
          type: 'url',
        },
      ],
    },
    {
      name: 'items',
      friendlyName: 'Work Reels',
      type: 'list',
      defaultValue: homePageMessage.work.items,
      subFields: [
        {
          name: 'video',
          friendlyName: 'Reel (9:16)',
          type: 'file',
          allowedFileTypes: ALLOWED_VIDEO_FILE_TYPES,
          helperText: VIDEO_HELPER_TEXT,
        },
        {
          name: 'poster',
          friendlyName: 'First Frame',
          type: 'file',
          allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
        },
        {
          name: 'tag',
          friendlyName: 'Tag',
          type: 'string',
        },
        {
          name: 'client',
          friendlyName: 'Client',
          type: 'string',
        },
        {
          name: 'title',
          friendlyName: 'Title',
          type: 'string',
        },
        {
          name: 'href',
          friendlyName: 'Link (Instagram reel etc.)',
          type: 'url',
        },
      ],
    },
  ],
});

Builder.registerComponent(ServicesSection, {
  name: BUILDER_COMPONENT_NAMES.SERVICES_SECTION,
  friendlyName: 'Services',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.services.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.services.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.services.headlineAccent,
    },
    {
      name: 'description',
      friendlyName: 'Description',
      type: 'longText',
      defaultValue: homePageMessage.services.description,
    },
    {
      name: 'services',
      friendlyName: 'Services',
      type: 'list',
      required: true,
      defaultValue: homePageMessage.services.services,
      subFields: [
        {
          name: 'title',
          friendlyName: 'Title',
          type: 'string',
          required: true,
        },
        {
          name: 'items',
          friendlyName: 'Items',
          type: 'list',
          subFields: [
            {
              name: 'text',
              friendlyName: 'Item',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(StudioGallery, {
  name: BUILDER_COMPONENT_NAMES.STUDIO_GALLERY,
  friendlyName: 'Studio Gallery',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.studio.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.studio.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.studio.headlineAccent,
    },
    {
      name: 'description',
      friendlyName: 'Description',
      type: 'longText',
      defaultValue: homePageMessage.studio.description,
    },
    {
      name: 'rowA',
      friendlyName: 'Top Row Images',
      type: 'list',
      defaultValue: homePageMessage.studio.rowA,
      subFields: [
        {
          name: 'image',
          friendlyName: 'Image (4:5)',
          type: 'file',
          allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
        },
        {
          name: 'alt',
          friendlyName: 'Alt Text',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      name: 'rowB',
      friendlyName: 'Bottom Row Images',
      type: 'list',
      defaultValue: homePageMessage.studio.rowB,
      subFields: [
        {
          name: 'image',
          friendlyName: 'Image (4:5)',
          type: 'file',
          allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
        },
        {
          name: 'alt',
          friendlyName: 'Alt Text',
          type: 'string',
          required: true,
        },
      ],
    },
  ],
});

Builder.registerComponent(ProcessSection, {
  name: BUILDER_COMPONENT_NAMES.PROCESS_SECTION,
  friendlyName: 'How It Works',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.process.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.process.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.process.headlineAccent,
    },
    {
      name: 'timeLabel',
      friendlyName: 'Time Box Label',
      type: 'string',
      defaultValue: homePageMessage.process.timeLabel,
    },
    {
      name: 'timeValue',
      friendlyName: 'Time Box Value',
      type: 'string',
      defaultValue: homePageMessage.process.timeValue,
    },
    {
      name: 'timeNote',
      friendlyName: 'Time Box Note',
      type: 'string',
      defaultValue: homePageMessage.process.timeNote,
    },
    {
      name: 'steps',
      friendlyName: 'Steps',
      type: 'list',
      required: true,
      defaultValue: homePageMessage.process.steps,
      subFields: [
        {
          name: 'title',
          friendlyName: 'Title',
          type: 'string',
          required: true,
        },
        {
          name: 'description',
          friendlyName: 'Description',
          type: 'longText',
        },
      ],
    },
  ],
});

Builder.registerComponent(FounderTeamSection, {
  name: BUILDER_COMPONENT_NAMES.FOUNDER_TEAM_SECTION,
  friendlyName: 'Founder + Team',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'photo',
      friendlyName: 'Shoot-day Photo (16:10)',
      type: 'file',
      allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
    },
    {
      name: 'photoAlt',
      friendlyName: 'Photo Alt Text',
      type: 'string',
      defaultValue: homePageMessage.founder.photoAlt,
    },
    {
      name: 'photoCaption',
      friendlyName: 'Photo Caption',
      type: 'string',
      defaultValue: homePageMessage.founder.photoCaption,
    },
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.founder.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.founder.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.founder.headlineAccent,
    },
    {
      name: 'bio',
      friendlyName: 'Bio',
      type: 'longText',
      defaultValue: homePageMessage.founder.bio,
    },
    {
      name: 'avatar',
      friendlyName: 'Founder Headshot',
      type: 'file',
      allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
    },
    {
      name: 'name',
      friendlyName: 'Name',
      type: 'string',
      defaultValue: homePageMessage.founder.name,
    },
    {
      name: 'role',
      friendlyName: 'Role',
      type: 'string',
      defaultValue: homePageMessage.founder.role,
    },
    {
      name: 'teamHeading',
      friendlyName: 'Team Heading',
      type: 'string',
      defaultValue: homePageMessage.founder.teamHeading,
    },
    {
      name: 'teamNote',
      friendlyName: 'Team Note (optional)',
      type: 'string',
      defaultValue: homePageMessage.founder.teamNote,
    },
    {
      name: 'team',
      friendlyName: 'Team',
      type: 'list',
      defaultValue: homePageMessage.founder.team,
      subFields: [
        {
          name: 'name',
          friendlyName: 'Name',
          type: 'string',
          required: true,
        },
        {
          name: 'role',
          friendlyName: 'Role',
          type: 'string',
        },
        {
          name: 'photo',
          friendlyName: 'Photo (4:5)',
          type: 'file',
          allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
        },
      ],
    },
  ],
});

Builder.registerComponent(CollectivesSection, {
  name: BUILDER_COMPONENT_NAMES.COLLECTIVES_SECTION,
  friendlyName: 'RA3 Collectives',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.collectives.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.collectives.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.collectives.headlineAccent,
    },
    {
      name: 'description',
      friendlyName: 'Description',
      type: 'longText',
      defaultValue: homePageMessage.collectives.description,
    },
    {
      name: 'cta',
      friendlyName: 'Button',
      type: 'object',
      defaultValue: homePageMessage.collectives.cta,
      subFields: [
        {
          name: 'label',
          friendlyName: 'Label',
          type: 'string',
        },
        {
          name: 'href',
          friendlyName: 'Link (URL or #section)',
          type: 'string',
        },
      ],
    },
    {
      name: 'ribbon',
      friendlyName: 'Decorative Ribbon (optional)',
      type: 'file',
      allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
    },
    {
      name: 'projects',
      friendlyName: 'Projects (2)',
      type: 'list',
      defaultValue: homePageMessage.collectives.projects,
      subFields: [
        {
          name: 'video',
          friendlyName: 'Reel (9:16)',
          type: 'file',
          allowedFileTypes: ALLOWED_VIDEO_FILE_TYPES,
          helperText: VIDEO_HELPER_TEXT,
        },
        {
          name: 'poster',
          friendlyName: 'First Frame',
          type: 'file',
          allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
        },
        {
          name: 'caption',
          friendlyName: 'Caption',
          type: 'string',
        },
        {
          name: 'href',
          friendlyName: 'Link (YouTube etc.)',
          type: 'url',
        },
      ],
    },
  ],
});

Builder.registerComponent(FinalCtaSection, {
  name: BUILDER_COMPONENT_NAMES.FINAL_CTA_SECTION,
  friendlyName: 'Final Call to Action',
  models: CONTENT_PAGE_MODELS,
  inputs: [
    {
      name: 'eyebrow',
      friendlyName: 'Section Label',
      type: 'string',
      defaultValue: homePageMessage.finalCta.eyebrow,
    },
    {
      name: 'headline',
      friendlyName: 'Headline',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.finalCta.headline,
    },
    {
      name: 'headlineAccent',
      friendlyName: 'Headline Accent (red italic)',
      type: 'string',
      defaultValue: homePageMessage.finalCta.headlineAccent,
    },
    {
      name: 'description',
      friendlyName: 'Description',
      type: 'longText',
      defaultValue: homePageMessage.finalCta.description,
    },
    {
      name: 'ctaLabel',
      friendlyName: 'WhatsApp Button Label',
      type: 'string',
      required: true,
      defaultValue: homePageMessage.finalCta.ctaLabel,
    },
    {
      name: 'slotsSuffix',
      friendlyName: 'Text After "3 of 10"',
      type: 'string',
      defaultValue: homePageMessage.finalCta.slotsSuffix,
    },
    {
      name: 'ribbon',
      friendlyName: 'Decorative Ribbon (optional)',
      type: 'file',
      allowedFileTypes: ALLOWED_IMAGE_FILE_TYPES,
    },
  ],
});
