import { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
