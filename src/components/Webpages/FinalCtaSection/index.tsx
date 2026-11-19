'use client';

import { WhatsAppButton } from '@components/Button';
import Headline from '@components/Headline';
import BuilderImage from '@components/Builderio/BuilderImage';
import { useSiteSettings } from '@components/SiteData';
import { PulseDot } from '@components/SlotsPill';
import { homePageMessage } from '@messages/home';
import { IFinalCtaSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const FinalCtaSection = (props: Partial<IFinalCtaSection>) => {
  const {
    eyebrow,
    headline,
    headlineAccent,
    description,
    ctaLabel,
    slotsSuffix,
    ribbon,
  } = withDefaults(props, homePageMessage.finalCta);
  const { slotsOpen, totalSlots } = useSiteSettings();

  return (
    <section
      aria-label="Book a call"
      className="relative overflow-hidden bg-night bg-[radial-gradient(ellipse_at_50%_50%,rgba(216,8,8,0.16),rgba(7,7,7,0)_60%)]"
    >
      {ribbon ? (
        <BuilderImage
          src={ribbon}
          alt=""
          width={1300}
          height={920}
          className="pointer-events-none h-auto absolute top-1/2 left-1/2 -mt-[460px] -ml-[650px] w-[1300px] max-w-none animate-ribbon opacity-30"
        />
      ) : null}
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-[clamp(20px,3vw,48px)] py-24 text-center lg:pt-[180px] lg:pb-[170px]">
        <p className="eyebrow reveal m-0 text-signal-red">{eyebrow}</p>
        <Headline
          text={headline}
          accent={headlineAccent}
          breakBeforeAccent
          className="reveal text-[clamp(56px,9vw,164px)] leading-[0.86] [font-stretch:66%]"
        />
        <p className="reveal m-0 max-w-[560px] text-[19px] leading-[1.6] text-text-body">
          {description}
        </p>
        <WhatsAppButton label={ctaLabel} size="lg" className="reveal" />
        <div className="reveal inline-flex items-center gap-3 text-[15px] text-text-strong">
          <PulseDot />
          {slotsOpen} of {totalSlots} {slotsSuffix}
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
