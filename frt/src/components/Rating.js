// Rating.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => (
        <FaStar
          key={index}
          color={index < rating ? "#ffc107" : "#e4e5e9"}
          size={20}
        />
      ))}
    </div>
  );
};

export default Rating;
