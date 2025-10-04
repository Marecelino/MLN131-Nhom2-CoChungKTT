import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CourseDetailPage from '../pages/CourseDetailPage';
import TimelinePage from '../pages/TimelinePage';
import PersonPage from '../pages/PersonPage';
import PersonListPage from '../pages/PersonListPage'; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
       
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/persons" element={<PersonListPage />} />
        <Route path="/persons/:personId" element={<PersonPage />} />
        {/* Thêm các routes khác ở đây */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;