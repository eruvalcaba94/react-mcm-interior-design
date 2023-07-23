import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import talentData from "./data/talentData";

const TalentCarousel = () => {
  const [talent, setTalent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredTalent, setHoveredTalent] = useState(null);
  const prevTalent = (talent - 1 + talentData.length) % talentData.length;
  const nextTalent = (talent + 1) % talentData.length;

  const goToNextReview = () => {
    setTalent(nextTalent);
  };

  const goToPrevReview = () => {
    setTalent(prevTalent);
  };

  const handleMouseEnter = (index) => {
    setIsHovering(true);
    setHoveredTalent(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoveredTalent(null);
  };

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center w-[330px]'>
          <div className='flex items-center' onClick={goToPrevReview}>
            <BsChevronLeft size={28} />
          </div>
          <div
            className='relative'
            onMouseEnter={() => handleMouseEnter(talent)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={talentData[talent].image}
              alt={talentData[talent].name}
              className='object-cover w-full h-[450px] rounded-xl'
            />

            {isHovering && hoveredTalent === talent && (
              <div className='absolute top-0 left-0 p-4 bg-black/75 w-full h-full text-white'>
                <h2 className='font-display mb-3'>{talentData[talent].name}</h2>
                <p className='font-body'>{talentData[talent].description}</p>
              </div>
            )}
          </div>
          <div className='flex items-center' onClick={goToNextReview}>
            <BsChevronRight size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCarousel;
