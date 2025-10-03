import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { religionCourse } from '../data/courseData';
import "../styles/pages/_homePage.scss"

const HomePage: React.FC = () => {
    const course = religionCourse;
    return (
        <MainLayout>
            <section className="hero-section container">
                {/* ... JSX cho Hero Section ... */}
                <Link to={`/course/${course.id}`} className="cta-button">
                    Vào học ngay
                </Link>
            </section>
        </MainLayout>
    );
};

export default HomePage;