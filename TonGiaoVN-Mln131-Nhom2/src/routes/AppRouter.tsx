import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CourseDetailPage from '../pages/CourseDetailPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        {/* Thêm các routes khác ở đây */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;