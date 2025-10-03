import { useState, useMemo } from 'react';

/**
 * Custom hook để quản lý trạng thái tiến độ khóa học.
 * @param totalLessons - Tổng số bài học trong khóa.
 */
export const useCourseProgress = (totalLessons: number) => {
  // Dùng một Set để lưu trữ ID của các bài học đã hoàn thành
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  /**
   * Chuyển đổi trạng thái hoàn thành của một bài học.
   * Nếu bài học đã hoàn thành -> đánh dấu chưa hoàn thành và ngược lại.
   * @param lessonId - ID của bài học cần thay đổi.
   */
  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  // Tính toán phần trăm tiến độ, chỉ tính lại khi completedLessons thay đổi
  const progress = useMemo(() => {
    if (totalLessons === 0) return 0;
    return Math.round((completedLessons.size / totalLessons) * 100);
  }, [completedLessons, totalLessons]);

  return {
    completedLessons,
    toggleLesson,
    progress,
  };
};