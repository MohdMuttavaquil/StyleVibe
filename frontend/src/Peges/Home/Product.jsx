import React from 'react'
import { cetogry } from '../../Data/Data'

const Product = () => {
  return (
    <>
     
     <div className='my-10 sm:w-[80%] mx-2 sm:mx-auto '>
        <p className='my-5 text-2xl font-semibold'>Tranding In India</p>

        <div className='flex w-full justify-evenly flex-wrap items-center h-[90vh]'>

          {cetogry.map((i,index)=> <div key={index} className='rounded-2xl bg-[#f5f2f0] text-gray-700 h-[40vh] sm:min-w-[30%] sm:max-w-[30%] min-w-[45%] max-w-[45%]'>
          <img src={i.url} className='h-[32vh] w-full rounded-2xl'></img>
          <p className='text-lg font-semibold my-2 px-2'>{i.name}</p>
          </div>)}

        </div>

         <p className='my-5 text-2xl font-semibold'>For You</p>

          <div className='flex w-full justify-evenly flex-wrap items-center h-[90vh]'>

          {cetogry.map((i,index)=> <div key={index} className='rounded-2xl bg-[#f5f2f0] text-gray-700 h-[40vh] sm:min-w-[30%] sm:max-w-[30%] min-w-[45%] max-w-[45%]'>
          <img src={i.url} className='h-[32vh] w-full rounded-2xl'></img>
          <p className='text-lg font-semibold my-2 px-2'>{i.name}</p>
          </div>)}

        </div>

     </div>
    
    </>
  )
}

export default Product