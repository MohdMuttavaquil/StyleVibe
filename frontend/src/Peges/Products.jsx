import React from 'react'
import { cetogry } from '../Data/Data'

const Products = () => {
    return (
        <div className='sm:w-[80%] sm:mx-auto mx-2'>

            {cetogry.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>
                
                <img src={i.url} className='sm:h-[40vh] sm:min-w-[50%] sm:max-w-[50%] lg:min-w-[30%] lg:max-w-[30%] rounded-2xl'></img>

                <div className='sm:my-10 px-3'>
                <p className='text-xl font-semibold'>{i.name}</p>
                <p className='text-xl font-semibold mt-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste facilis quod modi, consectetur blanditiis?</p>
                <p className='text-2xl font-semibold my-1 sm:my-4'>Price 199</p>
                </div>

            </div>)}

        </div>
    )
}

export default Products