import React from 'react';
import type { Lesson } from '../../types';
import "../../styles/components/_lessonCard.scss"
interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  onViewContent: () => void;
  onToggleComplete: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, isCompleted, onViewContent, onToggleComplete }) => {
  const cardClassName = `lesson-card ${isCompleted ? 'lesson-card--completed' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="lesson-card__number">{lesson.chapter}</div>
      <div className="lesson-card__main">
        <div className="lesson-card__header">
          <div className="lesson-card__info">
            <span className="lesson-card__module">Chương {lesson.chapter}</span>
            <h3 className="lesson-card__title">{lesson.title}</h3>
          </div>
          <span className="lesson-card__duration">{lesson.duration}</span>
        </div>
        <p className="lesson-card__description">{lesson.description}</p>
      </div>
      <div className="lesson-card__actions">
        <button onClick={onViewContent} className="lesson-card__button lesson-card__button--view">
          Xem nội dung →
        </button>
        <div className="lesson-card__completion">
          <input
            type="checkbox"
            id={`check-${lesson.id}`}
            checked={isCompleted}
            onChange={onToggleComplete}
            className="lesson-card__checkbox"
          />
          <label htmlFor={`check-${lesson.id}`}>Đã hoàn thành</label>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;