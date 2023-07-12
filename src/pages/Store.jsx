import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProdImg from '../assets/SofaCover.jpeg'
import { AiOutlineSearch, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Store = () => {
    const [search, setSearch] = React.useState(false);
    const [products, setProducts] = React.useState(true);
    const [colors, setColors] = React.useState(true);

    const toggleSearch = () => {
        setSearch(!search);
    }
    const toggleProducts = () => {
            setProducts(!products);
        }
    const toggleColors = () => {
        setColors(!colors);
    }


  return (
    <div>
        <div>
            <NavBar />
        </div>
        <div className='bg-[#F3F0EB] hidden lg:flex justify-center py-4'>
            <ul className='flex justify-center items-center gap-x-5'>
                <li className='font-body text-lg px-10'>
                    Furniture</li>
                <li className='font-body text-lg px-10'>
                    Chairs</li>
                <li className='font-body text-lg px-10'>
                    Decor & Pillows</li>
                <li className='font-body text-lg px-10'>
                    Lighting</li>
                <li className='px-10'>
                    <AiOutlineSearch size={32} /></li>
            </ul>
        </div>
        <div className='pl-10 py-10'>
            <h2 className='font-display text-5xl mb-5'>
                Furniture</h2>
            <div>
                <span>
                    <a href="/shop" className='font-body text-sm'>
                        Shop </a>
                </span>
                <span>
                    <span className='font-body text-sm'>
                        / </span>
                    <span>
                        <a href="/shop/furniture" className='font-body text-sm'>
                            Furniture</a>
                    </span>
                </span>
            </div>
        </div>
        <div className='px-6'>
            <div className='flex justify-between mx-5 py-4'>
                <h1>Filter</h1>
                <h1>Sort By</h1>
            </div>
            <div>
                <div className='flex gap-x-5'>
                    <div className='bg-secondary p-4 flex flex-col w-1/4'>
                        <div className='mb-10'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-body text-xl'>Product Type</h1>
                                <div onClick={toggleProducts}>
                                    {products ? <AiOutlineMinus size={32} /> : <AiOutlinePlus size={32} />}
                                </div>
                            </div>
                            <div className={
                                products
                                ? 'flex flex-col font-body pl-4 pt-5' 
                                : 'hidden'
                            }>
                                <label>
                                    <input type="radio" name='productTest' value="option1" className='mr-3'/>
                                    Chairs</label>
                                <label>
                                    <input type="radio" name='productTest' value="option2" className='mr-3'/>
                                    Tables</label>
                                <label>
                                    <input type="radio" name='productTest' value="option3" className='mr-3'/>
                                    Beds</label>
                                <label>
                                    <input type="radio" name='productTest' value="option4" className='mr-3'/>
                                    Bookcase</label>
                                <label>
                                    <input type="radio" name='productTest' value="option5" className='mr-3'/>
                                    Desks</label>
                                <label>
                                    <input type="radio" name='productTest' value="option6" className='mr-3'/>
                                    Sofas</label>  
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-body text-xl'>Color</h1>
                                <div onClick={toggleColors}>
                                    {colors? <AiOutlineMinus size={32} /> : <AiOutlinePlus size={32} />}
                                </div>
                            </div>
                            <div className={
                                colors
                                ? 'flex flex-col font-body pl-4 pt-5' 
                                : 'hidden'
                            }>
                                <label>
                                    <input type="radio" name='colorTest' value="option1" className='mr-3'/>
                                    Red</label>
                                <label>
                                    <input type="radio" name='colorTest' value="option2" className='mr-3'/>
                                    Green</label>
                                <label>
                                    <input type="radio" name='colorTest' value="option3" className='mr-3'/>
                                    Blue</label>
                                <label>
                                    <input type="radio" name='colorTest' value="option4" className='mr-3'/>
                                    Yellow</label>
                                <label>
                                    <input type="radio" name='colorTest' value="option5" className='mr-3'/>
                                    Black</label>
                                <label>
                                    <input type="radio" name='colorTest' value="option6" className='mr-3'/>
                                    White</label>  
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 gap-6'>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto' />
                                <div className='flex flex-col items-start gap-x-10'>
                                    <h1>Product Name</h1>
                                    <h1>Price</h1>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Store