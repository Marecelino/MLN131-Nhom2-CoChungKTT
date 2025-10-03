import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { religionCourse } from '../../data/courseData';
import '../../styles/components/_header.scss'; // Đổi tên file SCSS cho thống nhất

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-header__inner container">
        <Link to="/" className="app-header__logo-wrapper">
          <div className="app-header__logo-icon">🏛️</div>
          <div>
            <h1 className="app-header__logo-title">Phân tích Tôn giáo VN</h1>
          </div>
        </Link>
        <nav className="app-header__nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'app-header__nav-link active' : 'app-header__nav-link'}>
            Trang Chủ
          </NavLink>
          <NavLink to={`/course/${religionCourse.id}`} className={({ isActive }) => isActive ? 'app-header__nav-link active' : 'app-header__nav-link'}>
            Khóa Học
          </NavLink>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? 'app-header__nav-link active' : 'app-header__nav-link'}>
            Dòng thời gian
          </NavLink>
        </nav>
        <Link to={`/course/${religionCourse.id}`} className="app-header__cta-button">
          Bắt đầu học
        </Link>
      </div>
    </header>
  );
};

export default Header;