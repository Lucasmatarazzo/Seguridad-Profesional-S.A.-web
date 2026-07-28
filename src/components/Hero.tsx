import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';


interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-32 sm:pt-36 lg:pt-40 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] lg:bg-[right_top] bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/home/home.jpg')" }}
      ></div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-black/30 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0A0A]"></div>
      
      {/* Dynamic diagonal subtle golden light beam */}
      <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[linear-gradient(135deg,_rgba(212,175,55,0.05)_0%,_transparent_50%,_transparent_100%)] rotate-12 pointer-events-none"></div>

      {/* Decorative vector stripes (representing SPSA corporate wing/stripe theme) */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none select-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#D4AF37]" strokeWidth="0.5">
          <path d="M 50,0 Q 80,50 110,100" />
          <path d="M 60,0 Q 90,50 120,100" strokeDasharray="2,2" />
          <path d="M 40,0 Q 70,50 100,100" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#F5F5F5] tracking-tight mb-4 sm:mb-6 max-w-4xl leading-tight">
          Seguridad integral <br className="hidden sm:inline" />
          <span className="text-[#F5C518]">
            Al alcance de tu <br className="hidden sm:inline" /> necesidad
          </span>
        </h1>

        {/* Small shield and line separator */}
        <div className="flex items-center space-x-4 mb-8">
          <ShieldCheck className="h-6 w-6 text-[#F5C518]" />
          <div className="h-0.5 w-48 bg-[#F5C518]"></div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mb-10 leading-relaxed">
          Seguridad nuestro trabajo, Profesional la forma de hacerlo.<br className="hidden sm:inline" />
          Brindamos protección real adaptada a sus necesidades.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6 w-full sm:w-auto max-w-2xl">
          <button
            onClick={() => onScrollToSection('contacto')}
            className="w-full sm:w-auto bg-[#F5C518] hover:bg-[#D4AF37] text-[#1E1E1E] font-semibold tracking-wider text-xs sm:text-sm pl-6 sm:pl-8 pr-2 py-2 rounded-full shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#F5C518]/30 transition-all transform hover:-translate-y-1 flex items-center justify-between space-x-4 sm:space-x-6 group cursor-pointer"
          >
            <span className="text-left leading-tight py-1">Solicitar asesoramiento<br className="hidden sm:inline" /> gratuito</span>
            <div className="bg-[#1E1E1E] rounded-full p-2.5 sm:p-3 flex items-center justify-center shrink-0">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform group-hover:translate-x-1" />
            </div>
          </button>
          
          <button
            onClick={() => onScrollToSection('servicios')}
            className="w-full sm:w-auto bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white font-medium tracking-wider text-xs sm:text-sm pl-6 sm:pl-8 pr-2 py-2 rounded-full border border-white/10 transition-all transform hover:-translate-y-1 flex items-center justify-between space-x-4 sm:space-x-6 cursor-pointer group"
          >
            <span className="text-left py-1">Ver servicios</span>
            <div className="border border-[#F5C518] rounded-full p-2.5 sm:p-3 flex items-center justify-center shrink-0">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#F5C518] transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>

      {/* Badge Indicator - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:inline-flex items-center space-x-2 bg-[#1E1E1E]/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
        <ShieldCheck className="h-4 w-4 text-[#F5C518]" />
        <span className="text-[#F5F5F5] text-xs font-sans font-bold tracking-widest uppercase">
          SPSA • SEGURIDAD PROFESIONAL S.A.
        </span>
      </div>

      {/* Down Scroll Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer" onClick={() => onScrollToSection('servicios')}>
        <span className="text-xs text-gray-400 font-mono tracking-widest uppercase mb-2">
          SCROLL
        </span>
        <ChevronDown className="h-5 w-5 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
}
