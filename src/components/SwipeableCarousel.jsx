import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "./Button";

const SwipeableCarousel = () => {
  const [index, setIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "Bronze Design Package",
      oldPrice: "$99",
      newPrice: "$50",
    },
    {
      id: 2,
      title: "Silver Design Package",
      oldPrice: "$199",
      newPrice: "$99",
    },
    {
      id: 3,
      title: "Gold Design Package",
      oldPrice: "$299",
      newPrice: "$199",
    },
  ];

  const goToNextIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const goToPreviousIndex = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <div
          className={`bg-secondary flex flex-col justify-center items-center w-full p-8`}
        >
          <button
            className='absolute top-1/2 -translate-y-1/2 left-0'
            onClick={goToPreviousIndex}
          >
            <BsChevronLeft size={24} />
          </button>
          <div>
            <h2 className='font-display text-3xl text-center pt-2 pb-3'>
              {carouselItems[index].title}
            </h2>
            <h3 className='font-body font-extrabold text-2xl text-center pb-4 text-[#f55d42]'>
              <span className='line-through font-normal pr-2 text-gray-400'>
                {carouselItems[index].oldPrice}
              </span>
              {carouselItems[index].newPrice}
            </h3>
          </div>
          <button
            className='absolute top-1/2 -translate-y-1/2 right-0'
            onClick={goToNextIndex}
          >
            <BsChevronRight size={24} />
          </button>
          <Button
            text={"Let's Start"}
            className={
              "bg-[#f55d42] hover:bg-[#da4c33] text-secondary text-xl font-display w-36"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SwipeableCarousel;
