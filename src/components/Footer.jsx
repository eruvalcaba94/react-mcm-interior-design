import React, {useState} from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';

const Footer = () => {
    const [company, setCompany] = useState(false);
    const [explore, setExplore] = useState(false);
    const [contact, setContact] = useState(false);

    const toggleCompany = () => {
        setCompany(!company);
    };
    const toggleExplore = () => {
        setExplore(!explore);
    };
    const toggleContact = () => {
        setContact(!contact);
    };

  return (
    <div className='bg-gray-500 w-full h-auto'>
        <div className='flex flex-col w-full pt-7 px-5 pb-14'>
            <div>
                <h2 className='flex justify-between font-display text-xl pt-5 pb-4 border-b border-b-slate-600'>
                    Company
                    <div onClick={toggleCompany}>
                        {company ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
                    </div>
                </h2>
                <ul className={
                    company
                        ? 'font-body p-3'
                        : 'hidden'
                }>
                    <li className='mb-2'>Careers</li>
                    <li className='mb-2'>Reviews</li>
                    <li className='mb-2'>Pricings</li>
                    <li className='mb-2'>Stories</li>
                </ul>
            </div>
            <div>
                <h2 className='flex justify-between font-display text-xl pt-5 pb-4 border-b border-b-slate-600'>
                    Explore
                    <div onClick={toggleExplore}>
                        {explore ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
                    </div>
                </h2>
                <ul className={
                    explore
                        ? 'font-body p-3'
                        : 'hidden'
                }>
                    <li>Financing</li>
                    <li>Help Center</li>
                    <li>Refer & Earn</li>
                    <li>Promotions</li>
                </ul>
            </div>
            <div>
                <div>
                    <h2 className='flex justify-between font-display text-xl pt-5 pb-4 border-b border-b-slate-600'>
                        Contact
                        <div onClick={toggleContact}>
                            {contact ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
                        </div>
                    </h2>
                    <ul className={
                    contact
                        ? 'font-body p-3'
                        : 'hidden'
                    }>
                        <li>Call</li>
                        <li>Text</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-display text-xl pt-5 pb-4'>Follow Us</h2>
                    <ul className='flex gap-x-4 pt-2 pb-5 mb-10 border-b border-b-slate-600'>
                        <li><BsFacebook size={25} /></li>
                        <li><BsTwitter size={25} /></li>
                        <li><BsInstagram size={25} /></li>
                        <li><BsPinterest size={25} /></li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='font-display text-xl'>Guarantee Promise</h2>
                <p>We're committed to your satisfaction. From handpicked mid-century modern furniture to personalized design guidance, we prioritize quality and timeless style. We work closely with you to create a space that reflects your unique vision.</p>
            </div>
        </div>
    </div>
  );
};

export default Footer