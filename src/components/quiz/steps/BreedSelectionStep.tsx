import { useState } from 'react';
import { dogBreeds } from '@/data/quizData';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BreedSelectionStepProps {
  onSelect: (breed: string) => void;
  dogAge: string;
}

const popularBreeds = [
  'Sem raça definida',
  'Labrador',
  'Pit Bull',
  'Pastor Alemão',
  'Cocker Spaniel',
  'Buldogue Francês',
  'Chihuahua',
  'Cockapoo',
  'Border Collie',
  'Poodle',
];

const getAgeLabel = (age: string) => {
  switch (age) {
    case 'puppy':
      return 'filhote';
    case 'adolescent':
      return 'adolescente';
    default:
      return 'cão';
  }
};

export const BreedSelectionStep = ({ onSelect, dogAge }: BreedSelectionStepProps) => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');

  const handleBreedClick = (breed: string) => {
    setSelectedBreed(breed);
    onSelect(breed);
  };

  return (
    <div className="quiz-content fade-in pb-24">
      <h1 className="text-2xl font-bold text-center text-foreground mb-2">
        Selecione a raça do seu {getAgeLabel(dogAge)}
      </h1>
      
      <p className="text-muted-foreground text-center mb-6">
        Desafio de obediência de acordo com a raça do seu {getAgeLabel(dogAge)}
      </p>

      <div className="w-full flex flex-wrap gap-2 justify-center mb-6">
        {popularBreeds.map((breed) => (
          <button
            key={breed}
            onClick={() => handleBreedClick(breed)}
            className={cn(
              'px-4 py-2 rounded-full border text-sm transition-all',
              selectedBreed === breed
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background border-border text-foreground hover:border-primary/50'
            )}
          >
            {breed}
          </button>
        ))}
      </div>

      <div className="w-full">
        <p className="text-sm text-muted-foreground mb-2">Outra raça</p>
        <Select onValueChange={handleBreedClick}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a raça" />
          </SelectTrigger>
          <SelectContent>
            {dogBreeds.map((breed) => (
              <SelectItem key={breed} value={breed}>
                {breed}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};