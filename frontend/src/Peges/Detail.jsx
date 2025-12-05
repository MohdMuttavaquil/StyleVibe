import React from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Detail = () => {
    return (
        <div className='sm:w-[80%] sm:mx-auto mx-2 sm:my-16'>

            <div className='flex sm:flex-row flex-col gap-2'>

                <div className='flex sm:hidden flex-nowrap overflow-x-auto '>
                    <img src='./menJence.avif' className='sm:w-[50%] mx-2 h-[60vh] rounded-2xl cursor-pointer'></img>
                    <img src='./menJence.avif' className='sm:w-[50%] mx-2 h-[60vh] rounded-2xl cursor-pointer'></img>
                    <img src='./menJence.avif' className='sm:w-[50%] mx-2 h-[60vh] rounded-2xl cursor-pointer'></img>

                </div>

                 <img src='./menJence.avif' className='sm:w-[50%] mx-2 h-[60vh] rounded-2xl cursor-pointer sm:flex hidden'></img>


                <div className='sm:w-[45%] sm:mx-auto mx-2'>
                    <p className='text-xl font-semibold'>iflew</p>
                    <p className='text-xl font-semibold mt-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis quod modi, consectetur blanditiis?</p>
                    <p className='text-2xl font-semibold my-1 sm:my-4'>Price 199</p>

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