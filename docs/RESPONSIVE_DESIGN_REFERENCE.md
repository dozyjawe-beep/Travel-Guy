/**
 * RESPONSIVE DESIGN REFERENCE
 * 
 * Mobile-First Approach (default → small → medium → large)
 */

/* StatsCounters Responsive Breakdown */

/*
 * MOBILE (< 640px)
 * - Grid: 1 column
 * - Padding: 4 (1rem)
 * - Gap: 6 (1.5rem)
 * - Font: base/base
 * - Title size: 3xl
 * - Value size: 4xl
 */

/*
 * TABLET (sm: 640px+)
 * - Grid: 2 columns
 * - Padding: 6 (1.5rem)
 * - Gap: 8 (2rem)
 * - Font: base/base
 * - Title size: 4xl
 * - Value size: 5xl
 * - Card padding: 10 (2.5rem)
 */

/*
 * DESKTOP (lg: 1024px+)
 * - Grid: 4 columns
 * - Padding: 8 (2rem)
 * - Gap: 8 (2rem)
 * - Font: lg/base
 * - Title size: 5xl
 * - Value size: 5xl (maintained from sm)
 * - Section padding: 24 (6rem)
 */

/* Tailwind Breakpoints Used */
export const BREAKPOINTS = {
  DEFAULT: '0px',      // Mobile first
  SM: '640px',        // Small devices
  MD: '768px',        // Medium devices (not used in this component)
  LG: '1024px',       // Large devices
  XL: '1280px',       // Extra large (not used)
  '2XL': '1536px',    // 2X large (not used)
};

/* Grid Configuration */
export const GRID_CONFIG = {
  MOBILE: 'grid-cols-1',
  TABLET: 'sm:grid-cols-2',
  DESKTOP: 'lg:grid-cols-4',
};

/* Spacing Adjustments */
export const SPACING = {
  SECTION_PADDING_MOBILE: 'py-16',        // 4rem
  SECTION_PADDING_SM: 'sm:py-20',        // 5rem
  SECTION_PADDING_LG: 'lg:py-24',        // 6rem
  
  GRID_GAP_MOBILE: 'gap-6',              // 1.5rem
  GRID_GAP_SM: 'sm:gap-8',               // 2rem
  
  CARD_PADDING_MOBILE: 'p-8',            // 2rem
  CARD_PADDING_SM: 'sm:p-10',            // 2.5rem
  
  MARGIN_BOTTOM: 'mb-12 sm:mb-16 lg:mb-20',
};

/* Typography Adjustments */
export const TYPOGRAPHY = {
  TITLE_MOBILE: 'text-3xl',
  TITLE_SM: 'sm:text-4xl',
  TITLE_LG: 'lg:text-5xl',
  
  VALUE_MOBILE: 'text-4xl',
  VALUE_SM: 'sm:text-5xl',
  
  LABEL_MOBILE: 'text-sm',
  LABEL_SM: 'sm:text-base',
  
  SUBTITLE_MOBILE: 'text-base',
  SUBTITLE_SM: 'sm:text-lg',
};

/* Testing Responsive Design */
export const RESPONSIVE_TEST_SIZES = {
  mobileSm: 320,
  mobileMd: 375,
  mobileLg: 425,
  tabletSm: 600,
  tabletMd: 768,
  tabletLg: 820,
  desktopSm: 1024,
  desktopMd: 1280,
  desktopLg: 1536,
  desktopXl: 1920,
};

/**
 * MOBILE-FIRST DESIGN STRATEGY
 * 
 * 1. Default styles (mobile optimized)
 * 2. sm: prefix for 640px+ devices
 * 3. md: prefix for 768px+ devices (optional)
 * 4. lg: prefix for 1024px+ devices
 * 5. xl: prefix for 1280px+ devices (future)
 * 
 * Example:
 * className="p-4 sm:p-6 lg:p-8"
 * - Mobile: 1rem padding
 * - Tablet: 1.5rem padding
 * - Desktop: 2rem padding
 */

/**
 * ACCESSIBILITY IN RESPONSIVE DESIGN
 * 
 * - Ensure touch targets are 44x44px minimum on mobile
 * - Font sizes never drop below 16px on mobile (prevents zoom)
 * - Maintain color contrast on all screen sizes
 * - Test with multiple orientations (portrait/landscape)
 * - Consider viewport settings in HTML <head>:
 *   <meta name="viewport" content="width=device-width, initial-scale=1">
 */
