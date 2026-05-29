/**
 * Generate React icon components from local lucide-static SVGs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Paths
const SVG_BASE = join('C:', 
  'Users', 'LiangZheng', '.codebuddy', 'plugins', 'marketplaces', 'cb_teams_marketplace', 'plugins',
  'modern-webapp', 'skills', 'lucide-icons', 'scripts', 'node_modules', 'lucide-static', 'icons');
const OUTPUT_DIR = join(__dirname, '..', 'src', 'icons');

function toPascalCase(str) {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function extractSvgInner(svgContent) {
  let content = svgContent.replace(/<\?xml[^>]*\?>/g, '').trim();
  const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return (match && match[1]) ? match[1].trim() : '';
}

function convertToJsx(svgInner) {
  return svgInner
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stroke-dashoffset/g, 'strokeDashoffset')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
    .replace(/stroke-opacity/g, 'strokeOpacity')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/clip-path/g, 'clipPath')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/font-family/g, 'fontFamily')
    .replace(/font-size/g, 'fontSize')
    .replace(/font-weight/g, 'fontWeight')
    .replace(/text-anchor/g, 'textAnchor')
    .replace(/dominant-baseline/g, 'dominantBaseline')
    .replace(/stroke="currentColor"/g, 'stroke={color}')
    .replace(/strokeWidth="[^"]*"/g, 'strokeWidth={strokeWidth}');
}

function generateReactComponent(iconName, svgContent) {
  const componentName = toPascalCase(iconName) + 'Icon';
  const svgInner = extractSvgInner(svgContent);
  const jsxContent = convertToJsx(svgInner);

  return `import React from 'react';

export interface ${componentName}Props {
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
 * ${componentName} - Lucide icon component
 * @see https://lucide.dev/icons/${iconName}
 */
export const ${componentName}: React.FC<${componentName}Props> = ({
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
      ${jsxContent}
    </svg>
  );
};

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
}

// Missing icons: name in code → SVG file name
const missingIcons = {
  'x': 'x',
  'home': 'house',
  'chevron-right': 'chevron-right',
  'chevron-left': 'chevron-left',
  'search': 'search',
  'mail': 'mail',
  'settings': 'settings',
  'calendar': 'calendar',
  'bar-chart-3': 'chart-column',
  'pie-chart': 'chart-pie',
  'award': 'award',
  'radio': 'radio',
  'message-circle': 'message-circle',
  'dollar-sign': 'dollar-sign',
  'arrow-up-right': 'arrow-up-right',
  'filter': 'filter',
  'info': 'info',
  'target': 'target',
  'handshake': 'handshake',
};

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

let generated = 0;

for (const [codeName, svgName] of Object.entries(missingIcons)) {
  const svgPath = join(SVG_BASE, `${svgName}.svg`);
  const outputPath = join(OUTPUT_DIR, `${toPascalCase(codeName)}Icon.tsx`);
  
  if (!existsSync(svgPath)) {
    console.log(`  ✖ SVG not found: ${svgPath}`);
    continue;
  }
  
  const svgContent = readFileSync(svgPath, 'utf-8');
  const component = generateReactComponent(codeName, svgContent);
  writeFileSync(outputPath, component, 'utf-8');
  console.log(`  ✔ ${toPascalCase(codeName)}Icon.tsx`);
  generated++;
}

console.log(`\nGenerated ${generated} icon components.`);
