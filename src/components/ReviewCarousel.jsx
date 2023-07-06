import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReviewCard from './ReviewCard';

const ReviewCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const nextIndex = (currentIndex + 1) % reviews.length;

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
                <div className='flex p-10 bg-red-500 rounded-2xl'>
                    <ReviewCard review={reviews[previousIndex]} />
                </div>
                <button className="flex justify-center items-center" onClick={goToPreviousReview}>
                <BsChevronLeft size={24} />
                </button>
                <div className='flex p-10 bg-red-500 rounded-2xl'>
                    <ReviewCard review={reviews[currentIndex]} />
                </div>
                <button className="flex justify-center items-center" onClick={goToNextReview}>
                <BsChevronRight size={24} />
                </button>
                <div className='flex p-10 bg-red-500 rounded-2xl overflow-hidden'>
                    <ReviewCard review={reviews[previousIndex]} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ReviewCarousel;
