import React from 'react';
import SpsaLogo from './SpsaLogo';
import SocialLinks from './SocialLinks';
import { LEGAL_INFO } from '../data';
import { Shield, MapPin, Phone, Mail, Clock, ShieldCheck, HeartPulse, Award } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigate: (view: 'home' | 'service-detail' | 'blog-detail', id?: string) => void;
}

export default function Footer({ onScrollToSection, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#1E1E1E] text-gray-400 border-t border-[#D4AF37]/20 pt-20 pb-10 relative overflow-hidden">
      {/* Background Wing Overlay */}
      <div className="absolute right-0 bottom-0 w-80 h-80 opacity-5 pointer-events-none select-none">
        <SpsaLogo className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: SPSA Corporate Header (Lg: col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <SpsaLogo className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-white text-base">
                  SEGURIDAD
                </span>
                <span className="font-display font-medium text-[#D4AF37] text-xs tracking-widest leading-none">
                  PROFESIONAL S.A.
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              "Seguridad nuestro trabajo, profesional la forma de hacerlo". Soluciones integrales en custodia de mercadería, alarmas monitoreadas y seguridad física.
            </p>

            <div className="space-y-3 font-sans text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-[#F5C518]" />
                <span>Av. Avellaneda 5000/16, San Fernando, Bs. As.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-[#F5C518]" />
                <span>+54 9 11 6168-3962</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-[#F5C518]" />
                <span>ventas@spsa.com.ar</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5">
              <SocialLinks showLabels />
            </div>
          </div>

          {/* Column 2: Legal Registrations (Lg: col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest border-b border-white/5 pb-3">
              Habilitaciones y Marco Legal
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
              <div className="bg-[#313131]/30 rounded-xl p-3 border border-white/5 space-y-1">
                <span className="text-[#F5C518] font-bold block uppercase tracking-wider text-[9px]">Provincia Bs. As.</span>
                <span className="text-gray-300">OPGSP Inscripción N° {LEGAL_INFO.opgsp}</span>
              </div>

              <div className="bg-[#313131]/30 rounded-xl p-3 border border-white/5 space-y-1">
                <span className="text-[#F5C518] font-bold block uppercase tracking-wider text-[9px]">Ciudad de Buenos Aires</span>
                <span className="text-gray-300">DGSPR Habilitación: {LEGAL_INFO.dgspr.split(' ')[0]}</span>
              </div>

              <div className="bg-[#313131]/30 rounded-xl p-3 border border-white/5 space-y-1">
                <span className="text-[#F5C518] font-bold block uppercase tracking-wider text-[9px]">Prefectura Naval Argentina</span>
                <span className="text-gray-300">{LEGAL_INFO.prefectura}</span>
              </div>

              <div className="bg-[#313131]/30 rounded-xl p-3 border border-white/5 space-y-1">
                <span className="text-[#F5C518] font-bold block uppercase tracking-wider text-[9px]">A.N.M.A.C.</span>
                <span className="text-gray-300">Usuario Colectivo {LEGAL_INFO.anmac.split(' ').slice(2).join(' ')}</span>
              </div>

              <div className="bg-[#313131]/30 rounded-xl p-3 border border-white/5 space-y-1 sm:col-span-2 flex items-center space-x-2 text-gray-300">
                <ShieldCheck className="h-4 w-4 text-[#F5C518]" />
                <span>Miembro CAESI - Socio N° A-5181</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links (Lg: col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest border-b border-white/5 pb-3">
              Navegación
            </h4>

            <div className="flex flex-col space-y-3 text-sm">
              <button
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Volver al Home
              </button>
              <button
                onClick={() => handleLinkClick('servicios')}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Nuestros Servicios
              </button>
              <button
                onClick={() => handleLinkClick('tecnologia')}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Catálogo de Tecnología
              </button>
              <button
                onClick={() => handleLinkClick('nosotros')}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => handleLinkClick('contacto')}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                Atención Comercial
              </button>
            </div>
          </div>
        </div>

        {/* Insurance Coverage banner bar */}
        <div className="bg-[#313131]/50 border border-white/5 rounded-2xl p-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-center md:text-left">
          {LEGAL_INFO.seguros.map((ins, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-3">
              <div className="p-2 bg-[#1E1E1E] rounded-lg text-[#F5C518]">
                {idx === 0 ? <HeartPulse className="h-4 w-4" /> : idx === 1 ? <Shield className="h-4 w-4" /> : <Award className="h-4 w-4" />}
              </div>
              <div>
                <span className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">{ins.label}</span>
                <span className="text-gray-300 font-medium">{ins.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright and CUIT references */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-gray-500 text-center gap-4">
          <div>
            Seguridad Profesional S.A. • CUIT: {LEGAL_INFO.cuit} • Ing. Brutos: {LEGAL_INFO.ingBrutos}
          </div>
          <div>
            © {currentYear} SPSA. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
