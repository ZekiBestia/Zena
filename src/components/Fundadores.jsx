import React from 'react';
import ana from '../assets/anaimg.jpeg';         // Asegúrate de tener esta imagen en /assets
import ezequiel from '../assets/zekiimg.jpeg';

const fundadores = [
  {
    nombre: "Ana Cristina Cara García",
    cargo: "Co-Fundadora · Licenciada en Psicología",
    descripcion:
      "Especialista en desarrollo humano, liderazgo y acompañamiento emocional en procesos formativos. Con visión empática y estratégica impulsa el crecimiento de los participantes en ZENA.",
    imagen: ana,
  },
  {
    nombre: "Ezequiel Olivera Reyes",
    cargo: "Co-Fundador · Ingeniero en Computación",
    descripcion:
      "Apasionado por la automatización, la IA y el desarrollo de sistemas eficientes. Diseña soluciones tecnológicas que potencian la educación profesional en ZENA.",
    imagen: ezequiel,
  },
];

export default function Fundadores() {
  return (
    <section className="bg-white text-zena-blue py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Fundadores de ZENA</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {fundadores.map((f, index) => (
            <div key={index} className="flex gap-6 items-center">
              <img
                src={f.imagen}
                alt={f.nombre}
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-2 border-zena-indigo"
              />
              <div>
                <h3 className="text-xl font-semibold">{f.nombre}</h3>
                <p className="text-sm text-zena-indigo mb-2">{f.cargo}</p>
                <p className="text-gray-700 text-sm">{f.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
