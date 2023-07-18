import React, { useState } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SwipeableCarousel from '../components/SwipeableCarousel'
import { AiOutlineCheck } from'react-icons/ai';

const Pricing = () => {
  const [carouselItems, setCarouselItems] = useState(0)

  return (
    <div>
        <NavBar />
        <div className='bg-[#F3F0EB]'>
            <div className='flex flex-col justify-center items-center text-center gap-5 py-10'>
                <h1 className='font-display text-4xl'>Our pricing</h1>
                <p className='font-display text-xl'>Find the perfect package for you. 100% satisfaction guaranteed.</p>
            </div>
        </div>
        <div>
          <SwipeableCarousel index={carouselItems} setIndex={setCarouselItems} />
        </div>
        <div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>Your personal interior designer</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>One-on-one time via online messaging, text, or calls</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>Final design concept with a personalized shopping list</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>Multiple design revisions until you absolutely love it</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>Access to hundreds of brands and a personal ordering team</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>3D renderings to see your new space come to life</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>Custom floor plan to take the guesswork out of layouts</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center border-b border-b-black mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>In-home meeting to collaborate with your designer</h1>
            <AiOutlineCheck size={32} />
          </div>
          <div className='flex justify-between items-center mx-3 pr-10'>
            <h1 className='font-body w-3/4 p-4'>Concierge service: get help measuring and photographing your current space</h1>
            <AiOutlineCheck size={32} />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Pricing