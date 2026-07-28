import React from 'react';
import { Eye, Shield, Users, Layers } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '1',
      title: 'Evaluación De Riesgo',
      desc: 'Analizamos en profundidad el entorno, puntos vulnerables y necesidades específicas para diseñar una estrategia de seguridad efectiva y adaptada.'
    },
    {
      num: '2',
      title: 'Diseño De Plan De Seguridad',
      desc: 'Desarrollamos un plan personalizado que integra recursos humanos, tecnología y protocolos operativos alineados al nivel de riesgo identificado.'
    },
    {
      num: '3',
      title: 'Ejecución y Control',
      desc: 'Ejecutamos el servicio con supervisión permanente, capacitación continua y control operativo para garantizar eficiencia y mejora constante.'
    },
    {
      num: '4',
      title: 'Protocolos Personalizados',
      desc: 'Comprender la actividad y los procesos de cada cliente permite aplicar protocolos adecuados, optimizar la prevención y asegurar una respuesta efectiva ante cualquier situación.'
    }
  ];

  return (
    <section className="py-24 bg-[#313131] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Metodología rigurosa orientada a resultados para garantizar la máxima seguridad en cada una de nuestras asignaciones corporativas y domiciliarias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Officer Image */}
          <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-[500px]">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src="/proceso.de.trabajo/proceso.de.trabajo.png"
              alt="Auditor de riesgos SPSA"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Float badge inside image */}
            <div className="absolute bottom-8 left-8 z-20 flex flex-col">
              <span className="text-[#F5C518] text-xs font-sans font-bold tracking-widest uppercase mb-1">AUDITOR DE RIESGOS SPSA</span>
              <span className="text-white font-display font-bold text-xl">Sólida formación y supervisión permanente</span>
            </div>
          </div>

          {/* Right Column: Process Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col sm:flex-row items-start gap-6 bg-[#1E1E1E]/80 border border-white/5 rounded-2xl p-6 hover:border-[#D4AF37]/20 hover:bg-[#1E1E1E] transition-all duration-300"
              >
                {/* Large Step Number */}
                <div className="font-display font-black text-5xl sm:text-6xl text-[#D4AF37]/20 group-hover:text-[#F5C518] transition-colors font-mono leading-none flex-shrink-0 sm:w-16">
                  {step.num}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wide mb-2 group-hover:text-[#F5C518] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
