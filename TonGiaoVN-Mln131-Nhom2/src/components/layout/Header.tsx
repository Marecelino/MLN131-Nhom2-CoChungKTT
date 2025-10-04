import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { religionCourse } from '../../data/courseData';
import '../../styles/components/_header.scss'; // Đổi tên file SCSS cho thống nhất

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-header__inner container">
        <Link to="/" className="app-header__logo-wrapper">
<div className="app-header__logo-icon">
  <img 
    src="https://yt3.googleusercontent.com/ytc/AIdro_l5RDb_hCP3D-oDGK4Rw4cnqYhDxXC8hg-U8CrjkFuwM7w=s900-c-k-c0x00ffffff-no-rj" 
    alt="logo"
    style={{ width: "32px", height: "32px", objectFit: "cover", borderRadius: "50%" }}
  />
</div>
          <div>
            <h1 className="app-header__logo-title">MLN131 - GROUP2</h1>
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

           <NavLink to="/persons" className={({ isActive }) => isActive ? 'app-header__cta-button active' : 'app-header__cta-button'}>
            Nhân vật Lịch Sử 
          </NavLink>
      </div>
    </header>
  );
};

export default Header;