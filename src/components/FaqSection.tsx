import React, { useState, useId } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'validez-legal',
    category: 'Validez',
    question: '¿El certificado tiene validez legal ante el INVIMA y las Secretarías de Salud?',
    answer:
      'Sí, 100%. Nuestra certificación cumple de manera estricta con la Resolución 2674 de 2013 del Ministerio de Salud y Protección Social (Minsalud), el Decreto 3075 de 1997 y las directrices del Codex Alimentarius (FAO/OMS). Es legalmente válido a nivel nacional en Colombia para auditorías e inspecciones de Secretarías de Salud municipales y distritales (incluyendo Santander de Quilichao y el departamento del Cauca, Cali, Bogotá, Medellín, Barranquilla, Bucaramanga), fiscalizaciones del INVIMA, programas de alimentación (como el PAE) y contratación en restaurantes, hoteles, empresas de catering, casinos y plantas procesadoras.',
  },
  {
    id: 'precio-incluye',
    category: 'Precios',
    question: '¿Cuánto cuesta el curso y qué incluye el valor de $45.000 COP?',
    answer:
      'El curso tiene un valor promocional de $45.000 COP (antes $75.000 COP) como pago único total, sin cobros ocultos ni mensualidades. Incluye acceso 24/7 al aula virtual, material descargable en PDF, evaluaciones con intentos ilimitados y emisión inmediata del certificado oficial con código QR único y diploma digital en alta resolución listo para imprimir o presentar digitalmente.',
  },
  {
    id: 'vigencia-certificado',
    category: 'Validez',
    question: '¿Cuál es la vigencia de la certificación BPM en Colombia y cuándo debe renovarse?',
    answer:
      'En Colombia, conforme al Artículo 12 de la Resolución 2674 de 2013 del Ministerio de Salud, la capacitación en manipulación de alimentos debe actualizarse de forma anual (mínimo 10 horas anuales). Por ello, el certificado cuenta con vigencia de 1 año calendario. La fecha de expedición y vigencia quedan registradas en el diploma y en la base de datos pública verificable en línea de AMCLA.',
  },
  {
    id: 'tiempo-duracion',
    category: 'Metodología',
    question: '¿Cuánto tiempo demora el curso y en qué momento recibo mi certificado?',
    answer:
      'El programa está estructurado para completarse en 2 a 3 horas de estudio. Al ser 100% online y asincrónica, avanzas a tu propio ritmo. Tan pronto como apruebas el examen final (nota mínima de 80%), el sistema genera automáticamente tu certificado con código QR para descarga inmediata en formato PDF.',
  },
  {
    id: 'reprobar-examen',
    category: 'Metodología',
    question: '¿Qué sucede si no apruebo la evaluación al primer intento?',
    answer:
      'Cuentas con intentos ilimitados sin ningún costo adicional. Si no alcanzas el porcentaje mínimo, la plataforma te muestra los contenidos a reforzar para que repases y rindas la prueba nuevamente cuando te sientas preparado.',
  },
  {
    id: 'verificacion-qr',
    category: 'Validez',
    question: '¿Cómo puede un empleador o fiscalizador sanitario verificar la autenticidad del diploma?',
    answer:
      'Cada diploma emitido por AMCLA incorpora un código de folio correlativo y un código QR dinámico. Cualquier empleador o fiscalizador sanitario puede escanear el código QR con su teléfono o ingresar el folio en el portal de validación para corroborar en tiempo real: nombre del alumno, Cédula de Ciudadanía (C.C.), porcentaje de aprobación, fecha de emisión y vigencia.',
  },
  {
    id: 'empresas-factura',
    category: 'Empresas',
    question: '¿Emiten factura electrónica DIAN y tienen convenios para empresas?',
    answer:
      'Sí. Emitimos factura electrónica válida ante la DIAN y disponemos de tarifas corporativas por volumen a partir de 5 colaboradores. Proporcionamos además una consola de administración para que Gestión Humana o Seguridad y Salud en el Trabajo (SST) supervise el avance y descargue los certificados de toda su dotación.',
  },
];

interface FaqSectionProps {
  onOpenCheckout: () => void;
  onOpenContact: () => void;
  onOpenCorporate: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenCheckout,
  onOpenContact,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(['validez-legal', 'precio-incluye']);
  const baseId = useId();

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => setOpenIds(FAQ_DATA.map((item) => item.id));
  const collapseAll = () => setOpenIds([]);

  return (
    <section
      id="preguntas-frecuentes"
      aria-label="Preguntas Frecuentes sobre la Certificación BPM"
      className="w-full py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO EDITORIAL CON PLAYFAIR DISPLAY CURSIVA */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Preguntas frecuentes sobre la certificación y tu{' '}
            <em className="font-serif-italic font-normal text-emerald-700 not-italic">
              acreditación BPM
            </em>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Claridad total sobre validez sanitaria ante Secretarías de Salud e INVIMA, precios en Colombia ($ COP) y descarga inmediata con código QR.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Expandir todas
            </button>
            <span className="text-slate-300">·</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Colapsar todas
            </button>
          </div>
        </div>

        {/* LISTA LIMPIA, SIN CAJAS NI LÍNEAS EXCESIVAS */}
        <div className="max-w-3xl mx-auto divide-y divide-slate-200/70" role="region" aria-label="Lista de preguntas">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const questionId = `${baseId}-q-${faq.id}`;
            const answerId = `${baseId}-a-${faq.id}`;

            return (
              <div key={faq.id} className="py-5 sm:py-6 group">
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left flex items-start justify-between gap-4 focus-ring cursor-pointer group-hover:text-emerald-800 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 leading-snug transition-colors pr-2">
                      {faq.question}
                    </span>

                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 mt-0.5 ${
                        isOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="pt-3 pb-2 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl animate-in fade-in duration-150"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* LLAMADO A LA ACCIÓN DISCRETO */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            ¿Tienes otra consulta específica?{' '}
            <button
              type="button"
              onClick={onOpenContact}
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4 cursor-pointer"
            >
              Contactar a un asesor académico
            </button>
            {' '}o{' '}
            <button
              type="button"
              onClick={onOpenCheckout}
              className="text-slate-900 hover:text-emerald-700 font-semibold underline underline-offset-4 cursor-pointer"
            >
              inscribirte ahora por $14.990
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
