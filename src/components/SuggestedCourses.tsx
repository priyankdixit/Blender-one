import React from 'react';
import { SuggestedCourse } from '../types/Course';

interface SuggestedCoursesProps {
  courses: SuggestedCourse[];
}

const SuggestedCourses: React.FC<SuggestedCoursesProps> = ({ courses }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h4 className="text-lg font-bold mb-2">Suggested courses</h4>
      {courses.map((course, index) => (
        <div key={index} className="flex items-center mb-2">
          <img src={course.thumbnail} alt={`${course.title} thumbnail`} className="w-16 h-10 rounded-lg mr-2" />
          <div>
            <p className="text-sm font-semibold">{course.title}</p>
            <p className="text-xs text-gray-500">By {course.instructor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedCourses;
