import { QuizButton } from '../QuizButton';

interface ProgressChartStepProps {
  dogName: string;
  onContinue: () => void;
}

export const ProgressChartStep = ({ dogName, onContinue }: ProgressChartStepProps) => {
  // Calculate a date 3 weeks from now
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 21);
  const formattedDate = futureDate.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="quiz-content fade-in pb-24">
      <h1 className="text-xl font-bold text-center text-foreground mb-2">
        Este desafio foi desenvolvido para apoiar a jornada de treinamento de obediência de {dogName || 'seu cão'}
      </h1>
      
      <p className="text-muted-foreground text-center mb-2">
        Com base nas suas respostas, esperamos que o nível de obediência de {dogName || 'seu cão'} aumente até
      </p>
      
      <p className="text-primary font-bold text-lg mb-6">{formattedDate}</p>

      {/* Bar Chart with animation */}
      <div className="w-full flex items-end justify-center gap-2 h-48 mb-4">
        {[
          { height: '20%', color: 'bg-gradient-to-t from-red-400 to-red-300', delay: '0ms' },
          { height: '35%', color: 'bg-gradient-to-t from-orange-400 to-orange-300', delay: '100ms' },
          { height: '50%', color: 'bg-gradient-to-t from-yellow-400 to-yellow-300', delay: '200ms' },
          { height: '65%', color: 'bg-gradient-to-t from-lime-400 to-lime-300', delay: '300ms' },
          { height: '80%', color: 'bg-gradient-to-t from-green-400 to-green-300', isMeta: true, delay: '400ms' },
          { height: '90%', color: 'bg-gradient-to-t from-teal-400 to-teal-300', delay: '500ms' },
          { height: '100%', color: 'bg-gradient-to-t from-cyan-400 to-cyan-300', delay: '600ms' },
        ].map((bar, index) => (
          <div key={index} className="flex flex-col items-center">
            {bar.isMeta && (
              <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded mb-1 animate-fade-in">
                Meta
              </div>
            )}
            <div
              className={`w-8 rounded-t-lg ${bar.color} animate-fade-in`}
              style={{ 
                height: bar.height,
                animationDelay: bar.delay,
              }}
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mb-8">
        Este gráfico mostra seu progresso em potencial ao seguir todos os passos listados no nosso plano
      </p>

      {/* Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="max-w-md mx-auto">
          <QuizButton onClick={onContinue}>Continuar</QuizButton>
        </div>
      </div>
    </div>
  );
};