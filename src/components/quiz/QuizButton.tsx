import { cn } from '@/lib/utils';

interface QuizButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const QuizButton = ({
  onClick,
  disabled = false,
  children,
  variant = 'primary',
  className,
}: QuizButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'quiz-btn',
        variant === 'primary' && 'quiz-btn-primary',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        disabled && 'quiz-btn-disabled',
        className
      )}
    >
      {children}
    </button>
  );
};
