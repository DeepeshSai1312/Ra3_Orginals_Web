'use client';

import { useSiteSettings } from '@components/SiteData';
import Logo from '@components/Logo';
import { NAV_ITEMS } from '@constants/siteSettings';
import { getWhatsAppUrl } from '@utils/whatsapp';

const columnClass = 'flex flex-col gap-3 text-[15px]';
const linkClass = 'text-white hover:text-signal-red';

const Footer = () => {
  const settings = useSiteSettings();
  return (
    <footer className="border-t border-white/8 bg-footer">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 pt-20 pb-10">
        <div className="flex flex-col gap-5">
          <Logo className="self-start" />
          <p className="max-w-[280px] text-[15px] leading-relaxed text-text-label">
            {settings.footerBlurb}
          </p>
        </div>
        <div className={columnClass}>
          <p className="eyebrow mb-2 text-[10px] text-text-label">Explore</p>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </div>
        <div className={columnClass}>
          <p className="eyebrow mb-2 text-[10px] text-text-label">Contact</p>
          <a
            href={`tel:+${settings.whatsappNumber.replace(/\D/g, '')}`}
            className={linkClass}
          >
            {settings.phoneDisplay}
          </a>
          <a
            href={`mailto:${settings.email}`}
            className={`${linkClass} break-all`}
          >
            {settings.email}
          </a>
          <a
            href={getWhatsAppUrl(settings, false)}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WhatsApp us
          </a>
        </div>
        <div className={columnClass}>
          <p className="eyebrow mb-2 text-[10px] text-text-label">Follow</p>
          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Instagram · @{settings.instagramHandle}
          </a>
          <a
            href={settings.collectivesInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Instagram · @{settings.collectivesInstagramHandle}
          </a>
        </div>
      </div>
      <div className="container-page flex flex-wrap justify-between gap-4 border-t border-white/6 pt-6 pb-10 text-[13px] text-text-label">
        <span>© RA3 Originals. All rights reserved.</span>
        <span>www.ra3originals.com</span>
      </div>
    </footer>
  );
};

export default Footer;
