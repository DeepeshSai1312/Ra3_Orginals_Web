import { ReactNode } from 'react';
import FloatingWhatsApp from '@components/FloatingWhatsApp';
import Footer from '@components/Footer';
import Header from '@components/Header';
import MobileStickyBar from '@components/MobileStickyBar';
import { SiteSettingsProvider } from '@components/SiteData';
import { getSiteSettings } from '@utils/getSiteSettings';

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const settings = await getSiteSettings();
  return (
    <SiteSettingsProvider value={settings}>
      <Header />
      {/* Bottom padding on mobile so the sticky bar never covers the footer. */}
      <main className="pb-[76px] lg:pb-0">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </SiteSettingsProvider>
  );
}
