import React, { useState, useEffect } from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailPageProps {
  slug: string;
  onBack: (slug?: string) => void;
  onNavigate?: (view: 'home' | 'service-detail' | 'blog-detail', id?: string) => void;
}

export default function ServiceDetailPage({ slug, onBack, onNavigate }: ServiceDetailPageProps) {
  const currentIndex = SERVICES_DATA.findIndex(s => s.slug === slug);
  const service = SERVICES_DATA[currentIndex];
  
  const prevService = currentIndex > 0 ? SERVICES_DATA[currentIndex - 1] : null;
  const nextService = currentIndex >= 0 && currentIndex < SERVICES_DATA.length - 1 ? SERVICES_DATA[currentIndex + 1] : null;

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  // Form states for quick estimate request
  const [quoteForm, setQuoteForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  useEffect(() => {
    // Force window scroll back to top upon mounting
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  useEffect(() => {
    if (!service?.gallery || service.gallery.length === 0) return;
    const interval = setInterval(() => {
      setActiveGalleryIdx((prev) => (prev + 1) % service.gallery!.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#313131] pt-24 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Servicio no encontrado</h2>
        <button onClick={onBack} className="text-[#F5C518] hover:underline font-mono">Volver al Home</button>
      </div>
    );
  }

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-[#F5C518]" />;
    }
    return <Icons.Shield className="h-6 w-6 text-[#F5C518]" />;
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.nombre.trim() || !quoteForm.email.trim() || !quoteForm.telefono.trim()) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    setQuoteSuccess(true);
    setQuoteForm({ nombre: '', email: '', telefono: '', mensaje: '' });
    setTimeout(() => setQuoteSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#313131] pb-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hero Header */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden flex flex-col justify-center border-b border-white/5">
        {(service.heroImage || service.image) && (
          <>
            <img
              src={service.heroImage || service.image}
              alt={`${service.name} background`}
              className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 sm:hidden scale-110"
              referrerPolicy="no-referrer"
            />
            <img
              src={service.heroImage || service.image}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-contain sm:object-cover sm:object-center"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </>
        )}
        {/* Mask overlay for text readability and blending with background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/20 sm:to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => onBack(service.slug)}
              className="inline-flex items-center space-x-2 text-[#F5C518] hover:text-[#D4AF37] text-xs sm:text-sm font-display font-medium bg-transparent border border-[#F5C518]/50 px-5 py-2 rounded-full cursor-pointer hover:bg-[#F5C518]/10 transition-all"
            >
              <Icons.ChevronLeft className="h-4 w-4" />
              <span>Volver a servicios</span>
            </button>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter mb-4 sm:mb-6 uppercase drop-shadow-lg">
              {service.name}
            </h1>
            <div className="h-1.5 sm:h-2 w-20 sm:w-28 bg-[#D4AF37]"></div>
          </div>
        </div>

        {onNavigate && (
          <div className="absolute bottom-6 right-4 sm:bottom-12 sm:right-8 lg:right-12 z-30 flex items-center gap-2">
            {prevService && (
              <button
                onClick={() => onNavigate('service-detail', prevService.slug)}
                className="inline-flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:space-x-2 text-[#F5F5F5] hover:text-[#F5C518] text-xs sm:text-sm font-display font-medium bg-[#1E1E1E]/80 border border-white/10 hover:border-[#D4AF37]/50 sm:px-5 sm:py-2.5 rounded-full cursor-pointer backdrop-blur-md transition-all shadow-xl"
                title={prevService.name}
              >
                <Icons.ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Servicio Anterior</span>
              </button>
            )}
            {nextService && (
              <button
                onClick={() => onNavigate('service-detail', nextService.slug)}
                className="inline-flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:space-x-2 text-[#1E1E1E] hover:text-black text-xs sm:text-sm font-display font-medium bg-gradient-to-r from-[#D4AF37] to-[#F5C518] border border-[#F5C518]/50 hover:border-[#F5C518] sm:px-5 sm:py-2.5 rounded-full cursor-pointer backdrop-blur-md transition-all shadow-[0_0_15px_rgba(245,197,24,0.3)] hover:scale-105"
                title={nextService.name}
              >
                <span className="hidden sm:inline">Siguiente Servicio</span>
                <Icons.ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Grid content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column (Lg: col-span-8) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Description card */}
            <div className="bg-[#1E1E1E]/80 border border-white/5 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <Icons.Info className="h-6 w-6 text-[#F5C518]" /> Descripción de la Prestación
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Gallery Carousel */}
            {service.gallery && service.gallery.length > 0 && (
              <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-2xl border border-white/5 mb-12">
                {service.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === activeGalleryIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                      {img.url && (
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 translate-y-0">
                        <p className="text-white font-display font-bold text-lg sm:text-xl drop-shadow-lg">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Controls */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveGalleryIdx((prev) => (prev - 1 + service.gallery!.length) % service.gallery!.length)}
                      className="bg-black/50 hover:bg-[#D4AF37] text-white p-2 rounded-full backdrop-blur-sm transition-all"
                    >
                      <Icons.ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => setActiveGalleryIdx((prev) => (prev + 1) % service.gallery!.length)}
                      className="bg-black/50 hover:bg-[#D4AF37] text-white p-2 rounded-full backdrop-blur-sm transition-all"
                    >
                      <Icons.ChevronRight className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 right-6 z-30 flex space-x-2">
                    {service.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIdx(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === activeGalleryIdx ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
            )}

            {/* Benefits list */}
            <div className="bg-[#1E1E1E]/80 border border-white/5 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Icons.Award className="h-6 w-6 text-[#F5C518]" /> Beneficios Clave del Servicio
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Icons.CheckCircle2 className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Working process timeline layout */}
            <div className="bg-[#1E1E1E]/80 border border-white/5 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <Icons.Activity className="h-6 w-6 text-[#F5C518]" /> Proceso de Trabajo y Puesta en Marcha
              </h2>
              <div className="relative border-l border-white/15 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle timeline pin */}
                    <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-5 h-5 rounded-full bg-[#1E1E1E] border-2 border-[#D4AF37] flex items-center justify-center text-[10px] font-mono text-[#F5C518] font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-white font-display font-bold text-base mb-1">{step.split(' - ')[0]}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Disclosure Accordions */}
            <div className="bg-[#1E1E1E]/80 border border-white/5 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Icons.HelpCircle className="h-6 w-6 text-[#F5C518]" /> Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border-b border-white/5 last:border-0 pb-4 last:pb-0"
                    >
                      <button
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left font-display font-bold text-[#F5F5F5] hover:text-[#F5C518] text-sm sm:text-base py-3 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <Icons.ChevronUp className="h-4 w-4 text-[#F5C518]" /> : <Icons.ChevronDown className="h-4 w-4 text-[#D4AF37]" />}
                      </button>

                      {/* Sliding dynamic height container */}
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line pl-1 pb-2">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (Lg: col-span-4) - Fast Budget Request form */}
          <div className="lg:col-span-4">
            <div className="bg-[#1E1E1E]/80 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl sticky top-28 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="p-3 bg-[#313131] rounded-xl border border-white/5 text-[#F5C518] mb-5 inline-block">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1 uppercase">Solicitar Presupuesto</h3>
              <p className="text-[#F5C518] font-mono text-[10px] tracking-widest uppercase mb-6">Asesoramiento gratuito e inmediato</p>

              {quoteSuccess && (
                <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 p-4 rounded-xl text-xs mb-6 animate-fade-in">
                  ¡Tu solicitud se envió con éxito! Un analista comercial te contactará a la brevedad.
                </div>
              )}

              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.nombre}
                    onChange={e => setQuoteForm({...quoteForm, nombre: e.target.value})}
                    className="w-full bg-[#313131] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={e => setQuoteForm({...quoteForm, email: e.target.value})}
                    className="w-full bg-[#313131] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Ej. juan@correo.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-1">Teléfono *</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.telefono}
                    onChange={e => setQuoteForm({...quoteForm, telefono: e.target.value})}
                    className="w-full bg-[#313131] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Ej. +54 9 11..."
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-1">Notas Adicionales</label>
                  <textarea
                    rows={3}
                    value={quoteForm.mensaje}
                    onChange={e => setQuoteForm({...quoteForm, mensaje: e.target.value})}
                    className="w-full bg-[#313131] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    placeholder="Contanos brevemente qué requerís..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-[#1E1E1E] font-bold tracking-wider text-xs py-3 rounded-xl shadow-md hover:scale-102 transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Icons.Send className="h-3.5 w-3.5" />
                  <span>Enviar Presupuesto</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      </AnimatePresence>
    </main>
  );
}
