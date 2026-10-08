import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import {
  Play,
  CheckCircle2,
  AlertCircle,
  Lock,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Award,
  ArrowLeft,
  HelpCircle,
  FileCheck,
  Check,
  X,
  GraduationCap,
  Sparkles,
  BookOpen,
  Printer,
  QrCode,
  ShieldCheck,
  Clock
} from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CourseModule {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  youtubeId: string;
  duration: string;
  questions: QuizQuestion[];
}

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'Tema 1: Introducción a la Manipulación de Alimentos',
    shortTitle: '1. Introducción',
    description:
      'Conceptos fundamentales de inocuidad, responsabilidades legales del manipulador de alimentos bajo normativa sanitaria y prevención de peligros alimentarios.',
    youtubeId: '_G3mkUkZUFI',
    duration: '12 min',
    questions: [
      {
        id: 1,
        question: '¿Quién se considera un "manipulador de alimentos" según la normativa sanitaria?',
        options: [
          'Únicamente los chefs y maestros de cocina en restaurantes de alta cocina.',
          'Toda persona que interviene directamente en la preparación, fabricación, envasado, almacenamiento, transporte y distribución de alimentos.',
          'Exclusivamente los transportistas de materias primas cárnicas.',
          'Solo los inspectores de sanidad y auditores de calidad.',
        ],
        correctAnswer: 1,
        explanation:
          'La normativa sanitaria define como manipulador a toda persona que tiene contacto directo o indirecto con los alimentos en cualquier etapa de la cadena alimentaria.',
      },
      {
        id: 2,
        question: '¿Cuál es el objetivo principal de las Buenas Prácticas de Manufactura (BPM)?',
        options: [
          'Reducir los costos de compra de ingredientes.',
          'Acelerar el despacho de pedidos en horas pico de atención.',
          'Garantizar la inocuidad de los alimentos para proteger la salud del consumidor.',
          'Sustituir los procesos de lavado con desinfectantes aromáticos.',
        ],
        correctAnswer: 2,
        explanation:
          'Las BPM tienen como meta garantizar que los alimentos se elaboren en condiciones higiénicas óptimas, libres de contaminantes que pongan en riesgo la salud.',
      },
      {
        id: 3,
        question: '¿Qué define a un "alimento inocuo"?',
        options: [
          'Aquel que posee un empaque llamativo y buen aroma.',
          'Aquel que está libre de peligros biológicos, químicos y físicos que puedan causar daño a la salud.',
          'Aquel que no requiere refrigeración bajo ninguna circunstancia.',
          'Aquel que ha sido congelado al menos dos veces consecutivas.',
        ],
        correctAnswer: 1,
        explanation:
          'La inocuidad es la garantía de que un alimento no causará daño al consumidor cuando sea preparado e ingerido según su uso previsto.',
      },
    ],
  },
  {
    id: 2,
    title: 'Tema 2: Higiene y Manipulación de Alimentos – Parte 1',
    shortTitle: '2. Higiene del Personal',
    description:
      'Protocolos estrictos de higiene personal, técnica reglamentaria de lavado de manos, vestimenta adecuada y hábitos prohibidos en zonas de producción.',
    youtubeId: 'XrCwO1B-zJI',
    duration: '14 min',
    questions: [
      {
        id: 1,
        question: '¿Cuál es el tiempo mínimo y la técnica recomendada para el lavado de manos con agua potable y jabón?',
        options: [
          'De 3 a 5 segundos con agua fría solamente.',
          'Fricción de 20 a 40 segundos cubriendo palmas, dorso, espacio entre dedos, muñecas y uñas.',
          'Aplicar alcohol en gel directamente sobre manos con grasa sin enjuagar.',
          'Lavar únicamente al finalizar la jornada laboral.',
        ],
        correctAnswer: 1,
        explanation:
          'El lavado eficaz requiere fricción vigorosa durante al menos 20 a 40 segundos con agua y jabón, seguido de secado con toalla de papel desechable o aire.',
      },
      {
        id: 2,
        question: 'Respecto a la vestimenta reglamentaria del manipulador, ¿cuál norma es obligatoria?',
        options: [
          'Se permite ropa de calle siempre que esté planchada.',
          'Uso de uniforme de color claro, cofia que cubra la totalidad del cabello, calzado cerrado y ausencia total de joyas o accesorios.',
          'Se pueden usar anillos y reloj de pulso si se cubren con servilletas.',
          'El uso de cofia es opcional si el cabello está corto.',
        ],
        correctAnswer: 1,
        explanation:
          'El uniforme debe ser de uso exclusivo para el trabajo, de color claro para detectar suciedad, con cofia para evitar caída de cabellos y sin joyas que acumulen bacterias.',
      },
      {
        id: 3,
        question: 'Si un manipulador presenta una herida infectada o síntomas de gastroenteritis (vómito o diarrea):',
        options: [
          'Puede seguir cocinando si usa doble par de guantes de látex.',
          'Debe apartarse inmediatamente de la manipulación directa de alimentos y notificar a su jefe inmediato.',
          'Debe limitarse a preparar ensaladas y postres fríos.',
          'Puede trabajar si toma una bebida caliente antes de iniciar su turno.',
        ],
        correctAnswer: 1,
        explanation:
          'Un manipulador enfermo o con heridas infectadas es una fuente directa de contaminación bacteriana (como Staphylococcus o Norovirus) y debe ser reubicado o incapacitado.',
      },
    ],
  },
  {
    id: 3,
    title: 'Tema 3: Vías de Contaminación de los Alimentos',
    shortTitle: '3. Vías de Contaminación',
    description:
      'Peligros físicos, químicos y biológicos. Mecanismos de contaminación cruzada directa e indirecta y uso de código de colores en utensilios.',
    youtubeId: 'f3qtAbqJHQ4',
    duration: '15 min',
    questions: [
      {
        id: 1,
        question: '¿Qué es la contaminación cruzada indirecta?',
        options: [
          'Cuando dos alimentos crudos se almacenan en el mismo refrigerador en recipientes herméticos.',
          'La transferencia de microorganismos de un alimento crudo a uno listo para consumo a través de tablas, cuchillos, superficies o manos sin lavar.',
          'El calentamiento excesivo de un alimento cocinado.',
          'La adición de sal en exceso durante la cocción.',
        ],
        correctAnswer: 1,
        explanation:
          'Ocurre cuando utensilios o superficies previamente usadas con alimentos crudos contaminados entran en contacto con alimentos cocidos o listos para consumo.',
      },
      {
        id: 2,
        question: '¿Cuál es el propósito del código de colores en las tablas de picar (ej: roja para carnes rojas, verde para vegetales)?',
        options: [
          'Decorar la cocina para inspecciones de protocolo.',
          'Evitar la contaminación cruzada entre alimentos de distinto origen y estado de cocción.',
          'Determinar qué cocinero es responsable de cada área.',
          'Acelerar el afilado de los cuchillos de acero.',
        ],
        correctAnswer: 1,
        explanation:
          'El código de colores estandariza la separación física de materias primas (carnes crudas, aves, pescados, vegetales y cocidos), previniendo contaminación cruzada.',
      },
      {
        id: 3,
        question: 'La presencia de una grapa, astilla de madera o vidrio en un alimento representa un peligro de tipo:',
        options: [
          'Peligro biológico.',
          'Peligro físico.',
          'Peligro químico.',
          'Peligro nutricional.',
        ],
        correctAnswer: 1,
        explanation:
          'Los peligros físicos son cuerpos extraños sólidos capaces de causar asfixia, cortes o perforaciones en el tracto digestivo del comensal.',
      },
    ],
  },
  {
    id: 4,
    title: 'Tema 4: Bromatología - Enfermedades Transmitidas por Alimentos (ETAs)',
    shortTitle: '4. ETAs y Microorganismos',
    description:
      'Infecciones e intoxicaciones alimentarias, microorganismos patógenos críticos (Salmonella, E. coli, Listeria) y control riguroso de la Zona de Peligro de Temperatura.',
    youtubeId: 'hMGHeJKHSdo',
    duration: '16 min',
    questions: [
      {
        id: 1,
        question: '¿Cuál es el rango de temperatura conocido como "Zona de Peligro" donde las bacterias se multiplican rápidamente?',
        options: [
          'Entre -18°C y 0°C.',
          'Entre 5°C y 60°C.',
          'Superior a 75°C en todo momento.',
          'Entre 85°C y 100°C.',
        ],
        correctAnswer: 1,
        explanation:
          'Entre 5°C y 60°C las bacterias patógenas encuentran la temperatura ideal para multiplicarse exponencialmente cada 15 a 20 minutos.',
      },
      {
        id: 2,
        question: '¿Cuál es la diferencia fundamental entre una infección y una intoxicación alimentaria?',
        options: [
          'No existe ninguna diferencia; son términos sinónimos.',
          'La infección es causada por ingerir microorganismos vivos patógenos; la intoxicación ocurre al ingerir toxinas preformadas por bacterias o sustancias químicas.',
          'La infección solo afecta a niños y la intoxicación a adultos.',
          'La intoxicación solo dura 10 minutos sin síntomas digestivos.',
        ],
        correctAnswer: 1,
        explanation:
          'En la infección los microorganismos se multiplican dentro del cuerpo; en la intoxicación el daño es producido por la toxina química o bacteriana ya presente en el alimento.',
      },
      {
        id: 3,
        question: 'Para garantizar la destrucción de Salmonella en carnes de ave y huevos, la cocción interna debe alcanzar como mínimo:',
        options: [
          '45°C en el centro de la pieza.',
          '74°C a 75°C en el centro térmico del alimento.',
          '55°C durante 10 segundos.',
          'Cualquier temperatura mientras la superficie esté dorada.',
        ],
        correctAnswer: 1,
        explanation:
          'Alcanzar mínimo 74°C en el punto más frío o centro térmico asegura la pasteurización y destrucción térmica de Salmonella y otros patógenos comunes en aves.',
      },
    ],
  },
];

