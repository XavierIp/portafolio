import React from 'react';

export default function timeline() {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black">Soporte Técnico</div>
            • Reparación y Mantenimiento: Diagnosticar y solucionar problemas técnicos en
computadoras y dispositivos.
• Desarrollo e instalación de puntos de ventas en lenguaje Java.
• Realizar estudio de Procesos y búsqueda de requerimientos para el desarrollo web.

          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black">Asistente de TI</div>
            • Encargado de garantizar la operatividad de los diferentes sistemas informáticos vigentes de la Empresa (CMR, ERP, aplicativos Web, correos) y de la infraestructura tecnológica.
• Encargado de Implementación de Nuevas Tecnologías Informáticas.
• Gestión con proveedores.
          </div>
          <hr />
        </li>
       
       
      </ul>
    );
}