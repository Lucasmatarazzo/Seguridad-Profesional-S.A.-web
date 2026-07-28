import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

export default function CareersBanner() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    puesto: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !file) {
      setError('Por favor completá los campos obligatorios y adjuntá tu CV.');
      setIsSubmitted(false);
      return;
    }
    
    // Simulate submission
    setError('');
    setIsSubmitted(true);
    setFormData({ nombre: '', email: '', puesto: '' });
    setFile(null);
  };

  return (
    <section className="py-16 bg-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                Oportunidades Laborales
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-wide leading-tight">
              Sumate a nuestro equipo
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Buscamos profesionales comprometidos con la excelencia. Si querés formar parte de una empresa líder en seguridad integral, dejanos tu CV.
            </p>
            
            <div className="pt-4 border-t border-white/10 max-w-md">
              <p className="text-xs text-gray-500 font-sans tracking-wide">
                O envianos tu currículum directamente a:
              </p>
              <a href="mailto:rrhh@spsa.com.ar" className="text-[#D4AF37] hover:text-[#F5C518] text-lg font-medium tracking-wide mt-2 inline-block transition-colors">
                rrhh@spsa.com.ar
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#121212] border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {isSubmitted && (
                <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 p-4 rounded-xl flex items-start space-x-3 text-sm animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">¡CV Recibido!</span>
                    Gracias por postularte. Si tu perfil se ajusta a nuestras búsquedas, nos contactaremos con vos.
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-rose-950/40 border border-rose-500/30 text-rose-200 p-4 rounded-xl flex items-start space-x-3 text-sm animate-fade-in">
                  <AlertTriangle className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Nombre Completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Ej. María López"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Ej. maria@correo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Puesto de interés</label>
                <select
                  name="puesto"
                  value={formData.puesto}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                >
                  <option value="">Seleccioná un área</option>
                  <option value="vigilancia">Vigilador / Seguridad Física</option>
                  <option value="tecnico">Técnico Instalador</option>
                  <option value="monitoreo">Operador de Monitoreo</option>
                  <option value="administrativo">Administración y Ventas</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Adjuntá tu CV (PDF, DOC) *</label>
                <label className="relative flex flex-col items-center justify-center w-full h-32 bg-[#1e1e1e] border-2 border-dashed border-white/10 hover:border-[#D4AF37]/50 rounded-xl cursor-pointer transition-colors group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-8 h-8 text-gray-500 mb-3 group-hover:text-[#D4AF37] transition-colors" />
                    <p className="mb-2 text-xs sm:text-sm text-gray-400">
                      <span className="font-semibold text-[#D4AF37]">Hacé click para subir</span> o arrastrá y soltá
                    </p>
                    <p className="text-[10px] text-gray-500 truncate max-w-[250px]">
                      {file ? file.name : "Tamaño máximo: 5MB"}
                    </p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#121212] font-bold tracking-wider text-xs sm:text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <span>Enviar Postulación</span>
                <Send className="h-4 w-4" />
              </button>

            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
