export interface Lesson {
  id: number;
  chapter: number;
  title: string;
  duration: string;
  description: string;
  content: string; // Nội dung HTML chi tiết của bài học
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  question: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
}
export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  imageUrl?: string; 
}
export interface Topic {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  status: 'published' | 'coming_soon';
}