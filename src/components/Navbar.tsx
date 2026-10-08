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
    { name: 'Inicio', href: '#inicio', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Curso BPM', href: '#curso-bpm', action: onOpenCourseInfo },
    { name: 'Certificaciones', href: '#certificaciones', action: onOpenCourseInfo },
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
    { name: 'Empresas', href: '#empresas', action: onOpenCorporate },
    { name: 'Contacto', href: '#contacto', action: onOpenContact },
  ];

  return (
    <header className="relative z-30 w-full pt-4 px-4 sm:px-6 lg:px-8">
      {/* Floating Semitransparent Navbar with 16px blur */}
      <nav
        aria-label="Navegación principal AMCLA"
        className={`w-full max-w-[1440px] mx-auto transition-all duration-300 rounded-2xl border border-white/15 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between backdrop-blur-[16px] ${
          scrolled
            ? 'bg-[#0a2540]/90 shadow-xl shadow-black/25 border-white/25'
            : 'bg-[#0a2540]/70 shadow-md shadow-black/10'
        }`}
      >
        {/* Logo AMCLA */}
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2 focus-ring rounded-xl py-1 px-1 transition-transform active:scale-95"
          aria-label="AMCLA Capacitaciones - Ir al inicio"
        >
          <Logo variant={logoVariant} height={40} />
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={link.action}
              className="text-[14px] xl:text-[14.5px] font-medium text-slate-200 hover:text-white px-3.5 py-1.5 rounded-lg transition-colors duration-200 hover:bg-white/10 focus-ring cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Action Buttons (Right Desktop) - Armonizados en radio rounded-xl sin disparidad de píldora */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Action 1: Aula Virtual (Estilo secundario refinado con borde sutil translúcido) */}
          <button
            type="button"
            onClick={onOpenClassroom}
            className="group relative inline-flex items-center gap-2 text-[13.5px] lg:text-[14px] font-medium text-slate-200 hover:text-white px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/12 hover:border-white/35 active:bg-white/20 transition-all duration-200 backdrop-blur-md focus-ring shadow-xs cursor-pointer"
            aria-label="Acceder al Aula Virtual o Classroom"
          >
            <GraduationCap className="w-4 h-4 text-emerald-300 transition-transform group-hover:scale-105" />
            <span>Aula Virtual</span>
          </button>

          {/* Action 2: Comprar Curso (CTA principal con verde institucional y esquinas rounded-xl coordinadas) */}
          <button
            type="button"
            onClick={onOpenCheckout}
            className="group relative inline-flex items-center gap-2 text-[13.5px] lg:text-[14px] font-semibold text-white bg-[#059669] hover:bg-[#047857] active:bg-[#065f46] px-5 py-2 rounded-xl transition-all duration-200 shadow-md shadow-emerald-950/30 hover:shadow-emerald-900/40 active:scale-[0.98] focus-ring cursor-pointer"
            aria-label="Comprar Curso de Manipulación de Alimentos y BPM"
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Comprar Curso</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenCheckout}
            className="text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] px-3.5 py-1.5 rounded-xl transition-colors focus-ring"
            aria-label="Comprar curso"
          >
            Comprar
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white rounded-xl hover:bg-white/10 focus-ring transition-colors"
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

      {/* Mobile Drawer Navigation with backdrop blur */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="md:hidden fixed inset-x-4 top-20 z-40 bg-[#0a2540]/95 backdrop-blur-[16px] border border-white/20 rounded-2xl p-5 shadow-2xl shadow-black/60 transition-all duration-200 animate-in fade-in zoom-in-95"
        >
          {/* Header info in drawer */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Logo variant="light" height={32} />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md focus-ring"
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
                className="flex items-center justify-between text-left text-[15px] font-medium text-slate-100 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors focus-ring"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          {/* Action buttons (100% width on mobile as requested) */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                onOpenCheckout();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 text-[14.5px] font-semibold text-white bg-[#059669] hover:bg-[#047857] py-3 px-4 rounded-xl shadow-lg shadow-emerald-950/40 focus-ring cursor-pointer"
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
              className="w-full flex items-center justify-center gap-2 text-[14px] font-medium text-slate-200 border border-white/20 bg-white/5 hover:bg-white/12 py-2.5 px-4 rounded-xl transition-colors focus-ring cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-emerald-300" />
              <span>Ir a Aula Virtual</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
