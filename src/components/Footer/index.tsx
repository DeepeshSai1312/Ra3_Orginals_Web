import clsx from 'clsx';
import { siteName } from '@messages/seo/pageSeo';

const Footer = ({ className = '' }: { className?: string }) => {
  return (
    <footer
      className={clsx(
        'w-full border-t border-foreground/10 px-6 py-6 text-sm text-foreground/60',
        className
      )}
    >
      &copy; {siteName}
    </footer>
  );
};

export default Footer;
