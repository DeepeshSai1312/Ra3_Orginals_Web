import { homePageMessage } from '@messages/home';
import { IBrandMarquee } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const BrandMarquee = (props: Partial<IBrandMarquee>) => {
  const { brands } = withDefaults(props, homePageMessage.brands);
  const renderRow = (hidden: boolean) =>
    brands.map((brand, index) => (
      <span
        key={`${brand.name}-${index}`}
        aria-hidden={hidden || undefined}
        className="inline-flex items-center gap-11 pr-11 text-[clamp(26px,2.6vw,38px)] font-bold tracking-[0.01em] whitespace-nowrap text-text-strong uppercase [font-stretch:72%]"
      >
        {brand.name}
        <span
          aria-hidden="true"
          className="inline-block size-2.5 rotate-45 bg-ra3-red"
        />
      </span>
    ));

  return (
    <section
      aria-label="Brands we have worked with"
      className="overflow-hidden border-y border-white/8 bg-surface-2 py-6 lg:py-[34px]"
    >
      <div className="marquee-track flex w-max animate-marquee">
        {renderRow(false)}
        {renderRow(true)}
      </div>
    </section>
  );
};

export default BrandMarquee;
