'use client';

import { WhatsAppIcon } from '@components/Icons';
import { useSiteSettings } from '@components/SiteData';
import { getWhatsAppUrl } from '@utils/whatsapp';

/** Desktop: round WhatsApp button fixed bottom-right. */
const FloatingWhatsApp = () => {
  const settings = useSiteSettings();
  return (
    <a
      href={getWhatsAppUrl(settings)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RA3 Originals on WhatsApp"
      className="fixed right-6 bottom-6 z-60 hidden size-[60px] animate-pulse-dot place-items-center rounded-full bg-ra3-red text-white shadow-[0_12px_30px_rgba(0,0,0,0.5)] lg:grid"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
};

export default FloatingWhatsApp;
