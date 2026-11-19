'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import { ArrowRightIcon, WhatsAppIcon } from '@components/Icons';
import { useSiteSettings } from '@components/SiteData';
import { getWhatsAppUrl } from '@utils/whatsapp';

const SIZE_CLASSES = {
  sm: 'min-h-11 px-5 gap-2.5 text-sm',
  md: 'min-h-14 px-7 gap-3 text-base',
  lg: 'min-h-[68px] px-10 gap-3.5 text-[19px]',
};

type Size = keyof typeof SIZE_CLASSES;

const baseClasses =
  'inline-flex items-center justify-center rounded-full whitespace-nowrap transition-[background-color,color,transform,border-color] duration-300 hover:-translate-y-0.5';

/** Primary action: red pill that always opens WhatsApp with the pre-filled message. */
export const WhatsAppButton = ({
  label,
  size = 'md',
  className = '',
}: {
  label: string;
  size?: Size;
  className?: string;
}) => {
  const settings = useSiteSettings();
  return (
    <a
      href={getWhatsAppUrl(settings)}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        baseClasses,
        SIZE_CLASSES[size],
        'bg-ra3-red font-semibold text-white hover:bg-white hover:text-ink',
        className
      )}
    >
      <WhatsAppIcon size={size === 'lg' ? 24 : size === 'sm' ? 18 : 20} />
      {label}
    </a>
  );
};

/** Secondary navigation: outlined ghost pill. */
export const GhostButton = ({
  href,
  children,
  icon = <ArrowRightIcon />,
  className = '',
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) => {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={clsx(
        baseClasses,
        'min-h-[52px] gap-2.5 border border-white/28 px-6 text-[15px] font-medium text-text-strong hover:border-white hover:text-white',
        className
      )}
    >
      {children}
      {icon}
    </a>
  );
};
