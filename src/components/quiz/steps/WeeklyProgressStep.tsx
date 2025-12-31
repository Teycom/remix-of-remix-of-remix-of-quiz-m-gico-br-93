import { QuizButton } from '../QuizButton';

interface WeeklyProgressStepProps {
  dogName: string;
  onContinue: () => void;
}

export const WeeklyProgressStep = ({ dogName, onContinue }: WeeklyProgressStepProps) => {
  return (
    <div className="quiz-content fade-in pb-24">
      <h1 className="text-xl font-bold text-center text-foreground mb-8">
        Nível de obediência de {dogName || 'seu cão'}
      </h1>

      {/* Progress Chart with animation */}
      <div className="w-full relative mb-4">
        {/* SVG Curved Chart */}
        <svg viewBox="0 0 400 200" className="w-full h-48">
          {/* Background gradient area */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.3" />
              <stop offset="25%" stopColor="hsl(38, 92%, 50%)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(48, 96%, 53%)" stopOpacity="0.3" />
              <stop offset="75%" stopColor="hsl(142, 71%, 45%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--destructive))" />
              <stop offset="25%" stopColor="hsl(38, 92%, 50%)" />
              <stop offset="50%" stopColor="hsl(48, 96%, 53%)" />
              <stop offset="75%" stopColor="hsl(142, 71%, 45%)" />
              <stop offset="100%" stopColor="hsl(199, 89%, 48%)" />
            </linearGradient>
          </defs>
          
          {/* Filled area under curve with animation */}
          <path
            d="M 20 180 Q 100 170 150 140 Q 200 110 250 70 Q 300 40 380 20 L 380 180 Z"
            fill="url(#chartGradient)"
            className="animate-fade-in"
          />
          
          {/* Main curve with animation */}
          <path
            d="M 20 180 Q 100 170 150 140 Q 200 110 250 70 Q 300 40 380 20"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-fade-in"
            style={{ animationDelay: '200ms' }}
          />
          
          {/* Data points with staggered animation */}
          <circle cx="20" cy="180" r="8" fill="hsl(var(--destructive))" className="animate-fade-in" style={{ animationDelay: '100ms' }} />
          <circle cx="120" cy="155" r="8" fill="hsl(38, 92%, 50%)" className="animate-fade-in" style={{ animationDelay: '200ms' }} />
          <circle cx="220" cy="100" r="8" fill="hsl(48, 96%, 53%)" className="animate-fade-in" style={{ animationDelay: '300ms' }} />
          <circle cx="320" cy="50" r="8" fill="hsl(142, 71%, 45%)" className="animate-fade-in" style={{ animationDelay: '400ms' }} />
          <circle cx="380" cy="20" r="8" fill="hsl(199, 89%, 48%)" className="animate-fade-in" style={{ animationDelay: '500ms' }} />
        </svg>

        {/* "Hoje" label */}
        <div className="absolute left-2 bottom-2 bg-foreground text-background text-xs px-3 py-1.5 rounded-lg animate-fade-in">
          Hoje
        </div>

        {/* "Depois do desafio" label */}
        <div className="absolute right-2 top-2 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-lg animate-fade-in" style={{ animationDelay: '500ms' }}>
          Depois do desafio
        </div>
      </div>

      {/* Week labels */}
      <div className="flex justify-between text-xs text-muted-foreground uppercase px-4 mb-4">
        <span>Semana 1</span>
        <span>Semana 2</span>
        <span>Semana 3</span>
        <span>Semana 4</span>
      </div>

      <p className="text-xs text-muted-foreground text-center mb-6">
        Este gráfico mostra seu progresso em potencial ao seguir todos os passos listados no nosso plano
      </p>

      <h2 className="text-lg text-center mb-6">
        O <span className="text-primary font-bold">Desafio de obediência canina</span> personalizado de {dogName || 'seu cão'} está pronto
      </h2>

      {/* Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="max-w-md mx-auto">
          <QuizButton onClick={onContinue}>Continuar</QuizButton>
        </div>
      </div>
    </div>
  );
};