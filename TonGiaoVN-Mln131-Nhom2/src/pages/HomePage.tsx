import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { featuredTopics } from '../data/courseData';
import TopicCard from '../components/home/TopicCard';

const HomePage: React.FC = () => {
  const heroStyle = {
    backgroundImage: `url('https://tse3.mm.bing.net/th/id/OIP.aHZS4FOJ9S11Ovr9HwxLQwHaEf?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3')`,
  };

  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <section className="hero" style={heroStyle}>
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <h2 className="hero__title">Cổng thông tin Học liệu Chuyên sâu</h2>
          <p className="hero__subtitle">
            Khám phá các chuyên đề phân tích đa chiều, được trình bày trực quan và tương tác, phục vụ công tác giảng dạy và nghiên cứu.
          </p>
          <Link to="/course/tongiao-vn" className="hero__cta">
            Bắt đầu Khám phá
          </Link>
        </div>
      </section>

      {/* 2. Featured Topics Section */}
      <section className="topics-section">
        <div className="container">
          <header className="page-header">
            <h2 className="section-title">Chuyên đề Nổi bật</h2>
            <p className="section-subtitle">
              Đi sâu vào các vấn đề cốt lõi của môn học thông qua các bài phân tích được biên soạn kỹ lưỡng và trình bày sinh động.
            </p>
          </header>
          <div className="topics-grid">
            {featuredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="features-section">
        <div className="container">
          <header className="page-header">
            <h2 className="section-title">Tính năng Vượt trội</h2>
            <p className="section-subtitle">
              Nền tảng được xây dựng để tối ưu hóa trải nghiệm học tập và nghiên cứu.
            </p>
          </header>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-item__icon">📊</div>
              <h3 className="feature-item__title">Tương tác Trực quan</h3>
              <p>Dữ liệu và thông tin được biểu đồ hóa, cho phép tương tác trực tiếp để khám phá các khía cạnh khác nhau của vấn đề.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item__icon">📚</div>
              <h3 className="feature-item__title">Nội dung Chuyên sâu</h3>
              <p>Các chuyên đề được biên soạn kỹ lưỡng, bám sát giáo trình và cập nhật các dẫn chứng, tình huống thực tế mới nhất.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item__icon">📱</div>
              <h3 className="feature-item__title">Tương thích Đa nền tảng</h3>
              <p>Truy cập và học tập mọi lúc, mọi nơi trên máy tính, máy tính bảng hoặc điện thoại một cách mượt mà.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;