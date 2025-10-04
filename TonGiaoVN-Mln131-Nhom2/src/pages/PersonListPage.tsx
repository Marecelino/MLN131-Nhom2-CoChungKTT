import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { persons } from '../data/courseData';
import '../styles/pages/_personListPage.scss';

const PersonListPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container">
        <header className="page-header">
          <h1 className="section-title">Nhân vật Lịch sử</h1>
          <p className="section-subtitle">
            Các nhân vật tôn giáo tiêu biểu trong lịch sử Việt Nam có những đóng góp quan trọng cho việc xây dựng và bảo vệ đất nước.
          </p>
        </header>
        <div className="person-grid">
          {persons.map((person) => (
            <Link to={`/persons/${person.id}`} key={person.id} className="person-card-link">
              <div className="person-card">
                <img src={person.imageUrl || 'https://placehold.co/400x400'} alt={person.name} className="person-card__image" />
                <div className="person-card__overlay">
                  <h3 className="person-card__name">{person.name}</h3>
                  <p className="person-card__period">{person.period}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PersonListPage;