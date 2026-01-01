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
      <div className="quiz-content fade-in pb-24">
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
            <strong>Universidades USP, UNICAMP e UNESP</strong>
          </p>
        </div>

        {/* Fixed Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <div className="max-w-md mx-auto">
            <QuizButton onClick={onContinue}>
              Continuar
            </QuizButton>
          </div>
        </div>
      </div>
    );
  }

  // Training hero screen
  if (stepId === 'training-hero') {
    return (
      <div className="quiz-content fade-in pb-24">
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

        {/* Fixed Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <div className="max-w-md mx-auto">
            <QuizButton onClick={onContinue}>
              Continuar
            </QuizButton>
          </div>
        </div>
      </div>
    );
  }

  // Not alone screen with quote
  if (stepId === 'not-alone') {
    return (
      <div className="quiz-content fade-in pb-24">
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

        {/* Fixed Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <div className="max-w-md mx-auto">
            <QuizButton onClick={onContinue}>
              Continuar
            </QuizButton>
          </div>
        </div>
      </div>
    );
  }

  // Evidence based screen - UNIVERSIDADES BRASILEIRAS
  if (stepId === 'evidence-based') {
    return (
      <div className="quiz-content fade-in pb-24">
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
              <p className="font-bold text-foreground">São Paulo (USP)</p>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm text-muted-foreground">Universidade de</p>
              <p className="font-bold text-foreground">Campinas (UNICAMP)</p>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm text-muted-foreground">Universidade Estadual</p>
              <p className="font-bold text-foreground">Paulista (UNESP)</p>
            </div>
          </div>
        </div>

        {/* Fixed Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <div className="max-w-md mx-auto">
            <QuizButton onClick={onContinue}>
              {buttonText || 'Continuar'}
            </QuizButton>
          </div>
        </div>
      </div>
    );
  }

  // Generic info screen with image
  return (
    <div className="quiz-content fade-in pb-24">
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

      {/* Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="max-w-md mx-auto">
          <QuizButton onClick={onContinue}>
            {buttonText || 'Continuar'}
          </QuizButton>
        </div>
      </div>
    </div>
  );
};