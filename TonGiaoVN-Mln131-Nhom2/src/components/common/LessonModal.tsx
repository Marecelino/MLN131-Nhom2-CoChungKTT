import React, { useEffect } from 'react';
import type { Lesson } from '../../types';
import "../../styles/components/_lessonModal.scss"
interface LessonModalProps {
  lesson: Lesson | null;
  isOpen: boolean;
  onClose: () => void;
}

const LessonModal: React.FC<LessonModalProps> = ({ lesson, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !lesson) return null;

  return (
    <div className="lesson-modal__overlay" onClick={onClose}>
      <div className="lesson-modal__content" onClick={(e) => e.stopPropagation()}>
        <header className="lesson-modal__header">
          <h2 className="lesson-modal__title">{lesson.title}</h2>
          <button onClick={onClose} className="lesson-modal__close-btn">&times;</button>
        </header>
        <main className="lesson-modal__body" dangerouslySetInnerHTML={{ __html: lesson.content }} />
      </div>
    </div>
  );
};

export default LessonModal;