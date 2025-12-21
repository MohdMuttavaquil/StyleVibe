import React from 'react'
import { useContext } from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AppContext } from '../Context/StoreContext';

const Detail = () => {

    const { name, desc, price, images } = useContext(AppContext)

    return (
        <div className='sm:w-[80%] sm:mx-auto mx-2 sm:my-16 min-h-screen'>

            <div className='flex sm:flex-row flex-col gap-2'>

                <div className='flex flex-nowrap overflow-x-auto sm:w-[50%] no-scrollbar'>
                    {images.map((i, index) => <img key={index} src={i.url} className='min-w-full mx-2 h-[60vh] rounded-2xl cursor-pointer'></img>)}
                </div>

                <div className='sm:w-[45%] sm:mx-auto mx-2'>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p className='text-xl font-semibold mt-1' >{desc}</p>
                    <p className='text-2xl font-semibold my-1 sm:my-4'>{price}</p>

                    <div className='flex gap-4'>
                        <button className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2 items-center'>Add To Cart
                            <FaShoppingCart className='h-5 w-5 ' />
                        </button>
                        <button className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2'>Bye Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail