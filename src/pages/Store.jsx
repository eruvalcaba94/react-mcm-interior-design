import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProdImg from '../assets/SofaCover.jpeg'
import Button from '../components/Button'
import { AiOutlineSearch, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Store = () => {
    const [search, setSearch] = React.useState(false);
    const [products, setProducts] = React.useState(true);
    const [colors, setColors] = React.useState(true);

    const toggleSearch = () => {
        setSearch(!search)
    }
    const toggleProducts = () => {
            setProducts(!products)
        }
    const toggleColors = () => {
        setColors(!colors)
    }


    return (
    <div>
        <div>
            <NavBar />
        </div>
        <div className='bg-[#F3F0EB] hidden lg:flex justify-center py-4'>
            <ul className='flex justify-center items-center gap-x-7'>
                <Link to='/react-mcm-interior-design/furniture' className='font-body text-lg px-10'>
                    Furniture</Link>
                <Link to='/react-mcm-interior-design/decor-pillows' className='font-body text-lg px-10'>
                    Decor & Pillows</Link>
                <Link to='/react-mcm-interior-design/lighting' className='font-body text-lg px-10'>
                    Lighting</Link>
                <li className='px-10'>
                    <AiOutlineSearch size={32} /></li>
            </ul>   
        </div>
        <div className='bg-secondary xl:bg-background xl:pl-10 py-10'>
            <h2 className='font-display text-center xl:text-start text-5xl mb-5'>
                Featured</h2>
        </div>
        <div>
            <div className='bg-secondary xl:bg-background w-full flex justify-center gap-x-5 xl:justify-end xl:pr-10 py-4'>
                <Button text='Color' className='bg-slate-300 hover:bg-slate-400 font-body xl:hidden' />
                <Button text='Product' className='bg-slate-300 hover:bg-slate-400 font-body xl:hidden' />
                <Button text='Sort By' className='bg-slate-300 hover:bg-slate-400 font-body' />
            </div>
            <div>
                <div className='flex gap-x-5'>
                    <div className='bg-secondary hidden p-4 xl:flex flex-col w-1/4 h-fit rounded-lg'>
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
                    <div className='px-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 xl:pt-0 mb-10'>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
                                </div>
                            </div>
                            <div>
                                <img src={ProdImg} alt="/" className='w-full h-auto rounded-xl' />
                                <div className='flex flex-col items-start gap-x-10 pl-4'>
                                    <h1 className='font-body text-sm'>Product Name</h1>
                                    <h1 className='font-body text-sm'>Price</h1>  
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