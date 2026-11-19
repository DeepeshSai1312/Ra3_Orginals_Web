type IconProps = { size?: number; className?: string };

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const WhatsAppIcon = ({ size = 20, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...strokeProps}
  >
    <path d="M3.6 20.4l1.2-4.1A8.4 8.4 0 1 1 8 19.3z" />
    <path d="M9.2 8.6c.2 2.9 2.7 5.6 5.7 5.9l1.1-1.3 2 .9-.3 1.7c-3.8.6-8.6-3.9-8.2-8.1l1.6-.5 1 2z" />
  </svg>
);

export const ArrowRightIcon = ({ size = 18, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...strokeProps}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDownIcon = ({ size = 18, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...strokeProps}
  >
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const PlayIcon = ({ size = 22, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M8 5.5v13l11-6.5z" />
  </svg>
);

export const MenuIcon = ({ size = 20, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...strokeProps}
  >
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const CloseIcon = ({ size = 20, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...strokeProps}
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const PersonIcon = ({ size = 40, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...strokeProps}
    strokeWidth={1.4}
  >
    <circle cx="12" cy="9" r="4" />
    <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </svg>
);
