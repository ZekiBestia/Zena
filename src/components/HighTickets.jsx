import React from 'react';

const niveles = [
  {
    titulo: "Plan de Carrera Profesional +",
    descripcion: "Programa básico de habilidades con capacitación en Excel (sin certificación).",
    precio: "$2,997 MXN",
  },
  {
    titulo: "Plan de Carrera Profesional ++",
    descripcion: "Incluye capacitación completa en Excel, talleres clave y coaching profesional. Consta de módulos y constancias DC3.",
    precio: "$5,997 MXN",
  },
  {
    titulo: "Plan de Carrera Profesional +++",
    descripcion: "Programa completo con certificación Microsoft, acceso total a Open English, talleres, coaching, DC3 y simulador.",
    precio: "$9,997 MXN",
  },
];

export default function HighTickets() {
  return (
    <section className="bg-gray-100 text-zena-blue py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Opciones del Plan de Carrera Profesional</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {niveles.map((nivel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 border-t-4 border-zena-cyan text-left">
              <h3 className="text-xl font-bold mb-2">{nivel.titulo}</h3>
              <p className="text-gray-700 mb-4">{nivel.descripcion}</p>
              <span className="text-zena-indigo font-semibold">{nivel.precio}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
