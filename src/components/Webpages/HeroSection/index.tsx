import clsx from 'clsx';
import { GhostButton, WhatsAppButton } from '@components/Button';
import { ArrowDownIcon } from '@components/Icons';
import ReelVideo from '@components/ReelVideo';
import SlotsPill from '@components/SlotsPill';
import { homePageMessage } from '@messages/home';
import { IHeroSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const REEL_LAYOUT = [
  {
    wrap: 'left-[4%] top-[90px] w-[36%] z-[1] [animation-delay:.3s]',
    float: 'animate-float-a',
    frame:
      'border-white/12 rounded-[14px] shadow-[0_40px_80px_rgba(0,0,0,0.6)]',
  },
  {
    wrap: 'left-[32%] top-5 w-[40%] z-[3] [animation-delay:.45s]',
    float: 'animate-float-b',
    frame:
      'border-ra3-red/60 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.7),0_0_80px_rgba(216,8,8,0.25)]',
  },
  {
    wrap: 'right-[2%] top-[120px] w-[34%] z-[2] [animation-delay:.7s]',
    float: 'animate-float-c',
    frame:
      'border-white/12 rounded-[14px] shadow-[0_40px_80px_rgba(0,0,0,0.6)]',
  },
];

const HeroSection = (props: Partial<IHeroSection>) => {
  const {
    eyebrow,
    headlineLines,
    headlineAccent,
    description,
    primaryCtaLabel,
    secondaryCta,
    slotsLead,
    reels,
    reelsCaption,
    bottomLeft,
    bottomRight,
  } = withDefaults(props, homePageMessage.hero);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_78%_38%,rgba(216,8,8,0.20),rgba(7,7,7,0)_55%)]"
    >
      <div className="container-page relative flex flex-wrap items-center gap-12 pt-12 pb-10 lg:min-h-[860px] lg:pt-24 lg:pb-14">
        <div className="flex min-w-0 flex-[1_1_620px] flex-col gap-8">
          <p className="eyebrow m-0 flex animate-fade-up items-center gap-3.5 text-signal-red">
            <span className="inline-block h-px w-9 bg-ra3-red" />
            {eyebrow}
          </p>
          <h1 className="headline m-0 text-[clamp(56px,7.2vw,124px)] leading-[0.88] text-bone">
            {headlineLines.map((line, index) => (
              <span key={line.text} className="line-mask">
                <span style={{ animationDelay: `${0.15 * (index + 1)}s` }}>
                  {line.text}
                </span>
              </span>
            ))}
            <span className="line-mask">
              <span
                className="serif-accent text-[1.18em] leading-[0.95] text-ra3-red"
                style={{
                  animationDelay: `${0.15 * (headlineLines.length + 1)}s`,
                }}
              >
                {headlineAccent}
              </span>
            </span>
          </h1>
          <p className="m-0 max-w-[540px] animate-fade-up text-lg leading-[1.6] text-text-body [animation-delay:.7s]">
            {description}
          </p>
          <div className="flex animate-fade-up flex-wrap items-center gap-3.5 [animation-delay:.7s]">
            <WhatsAppButton label={primaryCtaLabel} />
            <GhostButton
              href={secondaryCta.href}
              icon={<ArrowDownIcon />}
              className="min-h-14 px-[26px] text-base"
            >
              {secondaryCta.label}
            </GhostButton>
          </div>
          <SlotsPill
            lead={slotsLead}
            className="animate-fade-up [animation-delay:.9s]"
          />
        </div>

        <div className="relative min-h-[460px] min-w-0 flex-[1_1_440px] lg:min-h-[640px]">
          {REEL_LAYOUT.map((layout, index) => (
            <div
              key={index}
              className={clsx('absolute animate-fade-up', layout.wrap)}
            >
              <div
                className={clsx(
                  'relative aspect-[9/16] overflow-hidden border bg-surface-3',
                  layout.float,
                  layout.frame
                )}
              >
                <ReelVideo
                  src={reels[index]?.video}
                  poster={reels[index]?.poster}
                  label={`Client reel ${index + 1}`}
                />
              </div>
            </div>
          ))}
          <p className="eyebrow absolute right-0 bottom-0 z-[4] m-0 hidden text-text-label lg:block">
            {reelsCaption}
          </p>
        </div>
      </div>

      <div className="container-page relative hidden items-end justify-between pb-10 lg:flex">
        <p className="eyebrow m-0 text-text-label">{bottomLeft}</p>
        <div className="flex flex-col items-center gap-2.5">
          <span className="eyebrow text-[10px] text-text-label">Scroll</span>
          <span className="relative h-14 w-px overflow-hidden bg-white/12">
            <span className="absolute inset-0 animate-scroll-cue bg-ra3-red" />
          </span>
        </div>
        <p className="eyebrow m-0 text-text-label">{bottomRight}</p>
      </div>
    </section>
  );
};

export default HeroSection;
