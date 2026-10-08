import React, { useState, useEffect } from 'react';
import { Logo, LogoVariant } from './Logo.tsx';
import {
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenClassroom: () => void;
  onOpenCheckout: () => void;
  onOpenCourseInfo: () => void;
  onOpenCorporate: () => void;
  onOpenContact: () => void;
  logoVariant?: LogoVariant;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenClassroom,
  onOpenCheckout,
  onOpenCourseInfo,
  onOpenCorporate,
  onOpenContact,
  logoVariant = 'light',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll within container or window
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Curso BPM', href: '#curso-bpm', action: onOpenCourseInfo },
    {
      name: 'Empresas',
      href: '#empresas',
      action: () => {
        document.getElementById('empresas')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'Testimonios',
      href: '#testimonios',
      action: () => {
        document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'Preguntas',
      href: '#preguntas-frecuentes',
      action: () => {
        document.getElementById('preguntas-frecuentes')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    { name: 'Contacto', href: '#contacto', action: onOpenContact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-200 backdrop-blur-md ${
        scrolled
          ? 'bg-[#0a2540]/95 border-white/15 shadow-sm shadow-black/20'
          : 'bg-[#0a2540]/80 border-white/10'
      }`}
    >
      {/* Navbar contenedor principal corporativo minimalista sin bordes redondeados */}
      <nav
        aria-label="Navegación principal AMCLA"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between"
      >
        {/* Logo AMCLA (lleva suavemente al inicio) */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center gap-2 focus-ring py-1 transition-opacity hover:opacity-90 cursor-pointer"
          aria-label="AMCLA Capacitaciones - Ir al inicio"
        >
          <Logo variant={logoVariant} height={38} />
        </a>

        {/* Center Links (Desktop) - Estilo limpio y profesional */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={link.action}
              className="text-[13.5px] xl:text-[14px] font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-sm transition-colors duration-150 hover:bg-white/5 focus-ring cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Action Buttons (Right Desktop) - Esquinas semi-redondeadas / cuadradas de estándar corporativo */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          {/* Botón Aula Virtual: Estilo secundario sobrio con borde sutil */}
          <button
            type="button"
            onClick={onOpenClassroom}
            className="group inline-flex items-center gap-2 text-[13px] lg:text-[13.5px] font-medium text-slate-200 hover:text-white px-3.5 py-2 rounded-sm border border-white/20 bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all duration-150 focus-ring cursor-pointer"
            aria-label="Acceder al Aula Virtual o Classroom"
          >
            <GraduationCap className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-105" />
            <span>Aula Virtual</span>
          </button>

          {/* Botón Comprar Curso: CTA principal con borde limpio y semi-cuadrado */}
          <button
            type="button"
            onClick={onOpenCheckout}
            className="group inline-flex items-center gap-2 text-[13px] lg:text-[13.5px] font-semibold text-white bg-[#059669] hover:bg-[#047857] active:bg-[#065f46] px-4 py-2 rounded-sm border border-emerald-500/40 shadow-xs transition-all duration-150 active:scale-[0.99] focus-ring cursor-pointer"
            aria-label="Comprar Curso de Manipulación de Alimentos y BPM"
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Comprar Curso</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white rounded-sm hover:bg-white/10 focus-ring transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-emerald-400" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable - Minimalista y cuadrado */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="md:hidden fixed inset-x-0 top-[64px] sm:top-[72px] z-40 bg-[#0a2540] border-b border-white/20 p-5 shadow-2xl shadow-black/60 transition-all duration-150 animate-in fade-in"
        >
          {/* Header info in drawer */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Logo variant="light" height={30} />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-sm focus-ring"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between text-left text-[14.5px] font-medium text-slate-200 hover:text-white px-3 py-2.5 rounded-sm hover:bg-white/5 active:bg-white/10 transition-colors focus-ring cursor-pointer"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          {/* Action buttons (100% width on mobile) con esquinas semi-cuadradas */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                onOpenCheckout();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 text-[14px] font-semibold text-white bg-[#059669] hover:bg-[#047857] py-2.5 px-4 rounded-sm border border-emerald-500/40 shadow-xs focus-ring cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Comprar Curso</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onOpenClassroom();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 text-[13.5px] font-medium text-slate-200 border border-white/20 bg-white/5 hover:bg-white/10 py-2.5 px-4 rounded-sm transition-colors focus-ring cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Ir a Aula Virtual</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