export const FINAL_EXAM_QUESTIONS: QuizQuestion[] = [
  {
    id: 101,
    question: 'Bajo la Resolución 2674 de 2013 en Colombia, ¿con qué frecuencia mínima debe capacitarse anualmente el manipulador de alimentos?',
    options: [
      'Cada 5 años.',
      'Al menos una vez al año con un plan continuo mínimo de 10 horas anuales.',
      'Solo al momento de ser contratado.',
      'Cada 6 meses únicamente si hay quejas de clientes.',
    ],
    correctAnswer: 1,
    explanation:
      'La Resolución 2674 de 2013 estipula capacitación anual continua de mínimo 10 horas para todo el personal manipulador.',
  },
  {
    id: 102,
    question: '¿Cuál es la temperatura máxima reglamentaria para la conservación de alimentos perecederos refrigerados?',
    options: [
      '12°C o menos.',
      '4°C a 5°C o menos.',
      '18°C para alimentos cocidos.',
      '20°C a temperatura ambiente controlada.',
    ],
    correctAnswer: 1,
    explanation:
      'La refrigeración segura debe mantenerse entre 0°C y 4°C (máximo 5°C) para frenar la multiplicación microbiana.',
  },
  {
    id: 103,
    question: '¿Cuál es el método seguro y autorizado para descongelar alimentos crudos?',
    options: [
      'Dejarlos a temperatura ambiente sobre el mesón durante toda la noche.',
      'Sumergirlos en un recipiente con agua tibia estancada.',
      'En refrigeración a 4°C, en microondas como parte de cocción inmediata, o bajo chorro continuo de agua fría potable.',
      'Colocarlos directamente cerca a la estufa caliente.',
    ],
    correctAnswer: 2,
    explanation:
      'Descongelar en refrigeración evita que las capas externas del alimento ingresen a la zona de peligro mientras el centro sigue congelado.',
  },
  {
    id: 104,
    question: '¿Qué significa el principio FIFO / PEPS en la gestión de materias primas?',
    options: [
      'Primero en Facturar, Primero en Servir.',
      'Primero en Entrar, Primero en Salir (consumir primero lo que tiene fecha de vencimiento más próxima).',
      'Plato Frío, Plato Servido.',
      'Preparación Inmediata de Frutas Orgánicas.',
    ],
    correctAnswer: 1,
    explanation:
      'El sistema PEPS / FIFO asegura la rotación adecuada, utilizando primero los insumos recibidos con anterioridad o más próximos a vencer.',
  },
  {
    id: 105,
    question: '¿Qué acción es estrictamente obligatoria antes de iniciar la desinfección de una superficie de trabajo?',
    options: [
      'Aplicar cloro concentrado directamente sobre restos de comida.',
      'Realizar una limpieza previa profunda con agua y detergente para retirar grasa y materia orgánica.',
      'Encender ventiladores para secar la suciedad.',
      'Rociar perfume desodorizante.',
    ],
    correctAnswer: 1,
    explanation:
      'Los desinfectantes pierden su efecto en presencia de materia orgánica o grasa; primero se lava con detergente y luego se desinfecta.',
  },
  {
    id: 106,
    question: '¿Por qué está estrictamente prohibido usar anillos, aretes, reloj o pulseras en la cocina?',
    options: [
      'Por razones exclusivamente de etiqueta y presentación social.',
      'Porque acumulan bacterias difíciles de desinfectar y representan un peligro físico si caen en la comida.',
      'Porque pueden rayar los mesones de acero inoxidable.',
      'No está prohibido si el operario usa delantal limpio.',
    ],
    correctAnswer: 1,
    explanation:
      'Las joyas son reservorios de suciedad y bacterias bajo anillos/relojes, además de constituir un peligro físico de contaminación por caída accidental.',
  },
  {
    id: 107,
    question: 'En el almacenamiento en refrigeradores verticales, ¿dónde deben ubicarse las carnes crudas respecto a los alimentos cocidos?',
    options: [
      'En la parte superior para que reciban más frío directo.',
      'En los estantes inferiores, por debajo de los alimentos listos para consumo o cocidos.',
      'Mezclados en el mismo estante siempre que haya espacio.',
      'En la puerta del refrigerador.',
    ],
    correctAnswer: 1,
    explanation:
      'Las carnes crudas van en la parte inferior para evitar que sus jugos goteen sobre alimentos cocidos o listos para consumo (contaminación cruzada).',
  },
  {
    id: 108,
    question: '¿Cuál de los siguientes microorganismos suele estar asociado al manipulador que tose o estornuda cerca a los alimentos sin protección?',
    options: [
      'Staphylococcus aureus.',
      'Clostridium botulinum.',
      'Listeria monocytogenes en lácteos pasteurizados.',
      'Bacillus cereus exclusivamente en arroz crudo.',
    ],
    correctAnswer: 0,
    explanation:
      'Staphylococcus aureus habita comúnmente en la piel, nariz, garganta y heridas de los seres humanos y se transfiere por mala higiene respiratoria o manual.',
  },
  {
    id: 109,
    question: '¿A qué temperatura mínima deben mantenerse los alimentos calientes durante el servicio de buffet o autoservicio?',
    options: [
      'Mínimo a 40°C.',
      'Mínimo a 60°C o más en todo momento.',
      'A temperatura ambiente durante 6 horas.',
      'A 50°C si se tapan con papel aluminio.',
    ],
    correctAnswer: 1,
    explanation:
      'Los alimentos calientes en exhibición o servicio deben conservarse a más de 60°C para mantenerse fuera de la Zona de Peligro.',
  },
  {
    id: 110,
    question: '¿Cuál es el procedimiento adecuado si se detecta que un producto enlatado presenta abombamiento o abolladuras severas en las junturas?',
    options: [
      'Hervirlo a fuego alto durante 5 minutos y servirlo inmediatamente.',
      'Rechazarlo o desecharlo de inmediato, ya que el abombamiento puede indicar proliferación de Clostridium botulinum.',
      'Perforar la lata para liberar el gas y almacenar en plástico.',
      'Consumirlo en las siguientes 24 horas.',
    ],
    correctAnswer: 1,
    explanation:
      'Las latas abombadas, oxidadas o con golpes en cierres presentan alto riesgo de toxina botulínica (botulismo), un peligro biológico potencialmente mortal.',
  },
];

