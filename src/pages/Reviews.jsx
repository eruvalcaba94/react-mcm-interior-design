import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import productReviews from '../components/data/reviewsData';

const Reviews = () => {
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
    <div>
      <NavBar />
      <div>
        <div className='flex justify-center items-center p-10'>
          <h1 className='font-display text-5xl'>All Reviews</h1>
        </div>
        {productReviews.map(review => (
          <div key={review.id} className='flex mx-20 border-b border-b-black'>
            <div className='flex flex-col w-[200px] pr-10'>
              <h3 className='font-body text-lg flex w-max py-5'>
                {review.reviewerName}</h3>
              <div className='flex'>
                {renderStarRating(review.rating)}
              </div>
            </div>
            <div className='flex flex-col w-full px-10'>
              <p className='font-body text-xs py-5'>{review.dateCreated}</p>
              <h1 className='font-display text-3xl pb-5'>{review.reviewTitle}</h1>
              <p className='font-body text-lg pb-7'>{review.reviewText}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-5 mb-10'>
        <Button text="Leave A Review" className="text-secondary text-3xl font-display" />
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
