import React from 'react';

const valores = [
  "Responsabilidad",
  "Congruencia",
  "Profesionalismo",
  "Compañerismo",
  "Trabajo en equipo",
  "Ética",
  "Amor",
  "Resiliencia",
  "Diplomacia"
];

export default function ValoresPrincipios() {
  return (
    <section id="valores" className="bg-zena-blue text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {valores.map((valor, idx) => (
            <div
              key={idx}
              className="bg-white text-zena-blue rounded-lg px-4 py-6 shadow-md hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-lg">{valor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
