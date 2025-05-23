import React from 'react';

export default function Hero() {
  return (
    <section className="bg-zena-blue text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Transformamos el futuro profesional de México y Latinoamérica
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          A través del Sistema ACC 3.0, impulsamos la movilidad social con herramientas tecnológicas, certificaciones de clase mundial y un modelo de alto impacto respaldado por Microsoft, ICEMéxico y Open English.
        </p>
        <a
          href="#registro"
          className="inline-block bg-white text-zena-blue font-semibold px-8 py-3 rounded-full border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          ¡Comienza tu camino con ZENA!
        </a>
      </div>
    </section>
  );
}
