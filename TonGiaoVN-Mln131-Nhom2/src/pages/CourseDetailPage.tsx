import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { religionCourse, courseQuizzes } from "../data/courseData";
import LearningPath from "../components/course/LearningPath";
import ProgressStats from "../components/course/ProgressStats";
import Quiz from "../components/quiz/Quiz";
import LessonModal from "../components/common/LessonModal";
import { useCourseProgress } from "../hooks/useCourseProgress";
import type { Lesson } from "../types";
import "../styles/pages/_courseDetail.scss";
import CourseHero from "../components/course/CourseHero";
const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  // Trong thực tế sẽ tìm course theo courseId, ở đây ta dùng course mặc định
  const course = religionCourse;

  const { completedLessons, toggleLesson, progress } = useCourseProgress(
    course.lessons.length
  );

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  const handleViewContent = (lesson: Lesson) => {
    setActiveLesson(lesson);
  };

  return (
    <MainLayout>
      <div className="course-detail-page container">
        <CourseHero
          title={course.title}
          subtitle={course.subtitle}
          description={course.description}
        />

        <div className="course-detail-grid">
          <div className="learning-content">
            <LearningPath
              lessons={course.lessons}
              completedLessons={completedLessons}
              onViewContent={handleViewContent}
              onToggleComplete={toggleLesson}
            />
            <Quiz questions={courseQuizzes} />
          </div>
          <aside className="progress-sidebar">
            <ProgressStats
              progressPercentage={progress}
              completedCount={completedLessons.size}
              totalCount={course.lessons.length}
            />
          </aside>
        </div>
      </div>

      <LessonModal
        lesson={activeLesson}
        isOpen={!!activeLesson}
        onClose={() => setActiveLesson(null)}
      />
    </MainLayout>
  );
};

export default CourseDetailPage;
