import React from 'react'
import { cetogry } from '../../Data/Data'
import Product from './Product'
import Products from '../Products'
import Detail from '../Detail'
import Cart from '../Cart'
import Order from '../Order'
import Singin from '../Singin'

const Home = () => {
  return (
    <>

     {/* Hero image */}
      <div className='heroImage relative h-[60vh] mx-2 sm:h-[75vh] my-10 sm:w-[90%] sm:mt-24 mt-16 sm:mx-auto rounded-2xl '>

        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        <div className="relative z-10 flex flex-col justify-center my-2 h-full text-white text-center px-4">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">All Fashion in One Place</h1>
          <p className="text-xl">Shop the latest trends at CartZo</p>
        </div>
      </div>


     {/* Product Cetogry */}
   <div className="flex flex-nowrap overflow-x-auto gap-4 sm:w-[80%] sm:mx-auto mx-2 py-3 cetogry">

    {cetogry.map((i, index)=> <div key={index}>
      <img src={i.url} className='min-h-40 min-w-40 max-h-40 max-w-40 rounded-full hover:px-2 hover:py-1 cursor-pointer' ></img>
      <p className='text-center font-semibold text-lg mt-2'>{i.name}</p>
    </div>)}
      
     </div>

    <Singin />
    </>
  )
}

export default Home