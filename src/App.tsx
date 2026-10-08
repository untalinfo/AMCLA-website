/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroVideo } from './components/HeroVideo.tsx';
import { HeroContent } from './components/HeroContent.tsx';
import {
  ClassroomModal,
  CheckoutModal,
  CourseInfoModal,
  CorporateModal,
  ContactModal,
} from './components/Modals.tsx';
import { Logo, LogoVariant } from './components/Logo.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ScrollytellingSection } from './components/ScrollytellingSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Building2,
  HelpCircle,
  Phone,
  Mail,
  GraduationCap
} from 'lucide-react';

export default function App() {
  // Modal states
  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCourseInfoOpen, setIsCourseInfoOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Logo presentation state
  const [logoVariant, setLogoVariant] = useState<LogoVariant>('light');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* 
        SECCIÓN HERO: 100% Pantalla completa borde a borde (Edge-to-Edge) sin bordes laterales
      */}
      <main
        id="inicio"
        className="relative w-full overflow-hidden bg-[#0a2540] min-h-[660px] sm:min-h-[740px] md:min-h-[820px] lg:min-h-[900px] xl:min-h-screen flex flex-col justify-between"
      >
        {/* VIDEO DE FONDO CON OVERLAY GRADIENTE DE TRANSPARENTE A AZUL PROFUNDO #0a2540 (0.78) */}
        <HeroVideo />

        {/* NAVEGACIÓN SUPERIOR FLOTANTE CON LOGO AMCLA */}
        <Navbar
          onOpenClassroom={() => setIsClassroomOpen(true)}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenCourseInfo={() => setIsCourseInfoOpen(true)}
          onOpenCorporate={() => setIsCorporateOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          logoVariant={logoVariant}
        />

        {/* CONTENIDO PRINCIPAL CENTRADO EN LA MITAD INFERIOR */}
        <div className="w-full relative z-20 pb-8 sm:pb-12 md:pb-16">
          <HeroContent
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onOpenClassroom={() => setIsClassroomOpen(true)}
            onOpenCourseInfo={() => setIsCourseInfoOpen(true)}
          />
        </div>
      </main>

      {/* SECCIÓN CARACTERÍSTICAS Y PILARES NORMATIVOS */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Formación diseñada para el{' '}
            <em className="font-serif-italic font-normal text-emerald-700 not-italic">
              rigor operativo
            </em>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Un estándar de aprendizaje respaldado normativamente y adaptado a las exigencias reales de inspección sanitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-md p-7 border border-slate-200/60 shadow-2xs">
            <ShieldCheck className="w-6 h-6 text-emerald-700 mb-4" strokeWidth={2} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Respaldo Normativo Oficial</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cumple con las exigencias de la Resolución 2674 de 2013 del Ministerio de Salud (Minsalud), Decreto 3075 y directrices del Codex Alimentarius para auditorías e INVIMA.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-md p-7 border border-slate-200/60 shadow-2xs">
            <FileCheck2 className="w-6 h-6 text-emerald-700 mb-4" strokeWidth={2} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Certificado Inmediato con QR</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Descarga tu certificado con código único verificable en línea por cualquier empleador o fiscalizador sanitario inmediatamente al aprobar.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-md p-7 border border-slate-200/60 shadow-2xs">
            <Clock className="w-6 h-6 text-emerald-700 mb-4" strokeWidth={2} />
            <h3 className="font-bold text-lg text-slate-900 mb-2">Flexibilidad 100% Asincrónica</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Estudia desde tu teléfono, tablet o computador en tus propios horarios con acceso ilimitado a las clases y material descargable.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN SCROLLYTELLING: EXPERIENCIA DEL PROFESIONAL GASTRONÓMICO Y CERTIFICACIÓN (FULL WIDTH EDGE-TO-EDGE) */}
      <ScrollytellingSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenCourseInfo={() => setIsCourseInfoOpen(true)}
      />

      {/* ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) - LIMPIO, ELEGANTE Y SIN CAJA */}
      <FaqSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCorporate={() => setIsCorporateOpen(true)}
      />

      {/* SECCIÓN CORPORATIVA: CONVENIOS PARA EMPRESAS (FULL WIDTH EDGE-TO-EDGE) */}
      <section
        id="empresas"
        aria-label="Convenios y capacitación para empresas gastronómicas"
        className="w-full bg-[#0a2540] py-16 md:py-20 text-white relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
              ¿Necesitas certificar a tu equipo bajo el{' '}
              <em className="font-serif-italic font-normal text-emerald-300 not-italic">
                estándar sanitario colombiano
              </em>
              ?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Planes corporativos para restaurantes, cadenas de comida, plantas procesadoras y casinos con facturación electrónica DIAN y reportes de aprobación centralizados.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <button
              onClick={() => setIsCorporateOpen(true)}
              className="px-7 py-3.5 bg-[#059669] hover:bg-[#047857] text-white font-semibold rounded-md border border-emerald-500/40 text-sm sm:text-base transition-all shadow-md shadow-emerald-950/40 flex items-center gap-2.5 cursor-pointer focus-ring"
            >
              <span>Cotizar para Empresas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TESTIMONIOS Y SATISFACCIÓN DE ESTUDIANTES */}
      <TestimonialsSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenCourseInfo={() => setIsCourseInfoOpen(true)}
      />

      {/* FOOTER DISCRETO Y PROFESIONAL */}
      <footer className="border-t border-slate-200 bg-white py-8 px-6 text-slate-500 text-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="original" height={38} />
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">AMCLA Capacitación e Inocuidad Alimentaria Colombia S.A.S.</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsCourseInfoOpen(true)}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Programa del Curso
            </button>
            <button
              onClick={() => {
                document.getElementById('preguntas-frecuentes')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => setIsClassroomOpen(true)}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Verificación de Certificados
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Contacto &amp; Soporte
            </button>
          </div>
          <div>© {new Date().getFullYear()} AMCLA. Todos los derechos reservados.</div>
        </div>
      </footer>

      {/* MODALES INTERACTIVOS */}
      <ClassroomModal
        isOpen={isClassroomOpen}
        onClose={() => setIsClassroomOpen(false)}
        onOpenCheckout={() => {
          setIsClassroomOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOpenClassroom={() => {
          setIsCheckoutOpen(false);
          setIsClassroomOpen(true);
        }}
      />

      <CourseInfoModal
        isOpen={isCourseInfoOpen}
        onClose={() => setIsCourseInfoOpen(false)}
        onOpenCheckout={() => {
          setIsCourseInfoOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CorporateModal
        isOpen={isCorporateOpen}
        onClose={() => setIsCorporateOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* BOTÓN FLOTANTE WHATSAPP PARA RESOLVER DUDAS RÁPIDAS */}
      <WhatsAppButton />
    </div>
  );
}
