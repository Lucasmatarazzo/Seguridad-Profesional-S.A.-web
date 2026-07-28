import { Service, Device, BlogPost, Client, Branch } from './types';

// Asset references for the generated phone mockup screens
export const APP_IMAGES = {
  phoneHome: undefined,
  phoneCameras: undefined,
  phoneSos: undefined,
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'seguridad-fisica',
    slug: 'seguridad-fisica',
    name: 'Seguridad Física',
    description: 'Servicio de seguridad personalizada para eventos, consorcios, industrias y empresas con personal altamente capacitado.',
    icon: 'Shield',
    fullDescription: 'Nuestros Guardias de Seguridad realizan día a día una gran variedad de tareas específicas para proteger las instalaciones, activos y personas de nuestros clientes. Seguridad Profesional S.A. es pionera en capacitar al personal específicamente según el segmento en el que se desempeña. Un guardia que presta servicio en una industria cumple funciones muy diferentes al que lo hace en un barrio privado, centro de salud o espacio público.',
    benefits: [
      'Guardias seleccionados con estrictos controles de antecedentes y pruebas psicofísicas.',
      'Capacitación continua y especializada según el rubro de asignación.',
      'Supervisión presencial permanente mediante rondas de control documentadas.',
      'Protocolos claros de actuación ante emergencias, intrusiones e incendios.',
      'Soporte directo de nuestra Central de Monitoreo Propia las 24 horas.'
    ],
    process: [
      'Análisis inicial de riesgos del predio o establecimiento.',
      'Diseño del Plan Operativo de Seguridad y asignación de perfiles de guardias.',
      'Inducción específica del personal sobre las consignas y protocolos del cliente.',
      'Implementación del servicio con presencia física y equipamiento de comunicación.',
      'Auditorías semanales y reportes de novedades al cliente.'
    ],
    faqs: [
      {
        question: '¿Cómo garantizan la asistencia y puntualidad de los guardias?',
        answer: 'Utilizamos nuestra aplicación propietaria Vigicontrol con control biométrico y GPS en tiempo real. Los supervisores realizan visitas aleatorias para verificar la presencia física y el cumplimiento estricto de las consignas.'
      },
      {
        question: '¿Qué equipamiento llevan los guardias?',
        answer: 'De acuerdo al nivel de riesgo y la normativa vigente, se equipan con uniformes reglamentarios, sistemas de comunicación encriptada (UHF/VHF/4G), linternas de alta potencia, detectores de metales y sistemas de botón de pánico conectados a nuestra Central de Monitoreo.'
      },
      {
        question: '¿Tienen cobertura de seguros en regla?',
        answer: 'Sí, todo nuestro personal cuenta con Seguro de Vida Obligatorio (ALIANZ), cobertura de A.R.T. (Provincia ART) y SPSA mantiene póliza de Responsabilidad Civil Mercantil (Andina) para total tranquilidad de nuestros clientes.'
      }
    ],
    image: '/carrusel.servicios/seguridad.fisica.png',
    heroImage: '/banner.servicios/banner.seguridad.fisica.jpg',
    gallery: [
      { url: '/imagenes.servicios/capacitacion.png', caption: 'Personal de seguridad con capacitación continua y especializada' },
      { url: '/imagenes.servicios/seguridad.fisica.png', caption: 'Control de accesos y supervisión presencial activa' },
      { url: '/imagenes.servicios/guardia.fisica.png', caption: 'Protección que se siente.' }
    ]
  },
  {
    id: 'seguridad-electronica',
    slug: 'seguridad-electronica',
    name: 'Seguridad Electrónica',
    description: 'Diseño, instalación y mantenimiento de sistemas integrales de alarmas, CCTV, control de accesos y automatización.',
    icon: 'Cpu',
    fullDescription: 'Ofrecemos soluciones tecnológicas avanzadas tanto en sitio como en forma remota. Diseñamos, instalamos y realizamos el mantenimiento de todos los sistemas de seguridad electrónica, adaptando cada tecnología a las necesidades específicas de nuestros clientes. Integramos sistemas de cámaras tradicionales y térmicas, alarmas de intrusión, control de accesos biométricos y centrales de incendio.',
    benefits: [
      'Tecnología de última generación compatible con aplicaciones móviles.',
      'Instalación realizada por técnicos matriculados y certificados.',
      'Mantenimiento preventivo y correctivo rápido con guardias técnicas.',
      'Integración total: alarma, cámaras y control de accesos en una sola interfaz.',
      'Monitoreo remoto activo las 24 horas desde nuestra Central.'
    ],
    process: [
      'Relevamiento técnico en el sitio sin cargo.',
      'Diseño de la arquitectura de seguridad electrónica (planos y especificaciones).',
      'Instalación del cableado, dispositivos, sensores y configuración del software.',
      'Capacitación integral al cliente y entrega de manuales.',
      'Pruebas de conectividad con la Central de Monitoreo SPSA.'
    ],
    faqs: [
      {
        question: '¿Puedo controlar mis cámaras y alarmas desde el celular?',
        answer: 'Sí, todas nuestras instalaciones se vinculan a aplicaciones móviles avanzadas que le permiten visualizar cámaras en vivo, activar/desactivar la alarma, recibir notificaciones de eventos y disparar alertas de pánico desde cualquier lugar del mundo.'
      },
      {
        question: '¿Qué sucede si hay un corte de energía eléctrica?',
        answer: 'Nuestros paneles de alarma y grabación cuentan con baterías de respaldo y UPS de alta calidad que garantizan el funcionamiento ininterrumpido del sistema por un lapso de 12 a 24 horas, reportando inmediatamente el corte de energía a nuestra central.'
      }
    ],
    image: '/carrusel.servicios/seguridad.electronica.png',
    heroImage: '/banner.servicios/banner.seguridad.electronica.jpg'
  },
  {
    id: 'custodia',
    slug: 'custodia-ejecutiva',
    name: 'Custodia Ejecutiva',
    description: 'Protección personal de directivos y personalidades con choferes especializados en manejo defensivo y táctico.',
    icon: 'UserCheck',
    fullDescription: 'Contamos con personal de custodia rigurosamente seleccionado por su integridad, proactividad, capacidad de observación y rápida reacción. Nuestros profesionales están capacitados para tomar decisiones en situaciones críticas de alta tensión. Brindamos servicios permanentes o temporales por eventos, respaldados por vehículos modernos y choferes con capacitación en técnicas avanzadas de manejo evasivo y defensivo.',
    benefits: [
      'Custodios profesionales con perfil altamente discreto y bilingües de ser requerido.',
      'Capacitación rigurosa en tiro táctico, defensa personal y primeros auxilios.',
      'Vehículos de soporte de última generación.',
      'Planificación estratégica de rutas y análisis de vulnerabilidades del trayecto.',
      'Enlace satelital continuo con nuestra Central de Emergencias SPSA.'
    ],
    process: [
      'Evaluación del perfil de la persona a proteger y nivel de riesgo/amenaza.',
      'Establecimiento de protocolos de transporte y acompañamiento personalizado.',
      'Selección de choferes y custodios de apoyo.',
      'Ejecución del servicio con informes previos de ruta y chequeo de seguridad.',
      'Monitoreo satelital activo (GPS) del vehículo durante todo el traslado.'
    ],
    faqs: [
      {
        question: '¿El servicio se puede contratar por días o eventos particulares?',
        answer: 'Sí, disponemos de planes sumamente flexibles que van desde custodias permanentes de ejecutivos corporativos hasta custodias eventuales para traslados al aeropuerto, conferencias, eventos públicos o privados.'
      },
      {
        question: '¿Con qué vehículos cuentan para el servicio?',
        answer: 'Disponemos de una flota de vehículos de alta gama, equipados con sistemas de rastreo satelital doble vía y botón de pánico silencioso.'
      }
    ],
    image: '/carrusel.servicios/custodia.ejectutiva.png',
    heroImage: '/banner.servicios/banner.custodia.ejecutiva.jpg'
  },
  {
    id: 'monitoreo',
    slug: 'monitoreo-activo',
    name: 'Monitoreo 24/7',
    description: 'Central de Monitoreo propia con operadores certificados las 24 horas, los 365 días del año para respuesta inmediata.',
    icon: 'Activity',
    fullDescription: 'Nuestra Central de Monitoreo Propia es el corazón operativo de SPSA. No importa el día ni la hora, contamos con operadores altamente capacitados y certificados trabajando las 24 horas del día, los 365 días del año. Recibimos, analizamos y damos respuesta inmediata a alertas de alarmas, señales de pánico, emergencias médicas, reportes de incendios y monitoreo de video continuo.',
    benefits: [
      'Atención de señales críticas en menos de 30 segundos.',
      'Despacho inmediato de fuerzas policiales, bomberos o ambulancias.',
      'Videoverificación instantánea para descartar falsas alarmas y acelerar respuesta.',
      'Monitoreo proactivo de cámaras de seguridad.',
      'Respaldos de energía e internet redundantes para operatividad del 100%.'
    ],
    process: [
      'Recepción de la señal de alarma o pánico en el software central.',
      'Apertura automática de cámaras de seguridad asociadas (videoverificación).',
      'Llamada de confirmación al propietario y envío inmediato de patrulla/fuerzas públicas.',
      'Seguimiento en vivo y coordinación del operativo hasta asegurar el predio.',
      'Envío de reporte digital detallado con grabaciones e historial al cliente.'
    ],
    faqs: [
      {
        question: '¿Cómo funciona la videoverificación?',
        answer: 'Cuando su alarma se activa, nuestro sistema envía instantáneamente a nuestros operadores un clip de video de 10 segundos previo y posterior al disparo. Esto permite confirmar en segundos si se trata de un intruso real o de un falso disparo, acelerando la prioridad policial.'
      },
      {
        question: '¿Tienen redundancia en sus servicios?',
        answer: 'Nuestra Central cuenta con tres proveedores independientes de internet por fibra óptica, enlace satelital de respaldo, generador de energía eléctrica propio de gran capacidad y sistemas en la nube duplicados en tiempo real.'
      }
    ],
    image: '/carrusel.servicios/Monitoreo.png',
    heroImage: '/banner.servicios/banner.monitoreo.jpg'
  },
  {
    id: 'consultoria',
    slug: 'consultoria-seguridad',
    name: 'Consultoría de Seguridad',
    description: 'Análisis de vulnerabilidad, confección de planes de contingencia y diseño de esquemas de protección corporativa.',
    icon: 'Search',
    fullDescription: 'Identificamos los riesgos de su negocio para diseñar planes estratégicos que protejan a las personas, la continuidad de los procesos y el patrimonio. Evaluamos integralmente el entorno físico, las tecnologías existentes y los protocolos humanos, brindando una propuesta a la real medida de sus necesidades operativas y financieras.',
    benefits: [
      'Auditoría realizada por expertos en seguridad corporativa e ingenieros de riesgos.',
      'Optimización de costos reemplazando seguridad física por esquemas mixtos.',
      'Elaboración de manuales de procedimientos y planes de evacuación certificados.',
      'Evaluación de proveedores de tecnología y control de calidad de sistemas.',
      'Reducción drástica del índice de siniestralidad de la organización.'
    ],
    process: [
      'Entrevistas de campo y relevamiento de la actividad de la empresa.',
      'Identificación y jerarquización de riesgos físicos y lógicos.',
      'Diseño del anteproyecto con planos de vulnerabilidades y soluciones recomendadas.',
      'Presentación de la propuesta técnico-económica optimizada.',
      'Acompañamiento en la puesta en marcha de los nuevos protocolos.'
    ],
    faqs: [
      {
        question: '¿Qué es una auditoría de seguridad mixta?',
        answer: 'Es un estudio donde evaluamos cómo el personal físico interactúa con los sistemas electrónicos instalados. Con frecuencia, reacomodar las cámaras de seguridad o cambiar los puntos de control permite reducir la cantidad de guardias necesarios, generando un ahorro significativo para la empresa.'
      }
    ],
    image: '/carrusel.servicios/consultoria.de.seguridad.png',
    heroImage: '/banner.servicios/banner.consultoria.de.seguridad.png'
  },
  {
    id: 'custodia-mercaderia',
    slug: 'custodia-de-mercaderia',
    name: 'Custodia de Mercadería',
    description: 'Seguimiento y escolta en tránsito de mercaderías con vehículos equipados con GPS y cámaras con transmisión en vivo.',
    icon: 'Truck',
    fullDescription: 'El servicio de custodia de mercadería en tránsito combina prevención, tecnología de punta y absoluto profesionalismo. SPSA provee escoltas vehiculares altamente equipadas y custodios habilitados con capacitación específica para actuar ante contingencias en ruta. Todos los móviles están supervisados mediante GPS de manera constante y cuentan con cámaras internas que transmiten en vivo la mercadería y la ruta a nuestra Central de Monitoreo.',
    benefits: [
      'Escoltas vehiculares equipadas con sistemas de detención de motor remota.',
      'Choferes custodios armados y habilitados por prefectura y policías provinciales.',
      'Supervisión continua con reportes de paso cada 15 minutos.',
      'Monitoreo satelital activo con geocercas estrictas y alarmas de desvío.',
      'Acceso exclusivo del cliente para ver las cámaras internas en vivo.'
    ],
    process: [
      'Coordinación de la hoja de ruta, horarios de salida y puntos de descanso.',
      'Inspección previa del camión de carga y sellado de seguridad de puertas.',
      'Salida escoltada bajo supervisión de geolocalización satelital.',
      'Seguimiento en ruta con comunicación permanente vía radio encriptada.',
      'Entrega segura de la carga en destino y liberación del convoy.'
    ],
    faqs: [
      {
        question: '¿Qué cobertura geográfica tienen para custodias?',
        answer: 'Brindamos cobertura en todo el territorio de la República Argentina, con bases operativas estratégicas que nos permiten coordinar servicios en Zona Norte, Sur, Oeste, CABA, y un corredor hacia la Provincia de Córdoba.'
      },
      {
        question: '¿Qué tecnología de rastreo satelital utilizan?',
        answer: 'Utilizamos dispositivos de GPS multired (L1/L2) con sistemas anti-jammer (detección de inhibidores de señal) que bloquean automáticamente el camión e inician una alarma silenciosa en nuestra Central en caso de interferencias.'
      }
    ],
    image: '/carrusel.servicios/custodia.mercaderia.transito.png',
    heroImage: '/banner.servicios/banner.custodia.mercaderia.jpg',
    gallery: [
      { url: '/imagenes.servicios/custodios.png', caption: 'Custodios armados supervisando la mercadería desde el interior del vehículo' },
      { url: '/imagenes.servicios/inspeccion.de.camion.png', caption: 'Inspección previa del camión de carga' },
      { url: '/imagenes.servicios/camara.interna.png', caption: 'Transmisión de cámaras en vivo hacia la Central de Monitoreo' }
    ]
  },
  {
    id: 'ronda-controlada',
    slug: 'ronda-controlada',
    name: 'Ronda Controlada',
    description: 'Servicio de vigilancia y patrullaje preventivo con supervisión y reporte en tiempo real.',
    icon: 'Map',
    fullDescription: 'El servicio de Ronda Controlada garantiza una vigilancia activa y disuasiva a través de patrullajes programados y aleatorios. Nuestros guardias verifican puntos estratégicos del predio, asegurando la integridad de las instalaciones y previniendo intrusiones. Toda la actividad queda registrada y es auditada en tiempo real mediante nuestro sistema de control de rondas.',
    benefits: [
      'Patrullaje preventivo y disuasivo en horarios estratégicos.',
      'Control de puntos clave mediante tecnología de lectura (NFC/QR).',
      'Reportes digitales inmediatos con registro de geolocalización.',
      'Detección temprana de anomalías, fallos en cerramientos o iluminación.',
      'Respuesta rápida ante incidentes detectados durante la ronda.',
      'Optimización de costos: pague únicamente por el tiempo real dedicado a su ronda.'
    ],
    process: [
      'Evaluación del predio y definición de puntos de control críticos.',
      'Diseño del circuito de la ronda y horarios aleatorios.',
      'Ejecución del patrullaje registrando cada punto de control.',
      'Reporte automático a nuestra Central de Monitoreo.',
      'Emisión de informes diarios o semanales al cliente.'
    ],
    faqs: [
      {
        question: '¿Cómo verifican que la ronda se hizo correctamente?',
        answer: 'Utilizamos tecnología de bastones de ronda o aplicaciones móviles que requieren que el guardia escanee etiquetas NFC o códigos QR en cada punto de control, dejando un registro inviolable de la hora y posición.'
      },
      {
        question: '¿Qué pasa si el guardia no marca un punto de control?',
        answer: 'Si un punto de control no se marca en el tiempo estipulado, se genera una alerta automática en nuestra Central de Monitoreo, y procedemos a verificar la situación del guardia inmediatamente.'
      }
    ],
    image: '/carrusel.servicios/ronda.controlada.png',
    heroImage: '/banner.servicios/banner.ronda.controlada.jpg'
  }
];

