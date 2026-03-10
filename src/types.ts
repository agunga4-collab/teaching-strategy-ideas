export interface RoutineDetail {
  name: string;
  purpose: string;
  application: string;
  steps: string[];
  tips: string[];
  example: string;
  referenceLink: string;
}

export interface TeacherInput {
  subject: string;
  gradeLevel: string;
  objective: string;
}

export interface TeachingStrategy {
  name: string;
  type: 'Visible Thinking Routine' | 'General Strategy' | 'Collaborative Learning' | 'Active Learning';
  description: string;
  steps: string[];
  tips: string[];
  benefits: string;
  referenceLink?: string;
}
