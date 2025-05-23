import React from 'react';

export default function Footer() {
  return (
    <footer id="footer"className="bg-zena-blue text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contacto</h4>
          <p>Centro ZENA - Zona de Excelencia y Nuevas Oportunidades</p>
          <p>Correo: contacto@centrodecompetenciazena.com</p>
          <p>WhatsApp: +52 55 32 21 33 25</p>
          <p>WhatsApp: +52 55 37 10 03 00</p>
          <p className="mt-2">Ciudad de México, MX</p>
        </div>
        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/CentroDeCompetenciasZena" target="_blank" rel="noopener noreferrer" className="hover:text-zena-cyan transition">Facebook</a></li>
            <li><a href="https://instagram.com/centro-zena" target="_blank" rel="noopener noreferrer" className="hover:text-zena-cyan transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} ZENA · Centro de Competencias · Todos los derechos reservados · <a href="https://drive.google.com/file/d/1PzivoL8VVwqbBMBTMFk4LKe4NpqRW9NG/view" target="_blank" rel="noopener noreferrer" className="underline hover:text-zena-cyan">Aviso de privacidad</a>
      </div>
    </footer>
  );
}
