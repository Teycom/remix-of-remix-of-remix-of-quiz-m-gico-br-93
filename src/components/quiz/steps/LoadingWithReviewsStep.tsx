import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface LoadingWithReviewsStepProps {
  dogName: string;
  dogAge: string;
  onComplete: () => void;
  onModalAnswer: (questionId: string, answer: string) => void;
}

interface ModalQuestion {
  id: string;
  title: string;
  question: string;
  infoBox?: {
    title: string;
    content: string;
  };
  ageContext: string;
}

const getModalQuestions = (dogAge: string): ModalQuestion[] => {
  const isPuppy = dogAge === 'puppy';
  
  if (isPuppy) {
    return [
      {
        id: 'puppy-excited',
        title: 'Seu cão fica animado com facilidade?',
        question: '',
        ageContext: '',
      },
      {
        id: 'puppy-pulling',
        title: 'Meu cachorro está me arrastando pela rua',
        question: 'Você concorda com essa afirmação?',
        infoBox: {
          title: 'Estudos recentes mostram que...',
          content: '86% dos tutores que lidam com puxões de coleira também notam sinais de tensão do nervo vago nos seus cães. As próximas perguntas ajudarão a determinar se os puxões de coleira do seu cão estão ligados à tensão do nervo vago e o quanto isso o está afetando.',
        },
        ageContext: '',
      },
      {
        id: 'puppy-barking',
        title: 'Meu cachorro late para tudo o que vê',
        question: 'Você concorda com essa afirmação?',
        infoBox: {
          title: 'Você precisa saber que...',
          content: 'Mesmo pequenas hiperreações do seu cão, como latir para tudo, podem ser os primeiros sinais de alerta de que ele tem um problema com o nervo vago dele.',
        },
        ageContext: '',
      },
      {
        id: 'puppy-ignoring',
        title: 'Às vezes, meu cão ignora completamente os comandos',
        question: 'Você concorda com essa afirmação?',
        infoBox: {
          title: 'Talvez você se pergunte por quê...',
          content: 'A dificuldade em seguir os comandos do dono pode estar relacionada ao nervo vago, que desempenha um papel fundamental na concentração e na resposta aos comandos do seu filhote.',
        },
        ageContext: '',
      },
      {
        id: 'puppy-behavior-change',
        title: 'Sinto que o comportamento do meu filhote muda às vezes sem nenhum motivo claro',
        question: 'Você concorda com essa afirmação?',
        infoBox: {
          title: 'Sabemos como você se sente...',
          content: 'O estresse e o nervo vago desequilibrado podem afetar o comportamento do cão de várias maneiras. Analisamos mais de 500 estudos científicos para identificar os métodos mais eficazes que visam especificamente a causa raiz, e não apenas os sintomas.',
        },
        ageContext: '',
      },
    ];
  }
  
  return [
    {
      id: 'territorial',
      title: 'Mais uma pergunta',
      question: 'às vezes podem demonstrar agressividade territorial. Você já teve esse problema?',
      ageContext: 'Cachorros adolescentes',
    },
    {
      id: 'obedience-training',
      title: 'Finalizando seu plano',
      question: 'já teve algum treino de obediência?',
      ageContext: '',
    },
  ];
};

const reviews = [
  {
    title: 'Excelentes técnicas de reforço positivo',
    author: 'Mariana Silva',
    text: 'Este é um ótimo programa de treinamento que começa desde a base, o que é fundamental. Ele avança de forma gradual com técnicas de reforço positivo que realmente funcionam. Eu vi ótimos resultados com meus 2 cães.',
    rating: 5,
  },
  {
    title: 'A estrutura do adestramento é brilhante',
    author: 'Carlos Oliveira',
    text: 'A maneira como o adestramento é detalhado é excelente. Já fiz um treinamento individual na minha casa e achei menos eficaz do que este curso e o recomendo muito.',
    rating: 5,
  },
  {
    title: 'Excelente curso de adestramento',
    author: 'Ana Paula Santos',
    text: 'Curso de adestramento excelente, muito detalhado e fácil de entender. O que eu gosto neste curso é que eles enfatizam que o adestramento de um cão exige paciência e compreensão do processo.',
    rating: 5,
  },
];

