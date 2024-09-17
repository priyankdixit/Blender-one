import React from 'react';
import { Publisher } from '../types/Course';

interface PublisherCardProps {
  publisher: Publisher;
}

const PublisherCard: React.FC<PublisherCardProps> = ({ publisher }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h4 className="text-lg font-bold mb-2">Publisher</h4>
      <div className="flex items-center mb-2">
        <img src={publisher.avatar} alt={`${publisher.name} avatar`} className="w-10 h-10 rounded-full mr-2" />
        <div>
          <p className="text-sm font-semibold">{publisher.name}</p>
          <p className="text-xs text-gray-500">{publisher.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{publisher.bio}</p>
      <ul className="text-sm text-gray-600">
        <li className="mb-2">{publisher.rating} Instructor rating</li>
        <li className="mb-2">{publisher.reviews} Reviews</li>
        <li className="mb-2">{publisher.students} Students</li>
        <li className="mb-2">{publisher.courses} Courses</li>
      </ul>
    </div>
  );
};

export default PublisherCard;
