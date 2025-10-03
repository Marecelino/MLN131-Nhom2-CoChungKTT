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