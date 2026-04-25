import React, { useState, useContext } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import '../App.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/StoreContext'
import { fixMistake } from '../utlis/search'
import UserProfile from './UserProfile';

const divbar = () => {

    const [data, setData] = useState("")
    const naviagte = useNavigate()
    const location = useLocation()
    const [sideBar, setSideBar] = useState(false)
    const { token, setCategory } = useContext(AppContext)

    const handleChenge = (e) => {
        setData(e.target.value)
    }

    const search = async () => {
        const result = fixMistake(data)
        setCategory(result)
        naviagte('/search')
        setData('')
    }

    return (
        <>

            <nav className='bg-[#f5f2f0] w-full fixed top-0'>

                <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

                    <div className='flex md:bg-blue-500 md:h-12 h-8 px-2 gap-1 py-1 rounded-2xl' onClick={()=> {naviagte('/')}}>
                        <img src='/svlogo.png' className='md:h-10 md:w-10 h-8 w-8 rounded-lg' />
                        <h1 className='logo text-[16px] hidden md:flex text-white h-full mt-3'>StyleVibe</h1>
                    </div>


                    <div className={`${location.pathname === '/search' ? "hidden" : ""} flex items-center gap-1 sm:w-[30%] ml-1`}>
                        <input type='text' placeholder='Search Products' value={data} onChange={handleChenge} className='outline-none border-b-2 border-blue-300 w-[80%] pt-1 text-gray-700 text-lg' />
                        <button onClick={() => search()} className='bg-blue-500 rounded-lg px-2 py-2 cursor-pointer'><FaSearch className='sm:h-6 sm:w-6 h-4 w-4 text-white' /></button>
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

            {/* For Side bar */}
            <div className={`${sideBar ? "right-0 fixed z-50 text-gray-700 sm:w-[30%] w-[75%] pt-2 pb-10 mx-auto bg-[#f5f2f0] rounded-2xl" : "hidden"}`}>
                <UserProfile setSideBar={setSideBar} />
            </div>

        </>
    )
}

export default divbar