import React from 'react';
import { type Lesson } from '../../types';
import LessonCard from './LessonCard';


interface LearningPathProps {
  lessons: Lesson[];
  completedLessons: Set<number>;
  onViewContent: (lesson: Lesson) => void;
  onToggleComplete: (lessonId: number) => void;
}

const LearningPath: React.FC<LearningPathProps> = ({ lessons, completedLessons, onViewContent, onToggleComplete }) => {
  return (
    <div className="learning-path">
      <h2 className="learning-path__title">Lộ trình Học tập</h2>
      <div className="learning-path__list">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            isCompleted={completedLessons.has(lesson.id)}
            onViewContent={() => onViewContent(lesson)}
            onToggleComplete={() => onToggleComplete(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningPath;