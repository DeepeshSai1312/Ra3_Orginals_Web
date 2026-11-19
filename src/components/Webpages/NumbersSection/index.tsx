import clsx from 'clsx';
import LiveStat from '@components/LiveStat';
import { homePageMessage } from '@messages/home';
import { INumbersSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const NumbersSection = (props: Partial<INumbersSection>) => {
  const { items } = withDefaults(props, homePageMessage.numbers);
  return (
    <section
      aria-label="Results"
      className="container-page pt-10 pb-20 lg:pb-[140px]"
    >
      <div className="grid grid-cols-2 border-t border-white/14 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className={clsx(
              'reveal pt-9 pb-2',
              'max-lg:px-3 max-lg:odd:pl-0 max-lg:odd:border-r max-lg:border-white/8',
              'lg:px-7 lg:first:pl-0 lg:last:pr-0 lg:not-last:border-r lg:border-white/8'
            )}
          >
            <p className="m-0 text-[clamp(48px,6vw,84px)] leading-[0.9] font-extrabold text-bone [font-stretch:68%]">
              {item.from ? (
                <>
                  {item.from}
                  <span className="text-ra3-red">→</span>
                </>
              ) : null}
              <LiveStat
                fallback={item.value}
                source={item.liveSource}
                id={item.liveId}
              />
              {item.suffix ? (
                <span className="text-ra3-red">{item.suffix}</span>
              ) : null}
            </p>
            <p className="mt-[18px] mb-1.5 text-base text-text-strong">
              {item.caption}
            </p>
            <p className="eyebrow m-0 text-text-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
