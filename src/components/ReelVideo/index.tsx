'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { PlayIcon } from '@components/Icons';
import { useInView } from '@hooks/useInView';
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion';

/**
 * Muted, looping, inline reel. Plays only while on screen, loads lazily, and with
 * reduced motion shows the first frame plus a play button instead of autoplaying.
 * Renders an empty placeholder until a video is uploaded in Builder.
 */
const ReelVideo = ({
  src,
  poster,
  label = 'Reel',
  className = '',
}: {
  src?: string;
  poster?: string;
  label?: string;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef);
  const reducedMotion = usePrefersReducedMotion();
  const [userPlaying, setUserPlaying] = useState(false);
  const shouldPlay = inView && (!reducedMotion || userPlaying);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPlay) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  if (!src) {
    return (
      <div
        aria-hidden="true"
        className={clsx(
          'size-full bg-[radial-gradient(ellipse_at_30%_20%,rgba(216,8,8,0.18),transparent_60%)] bg-surface-3',
          className
        )}
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload={inView ? 'auto' : 'none'}
        aria-label={label}
        className={clsx('size-full object-cover', className)}
      />
      {reducedMotion && !userPlaying ? (
        <button
          type="button"
          onClick={() => setUserPlaying(true)}
          aria-label={`Play ${label}`}
          className="absolute inset-0 m-auto grid size-14 place-items-center rounded-full bg-ra3-red text-white"
        >
          <PlayIcon />
        </button>
      ) : null}
    </>
  );
};

export default ReelVideo;
