import { useState } from 'react';
import { QuizOption } from '@/types/quiz';
import { QuizButton } from '../QuizButton';
import { cn } from '@/lib/utils';

interface MultiChoiceStepProps {
  title: string;
  subtitle?: string;
  options: QuizOption[];
  buttonText: string;
  image?: string;
  onSubmit: (selected: string[]) => void;
  variant?: 'default' | 'images' | 'icons';
}

export const MultiChoiceStep = ({
  title,
  subtitle,
  options,
  buttonText,
  image,
  onSubmit,
  variant = 'default',
}: MultiChoiceStepProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (selected.length > 0) {
      onSubmit(selected);
    }
  };

  if (variant === 'images') {
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

        <div className="w-full grid grid-cols-2 gap-3 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={cn(
                'flex flex-col items-center p-3 rounded-xl border-2 transition-all',
                selected.includes(option.id)
                  ? 'border-primary bg-quiz-option-selected'
                  : 'border-transparent bg-secondary hover:bg-quiz-option-hover'
              )}
            >
              <img src={option.image} alt={option.label} className="w-16 h-16 object-cover rounded-lg mb-2" />
              <span className="text-sm text-center font-medium text-foreground">{option.label}</span>
            </button>
          ))}
        </div>

        <div className="w-full mt-auto">
          <QuizButton onClick={handleSubmit} disabled={selected.length === 0}>
            {buttonText}
          </QuizButton>
        </div>
      </div>
    );
  }

  if (variant === 'icons') {
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

        <div className="w-full grid grid-cols-2 gap-3 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={cn(
                'flex items-center gap-3 p-4 rounded-xl border-2 transition-all',
                selected.includes(option.id)
                  ? 'border-primary bg-quiz-option-selected'
                  : 'border-transparent bg-secondary hover:bg-quiz-option-hover'
              )}
            >
              {option.image && <img src={option.image} alt="" className="w-8 h-8" />}
              <span className="text-sm font-medium text-foreground text-left">{option.label}</span>
            </button>
          ))}
        </div>

        <div className="w-full mt-auto">
          <QuizButton onClick={handleSubmit} disabled={selected.length === 0}>
            {buttonText}
          </QuizButton>
        </div>
      </div>
    );
  }

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

      <div className="w-full space-y-3 mb-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => toggleOption(option.id)}
            className={cn(
              'quiz-option',
              selected.includes(option.id) && 'quiz-option-selected'
            )}
          >
            {option.image && <img src={option.image} alt="" className="w-8 h-8" />}
            {option.icon && <span className="text-2xl">{option.icon}</span>}
            <span className="flex-1 text-left font-medium text-foreground">{option.label}</span>
            <div
              className={cn(
                'w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center',
                selected.includes(option.id)
                  ? 'bg-primary border-primary'
                  : 'border-border'
              )}
            >
              {selected.includes(option.id) && (
                <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="w-full mt-auto">
        <QuizButton onClick={handleSubmit} disabled={selected.length === 0}>
          {buttonText}
        </QuizButton>
      </div>
    </div>
  );
};
