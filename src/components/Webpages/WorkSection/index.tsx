import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';
import { GhostButton } from '@components/Button';
import Headline from '@components/Headline';
import ReelVideo from '@components/ReelVideo';
import { homePageMessage } from '@messages/home';
import { IWorkSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

/** A card is a link only when it has somewhere to go. */
const CardShell = ({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) => {
  const Tag: ElementType = href ? 'a' : 'div';
  const isExternal = !!href && /^https?:\/\//.test(href);
  return (
    <Tag
      {...(href ? { href } : {})}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={clsx('card', className)}
    >
      {children}
    </Tag>
  );
};

const WorkSection = (props: Partial<IWorkSection>) => {
  const { eyebrow, headline, headlineAccent, viewAll, featured, items } =
    withDefaults(props, homePageMessage.work);

  return (
    <section id="work" className="border-t border-white/6 bg-surface-2">
      <div className="container-page py-20 lg:py-[140px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-16">
          <div className="reveal">
            <p className="eyebrow m-0 mb-6 text-signal-red">{eyebrow}</p>
            <Headline
              text={headline}
              accent={headlineAccent}
              breakBeforeAccent
              className="text-[clamp(44px,5.6vw,92px)]"
            />
          </div>
          {viewAll?.href ? (
            <GhostButton href={viewAll.href} className="reveal">
              {viewAll.label}
            </GhostButton>
          ) : null}
        </div>

        <CardShell
          href={featured.href}
          className="reveal mb-12 flex flex-wrap items-center gap-10 rounded-2xl border border-white/8 bg-surface p-6 text-bone lg:mb-[72px] lg:p-10"
        >
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
            <p className="eyebrow m-0 text-signal-red">{featured.eyebrow}</p>
            <h3 className="card-title headline m-0 text-[clamp(44px,4.4vw,64px)] transition-colors duration-300">
              {featured.title}
            </h3>
            <p className="m-0 text-[17px] leading-[1.65] text-text-body">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.chips.map((chip) => (
                <span
                  key={chip.text}
                  className="rounded-full border border-white/16 px-3.5 py-2 text-[13px] text-text-strong"
                >
                  {chip.text}
                </span>
              ))}
            </div>
          </div>
          <div className="grid min-w-0 flex-[2_1_560px] grid-cols-2 gap-4">
            {[featured.videoA, featured.videoB].map((video, index) => (
              <div
                key={index}
                className={clsx(
                  'card-media relative aspect-[4/3] overflow-hidden rounded-[10px] border border-white/8 bg-[#181818]',
                  index === 1 && 'mt-12'
                )}
              >
                <ReelVideo
                  src={video}
                  label={`${featured.title} reel ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </CardShell>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] lg:items-start lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {items.map((item, index) => (
            <CardShell
              key={`${item.client}-${index}`}
              href={item.href}
              className="reveal flex w-[62%] flex-none snap-start flex-col gap-3.5 text-bone lg:w-auto lg:even:mt-14"
            >
              <div className="card-media relative aspect-[9/16] overflow-hidden rounded-xl border border-white/8 bg-[#181818]">
                <ReelVideo
                  src={item.video}
                  poster={item.poster}
                  label={item.title}
                />
                <span className="eyebrow absolute top-3 left-3 rounded-full bg-night/70 px-2.5 py-1.5 text-[9px] text-white">
                  {item.tag}
                </span>
              </div>
              <p className="eyebrow m-0 text-[10px] text-text-label">
                {item.client}
              </p>
              <h3 className="card-title m-0 text-lg leading-[1.35] font-semibold transition-colors duration-300">
                {item.title}
              </h3>
            </CardShell>
          ))}
        </div>
        <p className="eyebrow mt-4 text-[9px] text-text-label lg:hidden">
          Swipe for more →
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
