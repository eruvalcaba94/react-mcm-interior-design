import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Colorful from '../assets/colorful-livingroom.jpg';
import McmLiving from '../assets/mcm-livingroom.jpg';
import Simple from '../assets/simple-corner.jpg';

const DesignerCarousel = () => {
  const images = [Colorful, McmLiving, Simple];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextExample = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPreviousExample = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center justify-center bg-red-500 w-full">
      <button className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2" onClick={goToPreviousExample}>
        <BsChevronLeft size={32} />
      </button>
      <div className='relative bg-red-500'>
        <img src={images[currentIndex]} alt="Example" className='bg-black/30 object-cover w-full xl:w-[2560px] h-[520px] md:h-auto xl:max-h-[750px]' />
      </div>
      <button className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2" onClick={goToNextExample}>
        <BsChevronRight size={32} />
      </button>
    </div>
  );
};

export default DesignerCarousel;
