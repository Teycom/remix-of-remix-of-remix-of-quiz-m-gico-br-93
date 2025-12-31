import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoadingScreenStep = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/resultado');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [navigate]);

  const loadingMessages = [
    { threshold: 20, message: 'Analisando o perfil do seu cão...' },
    { threshold: 40, message: 'Identificando pontos de melhoria...' },
    { threshold: 60, message: 'Criando plano personalizado...' },
    { threshold: 80, message: 'Finalizando recomendações...' },
    { threshold: 100, message: 'Pronto!' },
  ];

  const currentMessage = loadingMessages.find((m) => progress <= m.threshold)?.message || '';

  return (
    <div className="quiz-content fade-in items-center justify-center min-h-[60vh]">
      <div className="w-20 h-20 mb-8 relative">
        <div className="absolute inset-0 rounded-full border-4 border-progress-bg"></div>
        <div
          className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-3xl">🐕</span>
      </div>

      <h1 className="text-xl font-bold text-center text-foreground mb-4">
        Preparando seu plano personalizado...
      </h1>

      <div className="w-full max-w-xs mb-4">
        <div className="h-2 bg-progress-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-muted-foreground text-center animate-pulse">
        {currentMessage}
      </p>
    </div>
  );
};
