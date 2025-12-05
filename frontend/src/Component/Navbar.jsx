import React, { useState } from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import '../App.css'

const divbar = () => {

    const [ data, setData ] = useState("")

    const handleChenge = (e)=>{
        setData(e.target.value)
        console.log(data)
    }

  return (
    <nav className='bg-[#f5f2f0] w-full fixed top-0'>

    <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

    <div className='logo sm:text-2xl font-semibold text-[#1f2937]'>
        CartZo
    </div>

    <div className='flex items-center gap-1 sm:w-[30%] ml-1'>
        <input type='text' placeholder='Search Products' value={data} onChange={handleChenge} className='outline-none border-b-2 border-amber-400 w-[80%] pt-1 text-gray-700 text-lg' />
        <button className='bg-[#f97316] rounded-lg px-2 py-2 cursor-pointer'><FaSearch className='sm:h-6 sm:w-6 h-4 w-4 text-white' /></button>
    </div>

    <div className={`flex sm:gap-8 gap-2 items-center`} >
        <div>
            <FaShoppingCart className='cursor-pointer sm:h-8 sm:w-8 h-6 w-6 sm:flex hidden' />
        </div>

        <button className='sm:px-3 py-1 px-2  bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer'>Login</button>
    </div>
         
    </div>

    </nav>
  )
}

export default divbar