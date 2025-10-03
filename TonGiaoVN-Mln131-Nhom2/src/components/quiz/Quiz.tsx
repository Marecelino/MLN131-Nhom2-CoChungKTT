import React, { useState } from 'react';
import type { QuizQuestion } from '../../types';
import "../../styles/components/_quiz.scss"

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2 className="quiz-container__title">Kiểm tra Kiến thức</h2>
      <div className="quiz-card">
        <div className="quiz-card__progress">
          Câu hỏi {currentQuestionIndex + 1} / {questions.length}
        </div>
        <h3 className="quiz-card__question">{currentQuestion.question}</h3>
        <div className="quiz-card__options">
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'quiz-option';
            if (isAnswered) {
              if (option.isCorrect) {
                optionClass += ' quiz-option--correct';
              } else if (index === selectedOption) {
                optionClass += ' quiz-option--wrong';
              }
            }
            return (
              <div key={index} className={optionClass} onClick={() => handleOptionClick(index)}>
                <span className="quiz-option__letter">{String.fromCharCode(65 + index)}</span>
                <span className="quiz-option__text">{option.text}</span>
              </div>
            );
          })}
        </div>
        {isAnswered && (
          <div className="quiz-card__feedback">
            <strong>Giải thích:</strong> {currentQuestion.explanation}
          </div>
        )}
        <button onClick={handleNextQuestion} disabled={!isAnswered} className="quiz-card__next-btn">
          Câu tiếp theo
        </button>
      </div>
    </div>
  );
};

export default Quiz;