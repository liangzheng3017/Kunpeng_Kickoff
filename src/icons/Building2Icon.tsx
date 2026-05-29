import React from 'react';

export interface Building2IconProps {
  /** Icon size in pixels */
  size?: number | string;
  /** Icon color */
  color?: string;
  /** Stroke width */
  strokeWidth?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Accessibility label */
  'aria-label'?: string;
  /** onClick handler */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

/**
 * Building2Icon - Lucide icon component
 * @see https://lucide.dev/icons/building-2
 */
export const Building2Icon: React.FC<Building2IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  style,
  'aria-label': ariaLabel,
  onClick,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={onClick}
      role={ariaLabel ? 'img' : undefined}
      aria-hidden={!ariaLabel}
      {...props}
    >
      <path d="M10 12h4" />
  <path d="M10 8h4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  );
};

Building2Icon.displayName = 'Building2Icon';

export default Building2Icon;
