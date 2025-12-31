import { images } from '@/data/quizData';

interface AgeSelectionStepProps {
  onSelect: (age: string) => void;
}

const ageOptions = [
  { id: 'puppy', label: 'Filhote', sublabel: 'Menos de 6 meses', image: images.dogPuppy },
  { id: 'adolescent', label: 'Adolescente', sublabel: '6-18 meses', image: images.dogAdolescent },
  { id: 'adult', label: 'Adulto', sublabel: '1,5-7 anos', image: images.dogAdult },
  { id: 'senior', label: 'Sênior', sublabel: 'Mais de 7 anos', image: images.dogSenior },
];

export const AgeSelectionStep = ({ onSelect }: AgeSelectionStepProps) => {
  return (
    <div className="quiz-content fade-in">
      <h1 className="text-xl md:text-2xl font-bold text-center text-foreground mb-2 uppercase tracking-wide">
        OBTENHA UM DESAFIO DE OBEDIÊNCIA CANINA PERSONALIZADO
      </h1>
      
      <p className="text-xs text-muted-foreground text-center uppercase tracking-widest mb-8">
        BASEADO NA IDADE, RAÇA E TENDÊNCIAS COMPORTAMENTAIS DO CÃO
      </p>

      <div className="w-full space-y-3">
        {ageOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="quiz-option group"
          >
            <img
              src={option.image}
              alt={option.label}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="text-left">
              <p className="font-semibold text-foreground text-lg">{option.label}</p>
              <p className="text-muted-foreground text-sm">{option.sublabel}</p>
            </div>
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-8">
        Ao continuar, você concorda com os{' '}
        <a href="#" className="text-accent hover:underline">Termos de Uso</a>, a{' '}
        <a href="#" className="text-accent hover:underline">Política de Privacidade</a>{' '}
        e a{' '}
        <a href="#" className="text-accent hover:underline">Política de Cookies</a>
      </p>
    </div>
  );
};
