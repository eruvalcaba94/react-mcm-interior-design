import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReviewCard from './ReviewCard';
import productReviews from './data/reviewsData';

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = (currentIndex - 1 + productReviews.length) % productReviews.length;
  const nextIndex = (currentIndex + 1) % productReviews.length;

  const goToNextReview = () => {
    setCurrentIndex(nextIndex);
  };

  const goToPreviousReview = () => {
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="flex ">
      <div className="flex bg-transparent">
        <div className='flex'>
          <div className='flex lg:hidden p-10 bg-secondary rounded-2xl'>
            <ReviewCard review={productReviews[previousIndex]} />
          </div>
          <button className="flex justify-center items-center" onClick={goToPreviousReview}>
            <BsChevronLeft size={24} />
          </button>
          <div className='flex p-10 bg-secondary rounded-2xl'>
            <ReviewCard review={productReviews[currentIndex]} />
          </div>
          <button className="flex lg:hidden justify-center items-center" onClick={goToNextReview}>
            <BsChevronRight size={24} />
          </button>
          <div className='flex lg:ml-5 p-10 bg-secondary rounded-2xl'>
            <ReviewCard review={productReviews[previousIndex]} />
          </div>
          <button className="hidden lg:flex justify-center items-center" onClick={goToNextReview}>
            <BsChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;

