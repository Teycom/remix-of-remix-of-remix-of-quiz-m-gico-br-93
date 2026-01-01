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
  ageContext: string;
}

const modalQuestions: ModalQuestion[] = [
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

const reviews = [
  {
    title: 'Excelentes técnicas de reforço positivo',
    author: 'Dawg Daddy',
    text: 'Este é um ótimo programa de treinamento que começa desde a base, o que é fundamental. Ele avança de forma gradual com técnicas de reforço positivo que realmente funcionam. Eu vi ótimos resultados com meus 2 cães.',
    rating: 5,
  },
  {
    title: 'A estrutura do adestramento é brilhante',
    author: 'Claire_Ugalde',
    text: 'A maneira como o adestramento é detalhado é excelente. Já fiz um treinamento individual na minha casa e achei menos eficaz do que este curso e o recomendo muito.',
    rating: 5,
  },
  {
    title: 'Excelente curso de adestramento',
    author: 'Diego Fernandez Jr',
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
    if (progress >= 30 && currentModalIndex === 0 && !answeredModals.includes('territorial')) {
      setShowModal(true);
    } else if (progress >= 80 && currentModalIndex === 1 && !answeredModals.includes('obedience-training')) {
      setShowModal(true);
    }
  }, [progress, currentModalIndex, answeredModals]);

  // Rotate reviews with fade animation
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(reviewInterval);
  }, []);

  // Complete when 100%
  useEffect(() => {
    if (progress >= 100 && answeredModals.length >= 2) {
      setTimeout(onComplete, 1000);
    }
  }, [progress, answeredModals, onComplete]);

  const handleModalAnswer = (answer: string) => {
    const questionId = modalQuestions[currentModalIndex].id;
    onModalAnswer(questionId, answer);
    setAnsweredModals([...answeredModals, questionId]);
    setShowModal(false);
    setCurrentModalIndex(currentModalIndex + 1);
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
          <span className="text-muted-foreground text-sm">{reviews[currentReview].author}</span>
        </div>
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
          ))}
        </div>
        <p className="text-sm text-foreground">{reviews[currentReview].text}</p>
      </div>

      {/* Modal */}
      {showModal && currentModalIndex < modalQuestions.length && (
        <div className="fixed inset-0 bg-foreground/60 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl p-6 max-w-sm w-full animate-scale-in">
            <h3 className="text-xl font-bold text-center mb-4">
              {modalQuestions[currentModalIndex].title}
            </h3>
            <p className="text-center text-foreground mb-6">
              <span className="text-primary font-bold">
                {modalQuestions[currentModalIndex].ageContext || getAgeLabel()}
              </span>{' '}
              {modalQuestions[currentModalIndex].question.replace('{dogName}', dogName || 'seu cão')}
            </p>
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
          </div>
        </div>
      )}
    </div>
  );
};