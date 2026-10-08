import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ScrollytellingSectionProps {
  onOpenCheckout: () => void;
  onOpenCourseInfo: () => void;
}

interface NarrativePhase {
  id: number;
  label: string;
  titlePrefix: string;
  titleItalic: string;
  subtitle: string;
  start: number;
  peak: number;
  end: number;
}

const PHASES: NarrativePhase[] = [
  {
    id: 1,
    label: '01',
    titlePrefix: 'Ritmo',
    titleItalic: 'consciente',
    subtitle:
      'La precisión de cada técnica en cocina y el respeto meticuloso por los tiempos, las temperaturas y la inocuidad.',
    start: 0.04,
    peak: 0.20,
    end: 0.36,
  },
  {
    id: 2,
    label: '02',
    titlePrefix: 'Espacio',
    titleItalic: 'mental',
    subtitle:
      'El orden riguroso de una operación estandarizada bajo normas BPM libera el foco para crear sin fricción ni riesgos.',
    start: 0.37,
    peak: 0.52,
    end: 0.68,
  },
  {
    id: 3,
    label: '03',
    titlePrefix: 'Propósito y',
    titleItalic: 'calma',
    subtitle:
      'La tranquilidad absoluta de liderar un servicio gastronómico respaldado por la acreditación sanitaria oficial.',
    start: 0.69,
    peak: 0.85,
    end: 0.98,
  },
];

export const ScrollytellingSection: React.FC<ScrollytellingSectionProps> = ({
  onOpenCheckout,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(10);
  const rafId = useRef<number | null>(null);
  const lastTargetTime = useRef<number>(0);

  // 1. Inicializar y congelar video para control manual por scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setVideoDuration(video.duration);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // 2. Vincular scroll con currentTime del video
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const normalized = Math.max(0, Math.min(1, currentScroll / scrollableDistance));

      setProgress(normalized);

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const video = videoRef.current;
        if (!video) return;

        const targetTime = normalized * videoDuration;

        // Actualizar currentTime si hay cambio medible
        if (Math.abs(targetTime - lastTargetTime.current) > 0.03) {
          lastTargetTime.current = targetTime;
          if (video.readyState >= 2) {
            video.currentTime = targetTime;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [videoDuration]);

  // Función para calcular opacidad y desplazamiento suave de cada fase
  const getPhaseStyles = (phase: NarrativePhase) => {
    if (progress < phase.start || progress > phase.end) {
      return { opacity: 0, transform: 'translateY(16px)', pointerEvents: 'none' as const };
    }

    let opacity = 0;
    if (progress <= phase.peak) {
      // Fade in hacia el pico
      const t = (progress - phase.start) / (phase.peak - phase.start);
      opacity = Math.max(0, Math.min(1, t));
    } else {
      // Fade out desde el pico
      const t = (phase.end - progress) / (phase.end - phase.peak);
      opacity = Math.max(0, Math.min(1, t));
    }

    // Suavizado cuadrático
    const smoothOpacity = opacity * opacity * (3 - 2 * opacity);
    const translateY = (1 - smoothOpacity) * 14;

    return {
      opacity: smoothOpacity,
      transform: `translateY(${translateY}px)`,
      pointerEvents: smoothOpacity > 0.4 ? ('auto' as const) : ('none' as const),
      transition: 'transform 0.15s ease-out',
    };
  };

  return (
    <section
      ref={containerRef}
      id="experiencia-scrollytelling"
      aria-label="Secuencia visual de inocuidad gastronómica"
      className="relative w-full h-[320vh] bg-[#0a2540] text-white"
    >
      {/* CONTENEDOR STICKY EN EL VIEWPORT (100vh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* VIDEO DE FONDO VINCULADO AL SCROLL */}
        <video
          ref={videoRef}
          src="/assets/Chef_cooking_in_kitchen_1080p_20261007192640.mp4"
          poster="/assets/chef-cooking-poster.jpg"
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* OVERLAYS INSTITUCIONALES PARA MÁXIMA LEGIBILIDAD (#0a2540) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 37, 64, 0.45) 0%, rgba(10, 37, 64, 0.65) 50%, rgba(10, 37, 64, 0.90) 100%)',
          }}
        />

        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, transparent 35%, rgba(10, 37, 64, 0.75) 100%)',
          }}
        />

        {/* CONTENIDO TIPOGRÁFICO SINCRONIZADO AL SCROLL */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center w-full min-h-[280px]">
          {PHASES.map((phase) => {
            const styles = getPhaseStyles(phase);
            return (
              <div
                key={phase.id}
                style={styles}
                className="absolute inset-x-6 flex flex-col items-center justify-center text-center"
              >
                {/* Título editorial con Playfair Display en cursiva */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance drop-shadow-md">
                  {phase.titlePrefix}{' '}
                  <em className="font-serif-italic font-normal text-emerald-300 not-italic">
                    {phase.titleItalic}
                  </em>
                </h2>

                {/* Bajada de texto */}
                <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 max-w-xl mx-auto leading-relaxed text-balance font-normal drop-shadow-sm">
                  {phase.subtitle}
                </p>

                {/* Botón de acción al llegar a la fase final */}
                {phase.id === 3 && (
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={onOpenCheckout}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-950/40 transition-all duration-200 focus-ring cursor-pointer"
                    >
                      <span>Certifícate por $45.000 COP</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* INDICADOR LATERAL DISCRETO DE FASES */}
        <div
          aria-hidden="true"
          className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-5 text-xs font-semibold"
        >
          {PHASES.map((phase) => {
            const isCurrent = progress >= phase.start && progress <= phase.end;
            return (
              <div
                key={phase.id}
                className={`flex items-center gap-2.5 transition-all duration-300 ${
                  isCurrent ? 'text-emerald-300 font-bold scale-105' : 'text-slate-400 opacity-60'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isCurrent ? 'bg-emerald-400 scale-150' : 'bg-slate-400'
                  }`}
                />
                <span className="tracking-widest uppercase text-[11px]">{phase.titlePrefix} {phase.titleItalic}</span>
              </div>
            );
          })}
        </div>

        {/* HINT SUTIL AL INICIO DEL SCROLL */}
        <div
          className={`absolute bottom-8 inset-x-0 text-center transition-opacity duration-300 text-xs text-slate-300 tracking-wider font-medium pointer-events-none ${
            progress < 0.08 ? 'opacity-80' : 'opacity-0'
          }`}
        >
          Desplaza para avanzar en la secuencia ↓
        </div>
      </div>
    </section>
  );
};
