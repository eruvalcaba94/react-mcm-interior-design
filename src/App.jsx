import React from "react";
import Hero from "./assets/green_purple_flower.jpg";
import LivingRoom from "./assets/white_livingroom.jpg";
import SunlitBedroom from "./assets/sunlight_bedroom.jpg";
import TVLivingroom from "./assets/livingroom_tv.jpg";
import Consulation from "./assets/consultation.jpg";
import Development from "./assets/development.jpg";
import InPerson from "./assets/in-person.jpg";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import productReviews from "./components/data/reviewsData";
import ReviewCarousel from "./components/ReviewCarousel";
import Button from "./components/Button";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <div className=' bg-black/50 h-screen'>
        <img
          src={Hero}
          alt='Mid-Century Living Room'
          className='absolute -z-10 object-cover w-full h-screen'
        />
        <div className='flex flex-col justify-center items-center text-secondary text-center w-full min-h-screen'>
          <h2 className='font-display text-5xl mb-5'>
            Your Mid-Century Modern Oasis
          </h2>
          <p className='font-display text-xl'>
            Transform Your Space with Timeless Elegance
          </p>
        </div>
      </div>
      <div className='bg-secondary flex flex-col justify-center items-center  py-10 px-14 md:px-40 lg:px-64 lg:py-28'>
        <p className='font-body text-2xl lg:text-xl pb-4 font-light'>
          Love the space you're in
        </p>
        <h2 className='font-display text-4xl text-start lg:text-center font-bold'>
          Bring your dream home to life with one-on-one design help &
          hand-picked products tailored to your style, space, and budget.
        </h2>
      </div>
      <div className='flex flex-col pt-10'>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center w-full lg:gap-4 lg:w-auto lg:mb-20 lg:px-10'>
          <div className='flex flex-col justify-center items-center w-auto mx-10 mt-5 mb-8'>
            <h2 className='font-display md:text-center text-3xl mb-5'>
              Timeless Elegance
            </h2>
            <p className='font-body font-light text-center text-lg md:text-xl'>
              From iconic chairs to sleek coffee tables, we bring timeless
              elegance to your home.
            </p>
          </div>
          <img
            src={LivingRoom}
            alt='White Living Room'
            className='object-cover rounded-lg px-2 lg:px-0 w-full h-auto lg:w-1/2'
          />
        </div>
        <div className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center w-full lg:gap-4 lg:w-auto lg:mb-20 lg:px-10'>
          <div className='flex flex-col justify-center items-center w-auto pt-5 pb-10'>
            <h2 className='font-display text-3xl mb-5'>Elevate Your Space</h2>
            <p className='font-body font-light text-center text-lg md:text-xl'>
              Discover the perfect harmony of form and function with our
              expertly curated collection of mid-century modern furniture.
            </p>
          </div>
          <img
            src={SunlitBedroom}
            alt='Sunlit Bedroom'
            className='object-cover rounded-lg px-2 lg:px-0 w-full h-auto lg:w-1/2'
          />
        </div>
      </div>
      <div className='bg-[#304561] flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10 px-3 md:px-48 lg:px-0 py-14'>
        <div className='bg-background flex flex-col rounded-lg mb-10 lg:w-[365px]'>
          <img
            src={Consulation}
            alt='Consultation Art'
            className='object-cover rounded-t-lg w-full h-auto'
          />
          <div className='flex flex-col items-center pb-5'>
            <h2 className='font-display text-3xl text-center pt-2 pb-3'>
              Bronze Design Package
            </h2>
            <h3 className='font-body font-extrabold text-2xl text-center pb-4 text-[#f55d42]'>
              <span className='line-through font-normal pr-2 text-gray-400'>
                $99
              </span>
              $50
            </h3>
            <p className='font-body font-light text-lg text-center lg:h-[160px] px-6'>
              Our experts will provide you with a comprehensive consultation to
              assess your space and understand your goals.
            </p>
            <Button className='bg-[#f55d42] text-secondary font-body rounded-3xl px-4 py-2 w-fit'>
              Learn More
            </Button>
          </div>
        </div>
        <div className='bg-background flex flex-col rounded-lg mb-10 lg:w-[365px]'>
          <img
            src={Development}
            alt='Consultation Art'
            className='object-cover rounded-t-lg w-full h-auto'
          />
          <div className='flex flex-col items-center pb-5'>
            <h2 className='font-display text-3xl text-center pt-2 pb-3'>
              Silver Design Package
            </h2>
            <h3 className='font-body font-extrabold text-2xl text-center pb-4 text-[#f55d42]'>
              <span className='line-through font-normal pr-2 text-gray-400'>
                $199
              </span>
              $150
            </h3>
            <p className='font-body font-light text-lg text-center lg:h-[160px] pb-5 px-6'>
              Our team will help you source and select the perfect pieces to
              elevate your space, ensuring a cohesive and stylish result.
            </p>
            <Button className='bg-[#f55d42] text-secondary font-body rounded-3xl px-4 py-2 w-fit'>
              Learn More
            </Button>
          </div>
        </div>
        <div className='bg-background flex flex-col rounded-lg mb-10 lg:w-[365px]'>
          <img
            src={InPerson}
            alt='Consultation Art'
            className='object-cover rounded-t-lg w-full h-auto'
          />
          <div className='flex flex-col items-center pb-5'>
            <h2 className='font-display text-3xl text-center pt-2 pb-3'>
              Gold Design Package
            </h2>
            <h3 className='font-body font-extrabold text-2xl text-center pb-4 text-[#f55d42]'>
              <span className='line-through font-normal pr-2 text-gray-400'>
                $299
              </span>
              $250
            </h3>
            <p className='font-body font-light text-lg text-center pb-5 px-6'>
              Our team will oversee the entire design process, from procurement
              to installation, ensuring a seamless execution of your mid-century
              modern vision.
            </p>
            <Button className='bg-[#f55d42] text-secondary font-body rounded-3xl px-4 py-2 w-fit'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-secondary flex flex-col p-10 md:p-20'>
        <h2 className='font-display text-center text-2xl'>
          "These Interior Designers have absolutely nailed it!"
        </h2>
        <p className='font-body font-light text-center text-lg'>
          - A Really Happy Client
        </p>
      </div>
      <div className='bg-[#c0a6dd]'>
        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
          <img
            src={TVLivingroom}
            alt='TV Living Room'
            className='object-cover w-full lg:w-1/2 h-auto'
          />
          <div className='flex flex-col items-center gap-5 text-center md:m-5'>
            <p className='font-body'>Bring New Life Home</p>
            <h2 className='font-display text-3xl lg:text-5xl'>
              Shop furniture & decor curated by our interior designers
            </h2>
            <Button className='bg-secondary font-body rounded-3xl px-4 py-2 w-fit'>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-[#e7c3bb] flex flex-col lg:flex-row justify-center items-center mx-auto'>
        <div className='flex flex-col justify-center items-center gap-4 lg:pr-10'>
          <h3 className='font-body font-medium'>Reviews</h3>
          <h2 className='flex w-max font-display text-4xl'>Share the love!</h2>
          <Button className='bg-secondary font-body rounded-3xl px-4 py-2'>
            View All
          </Button>
        </div>
        <div className='py-10'>
          <ReviewCarousel productReviews={productReviews} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
