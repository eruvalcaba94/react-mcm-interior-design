import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
    <div className='bg-accent w-full h-auto'>
        <div className='hidden lg:flex justify-between items-start w-auto pt-16 px-4 lg:px-20 xl:px-28 2xl:px-40  pb-10'>
            <div className='flex'>
                <div className='mr-5 lg:mr-10'>
                    <h2 className='font-display mb-4 text-2xl'>Company</h2>
                    <ul className='flex flex-col'>
                        <li className='mb-2'>Careers</li>
                        <Link to='/react-mcm-interior-design/reviews' className='mb-2'>Reviews</Link>
                        <Link to='/react-mcm-interior-design/pricing' className='mb-2'>Pricings</Link>
                    </ul>
                </div>
                <div className='mr-5 lg:mr-10'>
                    <h2 className='font-display mb-4 text-2xl'>Explore</h2>
                    <ul>
                        <li className='mb-2'>Financing</li>
                        <li className='mb-2'>Help Center</li>
                        <li className='mb-2 w-max'>Refer & Earn</li>
                        <Link to='/react-mcm-interior-design/promotions' className='mb-2'>Promotions</Link>
                    </ul>
                </div>
                <div className='mr-5'>
                    <h2 className='font-display mb-4 text-2xl'>Contact</h2>
                    <ul>
                        <li className='mb-2'>Call</li>
                        <li className='mb-2'>Text</li>
                        <li className='mb-2'>Email</li>
                    </ul>
                </div>
                <div className='flex xl:hidden mr-16 flex-col'>
                    <h2 className='font-display mb-4 w-max text-2xl'>Follow Us</h2>
                    <ul className='flex gap-x-4 lg:grid lg:grid-cols-2 gap-y-6'>
                        <li><BsFacebook size={23} /></li>
                        <li><BsTwitter size={23} /></li>
                        <li><BsInstagram size={23} /></li>
                        <li><BsPinterest size={23} /></li>
                    </ul>
                </div>
            </div>
            <div className='hidden xl:flex flex-col'>
                <h2 className='font-display mb-4 w-max text-2xl'>Follow Us</h2>
                <ul className='flex gap-x-3 lg:gap-x-5'>
                    <li><BsFacebook size={23} /></li>
                    <li><BsTwitter size={23} /></li>
                    <li><BsInstagram size={23} /></li>
                    <li><BsPinterest size={23} /></li>
                </ul>
            </div>
            <div className='max-w-sm'>
                <h2 className='font-display mb-4 text-2xl'>Guarantee Promise</h2>
                <p className='font-body text-lg'>We're committed to your satisfaction. From handpicked mid-century modern furniture to personalized design guidance, we prioritize quality and timeless style. We work closely with you to create a space that reflects your unique vision.</p>
            </div>
        </div>
        <div className='flex lg:hidden flex-col w-full pt-7 px-5 pb-14'>
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
                    <Link to='/react-mcm-interior-design/reviews' className='mb-2'>Reviews</Link>
                    <Link to='/react-mcm-interior-design/pricing' className='mb-2'>Pricings</Link>
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
                    <li className='mb-2'>Financing</li>
                    <li className='mb-2'>Help Center</li>
                    <li className='mb-2'>Refer & Earn</li>
                    <Link to='/react-mcm-interior-design/promotions' className='mb-2'>Promotions</Link>
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
                        <li className='mb-2'>Call</li>
                        <li className='mb-2'>Text</li>
                        <li className='mb-2'>Email</li>
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
                <h2 className='font-display text-xl mb-6'>Guarantee Promise</h2>
                <p className='font-body font-light text-lg'>We're committed to your satisfaction. From handpicked mid-century modern furniture to personalized design guidance, we prioritize quality and timeless style. We work closely with you to create a space that reflects your unique vision.</p>
            </div>
        </div>
    </div>
    );
};

export default Footer