import React, { useState, useEffect, useRef } from 'react';
import { APP_IMAGES } from '../data';
import { ArrowLeft, ArrowRight, Smartphone, Compass, Shield, BellRing } from 'lucide-react';

interface PhoneItem {
  id: string;
  image?: string;
  title: string;
  badge: string;
  description: string;
}

export default function AppCarousel() {
  const items: PhoneItem[] = [
    {
      id: 'item-1',
      image: '/telefono/telefono.1.png',
      title: 'Ecosistema de Control SPSA',
      badge: 'APP PRINCIPAL',
      description: 'Gestioná tu seguridad desde una pantalla intuitiva. Activá el acceso seguro, solicitá auxilio o reportá incidencias.',
    },
    {
      id: 'item-2',
      image: '/telefono/telefono.2.png',
      title: 'Historial y Reportes',
      badge: 'REGISTRO DE EVENTOS',
      description: 'Revisá la actividad detallada de tu sistema. Control de horarios, aperturas, cierres y notificaciones push al instante.',
    },
    {
      id: 'item-3',
      image: '/telefono/telefono.3.png',
      title: 'Sistema Antientradera S.O.S',
      badge: 'BOTÓN DE PÁNICO',
      description: 'Activá el cronómetro preventivo al llegar a tu hogar. Si el contador llega a cero, se despacha un patrullero en segundos.',
    },
    {
      id: 'item-4',
      image: '/telefono/telefono.4.png',
      title: 'Control de Accesos Integrado',
      badge: 'ACCESOS Y VISITAS',
      description: 'Autorizá ingresos, generá códigos QR temporales para visitas y mantené el registro completo de quién entra a tu propiedad.',
    },
    {
      id: 'item-5',
      image: '/telefono/telefono.5.png',
      title: 'Monitoreo de Cámaras en Vivo',
      badge: 'MONITOREO ACTIVO',
      description: 'Accedé al feed continuo de tus cámaras de seguridad. Visualización en alta definición y alertas de cruce de línea en tiempo real.',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Start with the first item

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation every 4 seconds
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);
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
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    startTimer();
  };

  const handlePrev = () => {
    stopTimer();
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    stopTimer();
    setActiveIndex(index);
    startTimer();
  };

  // Helper to calculate positions in the circular carrousel
  const getPositionClass = (itemIndex: number) => {
    const diff = (itemIndex - activeIndex + items.length) % items.length;
    if (diff === 0) {
      // Center (Front)
      return 'translate-x-0 scale-100 z-30 opacity-100 rotate-0 filter-none';
    } else if (diff === 1) {
      // Right (Behind, rotated)
      return 'translate-x-[50%] sm:translate-x-[70%] lg:translate-x-[85%] scale-[0.65] sm:scale-75 z-20 opacity-60 rotate-[8deg] pointer-events-none blur-[1px]';
    } else if (diff === items.length - 1) {
      // Left (Behind, rotated)
      return '-translate-x-[50%] sm:-translate-x-[70%] lg:-translate-x-[85%] scale-[0.65] sm:scale-75 z-20 opacity-60 -rotate-[8deg] pointer-events-none blur-[1px]';
    } else {
      // Hidden or far behind
      return 'translate-x-0 scale-[0.5] z-0 opacity-0 pointer-events-none';
    }
  };

  return (
    <section className="py-24 bg-[#313131] border-t border-white/5 relative overflow-hidden">
      {/* Dynamic Background Light Circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#F5C518]/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            Nuestro App SPSA
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tu seguridad total al alcance de tu mano. Conocé las pantallas principales de nuestra aplicación con la que controlás tu alarma, visualizás cámaras y activás escoltas remotas en ruta.
          </p>
        </div>

        {/* 3D App Mockup Carousel Container */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center mb-12 select-none">
          {/* Carousel Track */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute w-[95vw] sm:w-[60vw] md:w-[500px] lg:w-[700px] xl:w-[800px] transition-all duration-700 ease-out flex flex-col items-center ${getPositionClass(
                  idx
                )}`}
              >
                <div className="relative w-full flex items-center justify-center drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-96 bg-neutral-800 rounded-[3rem] border border-white/10 flex items-center justify-center">
                      <span className="text-gray-500 font-display text-lg">App Interface Preview</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-10 z-40 p-4 bg-[#1E1E1E]/80 border border-white/5 hover:border-[#D4AF37]/40 rounded-full text-[#F5C518] hover:bg-[#1E1E1E] shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-10 z-40 p-4 bg-[#1E1E1E]/80 border border-white/5 hover:border-[#D4AF37]/40 rounded-full text-[#F5C518] hover:bg-[#1E1E1E] shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Indicators & Active Screen Information */}
        <div className="flex flex-col items-center max-w-xl mx-auto text-center mt-6">
          {/* Indicators Dots */}
          <div className="flex items-center space-x-2.5 mb-8">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'bg-[#F5C518] scale-125 shadow-md shadow-[#F5C518]/20 w-8'
                    : 'bg-[#1E1E1E] border border-white/10 hover:border-white/30'
                }`}
              />
            ))}
          </div>

          {/* Active Info Card with fade-in */}
          <div
            key={activeIndex}
            className="bg-[#1E1E1E]/80 border border-white/5 rounded-2xl p-6 sm:p-8 w-full shadow-xl animate-fade-in"
          >
            <span className="text-[#F5C518] text-xs font-sans font-bold tracking-widest uppercase mb-2 block">
              {items[activeIndex].badge}
            </span>
            <h4 className="text-white font-display font-bold text-xl sm:text-2xl mb-3">
              {items[activeIndex].title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {items[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
