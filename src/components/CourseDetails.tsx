import React from 'react';
import { Publisher } from '../types/Course';

interface CourseDetailsProps {
  publisher: Publisher;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ publisher }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex">
        <div className="w-2/3 pr-6">
          <img
            src={publisher.avatar} // Replace with actual course image
            alt="Course"
            className="rounded-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Blender 3D Fundamentals</h1>
          <p className="text-gray-600 mb-4">Learn The Basics of 3D in Blender with a Project Based Approach</p>
          <div className="flex items-center mb-4">
            <img
              src={publisher.avatar}
              alt="Publisher"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-semibold">{publisher.name}</p>
              <p className="text-xs text-gray-500">{publisher.role}</p>
            </div>
          </div>
          <p className="text-gray-800 mb-4">
            Welcome to the exciting world of Blender 3D! In this comprehensive course, we will dive into the fundamentals of Blender,
            equipping you with the essential knowledge and skills to create stunning 3D projects. Whether you are a beginner eager
            to explore the realm of 3D modeling or an experienced artist looking to expand your capabilities, this course will guide
            you every step of the way.
          </p>
          <div className="flex mb-4">
            <div className="mr-4">
              <h4 className="text-sm font-semibold">Course details</h4>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <i className="fas fa-book mr-2"></i> Lessons: 128
                </li>
                <li className="flex items-center mb-2">
                  <i className="fas fa-clock mr-2"></i> Duration: 56h 28m
                </li>
                <li className="flex items-center mb-2">
                  <i className="fas fa-signal mr-2"></i> Skill level: Beginner
                </li>
                <li className="flex items-center mb-2">
                  <i className="fas fa-eye mr-2"></i> Views: 12,620
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Frequently asked questions</h4>
            <ul className="text-sm text-gray-600">
              <li className="mb-2"><a href="#" className="text-blue-400">How long does it take to learn?</a></li>
              <li className="mb-2"><a href="#" className="text-blue-400">How much does Blender cost?</a></li>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          {/* Pricing and additional info */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-bold mb-2">Full course</h4>
            <p className="text-2xl font-bold text-purple-600 mb-2">$15.99 <span className="text-gray-500 line-through">$39.99</span></p>
            <p className="text-sm text-gray-500 mb-4">60% off</p>
            <ul className="text-sm text-gray-600 mb-4">
              <li className="mb-2">56 hours on-demand video</li>
              <li className="mb-2">6 Articles</li>
              <li className="mb-2">8 Downloadable resources</li>
              <li className="mb-2">Mobile version</li>
            </ul>
            <button className="bg-purple-600 text-white w-full py-2 rounded-lg mb-2">Add to cart</button>
            <button className="bg-gray-200 text-gray-800 w-full py-2 rounded-lg">Buy now</button>
            <p className="text-xs text-gray-500 mt-2">30-Day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
