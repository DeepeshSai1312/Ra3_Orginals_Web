import Headline from '@components/Headline';
import { homePageMessage } from '@messages/home';
import { IServicesSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const ServicesSection = (props: Partial<IServicesSection>) => {
  const { eyebrow, headline, headlineAccent, description, services } =
    withDefaults(props, homePageMessage.services);

  return (
    <section
      id="services"
      className="container-page pt-20 pb-20 lg:pt-40 lg:pb-[140px]"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-8 lg:mb-16">
        <div className="reveal">
          <p className="eyebrow m-0 mb-6 text-signal-red">{eyebrow}</p>
          <Headline
            text={headline}
            accent={headlineAccent}
            className="text-[clamp(44px,5.6vw,92px)]"
          />
        </div>
        <p className="reveal m-0 max-w-[380px] text-base leading-[1.7] text-text-muted">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group reveal flex flex-col gap-7 rounded-2xl border border-white/8 bg-surface px-8 py-9 transition-colors duration-[450ms] ease-cinematic hover:bg-ra3-red lg:min-h-[460px]"
          >
            <p className="serif-accent m-0 text-[64px] leading-none text-ra3-red transition-colors duration-[450ms] group-hover:text-white">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="m-0 text-[32px] leading-[0.95] font-extrabold uppercase [font-stretch:72%]">
              {service.title}
            </h3>
            <ul className="mt-auto flex list-none flex-col p-0">
              {service.items.map((item) => (
                <li
                  key={item.text}
                  className="border-t border-white/10 py-3 text-[15px] text-text-body transition-colors duration-[450ms] group-hover:border-white/35 group-hover:text-white"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
