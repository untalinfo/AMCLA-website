import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  score: string;
  quote: string;
  workplace: string;
  certificateFolio: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Camila Morales Vega',
    role: 'Manipuladora de Alimentos',
    location: 'Bogotá D.C.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    score: '98% de Aprobación',
    quote:
      'Trabajo en turnos rotativos en un casino escolar y necesitaba certificarme con urgencia para el programa de alimentación escolar. El curso lo completé 100% desde mi celular en mis tiempos libres. Apenas aprobé la prueba descargué mi certificado con código QR y la interventoría lo validó de inmediato.',
    workplace: 'Servicio de Alimentación Escolar (PAE Bogotá)',
    certificateFolio: 'AM-84920',
  },
  {
    id: '2',
    name: 'Sebastián Valenzuela',
    role: 'Maestro de Cocina & Jefe de Partida',
    location: 'Medellín',
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    score: '100% de Aprobación',
    quote:
      'Muy directo y enfocado en lo que realmente pasa en cocina: control de temperaturas críticas, prevención de contaminación cruzada y rotulación FIFO. Nos ayudó a estandarizar los procesos de todo el equipo y pasamos la visita de la Secretaría de Salud de Medellín sin ninguna observación.',
    workplace: 'Restaurante San Fernando & Banquetería',
    certificateFolio: 'AM-84931',
  },
  {
    id: '3',
    name: 'Valeria Henríquez Ríos',
    role: 'Pastelera & Emprendedora Gastronómica',
    location: 'Santander de Quilichao (Cauca)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    score: '96% de Aprobación',
    quote:
      'Estaba tramitando el concepto sanitario favorable de mi taller de repostería en Santander de Quilichao ante la Secretaría de Salud. Este curso virtual me entregó exactamente las planillas de registro y protocolos BPM bajo Resolución 2674 que me solicitó el funcionario. Las explicaciones sobre alérgenos y almacenamiento son impecables.',
    workplace: 'Dulce Tradición Pastelería (Santander de Quilichao)',
    certificateFolio: 'AM-85012',
  },
  {
    id: '4',
    name: 'Rodrigo Fuenzalida',
    role: 'Supervisor de Calidad & SST',
    location: 'Barranquilla',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    score: '100% de Aprobación',
    quote:
      'Capacitamos a una cuadrilla de 16 operarios mediante el convenio corporativo de AMCLA. La plataforma genera reportes claros del avance del personal y cada diploma cuenta con código único verificable ante auditorías del INVIMA. Ahorramos semanas de coordinación presencial.',
    workplace: 'Planta Procesadora Alimentos del Caribe S.A.S.',
    certificateFolio: 'AM-85104',
  },
  {
    id: '5',
    name: 'Daniela Espinoza P.',
    role: 'Encargada de Barra & Cafetería',
    location: 'Bucaramanga',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    score: '95% de Aprobación',
    quote:
      'Me pedían la certificación como requisito indispensable para asumir la administración de la cafetería. Estudié durante el fin de semana, presenté la evaluación el domingo en la tarde y el lunes a primera hora ya tenía mi diploma con QR para entregar a Gestión Humana.',
    workplace: 'Café de Especialidad Origen Santandereano',
    certificateFolio: 'AM-85188',
  },
  {
    id: '6',
    name: 'Ignacio Cárdenas Soto',
    role: 'Encargado de Producción Gastronómica',
    location: 'Cartagena',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    score: '99% de Aprobación',
    quote:
      'Excelente sección sobre mantenimiento de la cadena de frío y transporte seguro para delivery y eventos en zona costera. El aula virtual es ultra rápida, las preguntas del examen son casos prácticos y no teoría aburrida. Gran respaldo técnico.',
    workplace: 'Grupo Gastronómico Colonial Cartagena',
    certificateFolio: 'AM-85240',
  },
];

interface TestimonialsSectionProps {
  onOpenCheckout: () => void;
  onOpenCourseInfo: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenCheckout,
  onOpenCourseInfo,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const totalSlides = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonios"
      aria-label="Testimonios de estudiantes certificados en BPM"
      className="w-full py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO CON PLAYFAIR DISPLAY EN CURSIVA */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Profesionales que ya elevaron su{' '}
            <em className="font-serif-italic font-normal text-emerald-700 not-italic">
              estándar en cocina
            </em>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Más de 3,850 manipuladores de alimentos, chefs y empresas gastronómicas ya certificaron sus competencias con AMCLA.
          </p>

          <p className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            4.9 / 5.0 satisfacción general · Validación oficial ante autoridades sanitarias en Colombia
          </p>
        </div>

        {/* CARRUSEL DE TESTIMONIOS LIMPIO */}
        <div
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-4xl mx-auto focus:outline-none"
          aria-roledescription="carousel"
        >
          {/* NAVEGACIÓN DISCRETA */}
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs text-slate-500 font-medium">
              Opinión {currentIndex + 1} de {totalSlides}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer focus-ring"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer focus-ring"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CONTENEDOR DE TARJETA PRINCIPAL */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between min-h-[320px]">
                    <div>
                      {/* Calificación de estrellas y Folio limpio */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-1" aria-label={`5 estrellas`}>
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <span className="text-xs font-medium text-slate-500">
                          Folio {item.certificateFolio} · Verificado
                        </span>
                      </div>

                      {/* Cita textual del alumno */}
                      <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Autor de la reseña */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {item.role} · {item.workplace}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-emerald-700 font-semibold">
                        Aprobado con {item.score}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INDICADORES DE PUNTOS */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  currentIndex === idx ? 'w-5 h-1.5 bg-emerald-700' : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ver opinión ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CIERRE LIMPIO */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            ¿Listo para certificar tus competencias en manipulación higiénica?{' '}
            <button
              type="button"
              onClick={onOpenCheckout}
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4 cursor-pointer"
            >
              Comienza tu curso online hoy mismo
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
