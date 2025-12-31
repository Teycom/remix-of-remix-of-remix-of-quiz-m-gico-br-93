export interface QuizAnswer {
  stepId: string;
  value: string | string[];
}

export interface QuizState {
  currentStep: number;
  answers: QuizAnswer[];
  dogAge: string;
  dogGender: string;
  dogBreed: string;
  dogName: string;
}

export type StepType = 
  | 'age-selection'
  | 'gender-selection'
  | 'breed-selection'
  | 'name-input'
  | 'single-choice'
  | 'single-choice-image'
  | 'multi-choice'
  | 'multi-choice-images'
  | 'multi-choice-icons'
  | 'rating-scale'
  | 'info-screen'
  | 'info-screen-image'
  | 'loading-screen'
  | 'time-available'
  | 'progress-chart'
  | 'loading-reviews'
  | 'obedience-level'
  | 'weekly-progress'
  | 'email-capture';

export interface QuizStep {
  id: string;
  type: StepType;
  title?: string;
  subtitle?: string;
  options?: QuizOption[];
  image?: string;
  buttonText?: string;
  progressSegment?: number; // 1, 2, or 3
}

export interface QuizOption {
  id: string;
  label: string;
  sublabel?: string;
  icon?: string;
  image?: string;
}
