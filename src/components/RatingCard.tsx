import React from 'react';

interface RatingCardProps {
  rating: number;
  students: number;
}

const RatingCard: React.FC<RatingCardProps> = ({ rating, students }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h4 className="text-lg font-bold mb-2">Rating</h4>
      <div className="flex items-center mb-2">
        <i className="fas fa-star text-yellow-500 mr-2"></i>
        <p className="text-sm font-semibold">{rating}</p>
      </div>
      <p className="text-sm text-gray-600">{students} Students</p>
    </div>
  );
};

export default RatingCard;
