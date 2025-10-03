import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import "../styles/layouts/_mainLayout.scss"

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
          {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;