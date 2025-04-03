// src/components/Header.tsx
'use client';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 w-full h-16 flex items-center justify-between px-4 z-10 bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white"
    >
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">☰</button>
      <div className="text-4xl font-bold tracking-wider" style={{ fontFamily: 'Carbon Block' }}>
        RETuned
      </div>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaFacebook className="w-6 h-6" /> {/* Ícono de Facebook */}
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaInstagram className="w-6 h-6" /> {/* Ícono de Instagram */}
        </a>
        <a
          href="mailto:retuned@example.com" // Cambia por tu email real
          className="hover:text-gray-300"
        >
          <FaRegEnvelope className="w-6 h-6" />
        </a>
      </div>
      {menuOpen && (
        <div className="fixed top-16 right-0 left-0 w-64 h-full bg-black bg-opacity-20 backdrop-blur-md text-white p-4 z-10">
          <ul>
            <li onClick={() => scrollToSection('section1')} className="cursor-pointer py-2">Home</li>
            <li onClick={() => scrollToSection('section2')} className="cursor-pointer py-2">The Band</li>
            <li onClick={() => scrollToSection('section3')} className="cursor-pointer py-2">Events</li>
            <li onClick={() => scrollToSection('section4')} className="cursor-pointer py-2">Fan Club</li>
          </ul>
        </div>
      )}
    </header>
  );
}