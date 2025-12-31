interface TimeAvailableStepProps {
  dogName: string;
  onSelect: (time: string) => void;
}

export const TimeAvailableStep = ({ dogName, onSelect }: TimeAvailableStepProps) => {
  const options = [
    { id: '10', label: '10 min/dia' },
    { id: '15', label: '15 min/dia' },
    { id: '30', label: '30 min/dia' },
    { id: '60', label: '60 min/dia' },
  ];

  return (
    <div className="quiz-content fade-in">
      <h1 className="text-xl font-bold text-center text-foreground mb-6">
        Quanto tempo você está disposto a gastar para melhorar a vida de {dogName || 'seu cão'}?
      </h1>

      <div className="w-full space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="quiz-option justify-center"
          >
            <span className="font-medium text-foreground">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
