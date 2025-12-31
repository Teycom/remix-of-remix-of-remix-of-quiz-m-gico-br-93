import { useState } from 'react';
import { QuizButton } from '../QuizButton';
import { Input } from '@/components/ui/input';

interface NameInputStepProps {
  onSubmit: (name: string) => void;
}

export const NameInputStep = ({ onSubmit }: NameInputStepProps) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="quiz-content fade-in">
      <h1 className="text-2xl font-bold text-center text-foreground mb-2">
        Qual é o nome do seu cão?
      </h1>
      
      <p className="text-muted-foreground text-center mb-8">
        Vamos personalizar o desafio para o seu amigo
      </p>

      <div className="w-full mb-6">
        <Input
          type="text"
          placeholder="Digite o nome do seu cão"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-center text-lg py-6"
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <div className="w-full mt-auto">
        <QuizButton onClick={handleSubmit} disabled={!name.trim()}>
          Continuar
        </QuizButton>
      </div>
    </div>
  );
};
