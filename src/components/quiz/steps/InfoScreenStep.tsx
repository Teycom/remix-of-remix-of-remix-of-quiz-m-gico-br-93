import { QuizButton } from '../QuizButton';
import { images } from '@/data/quizData';

interface InfoScreenStepProps {
  stepId: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  image?: string;
  onContinue: () => void;
}

export const InfoScreenStep = ({ stepId, title, subtitle, buttonText, image, onContinue }: InfoScreenStepProps) => {
  // Social proof screen with quote
  if (stepId === 'dogs-owners') {
    return (
      <div className="quiz-content fade-in">
        <h1 className="text-2xl font-bold text-center text-primary mb-2">
          Mais de 500.000 tutores de cães
        </h1>
        
        <p className="text-foreground text-center mb-6">
          escolheram o <strong>Desafio de obediência canina da Conexão Pet</strong> para substituir métodos de adestramento ultrapassados!
        </p>

        <div className="info-box w-full mb-6">
          <div className="p-4">
            <div className="flex gap-2 mb-2">
              <span className="text-primary text-2xl">"</span>
            </div>
            <p className="text-info-foreground text-lg font-medium">
              Não existem cães maus — somente adestramentos ruins
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img src={images.logo} alt="Logo" className="w-6 h-6" />
              <span className="text-primary font-semibold text-sm">Equipe Conexão Pet</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-8 bg-secondary rounded-xl p-4 w-full">
          <img src={images.academicShield} alt="Academic" className="w-12 h-12" />
          <p className="text-sm text-foreground">
            As últimas descobertas sobre o adestramento canino foram apresentadas nas{' '}
            <strong>Universidades de Oxford, Harvard e Cambridge</strong>
          </p>
        </div>

        <div className="w-full mt-auto">
          <QuizButton onClick={onContinue}>
            Continuar
          </QuizButton>
        </div>
      </div>
    );
  }

  // Training hero screen
  if (stepId === 'training-hero') {
    return (
      <div className="quiz-content fade-in">
        <h1 className="text-xl font-bold text-center mb-2">
          <span className="text-primary">Foque em ensinar ao seu cão comandos essenciais</span>
          {' '}
          <span className="text-foreground">com um Desafio de obediência canina</span>
        </h1>

        <img
          src={images.goldenRetrieverGivePaw}
          alt="Cão dando a pata"
          className="w-full rounded-xl my-6 shadow-lg"
        />

        <p className="text-foreground text-center mb-8">
          Não é necessário gastar dinheiro com um adestrador pessoal de cães. Vamos descomplicar tudo e{' '}
          <strong>adaptar o plano ao seu objetivo</strong>.
        </p>

        <div className="w-full mt-auto">
          <QuizButton onClick={onContinue}>
            Continuar
          </QuizButton>
        </div>
      </div>
    );
  }

  // Not alone screen with quote
  if (stepId === 'not-alone') {
    return (
      <div className="quiz-content fade-in">
        <h1 className="text-2xl font-bold text-center text-foreground mb-4">
          {title}
        </h1>

        <div className="info-box w-full mb-6">
          <div className="p-4">
            <div className="flex gap-2 mb-2">
              <span className="text-primary text-2xl">"</span>
            </div>
            <p className="text-info-foreground">
              {subtitle}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img src={images.logo} alt="Logo" className="w-6 h-6" />
              <span className="text-primary font-semibold text-sm">Equipe Conexão Pet</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-xl p-4 w-full mb-6">
          <p className="text-sm text-muted-foreground text-center">
            💡 A maioria dos problemas comportamentais podem ser resolvidos com o treinamento correto
          </p>
        </div>

        <div className="w-full mt-auto">
          <QuizButton onClick={onContinue}>
            Continuar
          </QuizButton>
        </div>
      </div>
    );
  }

  // Evidence based screen
  if (stepId === 'evidence-based') {
    return (
      <div className="quiz-content fade-in">
        <h1 className="text-xl font-bold text-center text-foreground mb-4">
          {title}
        </h1>
        
        <p className="text-muted-foreground text-center mb-6">
          {subtitle}
        </p>

        <div className="w-full space-y-4 mb-8">
          <div className="bg-secondary rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm text-muted-foreground">Universidade de</p>
              <p className="font-bold text-foreground">Cambridge</p>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm text-muted-foreground">Universidade de</p>
              <p className="font-bold text-foreground">Oxford</p>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm text-muted-foreground">Universidade de</p>
              <p className="font-bold text-foreground">Harvard</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-auto">
          <QuizButton onClick={onContinue}>
            {buttonText || 'Continuar'}
          </QuizButton>
        </div>
      </div>
    );
  }

  // Generic info screen with image
  return (
    <div className="quiz-content fade-in">
      {title && (
        <h1 className="text-xl font-bold text-center text-primary mb-2">
          {title}
        </h1>
      )}
      
      {subtitle && (
        <p className="text-foreground text-center mb-6">
          {subtitle}
        </p>
      )}

      {image && (
        <img
          src={image}
          alt=""
          className="w-full max-w-sm rounded-xl my-6 shadow-lg mx-auto"
        />
      )}

      <div className="w-full mt-auto">
        <QuizButton onClick={onContinue}>
          {buttonText || 'Continuar'}
        </QuizButton>
      </div>
    </div>
  );
};
