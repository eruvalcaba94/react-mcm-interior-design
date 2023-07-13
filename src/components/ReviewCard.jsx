import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewCard = ({ review }) => {
  const { reviewerName, rating, reviewText } = review;

  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starElements = [];

    for (let i = 0; i < filledStars; i++) {
      starElements.push(<AiFillStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      starElements.push(<AiFillStar key={filledStars} className="text-yellow-500" />);
    }

    return starElements;
  };

  return (
    <div className="flex flex-col w-full h-[330px]">
      <div className="flex flex-col mb-5">
        <h3 className="mb-2 font-medium">{reviewerName}</h3>
        <div className="flex items-center mt-2">{renderStarRating(rating)}</div>
      </div>
      <p className="flex w-[260px]">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
