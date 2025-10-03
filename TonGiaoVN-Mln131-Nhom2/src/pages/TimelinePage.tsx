import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Timeline from '../components/timeline/Timeline'; // Component mới
import { religionTimeline } from '../data/courseData';

const TimelinePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container">
        <header className="page-header">
          <h1 className="section-title">Dòng thời gian Lịch sử</h1>
          <p className="section-subtitle">
            Khám phá các cột mốc quan trọng trong lịch sử phát triển tín ngưỡng và tôn giáo tại Việt Nam, từ thời kỳ sơ khai đến hiện đại.
          </p>
        </header>
        <Timeline events={religionTimeline} />
      </div>
    </MainLayout>
  );
};

export default TimelinePage;