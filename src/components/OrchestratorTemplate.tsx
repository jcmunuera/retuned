// src/components/Section1.tsx
'use client'; // Necesario para hooks del lado del cliente

import { useState, useEffect } from 'react';
import Section1Mobile from './mobile/Section1Mobile';
import Section1Tablet from './tablet/Section1Tablet';
import Section1Desktop from './desktop/Section1Desktop';
import { BREAKPOINTS, DEFAULT_LAYOUT, LayoutName } from '../constants/breakpoints';

export default function Section1() {
  const [layout, setLayout] = useState<LayoutName>(DEFAULT_LAYOUT); // Valor inicial por defecto

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.MOBILE.max) {
        setLayout(BREAKPOINTS.MOBILE.name);
      } else if (width >= BREAKPOINTS.TABLET.min && width <= BREAKPOINTS.TABLET.max) {
        setLayout(BREAKPOINTS.TABLET.name);
      } else {
        setLayout(BREAKPOINTS.DESKTOP.name);
      }
    };

    updateLayout(); // Ejecutar al montar
    window.addEventListener('resize', updateLayout); // Escuchar cambios
    return () => window.removeEventListener('resize', updateLayout); // Limpiar
  }, []);

  // Renderizar el componente según el layout
  return (
    <>
      {layout === BREAKPOINTS.MOBILE.name && <Section1Mobile />}
      {layout === BREAKPOINTS.TABLET.name && <Section1Tablet />}
      {layout === BREAKPOINTS.DESKTOP.name && <Section1Desktop />}
    </>
  );
}