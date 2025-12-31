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
    <div className="quiz-content fade-in">
      <h1 className="text-xl font-bold text-center text-foreground mb-2">
        Este desafio foi desenvolvido para apoiar a jornada de treinamento de obediência de {dogName || 'seu cão'}
      </h1>
      
      <p className="text-muted-foreground text-center mb-2">
        Com base nas suas respostas, esperamos que o nível de obediência de {dogName || 'seu cão'} aumente até
      </p>
      
      <p className="text-primary font-bold text-lg mb-6">{formattedDate}</p>

      {/* Bar Chart */}
      <div className="w-full flex items-end justify-center gap-2 h-48 mb-4">
        {[
          { height: '20%', color: 'bg-gradient-to-t from-red-400 to-red-300', label: '' },
          { height: '35%', color: 'bg-gradient-to-t from-orange-400 to-orange-300', label: '' },
          { height: '50%', color: 'bg-gradient-to-t from-yellow-400 to-yellow-300', label: '' },
          { height: '65%', color: 'bg-gradient-to-t from-lime-400 to-lime-300', label: '' },
          { height: '80%', color: 'bg-gradient-to-t from-green-400 to-green-300', label: 'Meta', isMeta: true },
          { height: '90%', color: 'bg-gradient-to-t from-teal-400 to-teal-300', label: '' },
          { height: '100%', color: 'bg-gradient-to-t from-cyan-400 to-cyan-300', label: '' },
        ].map((bar, index) => (
          <div key={index} className="flex flex-col items-center">
            {bar.isMeta && (
              <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded mb-1">
                Meta
              </div>
            )}
            <div
              className={`w-8 rounded-t-lg ${bar.color} transition-all duration-500`}
              style={{ height: bar.height }}
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mb-8">
        Este gráfico mostra seu progresso em potencial ao seguir todos os passos listados no nosso plano
      </p>

      <QuizButton onClick={onContinue}>Continuar</QuizButton>
    </div>
  );
};
