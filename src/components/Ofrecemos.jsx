import React from 'react';

const beneficios = [
  "Certificación Microsoft en Excel (MOS)",
  "Acceso a Open English 24/7 con clases en vivo",
  "Constancias DC3 por competencias desarrolladas",
  "Capacitación en habilidades clave divididas en módulos y talleres",
  "Simulador de evaluación profesional",
  "Coaching sabatino y acompañamiento continuo",
  "Entrenamiento en diseño e impartición de cursos",
  "Herramientas digitales con IA para atraer alumnos",
];

export default function Ofrecemos() {
  return (
    <section id="ofrecemos"className="bg-white text-zena-blue py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">¿Qué ofrecemos en ZENA?</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Como Centro de Competencias, brindamos un sistema integral de formación y certificación profesional que combina tecnología, educación y negocio.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beneficios.map((item, index) => (
            <li key={index} className="bg-zena-blue text-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
