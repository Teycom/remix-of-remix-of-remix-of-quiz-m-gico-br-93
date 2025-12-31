import { images } from '@/data/quizData';

interface GenderSelectionStepProps {
  onSelect: (gender: string) => void;
  dogAge: string;
}

const genderOptions = [
  { id: 'male', label: 'Garoto', image: images.maleSign },
  { id: 'female', label: 'Garota', image: images.femaleSign },
];

const getAgeLabel = (age: string) => {
  switch (age) {
    case 'puppy':
      return 'filhote';
    case 'adolescent':
      return 'adolescente';
    case 'adult':
      return 'cão';
    case 'senior':
      return 'cão';
    default:
      return 'cão';
  }
};

export const GenderSelectionStep = ({ onSelect, dogAge }: GenderSelectionStepProps) => {
  return (
    <div className="quiz-content fade-in">
      <h1 className="text-2xl font-bold text-center text-foreground mb-8">
        Seu {getAgeLabel(dogAge)} é...
      </h1>

      <div className="w-full space-y-3">
        {genderOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="quiz-option justify-center"
          >
            <img src={option.image} alt={option.label} className="w-8 h-8" />
            <span className="font-semibold text-lg text-foreground">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
