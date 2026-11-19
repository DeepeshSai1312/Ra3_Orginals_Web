import clsx from 'clsx';

/**
 * Text wordmark until the design team hands over the logo SVG.
 * Swap the contents for <img src="/logo.svg" ...> once it is in /public.
 */
const Logo = ({ className = '' }: { className?: string }) => (
  <span
    className={clsx('inline-flex items-baseline gap-2 leading-none', className)}
  >
    <span className="headline text-[34px] text-ra3-red">RA3</span>
    <span className="eyebrow text-[9px] text-bone">Originals</span>
  </span>
);

export default Logo;