export const DEVICES_DATA: Device[] = [
  {
    id: 'control-remoto',
    name: 'Control Remoto de Seguridad',
    description: 'Dispositivo compacto llavero para el control de activación y disparo de emergencia SPSA.',
    specs: [
      { label: 'Frecuencia', value: '433 MHz encriptada' },
      { label: 'Alcance', value: '30 mts' },
      { label: 'Botones', value: '4 (Armado, SOS)' },
      { label: 'Batería', value: 'CR2032 de litio' }
    ],
    features: [
      'Botón de pánico (S.O.S) dedicado de fácil pulsación.',
      'Tecnología rolling code que evita la duplicación del control remoto.',
      'Carcasa de ABS reforzada de alta resistencia a golpes y salpicaduras.',
      'Confirmación táctil mediante vibración o micro LED.'
    ],
    image: '/kit.spsa/control.png',
    thumbnails: [
      '/imagenes.kit/control.frente.png',
      '/imagenes.kit/control.lateral.png'
    ]
  },
  {
    id: 'sirena',
    name: 'Sirena Exterior Inalámbrica',
    description: 'Sirena disuasoria de alta potencia con luz estroboscópica LED para alertas.',
    specs: [
      { label: 'Potencia', value: '110 dB a 1 metro' },
      { label: 'Luz Estroboscópica', value: 'LED rojo' },
      { label: 'Protección', value: 'Interior' },
      { label: 'Alimentación', value: 'Batería propia y conexión a 220v' }
    ],
    features: [
      'Sensor antisabotaje (tamper) que dispara la sirena si intentan removerla.',
      'Transmisión de dos vías con el panel principal para reporte de batería.',
      'Potente luz estroboscópica de acción disuasoria inmediata.',
      'Volumen configurable para pitidos de armado y desarmado.'
    ],
    image: '/kit.spsa/sirena.png',
    thumbnails: [
      '/imagenes.kit/sirena.frente.png',
      '/imagenes.kit/sirena.lateral.png',
      '/imagenes.kit/sirena.costado.png'
    ]
  },
  {
    id: 'camara',
    name: 'Cámara Exterior Inteligente SPSA',
    description: 'Cámara de videoseguridad con resolución 1080p, visión nocturna en color y audio dos vías.',
    specs: [
      { label: 'Resolución', value: '1080p' },
      { label: 'Grabación', value: 'Memoria y teléfono' },
      { label: 'Audio', value: 'Dos vías' },
      { label: 'Ángulo', value: '110 grados' }
    ],
    features: [
      'Comunicación de audio de dos vías integrado.',
      'La grabación queda guardada tanto en la memoria de la cámara como en el teléfono.',
      'Luz de advertencia blanca integrada y sirena sonora disuasoria.',
      'Conectividad Wi-Fi de doble banda y puerto Ethernet RJ45.'
    ],
    image: '/kit.spsa/camara.png',
    thumbnails: [
      '/imagenes.kit/camara.frente.png',
      '/imagenes.kit/camara.lateral.png',
      '/imagenes.kit/camara.costado.png',
      '/imagenes.kit/camara.trasera.png'
    ]
  },
  {
    id: 'sensor',
    name: 'Sensor de Movimiento Pir Antimascotas',
    description: 'Infrarrojo de movimiento pasivo con inmunidad a mascotas de hasta 25 kg.',
    specs: [
      { label: 'Área', value: '12m, 90 grados' },
      { label: 'Mascotas', value: 'Apto hasta 25 kg' },
      { label: 'Batería', value: '1 año' },
      { label: 'Tecnología', value: 'PIR Infrarrojo' }
    ],
    features: [
      'Cero falsas alarmas gracias al procesamiento avanzado de señales.',
      'Fácil montaje en pared o esquina con soporte orientable.',
      'Filtro de luz blanca de alta intensidad.',
      'Reporte de batería baja e interruptor de antisabotaje trasero.'
    ],
    image: '/kit.spsa/sensor.png',
    thumbnails: [
      '/imagenes.kit/sensor.frente.png',
      '/imagenes.kit/sensor.lateral.png',
      '/imagenes.kit/sensor.costado.png',
      '/imagenes.kit/sensor.trasera.png'
    ]
  },
  {
    id: 'barra',
    name: 'Barrera Infrarroja Perimetral',
    description: 'Sistema de detección perimetral de doble haz infrarrojo activo.',
    specs: [
      { label: 'Alcance', value: 'Hasta 100m en exterior' },
      { label: 'Haces', value: 'Doble haz sincronizado' },
      { label: 'Respuesta', value: '50-700 ms ajustable' },
      { label: 'Protección', value: 'IP65 exterior' }
    ],
    features: [
      'Ajuste óptico y LED indicador de alineación.',
      'Inmunidad contra mascotas pequeñas e insectos.',
      'Circuito de control automático de ganancia para adaptarse al clima.',
      'Carcasa protectora anti-heladas y anti-escarcha.'
    ],
    image: '/kit.spsa/barra.png',
    thumbnails: [
      '/imagenes.kit/barra.frente.png',
      '/imagenes.kit/barra.lateral.png',
      '/imagenes.kit/barra.trasera.png'
    ]
  },
  {
    id: 'sensor-magnetico',
    name: 'Sensor Magnético de Apertura',
    description: 'Sensor magnético inalámbrico diseñado para proteger puertas y ventanas contra aperturas no autorizadas.',
    specs: [
      { label: 'Uso', value: 'Puertas y ventanas' },
      { label: 'Batería', value: 'Hasta 2 años' },
      { label: 'Tecnología', value: 'Inalámbrica' },
      { label: 'Diseño', value: 'Ultra compacto' }
    ],
    features: [
      'Detección inmediata de apertura con notificación al panel central.',
      'Diseño ultra compacto y estético que no altera la decoración.',
      'Reporte automático de estado de batería baja.',
      'Alta confiabilidad para evitar falsas alarmas.'
    ],
    image: '/kit.spsa/sensor.magnético.para.puertas.ventanas..png',
    thumbnails: [
      '/imagenes.kit/sensor.magnético.para.puertas.ventanas.frente.png',
      '/imagenes.kit/sensor.magnético.para.puertas.ventanas.costado.png'
    ]
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'spnews-vol-7',
    title: 'SPNews Vol. 7: Innovación Tecnológica y Monitoreo Activo',
    image: '/spnews/spnews.7.png',
    date: 'Próximamente',
    author: 'Seguridad Profesional S.A.',
    excerpt: 'Descubrí la nueva edición de nuestro boletín informativo con las últimas novedades, innovaciones tecnológicas y actualizaciones operativas de SPSA.',
    content: `## Innovación Tecnológica en Seguridad Privada

En esta séptima edición de SPNews, presentamos nuestros últimos avances en soluciones integrales de seguridad electrónica, monitoreo 24/7 y la incorporación de análisis inteligente de video.

### Aspectos Destacados
* **Integración de analíticas con Inteligencia Artificial**: Detección anticipada de intrusiones en perímetro con minimización de falsas alarmas.
* **Control perimetral inteligente**: Implementación de barreras infrarrojas y térmicas avanzadas.
* **Plataforma Vigicontrol**: Seguimiento operativo en tiempo real para supervisión de rondas y guardias.

Seguridad Profesional S.A. continúa invirtiendo en infraestructura tecnológica para brindar la máxima tranquilidad a nuestros clientes en todo el país.`,
    relatedIds: ['spnews-vol-6', 'spnews-vol-5']
  },
  {
    id: 'spnews-vol-6',
    title: 'SPNews Vol. 6: Protocolos de Custodia y Prevención Operativa',
    image: '/spnews/spnews.6.png',
    date: 'Julio 2026',
    author: 'Seguridad Profesional S.A.',
    excerpt: 'Leé la sexta edición de nuestro boletín informativo con novedades sobre custodia de mercadería en tránsito, capacitación de personal y prevención operativa.',
    externalLink: 'https://boletinsp.my.canva.site/sp-news-vol6',
    content: `## Prevención Operativa y Custodia Vehicular

En la sexta entrega de nuestro boletín corporativo, analizamos las estrategias operativas y tecnológicas aplicadas a la protección de transporte de cargas y seguridad física en parques industriales y consorcios.

### Temas Principales
* **Custodia de Mercadería en Tránsito**: Protocolos de seguridad en ruta, seguimiento satelital dual y choferes custodios habilitados.
* **Seguridad Física Especializada**: Capacitación adaptada a cada segmento operativo (industrias, sanatorios, barrios cerrados).
* **Actualizaciones Normativas**: Cumplimiento con organismos de control (OPGSP, DGSPR, ANMAC).

A través de rigurosas auditorías y planes de contingencia, SPSA asegura una respuesta rápida y efectiva ante cualquier evento en ruta o sitio.`,
    relatedIds: ['spnews-vol-7', 'spnews-vol-5']
  },
  {
    id: 'spnews-vol-5',
    title: 'SPNews Vol. 5: Estrategias Integrales de Seguridad Física y Electrónica',
    image: '/spnews/spnews.5.png',
    date: 'Junio 2026',
    author: 'Seguridad Profesional S.A.',
    excerpt: 'Repasá la quinta edición de SPNews y enterate de las últimas acciones, capacitaciones y recomendaciones de Seguridad Profesional S.A.',
    externalLink: 'https://boletinsp.my.canva.site/spnews05',
    content: `## Integración de Sistemas y Seguridad Física

En este boletín repasamos las claves para combinar la presencia de guardias físicos altamente entrenados con sistemas electrónicos de monitoreo inteligente.

### Puntos Clave
* **Sistemas Mixtos de Protección**: Cómo optimizar costos operativos integrando cámaras de videoverificación con puestos de guardia.
* **Central de Monitoreo Propia**: Atención e intervención ante alertas de emergencia en menos de 30 segundos.
* **Capacitación Continua**: Evaluaciones psicofísicas y entrenamiento en respuesta ante emergencias e incendios.

Agradecemos la confianza de nuestros clientes e instituciones que nos eligen día a día.`,
    relatedIds: ['spnews-vol-7', 'spnews-vol-6']
  }
];

