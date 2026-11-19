import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import clsx from 'clsx';
import { pageTitleAndDescription, siteName } from '@messages/seo/pageSeo';
import './styles/global.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={clsx(
        geistSans.variable,
        geistMono.variable,
        'h-full antialiased'
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
