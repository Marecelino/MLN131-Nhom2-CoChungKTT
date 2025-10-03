import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/components/_footer.scss"

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner container">
        <div className="app-footer__grid">
          <div className="app-footer__about">
            <h3 className="app-footer__title">Hệ thống Giảng dạy Tôn giáo Việt Nam</h3>
            <p>
              Một dự án giáo dục nhằm cung cấp kiến thức sâu sắc về chính sách tôn giáo tại Việt Nam và vai trò của thế hệ trẻ.
            </p>
          </div>
          <div className="app-footer__links">
            <h3 className="app-footer__title">Liên kết nhanh</h3>
            <ul>
              <li><Link to="/">Trang Chủ</Link></li>
              <li><Link to="/course/tongiao-vn">Khóa Học</Link></li>
              <li><a href="#">Tài liệu</a></li>
              <li><a href="#">Thảo luận</a></li>
            </ul>
          </div>
          <div className="app-footer__contact">
            <h3 className="app-footer__title">Liên hệ</h3>
            <p>Email: nguoidanloi@edu.vn</p>
            <p>Điện thoại: 0932097654</p>
          </div>
        </div>
        <div className="app-footer__copyright">
          <p>&copy; 2025 Hệ thống Giảng dạy Chuyên đề Tôn giáo Việt Nam -MLN131 - Cô ChungKTT -Nhóm 2</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;