import type { Metadata } from 'next';
import clsx from 'clsx';
import {
  pageTitleAndDescription,
  siteName,
  siteUrl,
} from '@messages/seo/pageSeo';
import { archivo, instrumentSerif, michroma } from './styles/fonts/fonts';
import './styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitleAndDescription.home.title,
    template: `%s | ${siteName}`,
  },
  description: pageTitleAndDescription.home.description,
  openGraph: {
    type: 'website',
    siteName,
    title: pageTitleAndDescription.home.title,
    description: pageTitleAndDescription.home.description,
  },
  robots:
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
      ? undefined
      : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={clsx(
        archivo.variable,
        instrumentSerif.variable,
        michroma.variable,
        'antialiased'
      )}
    >
      <body className="relative min-h-full overflow-x-hidden bg-night text-bone">
        {children}
      </body>
    </html>
  );
}
