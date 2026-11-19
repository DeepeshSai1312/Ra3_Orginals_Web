import clsx from 'clsx';
import { ElementType } from 'react';

/** Condensed uppercase headline with a red Instrument Serif accent. */
const Headline = ({
  as: Tag = 'h2',
  text,
  accent,
  breakBeforeAccent = false,
  className = '',
}: {
  as?: ElementType;
  text: string;
  accent?: string;
  breakBeforeAccent?: boolean;
  className?: string;
}) => (
  <Tag className={clsx('headline m-0', className)}>
    {text}
    {accent ? (
      <>
        {breakBeforeAccent ? <br /> : ' '}
        <span className="serif-accent text-ra3-red">{accent}</span>
      </>
    ) : null}
  </Tag>
);

export default Headline;
