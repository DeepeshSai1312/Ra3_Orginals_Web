import { GhostButton } from '@components/Button';
import Headline from '@components/Headline';
import ReelVideo from '@components/ReelVideo';
import BuilderImage from '@components/Builderio/BuilderImage';
import { homePageMessage } from '@messages/home';
import { ICollectivesSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const CollectivesSection = (props: Partial<ICollectivesSection>) => {
  const {
    eyebrow,
    headline,
    headlineAccent,
    description,
    cta,
    ribbon,
    projects,
  } = withDefaults(props, homePageMessage.collectives);

  return (
    <section
      id="collectives"
      className="relative overflow-hidden border-t border-white/6 bg-surface-2"
    >
      {ribbon ? (
        <BuilderImage
          src={ribbon}
          alt=""
          width={820}
          height={580}
          className="pointer-events-none h-auto absolute -right-[180px] -bottom-[120px] w-[820px] max-w-none animate-ribbon opacity-35"
        />
      ) : null}
      <div className="container-page relative flex flex-wrap items-center gap-12 py-20 lg:gap-16 lg:py-[140px]">
        <div className="reveal flex min-w-0 flex-[1_1_520px] flex-col gap-[26px]">
          <p className="eyebrow m-0 text-signal-red">{eyebrow}</p>
          <Headline
            text={headline}
            accent={headlineAccent}
            className="text-[clamp(52px,6.4vw,112px)] leading-[0.88]"
          />
          <p className="m-0 max-w-[520px] text-lg leading-[1.65] text-text-body">
            {description}
          </p>
          {cta?.href ? (
            <GhostButton href={cta.href} className="self-start">
              {cta.label}
            </GhostButton>
          ) : null}
        </div>
        <div className="reveal flex min-w-0 flex-[1_1_460px] items-end gap-5">
          {projects.slice(0, 2).map((project, index) => {
            const media = (
              <div className="relative aspect-[9/16] overflow-hidden rounded-[14px] border border-white/10 bg-[#181818]">
                <ReelVideo
                  src={project.video}
                  poster={project.poster}
                  label={project.caption}
                />
              </div>
            );
            return (
              <div
                key={`${project.caption}-${index}`}
                className={
                  index === 1 ? 'mb-16 min-w-0 flex-1' : 'min-w-0 flex-1'
                }
              >
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {media}
                  </a>
                ) : (
                  media
                )}
                <p className="eyebrow mt-3.5 mb-0 text-[10px] text-text-label">
                  {project.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectivesSection;