interface AulaVirtualProps {
  onBackToHome: () => void;
  onOpenCheckout?: () => void;
}

export const AulaVirtual: React.FC<AulaVirtualProps> = ({ onBackToHome, onOpenCheckout }) => {
  // Current active view state:
  // step: 'module-video' | 'module-quiz' | 'final-exam' | 'certificate'
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<'video' | 'quiz' | 'final-exam' | 'certificate'>('video');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Student name for certificate
  const [studentName, setStudentName] = useState<string>('Andrea Carolina Soto Morales');
  const [studentDoc, setStudentDoc] = useState<string>('1.020.345.678');

  // Progress state saved in localStorage:
  // completedModules: array of module ids that completed their quiz with 100%
  const [completedModules, setCompletedModules] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('amcla_completed_modules');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Final exam score state
  const [finalExamPassed, setFinalExamPassed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('amcla_final_passed') === 'true';
    } catch {
      return false;
    }
  });

  const [finalScore, setFinalScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('amcla_final_score');
      return saved ? Number(saved) : 0;
    } catch {
      return 0;
    }
  });

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizAllCorrect, setQuizAllCorrect] = useState<boolean>(false);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('amcla_completed_modules', JSON.stringify(completedModules));
    } catch (e) {
      console.warn(e);
    }
  }, [completedModules]);

  useEffect(() => {
    try {
      localStorage.setItem('amcla_final_passed', String(finalExamPassed));
      localStorage.setItem('amcla_final_score', String(finalScore));
    } catch (e) {
      console.warn(e);
    }
  }, [finalExamPassed, finalScore]);

  // Current active module
  const currentModule = COURSE_MODULES[activeModuleIndex];

  // Calculate overall progress:
  // Total steps = 4 modules (videos + quiz) + 1 final exam = 5 steps
  const totalTasks = 5;
  const completedTasksCount = completedModules.length + (finalExamPassed ? 1 : 0);
  const progressPercent = Math.round((completedTasksCount / totalTasks) * 100);

  // Helper: check if a module is unlocked
  // Module 0 is always unlocked.
  // Module N is unlocked if module N-1 is in completedModules
  const isModuleUnlocked = (index: number) => {
    if (index === 0) return true;
    const prevModule = COURSE_MODULES[index - 1];
    return completedModules.includes(prevModule.id);
  };

  const isFinalExamUnlocked = () => {
    // All 4 modules must be completed with 100%
    return COURSE_MODULES.every((m) => completedModules.includes(m.id));
  };

  // Switch to a module video
  const handleSelectModuleVideo = (index: number) => {
    if (!isModuleUnlocked(index)) return;
    setActiveModuleIndex(index);
    setCurrentStep('video');
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setIsSidebarOpen(false);
  };

  // Switch to a module quiz
  const handleOpenModuleQuiz = (index: number) => {
    if (!isModuleUnlocked(index)) return;
    setActiveModuleIndex(index);
    setCurrentStep('quiz');
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setIsSidebarOpen(false);
  };

  // Switch to final exam
  const handleOpenFinalExam = () => {
    if (!isFinalExamUnlocked()) return;
    setCurrentStep('final-exam');
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setIsSidebarOpen(false);
  };

  // Reset quiz state when switching questions
  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  // Evaluate module quiz (Needs 100% correct)
  const handleSubmitModuleQuiz = () => {
    const questions = currentModule.questions;
    let correctCount = 0;

    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const is100 = correctCount === questions.length;
    setQuizScore(correctCount);
    setQuizSubmitted(true);
    setQuizAllCorrect(is100);

    if (is100) {
      if (!completedModules.includes(currentModule.id)) {
        setCompletedModules((prev) => [...prev, currentModule.id]);
      }
    }
  };

  // Retry module quiz
  const handleRetryModuleQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizAllCorrect(false);
  };

  // Move to next step after 100% quiz
  const handleAdvanceToNext = () => {
    if (activeModuleIndex < COURSE_MODULES.length - 1) {
      // Go to next module video
      handleSelectModuleVideo(activeModuleIndex + 1);
    } else {
      // All 4 modules complete, open final exam
      handleOpenFinalExam();
    }
  };

  // Evaluate Final Exam (Needs 85% or higher, i.e. >= 9 of 10)
  const handleSubmitFinalExam = () => {
    let correctCount = 0;
    FINAL_EXAM_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / FINAL_EXAM_QUESTIONS.length) * 100);
    setFinalScore(percent);
    setQuizScore(correctCount);
    setQuizSubmitted(true);

    if (percent >= 85) {
      setFinalExamPassed(true);
    }
  };

  // Retry final exam
  const handleRetryFinalExam = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // Restart all course progress
  const handleResetCourseProgress = () => {
    if (window.confirm('¿Deseas reiniciar tu progreso en el aula virtual?')) {
      setCompletedModules([]);
      setFinalExamPassed(false);
      setFinalScore(0);
      setActiveModuleIndex(0);
      setCurrentStep('video');
      setSelectedAnswers({});
      setQuizSubmitted(false);
      localStorage.removeItem('amcla_completed_modules');
      localStorage.removeItem('amcla_final_passed');
      localStorage.removeItem('amcla_final_score');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* 1. TOP HEADER DEL AULA VIRTUAL */}
      <header className="sticky top-0 z-30 w-full bg-[#0a2540] border-b border-white/10 text-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
          {/* Left: Volver a inicio & Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white px-2.5 py-1.5 rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
              title="Volver a la página principal de AMCLA"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver al Sitio</span>
            </button>

            <span className="h-5 w-px bg-white/20 hidden sm:inline" />

            <div className="flex items-center gap-2">
              <Logo variant="light" height={32} />
              <div className="hidden lg:block pl-2 border-l border-white/15">
                <p className="text-xs font-semibold text-white tracking-wide">Aula Virtual Oficial</p>
                <p className="text-[11px] text-slate-300">Curso de Manipulación de Alimentos y BPM</p>
              </div>
            </div>
          </div>

          {/* Center / Right: Progress indicator & Controls */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Barra de progreso rápida */}
            <div className="hidden sm:flex flex-col items-end gap-1 min-w-[160px] md:min-w-[200px]">
              <div className="flex items-center justify-between w-full text-xs text-slate-300">
                <span>Progreso:</span>
                <span className="font-bold text-emerald-400">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-white/15 rounded-sm overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Botón de Temario (solo en pantallas móviles/tablets donde la barra lateral no está fija) */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/15 px-3 py-2 rounded-sm border border-white/20 transition-colors cursor-pointer focus-ring"
              aria-label="Abrir temario y módulos"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Temario</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN LAYOUT: CONTENIDO CENTRAL + SLIDE / SIDEBAR */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* PANEL PRINCIPAL (8 o 12 COLUMNAS) */}
        <main className="lg:col-span-8 flex flex-col space-y-6">
          {/* STEP 1: VISUALIZACIÓN DE VIDEO EDUCATIVO */}
          {currentStep === 'video' && (
            <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs overflow-hidden">
              {/* Encabezado del Tema */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                    <span>Módulo {currentModule.id} de 4</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {currentModule.duration}
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {currentModule.title}
                  </h1>
                </div>

                {completedModules.includes(currentModule.id) ? (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Quiz Aprobado (100%)</span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 font-medium">
                    Video obligatorio para avanzar
                  </span>
                )}
              </div>

              {/* Reproductor de Video de YouTube en proporción 16:9 */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentModule.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
                  title={currentModule.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Descripción y Acciones del Video */}
              <div className="p-5 sm:p-7 space-y-5">
                <div>
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Resumen del Contenido Pedagógico
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {currentModule.description}
                  </p>
                </div>

                {/* Banner de llamada al Quiz */}
                <div className="p-4 sm:p-5 rounded-md bg-[#0a2540]/5 border border-[#0a2540]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                      <HelpCircle className="w-4 h-4 text-emerald-600" />
                      <span>Evaluación Formativa del Módulo</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Responde 3 preguntas sobre el video. Debes contestar el{' '}
                      <strong className="text-slate-900">100% de forma correcta</strong> para desbloquear el siguiente tema.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenModuleQuiz(activeModuleIndex)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#059669] hover:bg-[#047857] text-white text-sm font-semibold rounded-sm transition-colors shadow-xs flex-shrink-0 cursor-pointer"
                  >
                    <span>{completedModules.includes(currentModule.id) ? 'Repetir Quiz' : 'Comenzar Quiz (3 Preguntas)'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: QUIZ POR MÓDULO (Requiere 100%) */}
          {currentStep === 'quiz' && (
            <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-6 sm:p-8 space-y-6">
              {/* Header del Quiz */}
              <div className="border-b border-slate-100 pb-5">
                <button
                  onClick={() => setCurrentStep('video')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Volver al video del tema</span>
                </button>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Quiz Formativo: {currentModule.shortTitle}
                  </h1>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700 self-start sm:self-auto">
                    Condición: 100% Correctas
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Lee con atención cada enunciado y selecciona la opción correcta basada en la capacitación.
                </p>
              </div>

              {/* Lista de Preguntas */}
              <div className="space-y-6">
                {currentModule.questions.map((q, qIndex) => {
                  const isSelected = selectedAnswers[q.id] !== undefined;
                  const isAnswerCorrect = selectedAnswers[q.id] === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 sm:p-5 rounded-md border transition-colors ${
                        quizSubmitted
                          ? isAnswerCorrect
                            ? 'bg-emerald-50/40 border-emerald-200'
                            : 'bg-red-50/40 border-red-200'
                          : 'bg-slate-50/50 border-slate-200/70'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-sm bg-slate-800 text-white font-bold text-xs flex-shrink-0 mt-0.5">
                          {qIndex + 1}
                        </span>
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                          {q.question}
                        </h3>
                      </div>

                      {/* Opciones */}
                      <div className="space-y-2 mt-3 ml-0 sm:ml-9">
                        {q.options.map((opt, optIndex) => {
                          const isOptionSelected = selectedAnswers[q.id] === optIndex;
                          const isThisOptionCorrect = q.correctAnswer === optIndex;

                          let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-400';

                          if (quizSubmitted) {
                            if (isThisOptionCorrect) {
                              optionStyle = 'bg-emerald-100/70 border-emerald-500 text-emerald-950 font-medium';
                            } else if (isOptionSelected && !isThisOptionCorrect) {
                              optionStyle = 'bg-red-100/70 border-red-500 text-red-950 line-through';
                            } else {
                              optionStyle = 'bg-white/50 border-slate-200 text-slate-400';
                            }
                          } else if (isOptionSelected) {
                            optionStyle = 'bg-emerald-50 border-emerald-600 text-emerald-900 font-medium';
                          }

                          return (
                            <button
                              key={optIndex}
                              type="button"
                              disabled={quizSubmitted}
                              onClick={() => handleOptionSelect(q.id, optIndex)}
                              className={`w-full text-left p-3 rounded-sm border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                                  isOptionSelected
                                    ? 'border-emerald-600 bg-emerald-600 text-white'
                                    : 'border-slate-300'
                                }`}
                              >
                                {isOptionSelected && <Check className="w-3 h-3" />}
                              </span>
                              <span className="leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Explicación post-envío si hubo error */}
                      {quizSubmitted && (
                        <div
                          className={`mt-4 pt-3 border-t text-xs leading-relaxed ${
                            isAnswerCorrect ? 'border-emerald-200 text-emerald-800' : 'border-red-200 text-red-800'
                          }`}
                        >
                          <strong>{isAnswerCorrect ? '✓ Correcto:' : '✕ Retroalimentación:'}</strong>{' '}
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Botón de Enviar o Resultado */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                {!quizSubmitted ? (
                  <>
                    <p className="text-xs text-slate-500">
                      Preguntas respondidas:{' '}
                      <strong className="text-slate-800">
                        {Object.keys(selectedAnswers).length} de {currentModule.questions.length}
                      </strong>
                    </p>

                    <button
                      onClick={handleSubmitModuleQuiz}
                      disabled={Object.keys(selectedAnswers).length < currentModule.questions.length}
                      className="w-full sm:w-auto px-7 py-3 bg-[#059669] hover:bg-[#047857] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-sm transition-colors cursor-pointer"
                    >
                      Calificar Respuestas
                    </button>
                  </>
                ) : (
                  <div className="w-full space-y-4">
                    {quizAllCorrect ? (
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-emerald-950 text-sm">
                              ¡Felicitaciones! Calificación perfecta (100%)
                            </h4>
                            <p className="text-xs text-emerald-800">
                              Has superado con éxito el {currentModule.shortTitle}. El siguiente módulo ha sido desbloqueado.
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleAdvanceToNext}
                          className="px-6 py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                        >
                          <span>{activeModuleIndex < COURSE_MODULES.length - 1 ? 'Siguiente Módulo' : 'Ir al Examen Final'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-amber-950 text-sm">
                              Puntaje obtenido: {quizScore} de {currentModule.questions.length}
                            </h4>
                            <p className="text-xs text-amber-800">
                              Se requiere 100% de aciertos para avanzar. Revisa las retroalimentaciones y reintenta sin penalización.
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleRetryModuleQuiz}
                          className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Repetir Quiz</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: EXAMEN FINAL (Requiere 85%) */}
          {currentStep === 'final-exam' && (
            <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-6 sm:p-8 space-y-6">
              {/* Encabezado del Examen */}
              <div className="border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Evaluación Sumativa Definitiva</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Examen Final de Certificación BPM & Manipulación de Alimentos
                </h1>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Consta de 10 preguntas integradoras que evalúan todos los temas vistos. Para aprobar y obtener tu diploma oficial con código QR se requiere una calificación mínima del{' '}
                  <strong className="text-slate-900">85% (mínimo 9 preguntas correctas)</strong>.
                </p>
              </div>

              {/* Lista de Preguntas del Examen Final */}
              <div className="space-y-6">
                {FINAL_EXAM_QUESTIONS.map((q, qIndex) => {
                  const isSelected = selectedAnswers[q.id] !== undefined;
                  const isAnswerCorrect = selectedAnswers[q.id] === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 sm:p-5 rounded-md border transition-colors ${
                        quizSubmitted
                          ? isAnswerCorrect
                            ? 'bg-emerald-50/40 border-emerald-200'
                            : 'bg-red-50/40 border-red-200'
                          : 'bg-slate-50/50 border-slate-200/70'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-sm bg-slate-800 text-white font-bold text-xs flex-shrink-0 mt-0.5">
                          {qIndex + 1}
                        </span>
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                          {q.question}
                        </h3>
                      </div>

                      {/* Opciones */}
                      <div className="space-y-2 mt-3 ml-0 sm:ml-9">
                        {q.options.map((opt, optIndex) => {
                          const isOptionSelected = selectedAnswers[q.id] === optIndex;
                          const isThisOptionCorrect = q.correctAnswer === optIndex;

                          let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-400';

                          if (quizSubmitted) {
                            if (isThisOptionCorrect) {
                              optionStyle = 'bg-emerald-100/70 border-emerald-500 text-emerald-950 font-medium';
                            } else if (isOptionSelected && !isThisOptionCorrect) {
                              optionStyle = 'bg-red-100/70 border-red-500 text-red-950 line-through';
                            } else {
                              optionStyle = 'bg-white/50 border-slate-200 text-slate-400';
                            }
                          } else if (isOptionSelected) {
                            optionStyle = 'bg-emerald-50 border-emerald-600 text-emerald-900 font-medium';
                          }

                          return (
                            <button
                              key={optIndex}
                              type="button"
                              disabled={quizSubmitted}
                              onClick={() => handleOptionSelect(q.id, optIndex)}
                              className={`w-full text-left p-3 rounded-sm border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                                  isOptionSelected
                                    ? 'border-emerald-600 bg-emerald-600 text-white'
                                    : 'border-slate-300'
                                }`}
                              >
                                {isOptionSelected && <Check className="w-3 h-3" />}
                              </span>
                              <span className="leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div
                          className={`mt-4 pt-3 border-t text-xs leading-relaxed ${
                            isAnswerCorrect ? 'border-emerald-200 text-emerald-800' : 'border-red-200 text-red-800'
                          }`}
                        >
                          <strong>{isAnswerCorrect ? '✓ Correcto:' : '✕ Retroalimentación:'}</strong>{' '}
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Botón de envío del Examen Final */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                {!quizSubmitted ? (
                  <>
                    <p className="text-xs text-slate-500">
                      Respondidas:{' '}
                      <strong className="text-slate-800">
                        {Object.keys(selectedAnswers).length} de {FINAL_EXAM_QUESTIONS.length}
                      </strong>
                    </p>

                    <button
                      onClick={handleSubmitFinalExam}
                      disabled={Object.keys(selectedAnswers).length < FINAL_EXAM_QUESTIONS.length}
                      className="w-full sm:w-auto px-8 py-3 bg-[#059669] hover:bg-[#047857] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-sm transition-colors cursor-pointer"
                    >
                      Enviar y Calificar Examen Final
                    </button>
                  </>
                ) : (
                  <div className="w-full space-y-4">
                    {finalScore >= 85 ? (
                      <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Award className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-emerald-950 text-base">
                              ¡Aprobado con {finalScore}% de Aciertos! ({quizScore}/10)
                            </h4>
                            <p className="text-xs text-emerald-800">
                              Cumples con el estándar exigido (&ge; 85%). Tu certificado oficial ha sido emitido con éxito.
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setCurrentStep('certificate')}
                          className="px-6 py-3 bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                        >
                          <FileCheck className="w-4 h-4" />
                          <span>Ver Certificado Oficial</span>
                        </button>
                      </div>
                    ) : (
                      <div className="p-5 bg-amber-50 border border-amber-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-amber-950 text-base">
                              Calificación: {finalScore}% ({quizScore}/10 correctas)
                            </h4>
                            <p className="text-xs text-amber-800">
                              El porcentaje de aprobación mínimo es 85%. Puedes repasar los videos y repetir la prueba final.
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleRetryFinalExam}
                          className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Repetir Examen Final</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: CERTIFICADO OFICIAL GENERADO */}
          {currentStep === 'certificate' && (
            <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Certificado de Aprobación Oficial
                  </h1>
                  <p className="text-xs text-slate-500">
                    Acreditación válida ante Secretarías de Salud e INVIMA · Resolución 2674 de 2013
                  </p>
                </div>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir / Guardar PDF</span>
                </button>
              </div>

              {/* Formulario de personalización de nombre */}
              <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 flex flex-col sm:flex-row gap-3 items-end text-xs">
                <div className="flex-1 w-full">
                  <label className="block font-semibold text-slate-700 mb-1">Nombre Completo del Titular:</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-sm outline-none text-slate-900 font-medium"
                    placeholder="Ej: Andrea Carolina Soto Morales"
                  />
                </div>
                <div className="flex-1 w-full">
                  <label className="block font-semibold text-slate-700 mb-1">Cédula de Ciudadanía (C.C.):</label>
                  <input
                    type="text"
                    value={studentDoc}
                    onChange={(e) => setStudentDoc(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-sm outline-none text-slate-900 font-medium"
                    placeholder="Ej: 1.020.345.678"
                  />
                </div>
              </div>

              {/* VISTA PREVIA DEL CERTIFICADO IMPRIMIBLE */}
              <div className="p-8 sm:p-12 border-4 border-double border-emerald-900/40 bg-radial from-white to-slate-50 rounded-sm text-center relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-6">
                  <Logo variant="original" height={42} />
                  <div className="text-right text-[11px] text-slate-500">
                    <p className="font-bold text-slate-800">Folio: AMCLA-2026-CO-9842</p>
                    <p>Resolución 2674 de 2013 Minsalud</p>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-widest font-semibold text-emerald-800 mb-2">
                  Certificado Oficial de Aprobación
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Manipulación Higiénica de Alimentos y BPM
                </h2>

                <p className="text-xs text-slate-500 mb-2">Se hace constar formalmente que:</p>

                <p className="text-xl sm:text-2xl font-serif-italic italic text-slate-900 font-semibold mb-1">
                  {studentName || 'Andrea Carolina Soto Morales'}
                </p>

                <p className="text-xs text-slate-600 mb-6">
                  C.C. {studentDoc || '1.020.345.678'} · Colombia
                </p>

                <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed mb-8">
                  Ha cursado y aprobado satisfactoriamente la capacitación teórico-práctica con una calificación de{' '}
                  <strong className="text-emerald-800">{finalScore}%</strong>, cumpliendo con los estándares exigidos para el ejercicio de manipulación higiénica de alimentos en la industria gastronómica y agroalimentaria.
                </p>

                {/* Sellos, QR y Firmas */}
                <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-xs text-slate-600">
                  <div className="text-left">
                    <p className="font-bold text-slate-900">Fecha de Expedición:</p>
                    <p>{new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Vigencia: 1 Año Calendario</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-white border border-slate-300 rounded-sm shadow-xs mb-1">
                      <QrCode className="w-14 h-14 text-slate-800" />
                    </div>
                    <span className="text-[10px] text-slate-500">Verificable ante INVIMA</span>
                  </div>

                  <div className="text-right">
                    <div className="inline-block border-b border-slate-800 w-32 mb-1" />
                    <p className="font-bold text-slate-900">Dirección Académica</p>
                    <p className="text-[11px] text-slate-500">AMCLA Colombia S.A.S.</p>
                  </div>
                </div>
              </div>

              {/* Botón para volver al curso o imprimir */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setCurrentStep('video')}
                  className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                >
                  Volver al visor de videos
                </button>

                <button
                  onClick={onBackToHome}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-sm transition-colors cursor-pointer"
                >
                  Finalizar y Volver a Inicio
                </button>
              </div>
            </div>
          )}
        </main>

        {/* SLIDE / SIDEBAR DE MÓDULOS (4 COLUMNAS O DRAWER MÓVIL) */}
        <aside
          className={`lg:col-span-4 bg-white rounded-md border border-slate-200/80 shadow-2xs p-5 sm:p-6 space-y-6 ${
            isSidebarOpen
              ? 'fixed inset-x-4 top-20 z-50 max-h-[85vh] overflow-y-auto block'
              : 'hidden lg:block'
          }`}
        >
          {/* Header de Sidebar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="font-bold text-slate-900 text-sm sm:text-base">Temario del Curso</h2>
              <p className="text-xs text-slate-500">Secuencia en orden cronológico</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
              aria-label="Cerrar temario"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de Módulos (Slide para ver anteriores o repetir quices) */}
          <div className="space-y-3">
            {COURSE_MODULES.map((mod, index) => {
              const unlocked = isModuleUnlocked(index);
              const completed = completedModules.includes(mod.id);
              const isActive = activeModuleIndex === index && (currentStep === 'video' || currentStep === 'quiz');

              return (
                <div
                  key={mod.id}
                  className={`rounded-sm border p-3.5 transition-all ${
                    isActive
                      ? 'border-emerald-600 bg-emerald-50/30'
                      : unlocked
                      ? 'border-slate-200/80 bg-white hover:border-slate-300'
                      : 'border-slate-100 bg-slate-50/60 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Módulo 0{mod.id}
                    </span>
                    {completed ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>100% OK</span>
                      </span>
                    ) : unlocked ? (
                      <span className="text-[11px] font-medium text-emerald-700">
                        Disponible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                        <Lock className="w-3 h-3" />
                        <span>Bloqueado</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-3">
                    {mod.title}
                  </h3>

                  {/* Acciones del Módulo */}
                  {unlocked ? (
                    <div className="flex items-center gap-2 pt-1 border-t border-slate-100 text-xs">
                      <button
                        onClick={() => handleSelectModuleVideo(index)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm transition-colors cursor-pointer font-medium ${
                          isActive && currentStep === 'video'
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <Play className="w-3 h-3" />
                        <span>Ver Video</span>
                      </button>

                      <button
                        onClick={() => handleOpenModuleQuiz(index)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm transition-colors cursor-pointer font-medium ${
                          isActive && currentStep === 'quiz'
                            ? 'bg-emerald-700 text-white'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        <HelpCircle className="w-3 h-3" />
                        <span>{completed ? 'Repetir Quiz' : 'Quiz (100%)'}</span>
                      </button>
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-100">
                      Completa el quiz anterior con 100% para acceder.
                    </p>
                  )}
                </div>
              );
            })}

            {/* Módulo Final: Examen Final de Certificación */}
            <div
              className={`rounded-sm border p-4 transition-all ${
                currentStep === 'final-exam' || currentStep === 'certificate'
                  ? 'border-emerald-600 bg-emerald-50/40'
                  : isFinalExamUnlocked()
                  ? 'border-emerald-200 bg-emerald-50/20'
                  : 'border-slate-100 bg-slate-50/60 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Examen de Cierre</span>
                </span>

                {finalExamPassed ? (
                  <span className="text-[11px] font-bold text-emerald-700">
                    Aprobado ({finalScore}%)
                  </span>
                ) : isFinalExamUnlocked() ? (
                  <span className="text-[11px] font-medium text-emerald-700">
                    Desbloqueado
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                    <Lock className="w-3 h-3" />
                    <span>Bloqueado</span>
                  </span>
                )}
              </div>

              <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2">
                Examen Final de Certificación BPM (85%)
              </h3>

              <p className="text-xs text-slate-600 mb-3">
                10 preguntas integradoras. Certificado oficial con código QR automático al aprobar.
              </p>

              {isFinalExamUnlocked() ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenFinalExam}
                    className="w-full py-2 px-3 bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold rounded-sm transition-colors text-center cursor-pointer"
                  >
                    {finalExamPassed ? 'Repetir Examen Final' : 'Rendir Examen Final (10 Preguntas)'}
                  </button>

                  {finalExamPassed && (
                    <button
                      onClick={() => setCurrentStep('certificate')}
                      className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                      title="Ver certificado emitido"
                    >
                      <FileCheck className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-[11px] text-slate-400 italic">
                  Requiere aprobar los 4 quices de los videos con el 100%.
                </p>
              )}
            </div>
          </div>

          {/* Reiniciar Progreso */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>¿Deseas empezar de cero?</span>
            <button
              onClick={handleResetCourseProgress}
              className="text-red-600 hover:text-red-700 hover:underline cursor-pointer"
            >
              Reiniciar Progreso
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
