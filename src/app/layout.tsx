// src/app/layout.tsx
import '../styles/globals.css';
import Header from '../components/Header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col m-0 p-0">
        <Header />
        <main className="flex-1 m-0 p-0">{children}</main>
      </body>
    </html>
  );
}