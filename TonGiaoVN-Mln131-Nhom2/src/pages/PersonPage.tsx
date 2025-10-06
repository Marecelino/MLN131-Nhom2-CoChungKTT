import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { persons } from '../data/courseData';
import '../styles/pages/_personpage.scss'; 

const PersonPage: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  const navigate = useNavigate();
  
  // State để quản lý lightbox
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const person = persons.find(p => p.id === personId);

  if (!person) {
    return (
      <MainLayout>
        <div className="container person-page--error">
          <h2 className="section-title">Không tìm thấy nhân vật</h2>
          <p className="section-subtitle">Có thể liên kết đã hỏng hoặc nhân vật này không tồn tại.</p>
          <button onClick={() => navigate('/persons')} className="cta-button">
            Quay lại danh sách
          </button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="person-page-container">
          {/* Breadcrumb */}
          <nav className="person-breadcrumb container">
            <Link to="/">Trang chủ</Link> / <Link to="/persons">Nhân vật</Link> / <span>{person.name}</span>
          </nav>

          {/* Hero Section */}
          <header className="person-hero" style={{ backgroundImage: `url(${person.imageUrl || ''})`}}>
              <div className="person-hero__overlay"></div>
              <div className="person-hero__content container">
                  <div className="person-hero__portrait-wrapper">
                      <img src={person.imageUrl || 'https://placehold.co/400x400/333/fff?text=N/A'} alt={`Chân dung của ${person.name}`} className="person-hero__portrait" />
                  </div>
                  <div className="person-hero__info">
                      <h1 className="person-hero__name">{person.name}</h1>
                      <p className="person-hero__period">{person.period} ({person.birthDeath || 'Không rõ'})</p>
                      <div className="person-hero__tags">
                          {person.tags?.map(tag => (
                            <span key={tag} className="person-hero__tag">#{tag}</span>
                          ))}
                      </div>
                  </div>
              </div>
          </header>

          {/* Main Content Grid */}
          <div className="person-main-grid container">
              <article className="person-main-content">
                  <section id="bio" className="person-section">
                      <h2 className="person-section__title">Tiểu sử</h2>
                      <p className="person-section__text">{person.bio}</p>
                  </section>
                  <section id="contributions" className="person-section">
                      <h2 className="person-section__title">Đóng góp chính</h2>
                      <ul className="person-section__list">
                          {person.contributions?.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                  </section>
              </article>
              
              <aside className="person-sidebar">
                  <div className="quick-facts-card">
                      <h3 className="quick-facts-card__title">Thông tin tóm tắt</h3>
                      <div className="quick-facts-card__item">
                          <strong>Tên đầy đủ</strong>
                          <span>{person.name}</span>
                      </div>
                      <div className="quick-facts-card__item">
                          <strong>Tôn giáo</strong>
                          <span>{person.religion || 'Không rõ'}</span>
                      </div>
                      <div className="quick-facts-card__item">
                          <strong>Thời kỳ</strong>
                          <span>{person.period || 'Không rõ'}</span>
                      </div>
                      <div className="quick-facts-card__item">
                          <strong>Sinh - Mất</strong>
                          <span>{person.birthDeath || 'Không rõ'}</span>
                      </div>
                  </div>

                  {person.gallery && person.gallery.length > 0 && (
                      <div className="gallery-card">
                          <h3 className="gallery-card__title">Thư viện hình ảnh</h3>
                          <div className="gallery-card__grid">
                              {person.gallery.map((img, index) => (
                                  <button key={index} className="gallery-card__thumbnail" onClick={() => setLightboxImage(img)}>
                                      <img src={img} alt={`Hình ảnh ${index + 1} của ${person.name}`} loading="lazy" />
                                  </button>
                              ))}
                          </div>
                      </div>
                  )}
              </aside>
          </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)} role="dialog" aria-modal="true">
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Hình ảnh được phóng to" />
            <button className="lightbox__close" onClick={() => setLightboxImage(null)} aria-label="Đóng">&times;</button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default PersonPage;