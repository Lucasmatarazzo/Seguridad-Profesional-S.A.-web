import React, { useState } from 'react';
import { BRANCHES_DATA } from '../data';
import SocialLinks from './SocialLinks';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertTriangle, ExternalLink, Globe } from 'lucide-react';

interface Province {
  id: string;
  name: string;
  path: string;
  hasBranch: boolean;
  branchIndices?: number[];
}

const ARGENTINA_PROVINCES: Province[] = [
  {
    id: 'jujuy',
    name: 'Jujuy',
    path: 'M 95 35 L 115 35 L 115 50 L 105 55 L 90 55 L 85 45 Z',
    hasBranch: false
  },
  {
    id: 'salta',
    name: 'Salta',
    path: 'M 85 45 L 90 55 L 105 55 L 115 50 L 115 35 L 130 35 L 135 60 L 145 60 L 145 80 L 115 80 L 115 90 L 100 90 L 100 75 L 80 75 L 75 60 Z',
    hasBranch: false
  },
  {
    id: 'tucuman',
    name: 'Tucumán',
    path: 'M 100 90 L 115 90 L 115 105 L 100 105 Z',
    hasBranch: false
  },
  {
    id: 'catamarca',
    name: 'Catamarca',
    path: 'M 80 75 L 100 75 L 100 90 L 100 105 L 115 105 L 115 120 L 105 135 L 80 135 L 70 105 Z',
    hasBranch: false
  },
  {
    id: 'la_rioja',
    name: 'La Rioja',
    path: 'M 80 135 L 105 135 L 115 120 L 115 145 L 105 170 L 75 170 L 65 150 Z',
    hasBranch: false
  },
  {
    id: 'sanjuan',
    name: 'San Juan',
    path: 'M 75 170 L 105 170 L 105 200 L 60 200 L 55 185 Z',
    hasBranch: false
  },
  {
    id: 'mendoza',
    name: 'Mendoza',
    path: 'M 60 200 L 105 200 L 105 260 L 85 280 L 50 260 Z',
    hasBranch: false
  },
  {
    id: 'san_luis',
    name: 'San Luis',
    path: 'M 105 200 L 125 200 L 125 260 L 105 260 Z',
    hasBranch: false
  },
  {
    id: 'santiago',
    name: 'Santiago del Estero',
    path: 'M 115 80 L 140 80 L 145 140 L 115 140 L 115 105 L 115 90 Z',
    hasBranch: false
  },
  {
    id: 'formosa',
    name: 'Formosa',
    path: 'M 140 60 L 205 60 L 200 85 L 140 85 Z',
    hasBranch: false
  },
  {
    id: 'chaco',
    name: 'Chaco',
    path: 'M 140 85 L 200 85 L 190 125 L 145 125 Z',
    hasBranch: false
  },
  {
    id: 'misiones',
    name: 'Misiones',
    path: 'M 225 85 L 245 85 L 255 110 L 235 120 Z',
    hasBranch: false
  },
  {
    id: 'corrientes',
    name: 'Corrientes',
    path: 'M 190 125 L 225 105 L 235 120 L 225 160 L 185 150 Z',
    hasBranch: false
  },
  {
    id: 'entre_rios',
    name: 'Entre Ríos',
    path: 'M 185 150 L 225 160 L 210 210 L 180 200 Z',
    hasBranch: false
  },
  {
    id: 'santa_fe',
    name: 'Santa Fe',
    path: 'M 145 125 L 190 125 L 185 150 L 180 200 L 170 220 L 145 205 L 145 140 Z',
    hasBranch: false
  },
  {
    id: 'cordoba',
    name: 'Córdoba',
    path: 'M 115 140 L 145 140 L 145 205 L 140 220 L 110 220 L 105 170 L 115 145 Z',
    hasBranch: true,
    branchIndices: [2]
  },
  {
    id: 'la_pampa',
    name: 'La Pampa',
    path: 'M 85 280 L 105 260 L 125 260 L 140 260 L 145 320 L 85 320 Z',
    hasBranch: false
  },
  {
    id: 'buenos_aires',
    name: 'Buenos Aires',
    path: 'M 140 220 L 170 220 L 180 200 L 210 200 L 225 260 L 195 320 L 145 320 L 140 260 Z',
    hasBranch: true,
    branchIndices: [0, 1]
  },
  {
    id: 'neuquen',
    name: 'Neuquén',
    path: 'M 50 260 L 85 280 L 85 320 L 85 360 L 45 360 L 50 315 Z',
    hasBranch: false
  },
  {
    id: 'rio_negro',
    name: 'Río Negro',
    path: 'M 85 320 L 145 320 L 155 360 L 135 400 L 80 400 L 85 360 Z',
    hasBranch: false
  },
  {
    id: 'chubut',
    name: 'Chubut',
    path: 'M 80 400 L 135 400 L 135 480 L 75 480 Z',
    hasBranch: false
  },
  {
    id: 'santa_cruz',
    name: 'Santa Cruz',
    path: 'M 75 480 L 135 480 L 125 570 L 60 570 Z',
    hasBranch: false
  },
  {
    id: 'tierra_del_fuego',
    name: 'Tierra del Fuego',
    path: 'M 90 600 L 115 600 L 115 620 L 85 620 Z',
    hasBranch: false
  }
];

