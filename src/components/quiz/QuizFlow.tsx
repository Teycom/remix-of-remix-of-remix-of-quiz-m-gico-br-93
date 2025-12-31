import { useState, useCallback } from 'react';
import { QuizHeader } from './QuizHeader';
import { quizSteps } from '@/data/quizData';
import { QuizState, QuizAnswer } from '@/types/quiz';
import { AgeSelectionStep } from './steps/AgeSelectionStep';
import { GenderSelectionStep } from './steps/GenderSelectionStep';
import { BreedSelectionStep } from './steps/BreedSelectionStep';
import { NameInputStep } from './steps/NameInputStep';
import { InfoScreenStep } from './steps/InfoScreenStep';
import { MultiChoiceStep } from './steps/MultiChoiceStep';
import { SingleChoiceStep } from './steps/SingleChoiceStep';
import { RatingScaleStep } from './steps/RatingScaleStep';
import { LoadingScreenStep } from './steps/LoadingScreenStep';

export const QuizFlow = () => {
  const [state, setState] = useState<QuizState>({
    currentStep: 0,
    answers: [],
    dogAge: '',
    dogGender: '',
    dogBreed: '',
    dogName: '',
  });

  const currentStepData = quizSteps[state.currentStep];
  const totalStepsInSegment = quizSteps.filter(
    (s) => s.progressSegment === currentStepData.progressSegment
  ).length;
  const currentStepInSegment = quizSteps
    .filter((s) => s.progressSegment === currentStepData.progressSegment)
    .findIndex((s) => s.id === currentStepData.id) + 1;
  const progressInSegment = (currentStepInSegment / totalStepsInSegment) * 100;

  const goToNextStep = useCallback(() => {
    if (state.currentStep < quizSteps.length - 1) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
    }
  }, [state.currentStep]);

  const goToPrevStep = useCallback(() => {
    if (state.currentStep > 0) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }));
    }
  }, [state.currentStep]);

  const saveAnswer = useCallback((stepId: string, value: string | string[]) => {
    setState((prev) => {
      const existingAnswerIndex = prev.answers.findIndex((a) => a.stepId === stepId);
      const newAnswer: QuizAnswer = { stepId, value };
      
      if (existingAnswerIndex >= 0) {
        const newAnswers = [...prev.answers];
        newAnswers[existingAnswerIndex] = newAnswer;
        return { ...prev, answers: newAnswers };
      }
      
      return { ...prev, answers: [...prev.answers, newAnswer] };
    });
  }, []);

  const handleAgeSelect = (age: string) => {
    setState((prev) => ({ ...prev, dogAge: age }));
    saveAnswer('age', age);
    goToNextStep();
  };

  const handleGenderSelect = (gender: string) => {
    setState((prev) => ({ ...prev, dogGender: gender }));
    saveAnswer('gender', gender);
    goToNextStep();
  };

  const handleBreedSelect = (breed: string) => {
    setState((prev) => ({ ...prev, dogBreed: breed }));
    saveAnswer('breed', breed);
    goToNextStep();
  };

  const handleNameSubmit = (name: string) => {
    setState((prev) => ({ ...prev, dogName: name }));
    saveAnswer('name', name);
    goToNextStep();
  };

  const handleSingleChoice = (stepId: string) => (selected: string) => {
    saveAnswer(stepId, selected);
    goToNextStep();
  };

  const handleMultiChoice = (stepId: string) => (selected: string[]) => {
    saveAnswer(stepId, selected);
    goToNextStep();
  };

  const handleRating = (stepId: string) => (rating: number) => {
    saveAnswer(stepId, rating.toString());
    goToNextStep();
  };

  const getAgeLabel = () => {
    switch (state.dogAge) {
      case 'puppy': return 'filhote';
      case 'adolescent': return 'adolescente';
      case 'adult': return 'cão adulto';
      case 'senior': return 'cão sênior';
      default: return 'cão';
    }
  };

  const replacePlaceholders = (text: string) => {
    return text
      .replace('{ageLabel}', getAgeLabel())
      .replace('{dogName}', state.dogName || getAgeLabel());
  };

  const renderStep = () => {
    switch (currentStepData.type) {
      case 'age-selection':
        return <AgeSelectionStep onSelect={handleAgeSelect} />;
      
      case 'gender-selection':
        return (
          <GenderSelectionStep
            onSelect={handleGenderSelect}
            dogAge={state.dogAge}
          />
        );
      
      case 'breed-selection':
        return (
          <BreedSelectionStep
            onSelect={handleBreedSelect}
            dogAge={state.dogAge}
          />
        );
      
      case 'name-input':
        return <NameInputStep onSubmit={handleNameSubmit} />;
      
      case 'info-screen':
      case 'info-screen-image':
        return (
          <InfoScreenStep
            stepId={currentStepData.id}
            title={currentStepData.title ? replacePlaceholders(currentStepData.title) : undefined}
            subtitle={currentStepData.subtitle ? replacePlaceholders(currentStepData.subtitle) : undefined}
            buttonText={currentStepData.buttonText}
            image={currentStepData.image}
            onContinue={goToNextStep}
          />
        );
      
      case 'multi-choice':
        return (
          <MultiChoiceStep
            title={replacePlaceholders(currentStepData.title!)}
            subtitle={currentStepData.subtitle}
            options={currentStepData.options!}
            buttonText={currentStepData.buttonText || 'Continuar'}
            onSubmit={handleMultiChoice(currentStepData.id)}
            variant="default"
          />
        );

      case 'multi-choice-images':
        return (
          <MultiChoiceStep
            title={replacePlaceholders(currentStepData.title!)}
            subtitle={currentStepData.subtitle}
            options={currentStepData.options!}
            buttonText={currentStepData.buttonText || 'Continuar'}
            onSubmit={handleMultiChoice(currentStepData.id)}
            variant="images"
          />
        );

      case 'multi-choice-icons':
        return (
          <MultiChoiceStep
            title={replacePlaceholders(currentStepData.title!)}
            subtitle={currentStepData.subtitle}
            options={currentStepData.options!}
            buttonText={currentStepData.buttonText || 'Continuar'}
            image={currentStepData.image}
            onSubmit={handleMultiChoice(currentStepData.id)}
            variant="icons"
          />
        );
      
      case 'single-choice':
        return (
          <SingleChoiceStep
            title={replacePlaceholders(currentStepData.title!)}
            subtitle={currentStepData.subtitle}
            options={currentStepData.options!}
            onSelect={handleSingleChoice(currentStepData.id)}
          />
        );

      case 'single-choice-image':
        return (
          <SingleChoiceStep
            title={replacePlaceholders(currentStepData.title!)}
            subtitle={currentStepData.subtitle}
            options={currentStepData.options!}
            image={currentStepData.image}
            onSelect={handleSingleChoice(currentStepData.id)}
          />
        );
      
      case 'rating-scale':
        return (
          <RatingScaleStep
            title={replacePlaceholders(currentStepData.title!)}
            subtitle={currentStepData.subtitle}
            onSelect={handleRating(currentStepData.id)}
          />
        );
      
      case 'loading-screen':
        return <LoadingScreenStep />;
      
      default:
        return null;
    }
  };

  return (
    <div className="quiz-container">
      <QuizHeader
        showBack={state.currentStep > 0 && currentStepData.type !== 'loading-screen'}
        onBack={goToPrevStep}
        progress={progressInSegment}
        segment={currentStepData.progressSegment || 1}
      />
      
      {renderStep()}
    </div>
  );
};
