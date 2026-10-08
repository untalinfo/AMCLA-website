import React from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';

interface HeroContentProps {
  onOpenCheckout: () => void;
  onOpenClassroom: () => void;
  onOpenCourseInfo: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onOpenCheckout,
  onOpenClassroom,
}) => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-36 lg:pb-24">
      {/* Título principal con Playfair Display en cursiva */}
      <h1 className="hero-section text-white font-bold tracking-tight text-[38px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.08] max-w-4xl text-balance drop-shadow-md">
        Garantiza la inocuidad, eleva tu{' '}
        <em className="text-emerald-300 not-italic font-normal tracking-normal italic font-serif-italic transition-colors hover:text-emerald-200">
          estándar profesional
        </em>
      </h1>

      {/* Párrafo descriptivo limpio */}
      <p className="mt-6 text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed text-slate-200 max-w-[660px] mx-auto text-balance font-normal">
        Capacitación 100% online y certificada en Buenas Prácticas de Manufactura para manipuladores de alimentos, gastronomía y plantas de procesos.
      </p>

      {/* Acciones principales */}
      <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
        <button
          type="button"
          onClick={onOpenCheckout}
          className="inline-flex items-center justify-center gap-2 text-[15px] sm:text-[16px] font-semibold text-white px-8 py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] active:bg-[#065f46] shadow-lg shadow-emerald-950/30 transition-all duration-200 focus-ring cursor-pointer"
          aria-label="Certifícate Ahora en Manipulación de Alimentos y BPM"
        >
          <span>Certifícate Ahora — $45.000 COP</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onOpenClassroom}
          className="inline-flex items-center justify-center gap-2 text-[15px] sm:text-[16px] font-semibold text-white px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all duration-200 focus-ring cursor-pointer"
          aria-label="Acceder al Aula Virtual y Classroom"
        >
          <GraduationCap className="w-5 h-5 text-emerald-300" />
          <span>Aula Virtual</span>
        </button>
      </div>

      {/* Indicadores de confianza sin cajas ni líneas innecesarias */}
      <p className="mt-8 text-xs sm:text-[13px] text-slate-300 font-medium tracking-wide">
        Válido ante Secretarías de Salud e INVIMA · Resolución 2674 de 2013 · Código QR en línea
      </p>
    </div>
  );
};
