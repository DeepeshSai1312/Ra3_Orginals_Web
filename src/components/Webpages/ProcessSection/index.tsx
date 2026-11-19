import Headline from '@components/Headline';
import { homePageMessage } from '@messages/home';
import { IProcessSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const ProcessSection = (props: Partial<IProcessSection>) => {
  const {
    eyebrow,
    headline,
    headlineAccent,
    timeLabel,
    timeValue,
    timeNote,
    steps,
  } = withDefaults(props, homePageMessage.process);

  return (
    <section id="process" className="bg-bone text-ink">
      <div className="container-page pt-20 pb-20 lg:pt-[150px] lg:pb-[130px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 lg:mb-[72px]">
          <div className="reveal">
            <p className="eyebrow m-0 mb-6 text-deep-red">{eyebrow}</p>
            <Headline
              text={headline}
              accent={headlineAccent}
              breakBeforeAccent
              className="text-[clamp(44px,6vw,104px)]"
            />
          </div>
          <div className="reveal max-w-[400px] rounded-[14px] bg-ink px-7 py-6 text-bone">
            <p className="eyebrow m-0 mb-2.5 text-[10px] text-signal-red">
              {timeLabel}
            </p>
            <p className="m-0 text-[34px] leading-none font-extrabold uppercase [font-stretch:72%]">
              {timeValue}
            </p>
            <p className="mt-2.5 mb-0 text-[15px] text-text-body">{timeNote}</p>
          </div>
        </div>
        <ol className="grid list-none grid-cols-1 border-t-2 border-ink p-0 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal flex flex-col gap-4 pt-9 pr-8 transition-transform duration-500 ease-cinematic last:pr-0 hover:-translate-y-1.5"
            >
              <p className="serif-accent m-0 text-[72px] leading-none text-ra3-red">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="m-0 text-[30px] leading-[0.95] font-extrabold uppercase [font-stretch:72%]">
                {step.title}
              </h3>
              <p className="m-0 text-base leading-[1.65] text-text-on-bone">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
