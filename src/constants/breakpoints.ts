export const BREAKPOINTS = {
    MOBILE: {
      name: 'mobile',
      max: 767, // Hasta 767px
    },
    TABLET: {
      name: 'tablet',
      min: 768,
      max: 1023, // 768px - 1023px
    },
    DESKTOP: {
      name: 'desktop',
      min: 1024, // Desde 1024px
    },
  } as const; // "as const" asegura que los valores sean literales inmutables
  
  export type LayoutName = typeof BREAKPOINTS[keyof typeof BREAKPOINTS]['name']; // Tipo derivado de los nombres de los layouts
  export const DEFAULT_LAYOUT = BREAKPOINTS.DESKTOP.name; // Valor por defecto