'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { WhatsAppButton } from '@components/Button';
import { CloseIcon, MenuIcon } from '@components/Icons';
import Logo from '@components/Logo';
import { NAV_ITEMS } from '@constants/siteSettings';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/7 bg-night/78 backdrop-blur-[14px]">
      <nav
        aria-label="Main"
        className="container-page flex items-center justify-between gap-6 py-4"
      >
        <Link
          href="/"
          aria-label="RA3 Originals home"
          className="flex items-center"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-9 text-sm font-medium tracking-[0.02em] lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-white hover:text-signal-red"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton label="Book a free call" size="sm" />
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border border-white/20 text-bone lg:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className={clsx(
          'fixed inset-x-0 top-[77px] bottom-0 z-40 bg-night px-5 pt-10 pb-28 lg:hidden'
        )}
      >
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="border-b border-white/10">
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="headline block py-5 text-[44px] text-bone"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <WhatsAppButton
          label="Book a free strategy call"
          className="mt-10 w-full"
        />
      </div>
    </header>
  );
};

export default Header;
