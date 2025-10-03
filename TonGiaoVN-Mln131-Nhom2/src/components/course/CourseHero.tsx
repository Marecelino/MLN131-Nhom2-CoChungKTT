import React from "react";
import "./CourseHero.scss";
import StatsGrid from "../common/StatsGrid";

interface CourseHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const CourseHero: React.FC<CourseHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="course-hero">
      <div className="course-hero__container">
        {/* Left content */}
        <div className="course-hero__content">
          <span className="course-hero__subtitle">📘 {subtitle}</span>
          <h1 className="course-hero__title">{title}</h1>
          <p className="course-hero__description">{description}</p>

          <blockquote className="course-hero__quote">
            “Mở rộng và phát huy khối đại đoàn kết toàn dân tộc, phát huy sức mạnh
            của mọi giai cấp và tầng lớp nhân dân, mọi thành phần dân tộc và tôn giáo,
            mọi công dân Việt Nam ở trong nước hay ở nước ngoài, tạo nên sự thống nhất
            và đồng thuận xã hội, tạo động lực cho công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc”
            <footer>— Trích từ Giáo Trình CNXHKH</footer>
          </blockquote>

          
        </div>

        {/* Right visual */}
        <div className="course-hero__visual">
          <StatsGrid />
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
