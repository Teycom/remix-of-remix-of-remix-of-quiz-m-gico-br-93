import { QuizOption } from '@/types/quiz';

interface SingleChoiceStepProps {
  title: string;
  subtitle?: string;
  options: QuizOption[];
  image?: string;
  onSelect: (selected: string) => void;
}

export const SingleChoiceStep = ({
  title,
  subtitle,
  options,
  image,
  onSelect,
}: SingleChoiceStepProps) => {
  return (
    <div className="quiz-content fade-in">
      <h1 className="text-xl font-bold text-center text-foreground mb-2">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-muted-foreground text-center mb-6">
          {subtitle}
        </p>
      )}

      {image && (
        <img 
          src={image} 
          alt="" 
          className="w-full max-w-xs mx-auto rounded-xl mb-6" 
        />
      )}

      <div className="w-full space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="quiz-option"
          >
            {option.image && <img src={option.image} alt="" className="w-10 h-10" />}
            {option.icon && <span className="text-2xl">{option.icon}</span>}
            <span className="flex-1 text-left font-medium text-foreground">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
