import React, { useState } from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

const divbar = () => {

    const [ data, setData ] = useState("")
    const navigate = useNavigate()

    const handleChenge = (e)=>{
        setData(e.target.value)
        console.log(data)
    }

    const search = ()=>{
        console.log("send to product")
        navigate("/search")
    }

  return (
    <nav className='bg-[#f5f2f0] w-full fixed top-0'>

    <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

    <div className='logo sm:text-2xl font-semibold text-[#1f2937]'>
        <Link to='/'>CartZo</Link> 
    </div>

    <div className='flex items-center gap-1 sm:w-[30%] ml-1'>
        <input type='text' placeholder='Search Products' value={data} onChange={handleChenge} className='outline-none border-b-2 border-amber-400 w-[80%] pt-1 text-gray-700 text-lg' />
        <button onClick={()=> search()} className='bg-[#f97316] rounded-lg px-2 py-2 cursor-pointer'><FaSearch className='sm:h-6 sm:w-6 h-4 w-4 text-white' /></button>
    </div>

    <div className={`flex sm:gap-8 gap-2 items-center`} >
        <div>
           <Link to='/cart'>
            <FaShoppingCart className='cursor-pointer sm:h-8 sm:w-8 h-6 w-6 sm:flex hidden' />
           </Link>
        </div>

        <Link to='/singin' className='sm:px-3 py-1 px-2  bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer'>Login</Link>
    </div>
         
    </div>

    </nav>
  )
}

export default divbar