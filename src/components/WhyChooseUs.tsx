import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, Users, CheckCircle, Clock } from 'lucide-react';

interface StatItemProps {
  label: string;
  subLabel: string;
  endValue: number;
  suffix?: string;
  icon: React.ReactNode;
}

function StatCounter({ label, subLabel, endValue, suffix = "", icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // 60 FPS approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, endValue]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center bg-[#1E1E1E]/60 border border-white/5 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-md group text-center"
    >
      <div className="p-4 bg-[#313131] rounded-full border border-white/5 group-hover:border-[#D4AF37]/20 transition-all mb-4 text-[#F5C518]">
        {icon}
      </div>
      <div className="font-display font-bold text-4xl sm:text-5xl text-[#F5F5F5] mb-2 font-mono">
        {count}
        <span className="text-[#F5C518]">{suffix}</span>
      </div>
      <div className="font-semibold text-white tracking-wider text-sm mb-1">
        {label}
      </div>
      <div className="text-gray-400 text-xs">
        {subLabel}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-24 bg-[#1E1E1E]/40 relative border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            ¿Por qué elegirnos?
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Servicio de seguridad sólido, confiable y adaptado a cada necesidad. Nuestro equipo está conformado por profesionales altamente capacitados, supervisión constante y sistemas de control que garantizan eficiencia, prevención y respuesta inmediata las 24 horas.
          </p>
        </div>

        {/* Dynamic Count-up Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <StatCounter
            icon={<Clock className="h-6 w-6" />}
            label="Monitoreo 24/7/365"
            subLabel="Control de alarmas y cámaras activo"
            endValue={24}
            suffix="/7"
          />
          <StatCounter
            icon={<Users className="h-6 w-6" />}
            label="Personal Habilitado"
            subLabel="Capacitaciones continuas en servicio"
            endValue={100}
            suffix="%"
          />
          <StatCounter
            icon={<ShieldCheck className="h-6 w-6" />}
            label="Operativos Exitosos"
            subLabel="Auditorías y reportes digitales diarios"
            endValue={99}
            suffix="%"
          />
        </div>

        {/* SPSA Premium 30+ Years Experience Highlight Bar */}
        <div className="w-full bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#D4AF37] p-[1px] rounded-2xl shadow-xl shadow-[#D4AF37]/5">
          <div className="bg-[#1E1E1E] rounded-[15px] px-8 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-[#1E1E1E] font-display font-black text-2xl px-5 py-2.5 rounded-xl flex items-center justify-center shadow-lg">
                30+ AÑOS
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-lg sm:text-xl tracking-tight mb-1">
                  De Experiencia en Seguridad Integral
                </h4>
                <p className="text-gray-400 text-sm">
                  Fundada en 1998, manteniendo ininterrumpidamente altos estándares de calidad.
                </p>
              </div>
            </div>
            <div className="text-[#F5C518] font-display font-medium tracking-widest text-xs uppercase border border-[#D4AF37]/30 px-5 py-2.5 rounded-full bg-[#1E1E1E]">
              Comprometidos con tu seguridad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
