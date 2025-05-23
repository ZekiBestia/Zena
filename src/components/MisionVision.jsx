import React from 'react';

export default function MisionVision() {
  return (
    <section id= "mision" className="bg-white text-zena-blue py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-zena-cyan pl-4">Misión</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Ser un referente en la formación profesional, proporcionando herramientas educativas y tecnológicas de alto impacto que potencien el desarrollo de habilidades y conduzcan al éxito laboral. Nos comprometemos a brindar un servicio ético, cercano y profesional, fundamentado en la excelencia y el crecimiento mutuo.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-zena-cyan pl-4">Visión</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Ser una empresa líder en capacitación y certificación profesional, reconocida por transformar vidas a través del aprendizaje continuo, la innovación tecnológica y el desarrollo de competencias, impulsando la movilidad social de nuestros clientes y colaboradores.
          </p>
        </div>
      </div>
    </section>
  );
}
