import React, { useState } from 'react';
import logo from '../assets/zenaB.png'; // Asegúrate de tener este logo en /src/assets

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', link: '#inicio' },
    { label: 'Misión', link: '#mision' },
    { label: 'Valores', link: '#valores' },
    { label: 'Oferta', link: '#ofrecemos' },
    { label: 'Contacto', link: '#footer' },
  ];

  return (
    <header className="w-full bg-[#00182B] shadow-lg text-white fixed z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        
        {/* Menú hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Logo ZENA */}
        <div className="flex justify-center w-full md:w-auto">
          <a href="#inicio">
            <img
              src={logo}
              alt="ZENA Logo"
              className="h-14 md:h-20 mx-auto transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.link} className="hover:text-zena-cyan transition">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2 text-sm">
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.link} onClick={() => setIsOpen(false)} className="hover:text-zena-cyan transition">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
