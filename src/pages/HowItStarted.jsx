import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ColorLiving from '../assets/color_living.jpg'

const HowItStarted = () => {
  return (
    <div>
        <NavBar />
        <div className='bg-secondary'>
            <img src={ColorLiving} alt="/" className='object-cover w-full xl:w-[2560px] h-[520px] md:h-auto xl:max-h-[750px]' />
            <div>
                <h1>About Mid-Century Mindset:</h1>
                <p>
                    Welcome to Mid-Century Mindset, your go-to destination for exceptional interior design services tailored to your unique style and preferences. Founded by a dynamic couple, Olivia Bennett and Ethan Matthews, Mid-Century Mindset has grown into a passionate team of four talented designers, all sharing a deep love for creating breathtaking spaces that reflect the dreams and personalities of our valued clients.
                </p>
            </div>
            <div>
                <h1>Our Philosophy:</h1>
                <p>
                    At Mid-Century Mindset, we believe that your home should be an oasis that truly embodies your personal style. We understand the importance of designing spaces that not only look stunning but also evoke a sense of comfort and tranquility. With our dedicated team of interior designers, we are committed to helping you transform your house into a home that resonates with your vision, aesthetics, and lifestyle.
                </p>
            </div>
            <div>
                <h1>Our Services:</h1>
                <p>
                    Through our personalized and collaborative approach, we offer a range of comprehensive interior design services that ensure your needs are met with precision and care. Our 1-to-1 discussions with our clients form the foundation of our process. We take the time to listen to your aspirations, preferences, and design goals, enabling us to curate a space that is uniquely yours. Whether you're seeking a modern twist on mid-century design, a cozy bohemian retreat, or an elegant minimalist haven, our talented designers are adept at translating your dreams into reality.
                </p>
            </div>
            <div>
                <h1>Meet Our Designers:</h1>
                <p>
                    Our team of four exceptional designers brings a diverse range of talents and perspectives to Mid-Century Mindset. Each designer possesses a distinct creative flair and expertise in various design styles, ensuring that we can match you with the perfect professional to bring your vision to life. From the visionary trendsetter who stays ahead of the curve to the meticulous perfectionist who leaves no detail unnoticed, our designers are committed to delivering exceptional results that exceed your expectations.
                </p>
            </div>
            <div>
                <h1>Location:</h1>
                <p>
                    Based in the vibrant city of Phoenix, Arizona, Mid-Century Mindset draws inspiration from the rich cultural tapestry and stunning landscapes of the Southwest. We believe in creating designs that blend seamlessly with the local surroundings while maintaining a timeless appeal that transcends geographical boundaries.
                </p>
            </div>
            <div>
                <h1>Get Started:</h1>
                <p>
                    Ready to embark on a design journey that will transform your space and reflect your personal style? Contact us today to schedule a consultation with one of our talented designers. Together, we will embark on a collaborative journey to create a home that speaks to your Mid-Century Mindset.
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HowItStarted