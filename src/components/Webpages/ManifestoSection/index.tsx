'use client';

import { useRef, useState } from 'react';
import Headline from '@components/Headline';
import { PlayIcon } from '@components/Icons';
import ReelVideo from '@components/ReelVideo';
import { homePageMessage } from '@messages/home';
import { IManifestoSection } from '@/types/sections';
import { withDefaults } from '@utils/withDefaults';

const ManifestoSection = (props: Partial<IManifestoSection>) => {
  const {
    eyebrow,
    headline,
    headlineAccent,
    showreelVideo,
    showreelPoster,
    fullReelUrl,
    showreelCta,
    lead,
    body,
    closing,
    closingAccent,
  } = withDefaults(props, homePageMessage.manifesto);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [withSound, setWithSound] = useState(false);

  // No full-reel link yet: play the loop itself with sound and controls.
  const playWithSound = () => {
    const video = wrapperRef.current?.querySelector('video');
    if (!video) return;
    video.muted = false;
    video.controls = true;
    video.currentTime = 0;
    video.play().catch(() => undefined);
    setWithSound(true);
  };

  const playButtonClass =
    'grid size-16 place-items-center rounded-full bg-ra3-red text-white transition-colors hover:bg-white hover:text-ink';

  return (
    <section
      id="about"
      className="container-page pt-20 pb-16 lg:pt-40 lg:pb-30"
    >
      <p className="eyebrow reveal m-0 mb-9 text-signal-red">{eyebrow}</p>
      <Headline
        text={headline}
        accent={headlineAccent}
        className="reveal max-w-[1180px] text-[clamp(48px,7vw,120px)]"
      />
      <div className="mt-12 flex flex-wrap items-end gap-14 lg:mt-20">
        <div
          ref={wrapperRef}
          className="reveal relative aspect-video min-w-0 flex-[999_1_640px] overflow-hidden rounded-[10px] border border-white/10 bg-surface-3"
        >
          <ReelVideo
            src={showreelVideo}
            poster={showreelPoster}
            label="RA3 showreel"
          />
          {!withSound ? (
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              {fullReelUrl ? (
                <a
                  href={fullReelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch the full RA3 showreel"
                  className={playButtonClass}
                >
                  <PlayIcon />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={playWithSound}
                  disabled={!showreelVideo}
                  aria-label="Play the RA3 showreel with sound"
                  className={playButtonClass}
                >
                  <PlayIcon />
                </button>
              )}
              <span className="eyebrow text-white">{showreelCta}</span>
            </div>
          ) : null}
        </div>
        <div className="reveal flex min-w-0 flex-[1_1_360px] flex-col gap-7">
          <p className="m-0 text-xl leading-[1.6] text-text-strong">{lead}</p>
          <p className="m-0 text-base leading-[1.7] text-text-muted">{body}</p>
          <p className="serif-accent m-0 text-[40px] leading-[1.1] text-bone">
            {closing} <span className="text-ra3-red">{closingAccent}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
