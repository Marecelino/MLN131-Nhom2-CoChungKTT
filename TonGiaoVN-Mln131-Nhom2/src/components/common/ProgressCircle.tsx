import React from 'react';
import "../../styles/components/_progressCircle.scss"
interface ProgressCircleProps {
  percentage: number;
  label: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage, label }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-circle">
      <svg className="progress-circle__svg" viewBox="0 0 120 120">
        <circle
          className="progress-circle__bg"
          cx="60"
          cy="60"
          r={radius}
        />
        <circle
          className="progress-circle__fg"
          cx="60"
          cy="60"
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <span className="progress-circle__label">{label}</span>
    </div>
  );
};

export default ProgressCircle;