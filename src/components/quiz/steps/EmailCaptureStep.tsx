import { useState, useEffect } from 'react';
import { QuizButton } from '../QuizButton';
import { Shield } from 'lucide-react';

interface EmailCaptureStepProps {
  dogName: string;
  onSubmit: (email: string) => void;
}

export const EmailCaptureStep = ({ dogName, onSubmit }: EmailCaptureStepProps) => {
  const [email, setEmail] = useState('');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      onSubmit(email);
    }
  };

  return (
    <div className="quiz-content fade-in relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3'][i % 7],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <h1 className="text-xl font-bold text-center text-foreground mb-2">
        Insira seu e-mail para receber o Desafio de obediência canina personalizado de {dogName || 'seu cão'}
      </h1>

      <form onSubmit={handleSubmit} className="w-full mt-6">
        <label className="text-sm text-primary font-medium mb-2 block">
          Digite o seu e-mail:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Insira seu e-mail para obter o plano"
          className="w-full p-4 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4"
        />

        <div className="flex items-start gap-3 mb-8 text-sm text-muted-foreground">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p>
            Protegemos sua privacidade e temos o compromisso de manter a segurança dos seus dados pessoais. 
            Nunca enviamos e-mails de spam, apenas informações relevantes.
          </p>
        </div>

        <button
          type="submit"
          disabled={!email.includes('@')}
          className="quiz-btn quiz-btn-primary disabled:quiz-btn-disabled"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};
