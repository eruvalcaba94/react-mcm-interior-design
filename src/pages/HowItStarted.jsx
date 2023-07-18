import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ColorLiving from '../assets/color_living.jpg'
import CoupleHappy from '../assets/couple-happy.jpg'
import DiningTable from '../assets/diningroom.jpg'
import Consult from '../assets/consulting.jpg'
import Designers from '../assets/designers.jpg'
import Sunset from '../assets/phx-sunset.jpg'

const HowItStarted = () => {
  return (
    <div>
        <NavBar />
        <img src={ColorLiving} alt="/" className='hidden md:flex object-cover w-full h-auto xl:w-[2560px] xl:max-h-[450px]' />
        <div className='bg-secondary pt-4 px-4'>
            <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-x-10 w-full'>
                <div>
                    <img src={CoupleHappy} alt="/" className='object-cover w-full h-[400px]' />
                </div>
                <div className='flex flex-col items-center md:pt-0 w-full md:w-1/2 px-3 pt-8'>
                    <h1 className='font-display text-center text-2xl mb-4 md:mb-7'>About Mid-Century Mindset</h1>
                    <p className='font-body'>
                        Welcome to Mid-Century Mindset, your go-to destination for exceptional interior design services tailored to your unique style and preferences. Founded by a dynamic couple, Olivia Bennett and Ethan Matthews, Mid-Century Mindset has grown into a passionate team of four talented designers, all sharing a deep love for creating breathtaking spaces that reflect the dreams and personalities of our valued clients.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-x-10 w-full pt-4 md:pt-20'>
                <div>
                    <img src={DiningTable} alt="/" className='object-cover w-full h-[400px]' />
                </div>
                <div className='flex flex-col items-center md:pt-0 w-full md:w-1/2 px-3 pt-8'>
                    <h1 className='font-display text-center text-2xl mb-4 md:mb-7'>
                        Our Philosophy</h1>
                    <p className='font-body'>
                        At Mid-Century Mindset, we believe that your home should be an oasis that truly embodies your personal style. We understand the importance of designing spaces that not only look stunning but also evoke a sense of comfort and tranquility. With our dedicated team of interior designers, we are committed to helping you transform your house into a home that resonates with your vision, aesthetics, and lifestyle.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-x-10 w-full pt-4 md:pt-20'>
                <div>
                    <img src={Consult} alt="/" className='object-cover w-full h-[400px]' />
                </div>
                <div className='flex flex-col items-center md:pt-0 w-full md:w-1/2 px-3 pt-8'>
                    <h1 className='font-display text-center text-2xl mb-4 md:mb-7'>
                        Our Services</h1>
                    <p className='font-body'>
                        At Mid-Century Mindset, our personalized and collaborative approach ensures your needs are met with precision and care. Through 1-to-1 discussions, we listen to your aspirations, preferences, and design goals to curate a space that is uniquely yours. Our talented designers excel at transforming your dreams into reality, whether you desire a modern twist on mid-century design, a cozy bohemian retreat, or an elegant minimalist haven.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-x-10 w-full pt-4 md:pt-20'>
                <div>
                    <img src={Designers} alt="/" className='object-cover w-full h-[400px]' />
                </div>
                <div className='flex flex-col items-center md:pt-0 w-full md:w-1/2 px-3 pt-8'>
                    <h1 className='font-display text-center text-2xl mb-4 md:mb-7'>
                        Meet Our Designers</h1>
                    <p className='font-body'>
                        Our team of four exceptional designers brings diverse talents and perspectives to Mid-Century Mindset. With distinct creative flair and expertise in various design styles, we match you with the perfect professional to bring your vision to life. From trendsetting visionaries to meticulous perfectionists, our designers deliver exceptional results that exceed expectations.
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-5 lg:px-20 w-full pt-4 md:pt-20'>
                <div className='w-full 2xl:flex justify-center'>
                    <img src={Sunset} alt="/" className='object-cover object-bottom w-full xl:w-[1125px] h-[400px]' />
                </div>
                <div className='flex flex-col items-center md:pt-0 w-full px-3 pt-8'>
                    <h1 className='font-display text-center text-2xl mb-4 md:mb-7'>
                        Location</h1>
                    <p className='font-body'>
                        Based in the vibrant city of Phoenix, Arizona, Mid-Century Mindset draws inspiration from the rich cultural tapestry and stunning landscapes of the Southwest. We believe in creating designs that blend seamlessly with the local surroundings while maintaining a timeless appeal that transcends geographical boundaries.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center py-10'>
                <Button text='Get Started' className='bg-[#f55d42] hover:bg-[#da4c33] text-secondary text-xl font-display' />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HowItStarted