export default function ContactFormMap() {
  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'seguridad-fisica',
    mensaje: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Map state
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>('buenos_aires');
  const [hoveredProvince, setHoveredProvince] = useState<Province | null>(null);

  const activeBranch = BRANCHES_DATA[activeBranchIdx];

  const handleProvinceClick = (prov: Province) => {
    setSelectedProvinceId(prov.id);
    if (prov.id === 'buenos_aires') {
      if (activeBranchIdx !== 0 && activeBranchIdx !== 1) {
        setActiveBranchIdx(0);
      }
    } else if (prov.id === 'cordoba') {
      setActiveBranchIdx(2);
    }
  };

  const handleBranchSelect = (idx: number) => {
    setActiveBranchIdx(idx);
    if (idx === 0 || idx === 1) {
      setSelectedProvinceId('buenos_aires');
    } else if (idx === 2) {
      setSelectedProvinceId('cordoba');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre completo es obligatorio.';
    }

    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El formato del correo es inválido.';
    }

    if (!formData.telefono.trim()) {
      errors.telefono = 'El teléfono es obligatorio.';
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitted(false);
      setSubmitError('Por favor corregí los campos indicados antes de enviar.');
      return;
    }

    // Success simulation
    setFormErrors({});
    setSubmitError('');
    setIsSubmitted(true);
    
    // Clear inputs
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: 'seguridad-fisica',
      mensaje: '',
      captcha: ''
    });

    // Reset success banner after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#1E1E1E]/40 border-t border-white/5 relative">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F5C518] text-xs font-sans font-bold tracking-widest uppercase mb-2 block">
            CONTACTO SPSA
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F5F5F5] tracking-tight mb-4">
            Solicitá tu Asesoramiento
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Comunicate hoy mismo con nuestro departamento de atención comercial. Un experto en seguridad analizará tu caso sin cargo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Form (Lg: col-span-7) */}
          <div className="lg:col-span-7 bg-[#1E1E1E]/80 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-sans font-bold text-white tracking-wide mb-2 flex items-center gap-2">
                <Send className="h-5 w-5 text-[#F5C518]" /> Envianos un Mensaje
              </h3>

              {/* Status Banners */}
              {isSubmitted && (
                <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 p-4 rounded-xl flex items-start space-x-3 text-sm animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">¡Mensaje enviado con éxito!</span>
                    Un asesor técnico de Seguridad Profesional S.A. se comunicará con vos en las próximas horas.
                  </div>
                </div>
              )}

              {submitError && (
                <div className="bg-rose-950/40 border border-rose-500/30 text-rose-200 p-4 rounded-xl flex items-start space-x-3 text-sm animate-fade-in">
                  <AlertTriangle className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Nombre Completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`w-full bg-[#313131] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all ${
                      formErrors.nombre ? 'border-rose-500/50' : 'border-white/5'
                    }`}
                    placeholder="Ej. Juan Pérez"
                  />
                  {formErrors.nombre && <p className="text-rose-400 text-[10px] font-sans mt-1">{formErrors.nombre}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Email de Contacto *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-[#313131] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all ${
                      formErrors.email ? 'border-rose-500/50' : 'border-white/5'
                    }`}
                    placeholder="Ej. juan@empresa.com"
                  />
                  {formErrors.email && <p className="text-rose-400 text-[10px] font-sans mt-1">{formErrors.email}</p>}
                </div>

                {/* Telefono */}
                <div>
                  <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Teléfono / Celular *</label>
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`w-full bg-[#313131] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all ${
                      formErrors.telefono ? 'border-rose-500/50' : 'border-white/5'
                    }`}
                    placeholder="Ej. +54 9 11 6168-3962"
                  />
                  {formErrors.telefono && <p className="text-rose-400 text-[10px] font-sans mt-1">{formErrors.telefono}</p>}
                </div>

                {/* Tipo de Servicio */}
                <div>
                  <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Servicio Requerido</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full bg-[#313131] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                  >
                    <option value="seguridad-fisica">Seguridad Física</option>
                    <option value="seguridad-electronica">Seguridad Electrónica</option>
                    <option value="custodia-ejecutiva">Custodia Ejecutiva</option>
                    <option value="monitoreo-activo">Monitoreo 24/7</option>
                    <option value="consultoria-seguridad">Consultoría de Seguridad</option>
                    <option value="custodia-de-mercaderia">Custodia de Mercadería</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-gray-400 text-xs font-sans uppercase tracking-wider mb-2 font-medium">Detalle de tu Consulta</label>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full bg-[#313131] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                  placeholder="Escribí aquí cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5C518] hover:from-[#F5C518] hover:to-[#D4AF37] text-[#1E1E1E] font-bold tracking-wider text-xs sm:text-sm py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Enviar Solicitud de Presupuesto</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Column: High-fidelity Vector map and branches (Lg: col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Interactive map visualization */}
            <div className="bg-[#121212]/80 border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col h-full justify-between gap-6">
              <div>
                <h3 className="text-lg font-sans font-bold text-white tracking-wide mb-1 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#F5C518]" /> Red de Sucursales
                </h3>
                <p className="text-gray-400 text-xs mb-4">
                  Seleccioná una provincia o pin para ver los datos de contacto y ubicación.
                </p>

                {/* Styled Interactive Map (Google Maps Embed) */}
                <div className="relative w-full h-[460px] bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-1">
                  
                  <iframe
                    title="SPSA Location Map"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(activeBranch.mapQuery)}&t=m&z=15&output=embed&iwloc=near`}
                    width="100%"
                    height="100%"
                    className="rounded-xl border-0 filter grayscale invert contrast-85 opacity-90 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Satelital Status card inside map frame */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1E1E1E]/95 border border-white/10 rounded-xl p-3 shadow-xl flex items-center justify-between backdrop-blur-md">
                    <div>
                      <span className="text-[9px] font-sans font-bold text-[#F5C518] uppercase tracking-wider block flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse"></span>
                        UBICACIÓN SATELITAL
                      </span>
                      <span className="text-white font-sans font-semibold text-xs">
                        {activeBranch.name}
                      </span>
                    </div>
                    <a
                      href={activeBranch.googleMapsUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-[#F5C518] hover:text-white text-[10px] font-sans tracking-wider flex items-center gap-1 hover:underline bg-[#D4AF37]/10 px-2 py-1 rounded"
                    >
                      <span>CÓMO LLEGAR</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>

                {/* Branch selector tabs */}
                <div className="flex gap-2 mb-6">
                  {BRANCHES_DATA.map((branch, idx) => (
                    <button
                      key={branch.name}
                      onClick={() => handleBranchSelect(idx)}
                      className={`flex-1 text-center py-2.5 px-1 rounded-lg font-sans font-bold text-[10px] uppercase tracking-wider border transition-all cursor-pointer ${
                        activeBranchIdx === idx
                          ? 'bg-[#F5C518] border-transparent text-[#1E1E1E]'
                          : 'bg-[#1a1a1a] border-white/5 text-gray-400 hover:text-white hover:bg-[#222]'
                      }`}
                    >
                      {branch.name.split(' ')[1] || branch.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Branch detail cards */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-4 animate-fade-in">
                <div className="flex items-start space-x-3 text-xs text-gray-300">
                  <MapPin className="h-4 w-4 text-[#F5C518] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{activeBranch.address}</span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <Phone className="h-4 w-4 text-[#F5C518] flex-shrink-0" />
                  <a href={`tel:${activeBranch.phone.replace(/\D/g, '')}`} className="hover:text-white hover:underline font-sans">
                    {activeBranch.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <Mail className="h-4 w-4 text-[#F5C518] flex-shrink-0" />
                  <a href={`mailto:${activeBranch.email}`} className="hover:text-white hover:underline">
                    {activeBranch.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <Clock className="h-4 w-4 text-[#F5C518] flex-shrink-0" />
                  <span>{activeBranch.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
