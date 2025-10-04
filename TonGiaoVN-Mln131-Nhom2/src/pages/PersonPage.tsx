import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { persons } from '../data/courseData';
// File _personpage.scss bạn đã tạo trước đó
import '../styles/pages/_personpage.scss'; 

const PersonPage: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  const navigate = useNavigate();
  
  const person = persons.find(p => p.id === personId);

  if (!person) {
    return (
      <MainLayout>
        <div className="container">
          <h2>Không tìm thấy nhân vật</h2>
          <button onClick={() => navigate('/persons')}>Quay lại danh sách</button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="person-page container">
          {/* Breadcrumb */}
          <nav className="person-page__breadcrumb">
            <Link to="/">Trang chủ</Link> / <Link to="/persons">Nhân vật</Link> / <span>{person.name}</span>
          </nav>

          {/* Nội dung chính */}
          <div className="person-page__grid">
              <div className="person-page__main-content">
                  <header className="person-page__header">
                      <img src={person.imageUrl || 'https://placehold.co/400x400'} alt={`Chân dung của ${person.name}`} className="person-page__portrait" />
                      <div className="person-page__header-info">
                          <h1>{person.name}</h1>
                          <p><strong>Tôn giáo:</strong> {person.religion || 'Không rõ'}</p>
                          <p><strong>Thời kỳ:</strong> {person.period || 'Không rõ'}</p>
                          <p><strong>Năm sinh - Năm mất:</strong> {person.birthDeath || 'Không rõ'}</p>
                          <div className="person-page__tags">
                              {person.tags?.map(tag => <span key={tag} className="person-page__tag">{tag}</span>)}
                          </div>
                      </div>
                  </header>
                  <section>
                      <h2>Tiểu sử</h2>
                      <p>{person.bio}</p>
                  </section>
                  <section>
                      <h2>Đóng góp chính</h2>
                      <ul>
                          {person.contributions?.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                  </section>
              </div>
              
              <aside className="person-page__sidebar">
                  {/* Có thể thêm các thông tin phụ, gallery, bản đồ ở đây */}
                  <h3>Thư viện hình ảnh</h3>
                   <div className="person-page__gallery">
                        {person.gallery?.map((img, index) => (
                            <img key={index} src={img} alt={`Hình ảnh ${index + 1} của ${person.name}`} loading="lazy" />
                        ))}
                   </div>
              </aside>
          </div>
      </div>
    </MainLayout>
  );
};

export default PersonPage;