import { ISiteSettings } from '@constants/siteSettings';

export const getWhatsAppUrl = (
  settings: Pick<ISiteSettings, 'whatsappNumber' | 'whatsappMessage'>,
  withMessage = true
) => {
  const number = settings.whatsappNumber.replace(/\D/g, '');
  return withMessage && settings.whatsappMessage
    ? `https://wa.me/${number}?text=${encodeURIComponent(settings.whatsappMessage)}`
    : `https://wa.me/${number}`;
};
