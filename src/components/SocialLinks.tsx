import React from 'react';

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/seguridadprofesionalsa/',
  facebook: 'https://web.facebook.com/seguridadprofesionalsa/?locale=es_LA&_rdc=1&_rdr#',
  linkedin: 'https://ar.linkedin.com/company/seguridad-profesional-s-a-'
};

interface SocialLinksProps {
  variant?: 'footer' | 'navbar' | 'contact' | 'compact';
  showLabels?: boolean;
}

export default function SocialLinks({ variant = 'footer', showLabels = false }: SocialLinksProps) {
  const socialList = [
    {
      name: 'Instagram',
      url: SOCIAL_URLS.instagram,
      icon: InstagramIcon,
      hoverBorder: 'hover:border-[#E1306C]',
      hoverText: 'hover:text-[#E1306C]',
      hoverBg: 'hover:bg-[#E1306C]/10',
    },
    {
      name: 'Facebook',
      url: SOCIAL_URLS.facebook,
      icon: FacebookIcon,
      hoverBorder: 'hover:border-[#1877F2]',
      hoverText: 'hover:text-[#1877F2]',
      hoverBg: 'hover:bg-[#1877F2]/10',
    },
    {
      name: 'LinkedIn',
      url: SOCIAL_URLS.linkedin,
      icon: LinkedinIcon,
      hoverBorder: 'hover:border-[#0A66C2]',
      hoverText: 'hover:text-[#0A66C2]',
      hoverBg: 'hover:bg-[#0A66C2]/10',
    },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        {socialList.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`SPSA en ${item.name}`}
              className="w-8 h-8 rounded-lg bg-[#313131]/80 border border-white/10 hover:border-[#F5C518] flex items-center justify-center text-gray-300 hover:text-[#F5C518] hover:scale-110 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="space-y-3">
        <span className="text-xs font-sans font-bold text-[#F5C518] uppercase tracking-wider block">
          Nuestras Redes Oficiales
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {socialList.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 bg-[#1A1A1A] border border-white/10 ${item.hoverBorder} ${item.hoverBg} px-4 py-3 rounded-xl text-gray-300 ${item.hoverText} transition-all duration-300 group shadow-md`}
              >
                <div className="p-2 bg-[#313131] rounded-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-[#F5C518] group-hover:text-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-sans font-bold text-white group-hover:text-current">{item.name}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-gray-300">Seguinos</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-3">
      {showLabels && (
        <span className="text-xs font-sans font-bold text-[#F5C518] uppercase tracking-widest block">
          Redes Sociales
        </span>
      )}
      <div className="flex items-center space-x-3">
        {socialList.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Seguridad Profesional S.A. en ${item.name}`}
              className="w-10 h-10 rounded-xl bg-[#313131] border border-white/10 hover:border-[#F5C518] flex items-center justify-center text-gray-300 hover:text-[#F5C518] hover:bg-[#1E1E1E] hover:scale-110 transition-all duration-300 shadow-lg group"
              title={`SPSA en ${item.name}`}
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