export const CLIENTS_DATA: Client[] = [
  { id: 'afb', name: 'AFB International', logoType: 'custom', imageUrl: '/carrusel.clientes/afb.png' },
  { id: 'audi', name: 'AUDI', logoType: 'custom', imageUrl: '/carrusel.clientes/audi.png' },
  { id: 'calegroup', name: 'CaleGroup', logoType: 'custom', imageUrl: '/carrusel.clientes/calegroup.png' },
  { id: 'dimo', name: 'DIMO Construcciones', logoType: 'custom', imageUrl: '/carrusel.clientes/dimo.png' },
  { id: 'hacoaj', name: 'Club Náutico Hacoaj', logoType: 'custom', imageUrl: '/carrusel.clientes/hacoaj.png' },
  { id: 'herencia', name: 'HERENCIA CUSTOM GARAGE', logoType: 'custom', imageUrl: '/carrusel.clientes/herencia.png' },
  { id: 'jardin_de_paz', name: 'Jardín de Paz', logoType: 'custom', imageUrl: '/carrusel.clientes/jardin.de.paz.png' },
  { id: 'kuma', name: 'KUMA HOME', logoType: 'custom', imageUrl: '/carrusel.clientes/kuma.png' },
  { id: 'motora', name: 'Motora', logoType: 'custom', imageUrl: '/carrusel.clientes/motora.png' },
  { id: 'panacea', name: 'Panacea', logoType: 'custom', imageUrl: '/carrusel.clientes/panacea.png' },
  { id: 'prune', name: 'PRÜNE', logoType: 'custom', imageUrl: '/carrusel.clientes/prune.png' },
  { id: 'san_juan_de_dios', name: 'Casa Hospital San Juan de Dios', logoType: 'custom', imageUrl: '/carrusel.clientes/san.juan.de.dios.png' },
  { id: 'santa_catalina', name: 'SANTA CATALINA Neurorehabilitación', logoType: 'custom', imageUrl: '/carrusel.clientes/santa.catalinacatalina.png' },
  { id: 'suono', name: 'SUONO', logoType: 'custom', imageUrl: '/carrusel.clientes/suono.png' },
  { id: 'surfactan', name: 'SURFACTAN S.A.', logoType: 'custom', imageUrl: '/carrusel.clientes/surfactan.png' },
  { id: 'taverniti', name: 'Taverniti', logoType: 'custom', imageUrl: '/carrusel.clientes/taverniti.png' },
  { id: 'tierralta', name: 'Tierralta', logoType: 'custom', imageUrl: '/carrusel.clientes/tierralta.png' },
  { id: 'universidad_de_lujan', name: 'Universidad Nacional de Luján', logoType: 'custom', imageUrl: '/carrusel.clientes/universidad.de.lujan.png' },
  { id: 'volvo', name: 'Volvo', logoType: 'custom', imageUrl: '/carrusel.clientes/volvo.png' },
  { id: 'wolksvaguen', name: 'Volkswagen', logoType: 'custom', imageUrl: '/carrusel.clientes/wolksvaguen.png' }
];

