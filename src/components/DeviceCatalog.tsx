import React, { useState, useEffect } from 'react';
import { DEVICES_DATA } from '../data';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';

export default function DeviceCatalog() {
  const [activeDeviceId, setActiveDeviceId] = useState(DEVICES_DATA[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // For the top carousel
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCarouselItems = windowWidth < 640 ? 3 : windowWidth < 1024 ? 4 : 5;

  const activeDevice = DEVICES_DATA.find(d => d.id === activeDeviceId) || DEVICES_DATA[0];

  const handleDeviceChange = (id: string) => {
    setActiveDeviceId(id);
    setActiveImageIndex(0);
  };

  const nextCarousel = () => {
    const currentIndex = DEVICES_DATA.findIndex(d => d.id === activeDeviceId);
    if (currentIndex < DEVICES_DATA.length - 1) {
      const nextDevice = DEVICES_DATA[currentIndex + 1];
      setActiveDeviceId(nextDevice.id);
      setActiveImageIndex(0);
      
      if (currentIndex + 1 >= carouselStartIndex + visibleCarouselItems) {
        setCarouselStartIndex(prev => prev + 1);
      }
    }
  };

  const prevCarousel = () => {
    const currentIndex = DEVICES_DATA.findIndex(d => d.id === activeDeviceId);
    if (currentIndex > 0) {
      const prevDevice = DEVICES_DATA[currentIndex - 1];
      setActiveDeviceId(prevDevice.id);
      setActiveImageIndex(0);

      if (currentIndex - 1 < carouselStartIndex) {
        setCarouselStartIndex(prev => prev - 1);
      }
    }
  };

  return (
    <section id="tecnologia" className="py-16 sm:py-24 bg-[#313131] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F5F5] tracking-wide mb-4">
            Nuestro equipo
          </h2>
        </div>

        {/* Top Carousel Navigation */}
        <div className="relative mb-20 sm:mb-28 flex flex-col items-center">
          <div className="w-full bg-[#1e1e1e] rounded-[3rem] sm:rounded-[4rem] py-4 sm:py-6 flex items-center justify-center shadow-2xl h-36 sm:h-44 relative z-10">
            <button 
              onClick={prevCarousel}
              className="absolute left-3 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 bg-[#8c8c8c] hover:bg-[#a0a0a0] rounded-full flex items-center justify-center text-[#1e1e1e] transition-colors disabled:opacity-30 z-20 cursor-pointer"
              disabled={DEVICES_DATA.findIndex(d => d.id === activeDeviceId) === 0}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={3} />
            </button>

            <div className="flex items-center justify-around gap-2 sm:gap-4 h-full w-full max-w-[80%]">
              {DEVICES_DATA.slice(carouselStartIndex, carouselStartIndex + visibleCarouselItems).map((dev) => {
                const isActive = activeDeviceId === dev.id;
                
                return (
                  <div 
                    key={dev.id}
                    className="relative flex flex-col items-center justify-center cursor-pointer w-16 sm:w-24 md:w-32 flex-shrink-0"
                    onClick={() => handleDeviceChange(dev.id)}
                  >
                    {/* Active highlight background */}
                    {isActive && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] sm:w-[110px] md:w-[130px] h-[160px] sm:h-[190px] md:h-[230px] bg-gradient-to-b from-[#d8a32a] to-[#b37f17] rounded-[2rem] sm:rounded-[2.5rem] z-0 shadow-lg flex flex-col justify-end items-center pb-0">
                         <div className="absolute -bottom-4 sm:-bottom-5 w-8 h-8 sm:w-10 sm:h-10 bg-[#8c8c8c] rounded-full flex items-center justify-center shadow-md">
                           <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-[#1e1e1e]" strokeWidth={3} />
                         </div>
                      </div>
                    )}
                    
                    {/* Device Image */}
                    <div className={`relative z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-90 hover:opacity-100 scale-100'}`}>
                      {dev.image ? (
                        <img 
                          src={dev.image} 
                          alt={dev.name} 
                          className="w-full h-full object-contain drop-shadow-md transition-all"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-transparent flex items-center justify-center">
                          <span className="text-[10px] text-gray-500">No Img</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={nextCarousel}
              className="absolute right-3 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-[#8c8c8c] hover:bg-[#a0a0a0] rounded-full flex items-center justify-center text-[#1e1e1e] transition-colors disabled:opacity-30 z-20 cursor-pointer"
              disabled={DEVICES_DATA.findIndex(d => d.id === activeDeviceId) === DEVICES_DATA.length - 1}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Bottom Details Panel */}
        <div className="bg-[#1e1e1e] border border-[#D4AF37]/30 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch md:min-h-[450px]">
            
            {/* Left Column: Vertical Thumbnails */}
            <div className="md:col-span-3 flex flex-row md:flex-col gap-3 sm:gap-4 justify-center items-center bg-[#2a2a2a] p-3 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] order-2 md:order-1">
              {activeDevice.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-transparent flex items-center justify-center overflow-hidden transition-all duration-300 ${
                    activeImageIndex === idx ? 'border-2 border-white/20 shadow-md scale-105' : 'opacity-80 hover:opacity-100 border-2 border-transparent'
                  }`}
                >
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={`${activeDevice.name} thumbnail ${idx}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[10px] text-white/60">No Img</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Center Column: Large Main Image */}
            <div className="md:col-span-5 bg-transparent rounded-[1.5rem] sm:rounded-[3rem] flex items-center justify-center p-6 sm:p-8 relative overflow-hidden h-[250px] sm:h-[300px] md:h-auto order-1 md:order-2">
              {activeDevice.thumbnails[activeImageIndex] ? (
                <img
                  key={`${activeDeviceId}-${activeImageIndex}`}
                  src={activeDevice.thumbnails[activeImageIndex]}
                  alt={activeDevice.name}
                  className="max-w-full max-h-full object-contain rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 hover:scale-105 drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="text-white/60">No Image Preview</div>
              )}
            </div>

            {/* Right Column: Specs & Details */}
            <div className="md:col-span-4 bg-[#2a2a2a] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 flex flex-col justify-center order-3 pb-16 sm:pb-8">
              <h3 className="text-lg sm:text-2xl font-display font-semibold text-white mb-4 sm:mb-6 leading-tight text-center md:text-left">
                {activeDevice.name}
              </h3>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-8">
                {activeDevice.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col text-xs sm:text-sm">
                    <span className="text-white font-medium">{spec.label}</span>
                    <span className="text-gray-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 bg-[#2a2a2a] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 z-10">
            {activeDevice.thumbnails.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === activeImageIndex ? 'w-3 sm:w-4 bg-[#F5C518]' : 'w-1.5 sm:w-2 bg-gray-500'}`}
              />
            ))}
          </div>

          {/* Right Action Button */}
          <button className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-[#F5C518] hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer z-10">
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
          </button>
        </div>

      </div>
    </section>
  );
}
