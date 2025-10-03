import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { religionCourse } from '../../data/courseData';
import "../../styles/components/Header.scss"

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-header__inner container">
        <Link to="/" className="app-header__logo-wrapper">
          <div className="app-header__logo-icon">📚</div>
          <div>
            <h1 className="app-header__logo-title">Tôn giáo Việt Nam</h1>
            <p className="app-header__logo-subtitle">Hệ thống Giảng dạy Đại học</p>
          </div>
        </Link>
        <nav className="app-header__nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'app-header__nav-link active' : 'app-header__nav-link'}>
            Trang Chủ
          </NavLink>
          <NavLink to={`/course/${religionCourse.id}`} className={({ isActive }) => isActive ? 'app-header__nav-link active' : 'app-header__nav-link'}>
            Khóa Học
          </NavLink>
          {/* Thêm các link khác nếu cần */}
        </nav>
        <Link to={`/course/${religionCourse.id}`} className="app-header__cta-button">
          Bắt đầu học
        </Link>
      </div>
    </header>
  );
};

export default Header;