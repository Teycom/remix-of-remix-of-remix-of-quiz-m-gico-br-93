import { QuizButton } from '../QuizButton';

interface WeeklyProgressStepProps {
  dogName: string;
  onContinue: () => void;
}

export const WeeklyProgressStep = ({ dogName, onContinue }: WeeklyProgressStepProps) => {
  return (
    <div className="quiz-content fade-in">
      <h1 className="text-xl font-bold text-center text-foreground mb-8">
        Nível de obediência de {dogName || 'seu cão'}
      </h1>

      {/* Progress Chart */}
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
          </defs>
          
          {/* Filled area under curve */}
          <path
            d="M 20 180 Q 100 170 150 140 Q 200 110 250 70 Q 300 40 380 20 L 380 180 Z"
            fill="url(#chartGradient)"
          />
          
          {/* Main curve */}
          <path
            d="M 20 180 Q 100 170 150 140 Q 200 110 250 70 Q 300 40 380 20"
            fill="none"
            stroke="url(#chartGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Data points */}
          <circle cx="20" cy="180" r="8" fill="hsl(var(--destructive))" />
          <circle cx="120" cy="155" r="8" fill="hsl(38, 92%, 50%)" />
          <circle cx="220" cy="100" r="8" fill="hsl(48, 96%, 53%)" />
          <circle cx="320" cy="50" r="8" fill="hsl(142, 71%, 45%)" />
          <circle cx="380" cy="20" r="8" fill="hsl(199, 89%, 48%)" />
        </svg>

        {/* "Hoje" label */}
        <div className="absolute left-2 bottom-2 bg-foreground text-background text-xs px-3 py-1.5 rounded-lg">
          Hoje
        </div>

        {/* "Depois do desafio" label */}
        <div className="absolute right-2 top-2 bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-lg">
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

      <QuizButton onClick={onContinue}>Continuar</QuizButton>
    </div>
  );
};
