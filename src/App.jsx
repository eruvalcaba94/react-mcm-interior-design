import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Buttons } from './components/Buttons'
import Hero from './assets/green_purple_flower.jpg'
import LivingRoom from './assets/white_livingroom.jpg'
import SunlitBedroom from './assets/sunlight_bedroom.jpg'

const App = () => {
  return (
    <div>
      <NavBar />
      <div className=' bg-black/50 h-screen'>
        <img src={Hero} alt="Mid-Century Living Room" className='absolute -z-10 object-cover w-full h-screen' />
        <div className='flex flex-col justify-center items-center text-secondary text-center w-full min-h-screen'>
          <h2 className='font-display text-5xl mb-5'>Your Mid-Century Modern Oasis</h2>
          <p className='font-display text-xl'>Transform Your Space with Timeless Elegance</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center  my-10 mx-14 md:mx-40 lg:mx-64 lg:my-28'>
        <p className='font-body text-2xl lg:text-xl pb-4 font-light'>Love the space you're in</p>
        <h2 className='font-display text-4xl text-start lg:text-center font-bold'>Bring your dream home to life with one-on-one design help & hand-picked products tailored to your style, space, and budget.</h2>
      </div>
      <div className='flex flex-col pt-10'>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:mb-20 lg:px-28 w-full'>
          <div className='flex flex-col justify-center items-center w-auto mx-10 mt-5 mb-8 lg:mx-28 lg:px-18'>
            <h2 className='font-display text-3xl mb-5'>Timeless Elegance</h2>
            <p className='font-body text-center text-lg md:text-xl'>From iconic chairs to sleek coffee tables, we bring timeless elegance to your home.</p>  
          </div>
          <img src={LivingRoom} alt="White Living Room" className='object-cover rounded-lg px-2 lg:px-0 w-full h-auto lg:w-1/2' />
        </div>
        <div className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center lg:mb-20 lg:px-28 w-full'>
          <div className='flex flex-col justify-center items-center w-auto mx-10 mt-5 mb-8 lg:mx-28 lg:px-18'>
            <h2 className='font-display text-3xl mb-5'>Elevate Your Space</h2>
            <p className='font-body text-center text-lg md:text-xl'>Discover the perfect harmony of form and function with our expertly curated collection of mid-century modern furniture.</p>  
          </div>
          <img src={SunlitBedroom} alt="Sunlit Bedroom" className='object-cover rounded-lg px-2 lg:px-0 w-full h-auto lg:w-1/2' />
        </div>
      </div>
      <div className='bg-accent'>
        <h2>Pricing</h2>
      </div>

      <Footer />
    </div>
  )
}

export default App