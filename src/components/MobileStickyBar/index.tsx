'use client';

import { WhatsAppButton } from '@components/Button';
import { useSiteSettings } from '@components/SiteData';
import { PulseDot } from '@components/SlotsPill';

/** Mobile: always-visible bar with the slots count and the WhatsApp CTA. */
const MobileStickyBar = () => {
  const { slotsOpen, totalSlots } = useSiteSettings();
  return (
    <div className="fixed inset-x-0 bottom-0 z-60 border-t border-white/10 bg-night/92 px-4 py-3 backdrop-blur-[14px] lg:hidden">
      <div className="flex items-center gap-3">
        <PulseDot />
        <p className="min-w-0 flex-1 text-[13px] text-text-strong">
          {slotsOpen} of {totalSlots} slots open
        </p>
        <WhatsAppButton label="Book free call" size="sm" className="min-h-12" />
      </div>
    </div>
  );
};

export default MobileStickyBar;
