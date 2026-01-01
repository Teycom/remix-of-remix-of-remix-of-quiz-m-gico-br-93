import { QuizButton } from '../QuizButton';
import { AlertTriangle, Flame, Brain, Sparkles, Dog } from 'lucide-react';

interface ObedienceLevelStepProps {
  dogName: string;
  dogBreed: string;
  onContinue: () => void;
}

export const ObedienceLevelStep = ({ dogName, dogBreed, onContinue }: ObedienceLevelStepProps) => {
  const obedienceLevel = 3.1;
  
  const metrics = [
    { icon: AlertTriangle, label: 'Questões comportamentais', value: 'Comportamento destrutivo', color: 'text-destructive' },
    { icon: Flame, label: 'Capacidade de resposta', value: 'Baixa', color: 'text-orange-500' },
    { icon: Brain, label: 'Capacidade de treinamento', value: 'Média', color: 'text-yellow-500' },
    { icon: Sparkles, label: 'Pronto para começar', value: 'Perfeito', color: 'text-green-500' },
    { icon: Dog, label: 'Raça', value: dogBreed || 'Não especificada', color: 'text-primary' },
  ];

  return (
    <div className="quiz-content fade-in pb-24">
      <h1 className="text-xl font-bold text-center text-foreground mb-6">
        {dogName || 'Seu cão'} já pode iniciar o Desafio de obediência canina!
      </h1>

      {/* Obedience Level Card */}
      <div className="w-full bg-card border border-border rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground text-sm">Nível de obediência de {dogName || 'seu cão'}</h3>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">NORMAL - 10</span>
        </div>

        {/* Score Badge */}
        <div className="inline-block bg-foreground text-background px-4 py-2 rounded-full font-bold mb-4 text-sm">
          {dogName || 'Cão'} - {obedienceLevel}
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mb-2">
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-foreground rounded-full border-2 border-background shadow-lg"
            style={{ left: `${(obedienceLevel / 10) * 100}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>
        
        <div className="flex justify-between text-[10px] text-muted-foreground mb-4">
          <span>EXTREMAMENTE BAIXO</span>
          <span>BAIXO</span>
          <span>MÉDIO</span>
          <span>ELEVADO</span>
        </div>

        {/* Warning Box */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
            <span className="font-semibold text-destructive text-sm">Nível de obediência baixo:</span>
          </div>
          <p className="text-xs text-foreground leading-relaxed">
            Um nível baixo de obediência pode levar a dificuldades no adestramento, má socialização, 
            aumento do risco de problemas comportamentais e uma menor qualidade de vida tanto para 
            o cachorro quanto para o tutor.
          </p>
        </div>

        {/* Metrics */}
        <div className="space-y-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-3">
              <metric.icon className={`w-5 h-5 ${metric.color} flex-shrink-0`} />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="font-semibold text-foreground text-sm truncate">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Owner Image - contained properly */}
      <div className="w-full flex justify-center mb-4 overflow-hidden rounded-xl">
        <img 
          src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1689582634/dog-training/img/girl-resolved.png" 
          alt="Tutora feliz com cachorro" 
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="max-w-md mx-auto">
          <QuizButton onClick={onContinue}>Continuar</QuizButton>
        </div>
      </div>
    </div>
  );
};