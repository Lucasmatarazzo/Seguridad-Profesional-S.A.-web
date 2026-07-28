import React from 'react';
import { Shield, Bell, Cpu, MessageSquare, Flame, CheckCircle, ShieldAlert } from 'lucide-react';

export default function MainFeatures() {
  const features = [
    {
      title: 'Seguridad Física',
      desc: 'Guardias seleccionados y entrenados para protección de industrias, consorcios, barrios cerrados y eventos.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Monitoreo de Alarmas',
      desc: 'Soporte y verificación remota las 24 horas del día ante disparos, sabotajes e intrusiones.',
      icon: <Bell className="h-6 w-6" />
    },
    {
      title: 'Seguridad Electrónica',
      desc: 'Instalaciones homologadas de circuitos cerrados de televisión (CCTV) con analíticas de video.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Respuesta Inmediata S.O.S',
      desc: 'Botones de pánico y alarma silenciosa integrados a nuestra central de emergencias multi-vía.',
      icon: <ShieldAlert className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#1E1E1E]/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            Funciones Principales
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nuestra plataforma integra un abanico completo de capas de defensa para brindar máxima tranquilidad.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="group bg-[#1E1E1E]/80 border border-white/5 rounded-2xl p-6 hover:border-[#D4AF37]/50 shadow-lg hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-default"
            >
              <div className="p-4 bg-[#313131] rounded-xl border border-white/5 group-hover:border-[#D4AF37]/30 transition-all text-[#F5C518] mb-5">
                {feat.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white tracking-wide mb-3 group-hover:text-[#F5C518] transition-colors">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
