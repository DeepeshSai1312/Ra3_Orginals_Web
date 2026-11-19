import Link from 'next/link';
import clsx from 'clsx';
import { siteName } from '@messages/seo/pageSeo';

const Header = ({ className = '' }: { className?: string }) => {
  return (
    <header
      className={clsx(
        'w-full border-b border-foreground/10 px-6 py-4 flex items-center justify-between',
        className
      )}
    >
      <Link href="/" className="text-lg font-semibold">
        {siteName}
      </Link>
    </header>
  );
};

export default Header;
