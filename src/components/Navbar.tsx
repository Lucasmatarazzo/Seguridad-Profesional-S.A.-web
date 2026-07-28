import React, { useState, useEffect, useRef } from 'react';
import SpsaLogo from './SpsaLogo';
import SocialLinks from './SocialLinks';
import { Phone, MessageSquare, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'service-detail' | 'blog-detail', id?: string) => void;
  currentView: 'home' | 'service-detail' | 'blog-detail';
}

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [isMobilePhoneDropdownOpen, setIsMobilePhoneDropdownOpen] = useState(false);
  const [isMobileContactExpanded, setIsMobileContactExpanded] = useState(false);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);
  const mobilePhoneDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false);
      }
      if (mobilePhoneDropdownRef.current && !mobilePhoneDropdownRef.current.contains(event.target as Node)) {
        setIsMobilePhoneDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentView === 'home') {
        const sections = ['home', 'servicios', 'tecnologia', 'nosotros', 'contacto'];
        let current = 'home';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 300 && rect.bottom >= 300) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      // Give React time to render home view before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const getLinkClasses = (section: string) => {
    return activeSection === section
      ? "text-[#F5C518] border-b-2 border-[#F5C518] pb-1 font-medium text-sm transition-colors cursor-pointer"
      : "text-[#F5F5F5] hover:text-[#D4AF37] border-b-2 border-transparent pb-1 font-medium text-sm transition-colors cursor-pointer";
  };

  return (
    <>
      <nav
        id="spsa-navbar"
        className={`fixed top-2 lg:top-4 left-1/2 -translate-x-1/2 w-[95%] lg:max-w-7xl z-50 transition-all duration-300 rounded-2xl lg:rounded-full border ${
          isScrolled
            ? 'bg-[#1a1a1a]/95 py-3 lg:py-2 px-4 sm:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-[#D4AF37]/30 backdrop-blur-xl'
            : 'bg-[#1a1a1a]/90 lg:bg-[#1a1a1a]/60 py-4 lg:py-3 px-4 sm:px-6 border-white/10 backdrop-blur-md shadow-2xl'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer py-1"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <SpsaLogo className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-wider text-[#F5F5F5] text-xs sm:text-sm md:text-base leading-tight">
                SEGURIDAD
              </span>
              <span className="font-sans font-medium text-[#F5C518] text-[8px] sm:text-[10px] md:text-xs tracking-widest leading-none">
                PROFESIONAL S.A.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={getLinkClasses('home')}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className={getLinkClasses('servicios')}
            >
              Servicios
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className={getLinkClasses('nosotros')}
            >
              Nosotros
            </button>
            <button
              onClick={() => handleNavClick('tecnologia')}
              className={getLinkClasses('tecnologia')}
            >
              Tecnología
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className={getLinkClasses('contacto')}
            >
              Contacto
            </button>
          </div>

          {/* Contact & Call Actions & Socials */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-5 border-l border-white/10 pl-4 lg:pl-5">
            <div className="relative" ref={phoneDropdownRef}>
              <button
                onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                className="flex items-center gap-2 text-sm text-[#F5F5F5] hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#F5C518]" />
                <span className="font-semibold">+54 9 11 6168-3962</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isPhoneDropdownOpen && (
                <div className="absolute top-full mt-4 right-0 w-56 bg-[#1E1E1E] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                  <div className="p-3 border-b border-white/5">
                    <span className="block text-[10px] font-sans text-[#D4AF37] mb-1">CASA CENTRAL / CABA</span>
                    <a href="tel:+5491161683962" className="block text-white font-semibold hover:text-[#D4AF37] transition-colors">
                      +54 9 11 6168-3962
                    </a>
                  </div>
                  <div className="p-3">
                    <span className="block text-[10px] font-sans text-[#D4AF37] mb-1">SUCURSAL CÓRDOBA</span>
                    <a href="tel:351280016" className="block text-white font-semibold hover:text-[#D4AF37] transition-colors">
                      351 280016
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border-l border-white/10 pl-3">
              <SocialLinks variant="compact" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3 relative z-[60]">
            {/* Quick Phone for Mobile */}
            <div className="relative" ref={mobilePhoneDropdownRef}>
              <button
                onClick={() => setIsMobilePhoneDropdownOpen(!isMobilePhoneDropdownOpen)}
                className="p-2 text-[#D4AF37] bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Phone className="h-5 w-5" />
              </button>
              
              {isMobilePhoneDropdownOpen && (
                <div className="absolute top-full mt-4 right-0 w-48 bg-[#1E1E1E] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                  <div className="p-3 border-b border-white/5">
                    <span className="block text-[10px] font-sans text-[#D4AF37] mb-1">CABA</span>
                    <a href="tel:+5491161683962" className="block text-white text-sm font-semibold hover:text-[#D4AF37] transition-colors">
                      +54 9 11 6168-3962
                    </a>
                  </div>
                  <div className="p-3">
                    <span className="block text-[10px] font-sans text-[#D4AF37] mb-1">CÓRDOBA</span>
                    <a href="tel:351280016" className="block text-white text-sm font-semibold hover:text-[#D4AF37] transition-colors">
                      351 280016
                    </a>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white/10 rounded-lg text-white hover:text-[#D4AF37] hover:bg-white/20 transition-all focus:outline-none cursor-pointer flex items-center justify-center"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1E1E1E]/95 backdrop-blur-lg flex flex-col justify-center transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col items-center space-y-6 text-xl">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-white hover:text-[#D4AF37] font-sans font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className="text-white hover:text-[#D4AF37] font-sans font-medium"
          >
            Servicios
          </button>
          <button
            onClick={() => handleNavClick('nosotros')}
            className="text-white hover:text-[#D4AF37] font-sans font-medium"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleNavClick('tecnologia')}
            className="text-white hover:text-[#D4AF37] font-sans font-medium"
          >
            Tecnología
          </button>
          <div className="flex flex-col items-center w-full px-12 mt-2">
            <button
              onClick={() => setIsMobileContactExpanded(!isMobileContactExpanded)}
              className="w-full flex items-center justify-center gap-2 text-[#D4AF37] hover:text-[#1E1E1E] bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] font-sans font-medium px-6 py-3 rounded-xl transition-all"
            >
              Contacto
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileContactExpanded ? 'rotate-180' : ''}`} />
            </button>

            {isMobileContactExpanded && (
              <div className="flex flex-col items-center space-y-5 mt-6 animate-fade-in w-full">
                <a
                  href="tel:+5491161683962"
                  className="flex flex-col items-center space-y-1 text-[#F5F5F5] hover:text-[#D4AF37] w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[10px] font-sans tracking-widest text-[#D4AF37]">CASA CENTRAL / CABA</span>
                  <span className="font-semibold text-xl">+54 9 11 6168-3962</span>
                </a>
                
                <div className="w-12 h-px bg-white/10"></div>
                
                <a
                  href="tel:351280016"
                  className="flex flex-col items-center space-y-1 text-[#F5F5F5] hover:text-[#D4AF37] w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[10px] font-sans tracking-widest text-[#D4AF37]">SUCURSAL CÓRDOBA</span>
                  <span className="font-semibold text-xl">351 280016</span>
                </a>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 mt-2">
            <SocialLinks showLabels />
          </div>

        </div>
      </div>
    </>
  );
}
