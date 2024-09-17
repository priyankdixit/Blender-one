import React from 'react';
import CourseSidebar from '../components/CourseSidebar';
import CourseDetails from '../components/CourseDetails';
import RatingCard from '../components/RatingCard';
import PublisherCard from '../components/PublisherCard';
import SuggestedCourses from '../components/SuggestedCourses';
import { Publisher, SuggestedCourse } from '../types/Course';

// Sample data (replace with actual data or fetch from API)
const publisherData: Publisher = {
  name: 'Ryan Curtis',
  role: '3D Artist',
  avatar: 'https://placehold.co/40',
  bio: "Hey! My name is Ryan, I'm 26 and a freelance 3D Artist with around 8 years of experience.",
  rating: 4.8,
  reviews: 889,
  students: 4887,
  courses: 6,
};

const suggestedCoursesData: SuggestedCourse[] = [
  {
    title: 'Stylized 3D Art',
    instructor: 'Ryan Curtis',
    thumbnail: 'https://placehold.co/60x40',
  },
  {
    title: 'Advanced Blender Techniques',
    instructor: 'Ryan Curtis',
    thumbnail: 'https://placehold.co/60x40',
  },
];

const CoursePage: React.FC = () => {
  return (
    <div className="flex">
      <CourseSidebar />
      <main className="flex-1 p-6">
        <CourseDetails publisher={publisherData} />
        <RatingCard rating={4.8} students={2492} />
        <PublisherCard publisher={publisherData} />
        <SuggestedCourses courses={suggestedCoursesData} />
      </main>
    </div>
  );
};

export default CoursePage;