export const LoadingWithReviewsStep = ({ 
  dogName, 
  dogAge,
  onComplete,
  onModalAnswer 
}: LoadingWithReviewsStepProps) => {
  const [progress, setProgress] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [answeredModals, setAnsweredModals] = useState<string[]>([]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const modalQuestions = getModalQuestions(dogAge);
  const isPuppy = dogAge === 'puppy';

  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Show modals at specific progress points
  useEffect(() => {
    if (isPuppy) {
      const thresholds = [15, 30, 45, 60, 75];
      const threshold = thresholds[currentModalIndex];
      if (threshold && progress >= threshold && !answeredModals.includes(modalQuestions[currentModalIndex]?.id)) {
        setShowModal(true);
      }
    } else {
      if (progress >= 30 && currentModalIndex === 0 && !answeredModals.includes('territorial')) {
        setShowModal(true);
      } else if (progress >= 80 && currentModalIndex === 1 && !answeredModals.includes('obedience-training')) {
        setShowModal(true);
      }
    }
  }, [progress, currentModalIndex, answeredModals, isPuppy, modalQuestions]);

  // Typing animation for info box
  useEffect(() => {
    if (showModal && isPuppy && modalQuestions[currentModalIndex]?.infoBox) {
      setIsTyping(true);
      const content = modalQuestions[currentModalIndex].infoBox!.content;
      let i = 0;
      setTypingText('');
      
      const typingInterval = setInterval(() => {
        if (i < content.length) {
          setTypingText(content.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 20);
      
      return () => clearInterval(typingInterval);
    }
  }, [showModal, currentModalIndex, isPuppy, modalQuestions]);

  // Rotate reviews with fade animation
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(reviewInterval);
  }, []);

  // Complete when 100%
  useEffect(() => {
    const requiredAnswers = isPuppy ? 5 : 2;
    if (progress >= 100 && answeredModals.length >= requiredAnswers) {
      setTimeout(onComplete, 1000);
    }
  }, [progress, answeredModals, onComplete, isPuppy]);

  const handleModalAnswer = (answer: string) => {
    const questionId = modalQuestions[currentModalIndex].id;
    onModalAnswer(questionId, answer);
    setAnsweredModals([...answeredModals, questionId]);
    setShowModal(false);
    setCurrentModalIndex(currentModalIndex + 1);
    setTypingText('');
  };

  const getAgeLabel = () => {
    switch (dogAge) {
      case 'puppy': return 'Filhotes';
      case 'adolescent': return 'Cachorros adolescentes';
      case 'adult': return 'Cães adultos';
      case 'senior': return 'Cães seniores';
      default: return 'Cachorros';
    }
  };

  // Calculate stroke dashoffset for circular progress
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const currentQuestion = modalQuestions[currentModalIndex];

  return (
    <div className="quiz-content fade-in relative min-h-screen">
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mb-6">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="hsl(var(--progress-bg))"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-foreground">{Math.round(progress)}%</span>
        </div>
      </div>

      <p className="text-muted-foreground text-center mb-8">
        Criando o plano de adestramento personalizado de {dogName || 'seu cão'}...
      </p>

      {/* Social Proof */}
      <div className="w-full text-center mb-6">
        <h2 className="text-2xl font-bold">
          Mais de <span className="text-primary">500.000 tutores de cães</span>
        </h2>
        <p className="text-muted-foreground">escolheram a Conexão Pet</p>
      </div>

      {/* Review Card with animation */}
      <div className="w-full bg-card border border-border rounded-xl p-4 animate-fade-in" key={currentReview}>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-foreground text-sm">{reviews[currentReview].title}</h4>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
            ))}
          </div>
          <span className="text-muted-foreground text-xs">{reviews[currentReview].author}</span>
        </div>
        <p className="text-sm text-foreground">{reviews[currentReview].text}</p>
      </div>

      {/* Modal - Different styles for puppy vs other ages */}
      {showModal && currentModalIndex < modalQuestions.length && (
        <div className="fixed inset-0 bg-foreground/60 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl p-6 max-w-sm w-full animate-scale-in max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-center mb-4">
              {currentQuestion.title}
            </h3>
            
            {currentQuestion.question && (
              <p className="text-center text-muted-foreground mb-4">
                {currentQuestion.question}
              </p>
            )}
            
            {/* Info box with typing animation for puppy questions */}
            {isPuppy && currentQuestion.infoBox && (
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 mb-6">
                <p className="font-bold text-foreground text-sm mb-2">
                  {currentQuestion.infoBox.title}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {typingText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </p>
              </div>
            )}
            
            {!isPuppy && currentQuestion.ageContext && (
              <p className="text-center text-foreground mb-6">
                <span className="text-primary font-bold">
                  {currentQuestion.ageContext || getAgeLabel()}
                </span>{' '}
                {currentQuestion.question.replace('{dogName}', dogName || 'seu cão')}
              </p>
            )}
            
            {isPuppy && currentModalIndex === 0 ? (
              // First puppy question with emojis
              <div className="space-y-3">
                <button
                  onClick={() => handleModalAnswer('sim')}
                  className="w-full py-3 px-4 rounded-xl border-2 border-border font-medium hover:bg-secondary transition-colors flex items-center gap-3"
                >
                  <span className="text-2xl">😆</span>
                  <span>Sim</span>
                </button>
                <button
                  onClick={() => handleModalAnswer('nem-sempre')}
                  className="w-full py-3 px-4 rounded-xl border-2 border-border font-medium hover:bg-secondary transition-colors flex items-center gap-3"
                >
                  <span className="text-2xl">🤔</span>
                  <span>Nem sempre</span>
                </button>
                <button
                  onClick={() => handleModalAnswer('nao')}
                  className="w-full py-3 px-4 rounded-xl border-2 border-border font-medium hover:bg-secondary transition-colors flex items-center gap-3"
                >
                  <span className="text-2xl">😐</span>
                  <span>Não</span>
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => handleModalAnswer('no')}
                  className="flex-1 py-3 px-6 rounded-xl border-2 border-border font-semibold hover:bg-secondary transition-colors"
                >
                  Não
                </button>
                <button
                  onClick={() => handleModalAnswer('yes')}
                  className="flex-1 py-3 px-6 rounded-xl border-2 border-border font-semibold hover:bg-secondary transition-colors"
                >
                  Sim
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};