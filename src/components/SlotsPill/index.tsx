'use client';

import clsx from 'clsx';
import { useSiteSettings } from '@components/SiteData';

export const PulseDot = ({ className = '' }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={clsx(
      'inline-block size-2.5 flex-none animate-pulse-dot rounded-full bg-ra3-red',
      className
    )}
  />
);

/** "We take only 10 brands a month · 3 slots open". The count comes from site settings. */
const SlotsPill = ({
  lead,
  className = '',
}: {
  lead?: string;
  className?: string;
}) => {
  const { slotsOpen } = useSiteSettings();
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 py-2.5 pr-[18px] pl-3.5 text-sm text-text-strong',
        className
      )}
    >
      <PulseDot />
      <span>
        {lead ? `${lead} · ` : ''}
        <strong className="font-bold text-white">{slotsOpen} slots open</strong>
      </span>
    </div>
  );
};

export default SlotsPill;
