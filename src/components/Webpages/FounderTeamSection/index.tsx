import Headline from '@components/Headline';
import { PersonIcon } from '@components/Icons';
import BuilderImage from '@components/Builderio/BuilderImage';
import { homePageMessage } from '@messages/home';
import { IFounderTeamSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const FounderTeamSection = (props: Partial<IFounderTeamSection>) => {
  const {
    photo,
    photoAlt,
    photoCaption,
    eyebrow,
    headline,
    headlineAccent,
    bio,
    avatar,
    name,
    role,
    teamHeading,
    teamNote,
    team,
  } = withDefaults(props, homePageMessage.founder);

  return (
    <section
      aria-label="Founder and team"
      className="container-page pt-20 pb-20 lg:pt-40 lg:pb-30"
    >
      <div className="flex flex-wrap items-center gap-10 lg:gap-16">
        <div className="reveal relative aspect-[16/10] min-w-0 flex-[1_1_560px] overflow-hidden rounded-2xl bg-surface-3">
          <BuilderImage
            src={photo}
            alt={photoAlt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="animate-slow-zoom object-cover"
          />
          <p className="eyebrow absolute bottom-[18px] left-5 m-0 text-white">
            {photoCaption}
          </p>
        </div>
        <div className="reveal flex min-w-0 flex-[1_1_420px] flex-col gap-[26px]">
          <p className="eyebrow m-0 text-signal-red">{eyebrow}</p>
          <Headline
            text={headline}
            accent={headlineAccent}
            className="text-[clamp(44px,5vw,80px)]"
          />
          <p className="m-0 text-lg leading-[1.65] text-text-body">{bio}</p>
          <div className="flex items-center gap-4">
            <div className="relative size-16 flex-none overflow-hidden rounded-full border-2 border-ra3-red">
              <BuilderImage
                src={avatar}
                alt={name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="m-0 text-base font-bold">{name}</p>
              <p className="mt-0.5 mb-0 text-sm text-text-label">{role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-[110px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <h3 className="reveal m-0 text-[40px] leading-[0.95] font-extrabold uppercase [font-stretch:72%]">
            {teamHeading}
          </h3>
          {teamNote ? (
            <p className="eyebrow reveal m-0 text-text-label">{teamNote}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {team.map((member, index) => (
            <div
              key={`${member.role}-${index}`}
              className="reveal flex flex-col gap-3.5"
            >
              {member.photo ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <BuilderImage
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="grid aspect-[4/5] place-items-center rounded-xl border border-dashed border-white/18 bg-[#131313] text-[#5e5b57]">
                  <PersonIcon />
                </div>
              )}
              <div>
                <p className="m-0 text-base font-bold">{member.name}</p>
                <p className="mt-1 mb-0 text-sm text-text-label">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderTeamSection;