export const BRANCHES_DATA: Branch[] = [
  {
    name: 'Casa Central',
    address: 'Avenida Avellaneda 5000/5016, San Fernando (1646) Provincia de Buenos Aires',
    phone: '+54 9 11 6168-3962',
    email: 'ventas@spsa.com.ar',
    hours: 'Lunes a Viernes: 8:00 a 18:00 (Guardias operativas: 24 hs)',
    mapQuery: "Av. Avellaneda 5000, B1646 San Fernando, Provincia de Buenos Aires",
    googleMapsUrl: 'https://maps.google.com/?q=-34.4532,-58.5831'
  },
  {
    name: 'Sucursal CABA',
    address: 'Rondeau 3023, CABA, Buenos Aires',
    phone: '+54 9 11 6168-3962',
    email: 'suc.caba@spsa.com.ar',
    hours: 'Lunes a Viernes: 9:00 a 17:00',
    mapQuery: "Rondeau 3023, C1437 Cdad. Autónoma de Buenos Aires",
    googleMapsUrl: 'https://maps.google.com/?q=-34.6391,-58.4079'
  },
  {
    name: 'Sucursal Córdoba',
    address: 'Telesforo Ubios 3996, Barrio Parque, Córdoba Capital, Provincia de Córdoba',
    phone: '351 280016',
    email: 'suc.cordoba@spsa.com.ar',
    hours: 'Lunes a Viernes: 9:00 a 17:00',
    mapQuery: "Telesforo Ubios 3996, X5009 Córdoba",
    googleMapsUrl: 'https://maps.google.com/?q=-31.4325,-64.2185'
  }
];

export const LEGAL_INFO = {
  cuit: '30-68859862-8',
  ingBrutos: '002-422474-7 (convenio multilateral)',
  opgsp: '1211 (Provincia de Buenos Aires)',
  dgspr: 'DI-2012-187-DGSPR (CABA)',
  prefectura: 'Registro Matriz N° 1228',
  anmac: 'Usuario Colectivo Legajo 9761091',
  caesi: 'Socio N° -A-5181',
  seguros: [
    { label: 'Vida Obligatorio', desc: 'ALIANZ - Póliza Nro. 18018/792930' },
    { label: 'A.R.T.', desc: 'Provincia ART - Contrato Nro. 235132' },
    { label: 'Responsabilidad Civil Mercantil', desc: 'Andina - Póliza Nro. 001160553' }
  ]
};
export const COMPANY_FOUNDATION = 1998;
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - COMPANY_FOUNDATION;
export const PORTFOLIO_Slogan = "Seguridad nuestro trabajo, profesional la forma de hacerlo";
