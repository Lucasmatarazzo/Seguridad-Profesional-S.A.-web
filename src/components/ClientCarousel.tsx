import React from 'react';
import { CLIENTS_DATA } from '../data';

export default function ClientCarousel() {
  // Duplicate list to achieve seamless loop animation
  const duplicatedClients = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section className="py-16 bg-[#1E1E1E]/60 border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 text-center">
        <span className="text-[#D4AF37] text-xs font-sans font-bold tracking-widest uppercase mb-1 block">
          TRAYECTORIA Y RESPALDO
        </span>
        <h4 className="text-white font-display font-bold text-lg sm:text-xl tracking-tight">
          Confían en nosotros
        </h4>
      </div>

      {/* Sliding Marquee Container */}
      <div className="relative flex items-center w-full select-none overflow-hidden">
        {/* Moving track */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16">
          {duplicatedClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="inline-flex items-center justify-center min-w-[200px] sm:min-w-[280px] h-36 sm:h-48 px-4 group transition-all duration-300 cursor-pointer"
            >
              {client.imageUrl ? (
                <>
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="client-logo max-w-full max-h-[100px] sm:max-h-[130px] object-contain"
                  onError={(e) => {
                    // Hide the broken image and show the text fallback
                    e.currentTarget.style.display = 'none';
                    const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                    if (sibling) {
                      sibling.style.display = 'block';
                    }
                  }}
                />
                  <span className="hidden font-display font-bold text-gray-500 text-xs sm:text-sm tracking-wider uppercase transition-all duration-300">
                    {client.name}
                  </span>
                </>
              ) : (
                <span className="font-display font-bold text-gray-500 text-xs sm:text-sm tracking-wider uppercase group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(245,197,24,0.8)]">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
