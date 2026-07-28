import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  stars: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      text: 'Trabajamos con SPSA hace varios años y siempre mantienen altos estándares de calidad. La supervisión constante y la tecnología que utilizan marca la diferencia.',
      author: 'Carlos Ramirez',
      role: 'Director - Industria Metalúrgica',
      stars: 5
    },
    {
      text: 'Excelente respuesta de monitoreo de alarmas. En una oportunidad tuvimos un disparo de pánico y en menos de 30 segundos se comunicaron y despacharon apoyo policial.',
      author: 'Ing. Marcelo Gomez',
      role: 'Gerente de Logística - Pallets Jauregui',
      stars: 5
    },
    {
      text: 'La seriedad jurídica y el cumplimiento estricto del convenio colectivo de sus guardias nos desligan de cualquier contingencia solidaria. Un servicio impecable.',
      author: 'Dra. Laura Ferrero',
      role: 'Directora de RRHH - San Juan de Dios',
      stars: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleNext = () => {
    stopTimer();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    startTimer();
  };

  const handlePrev = () => {
    stopTimer();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTimer();
  };

  return (
    <section className="py-24 bg-[#1E1E1E]/40 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F5C518] text-xs font-sans font-bold tracking-widest uppercase mb-2 block">
            TESTIMONIALES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Durante más de tres décadas hemos acompañado a empresas, comercios y consorcios brindando soluciones de seguridad confiables, eficientes y adaptadas a cada necesidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-[350px]">
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-gray-500 font-display text-sm uppercase tracking-widest">Testimonial</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-[#1E1E1E]/80 backdrop-blur-sm border border-white/10 py-1.5 px-4 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-white text-xs font-sans font-bold tracking-wider">CLIENTES SPSA SATISFECHOS</span>
            </div>
          </div>

          {/* Right Column: Dynamic gold/yellow slider card */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-[#1E1E1E] rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden group">
              {/* Giant quote mark background */}
              <Quote className="absolute -top-6 -right-6 h-40 w-40 text-[#1E1E1E]/5 pointer-events-none transform rotate-12" />

              <div className="flex items-center space-x-1.5 mb-6">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#1E1E1E] stroke-[#1E1E1E]" />
                ))}
              </div>

              {/* Slider content wrapper with fade-in animation */}
              <div key={activeIndex} className="animate-fade-in">
                <blockquote className="text-xl sm:text-2xl font-medium tracking-wide mb-8 leading-relaxed font-display">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                <div className="flex items-center justify-between border-t border-[#1E1E1E]/10 pt-6">
                  <div>
                    <cite className="font-display font-black text-lg not-italic block uppercase tracking-tight">
                      {testimonials[activeIndex].author}
                    </cite>
                    <span className="text-[#1E1E1E]/70 font-mono text-xs font-bold uppercase tracking-wider">
                      {testimonials[activeIndex].role}
                    </span>
                  </div>

                  {/* Slider Control arrows */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handlePrev}
                      className="p-3.5 bg-[#1E1E1E]/10 hover:bg-[#1E1E1E]/20 rounded-full text-[#1E1E1E] border border-[#1E1E1E]/5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3.5 bg-[#1E1E1E] text-white hover:bg-[#1E1E1E]/90 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopTimer();
                    setActiveIndex(idx);
                    startTimer();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'bg-[#F5C518] scale-125 w-6' : 'bg-white/10 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
