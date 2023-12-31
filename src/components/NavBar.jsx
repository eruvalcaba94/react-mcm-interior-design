import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex items-center bg-secondary w-auto h-[64px] sticky top-0 z-20'>
      <div className='flex w-full px-4 md:px-8 lg:px-12 xl:px-20 justify-between'>
        <Link to='/react-mcm-interior-design' className='font-display text-2xl'>
          Mid-Century Mindset
        </Link>
        <div className='hidden lg:flex font-display gap-x-8'>
          <Link to='/react-mcm-interior-design/how-it-started'>
            How It Started
          </Link>
          <Link to='/react-mcm-interior-design/reviews'>Reviews</Link>
          <Link to='/react-mcm-interior-design/how-it-works'>How It Works</Link>
        </div>
        <ul className='hidden lg:flex font-display gap-x-3'>
          <Button
            onPress={() => alert("Button pressed!")}
            className='bg-slate-600 text-white font-body rounded-3xl px-4 py-2 text-sm'
          >
            Get Started
          </Button>
          <Button
            onPress={() => alert("Button pressed!")}
            className='bg-slate-600 text-white font-body rounded-3xl px-4 py-2 text-sm'
          >
            Login
          </Button>
        </ul>
        <div onClick={toggleNav} className='block cursor-pointer lg:hidden'>
          {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "z-10 fixed top-[64px] left-0 w-full ease-in duration-500"
            : "z-10 fixed top-[64px] left-[-100%] w-full ease-out duration-500"
        }
      >
        <div className='absolute flex w-full h-screen bg-secondary'>
          <div className='w-full h-fit px-5 pt-2 pb-8'>
            <div className='flex flex-col font-display text-xl md:text-3xl'>
              <Link
                to='/react-mcm-interior-design/how-it-started'
                className='pt-5 pb-4 border-b border-b-slate-600'
              >
                How It Started
              </Link>
              <Link
                to='/react-mcm-interior-design/reviews'
                className='pt-5 pb-4 border-b border-b-slate-600'
              >
                Reviews
              </Link>
              <Link
                to='/react-mcm-interior-design/how-it-works'
                className='pt-5 pb-4 border-b border-b-slate-600'
              >
                How It Works
              </Link>
            </div>
            <ul className='font-display text-lg mt-20 md:text-3xl'>
              <li className='mb-4'>Login</li>
              <li className='mb-4'>Get Started</li>
              <li className='mb-10'>Help</li>
            </ul>
            <ul className='flex py-7 gap-x-4'>
              <li>
                <BsFacebook size={30} />
              </li>
              <li>
                <BsTwitter size={30} />
              </li>
              <li>
                <BsInstagram size={30} />
              </li>
              <li>
                <BsPinterest size={30} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
