import { useState } from 'react';
import { cn } from '@/lib/utils';
import { images } from '@/data/quizData';

interface RatingScaleStepProps {
  title: string;
  subtitle?: string;
  onSelect: (rating: number) => void;
}

export const RatingScaleStep = ({ title, subtitle, onSelect }: RatingScaleStepProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const ratingOptions = [
    { value: 1, image: images.thumbsDown },
    { value: 2, image: images.thumbsDown },
    { value: 3, image: images.neutralFace },
    { value: 4, image: images.thumbsUp },
    { value: 5, image: images.thumbsUp },
  ];

  return (
    <div className="quiz-content fade-in">
      <h1 className="text-xl font-bold text-center text-foreground mb-2">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-muted-foreground text-center mb-12">
          {subtitle}
        </p>
      )}

      <div className="w-full flex justify-center items-end gap-2 mb-4">
        {ratingOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            onMouseEnter={() => setHoveredRating(option.value)}
            onMouseLeave={() => setHoveredRating(null)}
            className={cn(
              'flex flex-col items-center justify-center p-4 rounded-xl transition-all',
              'bg-secondary hover:bg-quiz-option-hover',
              hoveredRating === option.value && 'transform scale-110'
            )}
          >
            <img src={option.image} alt="" className="w-10 h-10" />
          </button>
        ))}
      </div>

      <div className="w-full flex justify-between px-2">
        <span className="text-xs text-muted-foreground">Discordo totalmente</span>
        <span className="text-xs text-muted-foreground">Concordo totalmente</span>
      </div>
    </div>
  );
};
