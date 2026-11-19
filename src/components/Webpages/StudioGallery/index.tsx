import clsx from 'clsx';
import Headline from '@components/Headline';
import BuilderImage from '@components/Builderio/BuilderImage';
import { homePageMessage } from '@messages/home';
import { IStudioGallery } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const GalleryRow = ({
  images,
  animation,
  heightClass,
}: {
  images: IStudioGallery['rowA'];
  animation: string;
  heightClass: string;
}) => (
  <div className={clsx('marquee-track flex w-max', animation)}>
    {[false, true].map((hidden) =>
      images.map((image, index) => (
        <div
          key={`${hidden}-${index}`}
          aria-hidden={hidden || undefined}
          className={clsx(
            'relative mr-4 aspect-[4/5] flex-none overflow-hidden rounded-xl',
            heightClass
          )}
        >
          <BuilderImage
            src={image.image}
            alt={hidden ? '' : image.alt}
            fill
            sizes="(min-width: 1024px) 272px, 176px"
            className="object-cover"
          />
        </div>
      ))
    )}
  </div>
);

const StudioGallery = (props: Partial<IStudioGallery>) => {
  const { eyebrow, headline, headlineAccent, description, rowA, rowB } =
    withDefaults(props, homePageMessage.studio);

  return (
    <section
      aria-label="From the studio"
      className="overflow-hidden border-t border-white/6 bg-surface-2 pt-20 pb-20 lg:pt-30 lg:pb-[140px]"
    >
      <div className="container-page mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
        <div className="reveal">
          <p className="eyebrow m-0 mb-6 text-signal-red">{eyebrow}</p>
          <Headline
            text={headline}
            accent={headlineAccent}
            className="max-w-[1000px] text-[clamp(40px,5vw,80px)]"
          />
        </div>
        <p className="reveal m-0 max-w-[360px] text-base leading-[1.7] text-text-muted">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <GalleryRow
          images={rowA}
          animation="animate-marquee-slow"
          heightClass="h-[220px] lg:h-[340px]"
        />
        <GalleryRow
          images={rowB}
          animation="animate-marquee-rev"
          heightClass="h-[180px] lg:h-[280px]"
        />
      </div>
    </section>
  );
};

export default StudioGallery;
