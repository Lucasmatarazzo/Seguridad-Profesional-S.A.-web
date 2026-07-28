import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../data';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (slug: string) => void;
  initialServiceSlug?: string;
}

export default function Services({ onSelectService, initialServiceSlug }: ServicesProps) {
  const getInitialIndex = () => {
    if (initialServiceSlug) {
      const idx = SERVICES_DATA.findIndex((s) => s.slug === initialServiceSlug);
      if (idx !== -1) return idx;
    }
    return 0;
  };

  const [activeIndex, setActiveIndex] = useState(getInitialIndex);
  const [isPaused, setIsPaused] = useState(false);

  // Touch & Drag state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isMouseDown = useRef<boolean>(false);

  // Sync active index if initialServiceSlug changes
  useEffect(() => {
    if (initialServiceSlug) {
      const idx = SERVICES_DATA.findIndex((s) => s.slug === initialServiceSlug);
      if (idx !== -1) {
        setActiveIndex(idx);
      }
    }
  }, [initialServiceSlug]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  };

  // Auto-advance interval (4.5s pace: standard balanced speed)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  // Touch event handlers for mobile & tablet swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 40; // minimum swipe distance in px

      if (diff > minSwipeDistance) {
        handleNext();
      } else if (diff < -minSwipeDistance) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Mouse event handlers for desktop click-drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    isMouseDown.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isMouseDown.current && touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 40;

      if (diff > minSwipeDistance) {
        handleNext();
      } else if (diff < -minSwipeDistance) {
        handlePrev();
      }
    }
    isMouseDown.current = false;
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 3000);
  };

  const getCardClasses = (idx: number) => {
    const diff = (idx - activeIndex + SERVICES_DATA.length) % SERVICES_DATA.length;
    
    // Base classes for the card
    const base = "absolute top-0 w-[270px] sm:w-[320px] lg:w-[340px] h-[390px] sm:h-[480px] lg:h-[520px] rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer select-none touch-pan-y transform-gpu isolate";
    
    if (diff === 0) {
      // Center
      return `${base} translate-x-0 scale-100 z-30 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.6)]`;
    } else if (diff === 1) {
      // Right
      return `${base} translate-x-[92%] sm:translate-x-[110%] scale-[0.95] sm:scale-[0.98] z-20 opacity-70 sm:opacity-80`;
    } else if (diff === SERVICES_DATA.length - 1) {
      // Left
      return `${base} -translate-x-[92%] sm:-translate-x-[110%] scale-[0.95] sm:scale-[0.98] z-20 opacity-70 sm:opacity-80`;
    } else {
      // Hidden
      return `${base} translate-x-0 scale-75 z-0 opacity-0 pointer-events-none`;
    }
  };

  return (
    <section id="servicios" className="py-20 sm:py-24 bg-[#313131] border-t border-white/5 relative overflow-hidden">
      {/* Decorative background light circle */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            Nuestros Servicios
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Brindamos soluciones integrales en seguridad física y electrónica, diseñadas para proteger personas, bienes e instalaciones con tecnología de última generación y equipos altamente capacitados.
          </p>
        </div>

        {/* Carousel Container with Touch & Mouse Drag Handlers */}
        <div 
          className="relative w-full max-w-[1100px] mx-auto h-[390px] sm:h-[480px] lg:h-[520px] flex items-center justify-center touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            isMouseDown.current = false;
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Left Arrow */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }} 
            className="absolute left-1 sm:-left-12 lg:-left-16 z-40 bg-[#1E1E1E]/80 sm:bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all border border-white/10 sm:border-none backdrop-blur-sm"
            aria-label="Servicio anterior"
          >
            <Icons.ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center overflow-hidden sm:overflow-visible">
            {SERVICES_DATA.map((service, idx) => {
              const diff = (idx - activeIndex + SERVICES_DATA.length) % SERVICES_DATA.length;
              const isCenter = diff === 0;

              return (
                <div 
                  key={service.id} 
                  className={`${getCardClasses(idx)} group`}
                  style={{
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    borderRadius: '2rem'
                  }}
                  onClick={() => {
                    if (isCenter) {
                      onSelectService(service.slug);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-neutral-800 rounded-[2rem] overflow-hidden">
                    {service.image && (
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[2rem]" 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 rounded-[2rem] transition-opacity duration-700 ${isCenter ? 'bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100' : 'bg-black/50 opacity-100'}`}></div>
                  
                  {/* Yellow Hover Overlay */}
                  <div className={`absolute inset-0 rounded-[2rem] bg-[#D4AF37]/20 backdrop-blur-[2px] transition-all duration-500 opacity-0 ${isCenter ? 'group-hover:opacity-100' : ''}`}></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end pointer-events-none">
                    <h3 className={`font-display font-bold text-white transition-all duration-700 leading-tight ${isCenter ? 'text-2xl sm:text-3xl mb-2 sm:mb-3' : 'text-lg sm:text-2xl mb-0'}`}>
                      {service.name}
                    </h3>
                    
                    {/* Center only content */}
                    <div className={`overflow-hidden transition-all duration-700 ${isCenter ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="h-px w-full bg-white/30 mb-3 sm:mb-4"></div>
                      <p className="text-gray-300 text-xs sm:text-base line-clamp-3 mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      <div className="flex justify-end">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#F5C518] transition-colors shadow-lg pointer-events-auto">
                          <Icons.ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }} 
            className="absolute right-1 sm:-right-12 lg:-right-16 z-40 bg-[#1E1E1E]/80 sm:bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all border border-white/10 sm:border-none backdrop-blur-sm"
            aria-label="Siguiente servicio"
          >
            <Icons.ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
          {SERVICES_DATA.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${idx === activeIndex ? 'bg-[#F5C518] w-8' : 'bg-gray-500 hover:bg-gray-400 w-2.5'}`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}
