import React from 'react';
import ProgressCircle from '../common/ProgressCircle';
import "../../styles/components/_progressStats.scss"
interface ProgressStatsProps {
  progressPercentage: number;
  completedCount: number;
  totalCount: number;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({
  progressPercentage,
  completedCount,
  totalCount,
}) => {
  return (
    <div className="progress-stats">
      <h3 className="progress-stats__title">Tiến độ của bạn</h3>
      <div className="progress-stats__circle-wrapper">
        <ProgressCircle 
          percentage={progressPercentage} 
          label={`${progressPercentage}%`} 
        />
      </div>
      <p className="progress-stats__summary">
        Đã hoàn thành {completedCount} / {totalCount} chương
      </p>
      <div className="progress-stats__details">
        {/* Có thể thêm các thống kê khác ở đây */}
        <div className="stat-item">
          <span>📝 Bài kiểm tra</span>
          <span>Chưa làm</span>
        </div>
        <div className="stat-item">
          <span>💬 Thảo luận</span>
          <span>0 bài viết</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;