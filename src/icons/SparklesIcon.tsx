import React from 'react';

export interface SparklesIconProps {
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
 * SparklesIcon - Lucide icon component
 * @see https://lucide.dev/icons/sparkles
 */
export const SparklesIcon: React.FC<SparklesIconProps> = ({
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
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
  <path d="M20 2v4" />
  <path d="M22 4h-4" />
  <circle cx="4" cy="20" r="2" />
    </svg>
  );
};

SparklesIcon.displayName = 'SparklesIcon';

export default SparklesIcon;
