import React from 'react';
import microsoft from '../assets/microsoft.jpg';
import openenglish from '../assets/openenglish.png';
import icemexico from '../assets/icemexico.png';
import unam from '../assets/unam.png';
import conocer from '../assets/conocer.png';
import sep from '../assets/sep.png';

const alianzas = [
  {
    src: microsoft,
    alt: 'Microsoft',
    url: 'https://www.microsoft.com/es-mx',
  },
  {
    src: openenglish,
    alt: 'Open English',
    url: 'https://www.openenglish.com/',
  },
  {
    src: icemexico,
    alt: 'ICEMéxico',
    url: 'https://icemexico.com/acerca-de/',
  },
  {
    src: unam,
    alt: 'UNAM',
    url: 'https://www.unam.mx/',
  },
  {
    src: conocer,
    alt: 'Red CONOCER',
    url: 'https://conocer.gob.mx/',
  },
  {
    src: sep,
    alt: 'Secretaría de Educación Pública',
    url: 'https://www.gob.mx/sep',
  },
];

export default function AlianzasEstrategicas() {
  return (
    <section className="bg-white text-zena-blue py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Alianzas Estratégicas</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          ZENA colabora con instituciones de alto prestigio que avalan nuestra calidad educativa y proyección profesional.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {alianzas.map((alianza, idx) => (
            <a
              key={idx}
              href={alianza.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105 hover:drop-shadow-xl"
            >
              <img
                src={alianza.src}
                alt={alianza.alt}
                className="h-12 md:h-16 object-contain mx-auto transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
