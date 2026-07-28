import React from 'react';

interface SpsaLogoProps {
  className?: string;
  light?: boolean;
}

export default function SpsaLogo({ className = "h-12 w-auto", light = false }: SpsaLogoProps) {
  return (
    <img
      src="/logo/logo.png"
      alt="SPSA Seguridad Profesional"
      className={`${className} object-contain`}
      id="spsa-brand-logo"
    />
  );
}

