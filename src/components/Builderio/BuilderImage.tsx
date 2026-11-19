'use client';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';
import clsx from 'clsx';

// Builder's CDN resizes on the fly, so let it do the work instead of Next's optimizer.
const builderLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const separator = src.includes('?') ? '&' : '?';
  return `${src}${separator}width=${width}&quality=${quality || 80}&format=webp`;
};

type BuilderImageProps = Omit<ImageProps, 'src' | 'loader'> & {
  /** Builder file URL. Empty until the asset is uploaded: renders a placeholder. */
  src?: string;
};

const BuilderImage = ({
  src,
  alt,
  className,
  fill,
  ...props
}: BuilderImageProps) => {
  if (!src) {
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={clsx('bg-surface-3', fill && 'absolute inset-0', className)}
      />
    );
  }

  return (
    <Image
      loader={builderLoader}
      src={src}
      alt={alt || 'RA3 Originals'}
      fill={fill}
      className={className}
      {...props}
    />
  );
};

export default BuilderImage;
