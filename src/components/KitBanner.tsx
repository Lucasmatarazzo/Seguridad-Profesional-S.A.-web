import React from 'react';
import { ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface KitBannerProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function KitBanner({ onScrollToSection }: KitBannerProps) {
  const features = [
    'Personal capacitado y certificado',
    'Tecnología de última generación',
    'Planes adaptados a cada cliente',
    'Supervisión constante'
  ];

  return (
    <section className="py-24 bg-[#313131] border-t border-white/5 relative overflow-hidden">
      {/* Decorative ambient background lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#F5C518]/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Yellow Banner */}
        <div className="@container bg-[#D9A000] rounded-[4cqw] p-[4cqw] md:p-[6cqw] relative flex flex-row items-center justify-between shadow-2xl mb-16 mt-12 md:mt-24 h-[40cqw] sm:h-[35cqw] md:h-[30cqw] lg:h-[28cqw]">
          
          {/* Left Text */}
          <div className="w-1/3 text-left z-20 flex flex-col justify-center space-y-[1.5cqw] md:space-y-[1cqw]">
            <h3 className="text-white text-[4cqw] md:text-[3.5cqw] font-bold leading-[1.2] tracking-tight drop-shadow-sm font-sans">
              Consultá ahora<br/>por tu kit
            </h3>
            <p className="text-white text-[1.8cqw] md:text-[1.5cqw] font-medium drop-shadow-sm font-sans">
              Protegemos tu hogar<br/>cuando no estas
            </p>
            <div className="inline-block border-[0.2cqw] border-white rounded-[2cqw] px-[2cqw] py-[1cqw] mt-[1cqw] self-start bg-transparent">
              <p className="text-white font-medium text-[1.4cqw] md:text-[1.2cqw] leading-snug drop-shadow-sm font-sans">
                Monitoreo activo las 24 horas.<br/> Controlá todo desde tu celular.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-1/3 relative flex justify-center items-center z-10 h-full">
             <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[45cqw] md:w-[40cqw] z-10 pointer-events-none">
               <img 
                 src="/kit.banner/kit-banner.png" 
                 alt="Kit de Seguridad" 
                 className="w-full h-auto object-contain drop-shadow-[0_2cqw_3cqw_rgba(0,0,0,0.4)] scale-110 md:scale-[1.15]" 
               />
             </div>
          </div>

          {/* Right Text */}
          <div className="w-1/3 text-center z-20 flex flex-col justify-center items-center space-y-[1.5cqw] md:space-y-[1.5cqw]">
            <h3 className="text-white text-[3.5cqw] md:text-[3cqw] font-bold leading-tight drop-shadow-sm font-sans text-center">
              Instalación<br/>Gratuita
            </h3>
            <div className="bg-white rounded-[1.5cqw] px-[3cqw] py-[1cqw] shadow-xl inline-block">
              <span className="text-[#D9A000] text-[3.5cqw] md:text-[3cqw] font-bold font-sans">6 Cuotas</span>
            </div>
            <p className="text-white text-[2.5cqw] md:text-[2cqw] font-medium drop-shadow-sm font-sans text-center">
              Sin interes
            </p>
          </div>

        </div>

        {/* Original Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Promo Card Left/Center */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#1E1E1E] to-[#252525] border border-white/5 rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300">
            {/* Glossy top lighting curve */}
            <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-white/2 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-[#F5C518]/10 text-[#F5C518] px-4 py-1.5 rounded-full mb-6 border border-[#F5C518]/20">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-sans tracking-wider uppercase font-medium">KIT CON INSTALACIÓN PROFESIONAL</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
                Consultá ahora por tu kit
              </h3>
              <p className="text-[#F5C518] font-medium text-lg mb-4">
                Protegemos tu hogar cuando no estás.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Nuestro sistema de monitoreo inteligente mantiene tu casa resguardada las 24 horas del día. Recibí alertas instantáneas, videoverificá intrusiones y controlá todo el ecosistema directamente desde tu celular.
              </p>

              {/* Bullet Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C518] flex-shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
              <button
                onClick={() => onScrollToSection('contacto')}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] hover:from-[#F5C518] hover:to-[#D4AF37] text-[#1E1E1E] font-bold tracking-wider text-xs py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
              >
                <span>Saber Más / Solicitar Asesoramiento</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Mission Card Right */}
          <div className="lg:col-span-4 flex flex-col gap-8 justify-between">
            <div className="bg-[#1E1E1E] border border-white/5 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-between hover:border-[#D4AF37]/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-[#313131] rounded-lg border border-white/5 text-[#F5C518]">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="text-white font-display font-bold text-lg tracking-wide uppercase">
                  Nuestra Misión
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "Proteger personas, bienes y organizaciones mediante soluciones de seguridad confiables, innovadoras y estratégicamente diseñadas, garantizando tranquilidad y prevención permanente."
              </p>
              <div className="text-right text-[#D4AF37] font-mono text-[10px] tracking-widest mt-4">
                SPSA © LIDERANDO SEGURIDAD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
