import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  GraduationCap,
  Download,
  QrCode,
  ShieldCheck,
  CreditCard,
  Building2,
  Users,
  Send,
  BookOpen,
  FileText,
  Clock,
  Sparkles,
  Award,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { Logo } from './Logo.tsx';

// -------------------------------------------------------------
// 1. MODAL: AULA VIRTUAL / CLASSROOM
// -------------------------------------------------------------
interface ClassroomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const ClassroomModal: React.FC<ClassroomModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'verify'>('login');
  const [studentId, setStudentId] = useState('');
  const [certCode, setCertCode] = useState('');
  const [verifyResult, setVerifyResult] = useState<null | { valid: boolean; name: string; date: string; certId: string }>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certCode.trim()) return;
    setVerifyResult({
      valid: true,
      name: 'Constanza Morales Valenzuela',
      date: 'Vigente hasta 2029',
      certId: certCode.toUpperCase() || 'AMCLA-BPM-2026-9812',
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) return;
    setLoginSuccess(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
        {/* Header */}
        <div className="bg-[#0a2540] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="light" height={34} />
            <div className="border-l border-white/20 pl-3 hidden sm:block">
              <h3 className="font-bold text-base text-white leading-tight">Aula Virtual</h3>
              <p className="text-[11px] text-slate-300">Google Classroom &amp; Certificados</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-sm font-medium">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer ${
              activeTab === 'login'
                ? 'border-emerald-600 text-emerald-700 bg-white font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Ingreso Estudiante
          </button>
          <button
            onClick={() => setActiveTab('verify')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer ${
              activeTab === 'verify'
                ? 'border-emerald-600 text-emerald-700 bg-white font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Verificar Certificado QR
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'login' ? (
            loginSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">¡Bienvenido al Aula Virtual!</h4>
                <p className="text-sm text-slate-600">
                  Acceso confirmado a la plataforma de estudio BPM. Puedes continuar viendo los módulos y rendir la prueba final.
                </p>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-left text-sm space-y-1">
                  <p className="font-semibold text-emerald-900">Curso: Manipulación de Alimentos &amp; BPM</p>
                  <p className="text-emerald-700">Progreso: 4 de 5 Módulos completados (80%)</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setLoginSuccess(false)}
                    className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Volver
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-2.5 px-4 bg-[#059669] hover:bg-[#047857] text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Ir al Material
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Correo Electrónico o Cédula (C.C.) del Alumno
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ejemplo@correo.com o 1.020.345.678"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Contraseña / Código de Inscripción
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    defaultValue="AMCLA2026"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-emerald-600" />
                    <span>Recordar sesión</span>
                  </label>
                  <a href="#recuperar" className="text-emerald-700 hover:underline">
                    ¿Olvidaste tu acceso?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#059669] hover:bg-[#047857] text-white font-semibold rounded-lg shadow-md transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Ingresar a Mi Clase</span>
                </button>

                <div className="pt-2 text-center text-xs text-slate-500">
                  ¿Aún no te has matriculado?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenCheckout();
                    }}
                    className="font-semibold text-emerald-700 hover:underline cursor-pointer"
                  >
                    Comprar Curso BPM Aquí
                  </button>
                </div>
              </form>
            )
          ) : (
            /* Verify QR Tab */
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Código Único del Certificado o Escaneo QR
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Ej: AMCLA-BPM-2026-9812"
                    value={certCode}
                    onChange={(e) => setCertCode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all uppercase"
                  />
                  <QrCode className="w-5 h-5 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-md transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Validar Autenticidad</span>
              </button>

              {verifyResult && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Certificado Auténtico y Válido</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-700 pt-1">
                    <div>
                      <span className="text-slate-400 block">Titular:</span>
                      <strong className="text-slate-900">{verifyResult.name}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Estado:</span>
                      <strong className="text-emerald-700">{verifyResult.date}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block">Identificador:</span>
                      <code className="text-slate-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        {verifyResult.certId}
                      </code>
                    </div>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. MODAL: COMPRAR CURSO / CHECKOUT
// -------------------------------------------------------------
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenClassroom: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onOpenClassroom,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    metodoPago: 'pse',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0a2540] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="light" height={32} />
            <div className="border-l border-white/20 pl-3">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10.5px] font-semibold mb-0.5">
                <Sparkles className="w-3 h-3" /> Matrícula Inmediata 2026
              </div>
              <h3 className="font-bold text-base text-white leading-tight">Certificación Oficial BPM</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Resumen del curso con precio */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Curso Oficial BPM (Buenas Prácticas de Manufactura)</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Acceso 24/7 · Examen online · Certificado con QR (Válido Colombia)</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through">$75.000</div>
                  <div className="text-xl font-black text-emerald-700">$45.000 <span className="text-xs font-normal text-slate-500">COP</span></div>
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Nombre Completo (para el certificado)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Andrea Soto Morales"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-emerald-500 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Cédula de Ciudadanía (C.C.) / Pasaporte
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 1.020.345.678"
                    value={formData.rut}
                    onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-emerald-500 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Correo Electrónico (donde llegará tu acceso)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="andrea@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-emerald-500 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Teléfono Celular / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 123 4567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-emerald-500 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Medios de Pago */}
              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Selecciona Medio de Pago Seguro en Colombia
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <label className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-emerald-500 bg-emerald-50/50 cursor-pointer">
                    <input type="radio" name="pago" defaultChecked className="hidden" />
                    <CreditCard className="w-5 h-5 text-emerald-600 mb-1" />
                    <span className="font-semibold text-slate-800 text-center">PSE / Nequi / Daviplata</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 hover:border-slate-300 cursor-pointer">
                    <input type="radio" name="pago" className="hidden" />
                    <ShieldCheck className="w-5 h-5 text-slate-600 mb-1" />
                    <span className="font-semibold text-slate-800 text-center">Tarjetas Crédito / Débito</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 hover:border-slate-300 cursor-pointer">
                    <input type="radio" name="pago" className="hidden" />
                    <Send className="w-5 h-5 text-slate-600 mb-1" />
                    <span className="font-semibold text-slate-800 text-center">Bancolombia</span>
                  </label>
                </div>
              </div>

              {/* Botón de compra */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-lg shadow-lg shadow-emerald-950/20 text-base transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Pagar $45.000 COP y Comenzar Ahora</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Transacción Encriptada 256-bit
                </span>
                <span>·</span>
                <span>Garantía de Satisfacción 100%</span>
              </div>
            </form>
          ) : (
            /* Pantalla de Éxito */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">¡Inscripción Exitosa!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Hemos enviado tu factura electrónica de compra y credenciales de acceso a{' '}
                <strong className="text-slate-900">{formData.email || 'tu correo'}</strong>. Ya puedes ingresar al aula y obtener tu certificado.
              </p>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-left text-sm max-w-md mx-auto space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-600">Alumno:</span>
                  <strong className="text-slate-900">{formData.nombre || 'Andrea Soto Morales'}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Código de Matrícula:</span>
                  <strong className="text-emerald-800">AMCLA-2026-BPM-OK</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenClassroom();
                  }}
                  className="py-3 px-6 bg-[#059669] hover:bg-[#047857] text-white font-semibold rounded-lg shadow-md transition-colors"
                >
                  Entrar de Inmediato al Aula Virtual
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. MODAL: CURSO BPM & TEMARIO
// -------------------------------------------------------------
interface CourseInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const CourseInfoModal: React.FC<CourseInfoModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const modules = [
    {
      num: 'Módulo 1',
      title: 'Fundamentos de la Inocuidad & Peligros Alimentarios',
      desc: 'Microbiología básica de los alimentos, bacterias patógenas, virus, parásitos y peligros físicos y químicos.',
    },
    {
      num: 'Módulo 2',
      title: 'Buenas Prácticas de Manufactura (BPM) & POES',
      desc: 'Higiene personal del manipulador, lavado de manos, vestimenta reglamentaria y procedimientos de limpieza y sanitización.',
    },
    {
      num: 'Módulo 3',
      title: 'Control de Temperaturas y Cadena de Frío',
      desc: 'Zona de peligro de temperatura (5°C a 60°C), almacenamiento, descongelación segura y cocción adecuada.',
    },
    {
      num: 'Módulo 4',
      title: 'Prevención de Contaminación Cruzada & Alérgenos',
      desc: 'Manejo de tablas de colores, utensilios, almacenamiento separado y gestión de alérgenos alimentarios comunes.',
    },
    {
      num: 'Módulo 5',
      title: 'Normativa Sanitaria, Trazabilidad & Examen Final',
      desc: 'Requisitos sanitarios oficiales, preparación para fiscalizaciones sanitarias y evaluación final para certificado con QR.',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 max-h-[90vh] flex flex-col">
        <div className="bg-[#0a2540] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="light" height={32} />
            <div className="border-l border-white/20 pl-3">
              <h3 className="font-bold text-base text-white leading-tight">Plan de Estudios Oficial BPM</h3>
              <p className="text-[11px] text-slate-300">Programa formativo con certificación con código QR</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <Clock className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
              <div className="font-bold text-slate-900">40 Horas</div>
              <div className="text-slate-500">Cronológicas</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <Award className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
              <div className="font-bold text-slate-900">Certificado QR</div>
              <div className="text-slate-500">Válido 3 Años</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <Sparkles className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
              <div className="font-bold text-slate-900">100% Online</div>
              <div className="text-slate-500">A tu ritmo 24/7</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
              <div className="font-bold text-slate-900">Codex Alimentarius</div>
              <div className="text-slate-500">Estándar oficial</div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">Módulos de Aprendizaje</h4>
            {modules.map((m) => (
              <div key={m.num} className="p-3.5 bg-slate-50 hover:bg-emerald-50/40 rounded-xl border border-slate-200 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {m.num}
                  </span>
                  <h5 className="font-semibold text-sm text-slate-900">{m.title}</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-1">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div>
              <span className="text-xs text-slate-500">Inversión promocional Colombia:</span>
              <div className="text-xl font-black text-emerald-700">$45.000 COP <span className="text-xs font-normal text-slate-400 line-through ml-1">$75.000</span></div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full sm:w-auto py-3 px-6 bg-[#059669] hover:bg-[#047857] text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Matricularme en el Curso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. MODAL: CAPACITACIÓN PARA EMPRESAS
// -------------------------------------------------------------
interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporateModal: React.FC<CorporateModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
        <div className="bg-[#0a2540] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">AMCLA Empresas &amp; Plantas</h3>
              <p className="text-xs text-slate-300">Capacitación corporativa en BPM para equipos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">Solicitud de Cotización Recibida</h4>
              <p className="text-sm text-slate-600">
                Un asesor corporativo de AMCLA se contactará dentro de 2 horas hábiles con la propuesta y tarifa especial para tu empresa.
              </p>
              <button
                onClick={onClose}
                className="py-2.5 px-6 bg-[#059669] hover:bg-[#047857] text-white rounded-lg text-sm font-semibold"
              >
                Entendido
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Razón Social / Nombre de Empresa
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Alimentos y Servicios del Caribe S.A.S."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Número de Trabajadores
                  </label>
                  <select className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none bg-white">
                    <option>5 a 15 colaboradores</option>
                    <option>16 a 50 colaboradores</option>
                    <option>51 a 150 colaboradores</option>
                    <option>Más de 150 colaboradores</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Rubro / Industria
                  </label>
                  <select className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none bg-white">
                    <option>Restaurante / Cafetería</option>
                    <option>Planta Procesadora</option>
                    <option>Panadería / Pastelería</option>
                    <option>Casino / Catering</option>
                    <option>Supermercado / Distribuidor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Correo de Contacto (RRHH / Administración)
                </label>
                <input
                  type="email"
                  required
                  placeholder="rrhh@empresa.com.co"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0a2540] hover:bg-[#132a4a] text-white font-semibold rounded-lg text-sm mt-3 shadow-md"
              >
                Solicitar Cotización con Descuento Empresa
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. MODAL: CONTACTO & WHATSAPP
// -------------------------------------------------------------
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
        <div className="bg-[#0a2540] text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-white">Contacto Directo AMCLA</h3>
            <p className="text-xs text-slate-300">Estamos disponibles para asistirte con tu matrícula</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <a
            href="https://wa.me/573001234567?text=Hola,%20quisiera%20información%20sobre%20el%20curso%20de%20Manipulación%20de%20Alimentos%20y%20BPM%20en%20Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100/60 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 group-hover:text-emerald-800">WhatsApp Inmediato</div>
              <div className="text-xs text-slate-600">+57 300 123 4567 · Atención en Colombia</div>
            </div>
          </a>

          <a
            href="mailto:contacto@amcla.co"
            className="flex items-center gap-3.5 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">Correo Electrónico</div>
              <div className="text-xs text-slate-600">contacto@amcla.co / soporte@amcla.co</div>
            </div>
          </a>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-800">Horarios de Soporte Docente:</p>
            <p>Lunes a Viernes: 08:30 a 20:00 hrs</p>
            <p>Sábados: 09:00 a 14:00 hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
