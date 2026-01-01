import { QuizButton } from '../QuizButton';
import { useEffect, useState } from 'react';

interface ProgressChartStepProps {
  dogName: string;
  onContinue: () => void;
}

export const ProgressChartStep = ({ dogName, onContinue }: ProgressChartStepProps) => {
  const [animate, setAnimate] = useState(false);
  
  // Calculate a date 3 weeks from now
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 21);
  const formattedDate = futureDate.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const bars = [
    { height: 20, color: 'from-red-500 to-red-400' },
    { height: 35, color: 'from-orange-500 to-orange-400' },
    { height: 50, color: 'from-yellow-500 to-yellow-400' },
    { height: 65, color: 'from-lime-500 to-lime-400' },
    { height: 80, color: 'from-green-500 to-green-400', isMeta: true },
    { height: 90, color: 'from-teal-500 to-teal-400' },
    { height: 100, color: 'from-cyan-500 to-cyan-400' },
  ];

  return (
    <div className="quiz-content fade-in pb-24">
      <h1 className="text-xl font-bold text-center text-foreground mb-2">
        Este desafio foi desenvolvido para apoiar a jornada de treinamento de obediência de {dogName || 'seu cão'}
      </h1>
      
      <p className="text-muted-foreground text-center mb-2">
        Com base nas suas respostas, esperamos que o nível de obediência de {dogName || 'seu cão'} aumente até
      </p>
      
      <p className="text-primary font-bold text-lg text-center mb-6">{formattedDate}</p>

      {/* Bar Chart with animation */}
      <div className="w-full flex items-end justify-center gap-2 h-48 mb-4">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center">
            {bar.isMeta && (
              <div 
                className={`bg-primary text-primary-foreground text-xs px-2 py-1 rounded mb-1 transition-opacity duration-500 ${
                  animate ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                Meta
              </div>
            )}
            <div
              className={`w-8 rounded-t-lg bg-gradient-to-t ${bar.color} transition-all duration-700 ease-out`}
              style={{ 
                height: animate ? `${bar.height}%` : '0%',
                transitionDelay: `${index * 100}ms`,
              }}
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mb-8">
        Este gráfico mostra seu progresso em potencial ao seguir todos os passos listados no nosso plano
      </p>

      {/* Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="max-w-md mx-auto">
          <QuizButton onClick={onContinue}>Continuar</QuizButton>
        </div>
      </div>
    </div>
  );
};