import React, { useState, useContext } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/StoreContext';

const divbar = () => {

    const [data, setData] = useState("")
    const [sideBar, setSideBar] = useState(false)
    const navigate = useNavigate()
    const { token } = useContext(AppContext)
   
    const handleChenge = (e) => {
        setData(e.target.value)
    }

    const search = () => {
        console.log("send to product")
        navigate("/search")
    }

    const singOut = ()=>{
        sessionStorage.clear()
        setSideBar(false)
    }

    return (
        <>

            <nav className='bg-[#f5f2f0] w-full fixed top-0'>

                <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

                    <div className='logo sm:text-2xl font-semibold text-[#1f2937]'>
                        <Link to='/'>CartZo</Link>
                    </div>

                    <div className='flex items-center gap-1 sm:w-[30%] ml-1'>
                        <input type='text' placeholder='Search Products' value={data} onChange={handleChenge} className='outline-none border-b-2 border-amber-400 w-[80%] pt-1 text-gray-700 text-lg' />
                        <button onClick={() => search()} className='bg-[#f97316] rounded-lg px-2 py-2 cursor-pointer'><FaSearch className='sm:h-6 sm:w-6 h-4 w-4 text-white' /></button>
                    </div>

                    <div className={`flex sm:gap-8 gap-2 items-center`} >
                        <div>
                            <Link to='/cart'>
                                <FaShoppingCart className='cursor-pointer sm:h-8 sm:w-8 h-6 w-6 sm:flex hidden' />
                            </Link>
                        </div>

                        {token === null ? <Link to='/singin' className='sm:px-3 py-1 px-2  bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer'>Login</Link> :
                            <FaUser onClick={() => setSideBar(!sideBar)} className='cursor-pointer sm:h-8 sm:w-8 h-6 w-6' />}
                    </div>

                </div>

            </nav>

            <div className={`${sideBar ? "right-0 fixed z-50 bg-white text-gray-700" : "hidden"}`}>

                <button onClick={() => singOut()} className='text-red-700 text-xl cursor-pointer bg-[#f5f2f0]px-3 py-1 ronuded-xl'>Sing Out</button>
            </div>
        </>
    )
}

export default divbar