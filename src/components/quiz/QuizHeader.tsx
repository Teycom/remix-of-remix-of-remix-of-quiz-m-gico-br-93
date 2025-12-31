import { ChevronLeft } from 'lucide-react';

interface QuizHeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  progress: number;
  segment: number;
}

export const QuizHeader = ({ showBack = false, onBack, progress, segment }: QuizHeaderProps) => {
  // Calculate progress for each segment (3 segments)
  const segmentProgress = (currentSegment: number) => {
    if (segment > currentSegment) return 100;
    if (segment < currentSegment) return 0;
    return progress;
  };

  return (
    <header className="sticky top-0 z-10 bg-background w-full">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <div className="w-10">
          {showBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-lg">🐾</span>
          </div>
          <span className="font-bold text-foreground text-lg">Conexão Pet</span>
        </div>
        
        <div className="w-10" />
      </div>
      
      {/* Progress bar with 3 segments */}
      <div className="px-4 pb-2 max-w-md mx-auto">
        <div className="flex gap-1">
          {[1, 2, 3].map((seg) => (
            <div
              key={seg}
              className="flex-1 h-1.5 rounded-full bg-progress-bg overflow-hidden"
            >
              <div
                className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                style={{ width: `${segmentProgress(seg)}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
