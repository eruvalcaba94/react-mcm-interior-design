import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TalentCarousel from "../components/TalentCarousel";
import Consult from "../assets/discussion.jpg";
import Colorful from "../assets/colorful-livingroom.jpg";
import Livingroom from "../assets/livingroom_tv.jpg";
import SofaCover from "../assets/SofaCover.jpeg";

const Explore = () => {
  return (
    <div className='bg-[#eccec7]'>
      <NavBar />
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-background text-center w-full'>
          <h2 className='font-display text-4xl my-7'>How It Works</h2>
        </div>
        <ol className='flex flex-col gap-10 text-center w-full'>
          <li className='bg-secondary flex flex-col lg:flex-row lg:justify-center lg:items-center p-4 mb-5 gap-4'>
            <div className='lg:px-24'>
              <h3 className='font-display text-xl lg:text-3xl pb-4'>
                Select Your Designer
              </h3>
              <p className='font-body text-lg pb-3 lg:px-6'>
                Select one of our talented designers. They&lsquo;ll become your
                one-on-one guide and partner.
              </p>
            </div>
            <div>
              <TalentCarousel />
            </div>
          </li>
          <li className='bg-secondary flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center p-4 mb-5 gap-2'>
            <div className='lg:px-24'>
              <h3 className='font-display text-xl lg:text-3xl pb-4'>
                Tell Us About Your Dream Home
              </h3>
              <p className='font-body text-lg pb-3 lg:px-6'>
                We&lsquo;ll get to work on bringing it to life. Tell us all
                about your dream home.
              </p>
            </div>
            <img
              src={Consult}
              alt='consultation'
              className='max-w-[550px] max-h-[450px] lg:w-1/2 rounded-xl'
            />
          </li>
          <li className='bg-secondary flex flex-col lg:flex-row lg:justify-center lg:items-center p-4 mb-5 gap-2'>
            <div className='lg:px-24'>
              <h3 className='font-display text-xl lg:text-3xl pb-4'>
                Inspiration and Ideas
              </h3>
              <p className='font-body text-lg pb-3 lg:px-6'>
                Your designer will blow your mind with inspiration and ideas for
                transforming your space.
              </p>
            </div>
            <img
              src={Colorful}
              alt='colorful'
              className='max-w-[550px] max-h-[450px] lg:w-1/2 rounded-xl'
            />
          </li>
          <li className='bg-secondary flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center p-4 mb-5 gap-2'>
            <div className='lg:px-24'>
              <h3 className='font-display text-xl lg:text-3xl pb-4'>
                Review and Refine
              </h3>
              <p className='font-body text-lg pb-3 lg:px-6'>
                Tell us which design ideas you vibe with, and we&lsquo;ll add
                all the beautiful finishing touches.
              </p>
            </div>
            <img
              src={Livingroom}
              alt='livingroom'
              className='max-w-[550px] max-h-[450px] lg:w-1/2 rounded-xl'
            />
          </li>
          <li className='bg-secondary flex flex-col lg:flex-row lg:justify-center lg:items-center p-4 gap-2'>
            <div className='lg:px-24'>
              <h3 className='font-display text-xl lg:text-3xl pb-4'>
                Shop Your Design
              </h3>
              <p className='font-body text-lg pb-3 lg:px-6'>
                Shop items from your design in one place, and we&lsquo;ll take
                care of the logistics. It&lsquo;s that simple.
              </p>
            </div>
            <img
              src={SofaCover}
              alt='sofa cover'
              className='max-w-[550px] max-h-[450px] lg:w-1/2 rounded-xl'
            />
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
