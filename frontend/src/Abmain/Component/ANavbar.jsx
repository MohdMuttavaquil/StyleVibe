import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { AppContext } from '../../Context/StoreContext'
import UserProfile from '../../Component/UserProfile'

const ANavbar = () => {

    const [sideBar, setSideBar] = useState(false)
    const { token } = useContext(AppContext)
   
    return (
        <div>
            <nav className='bg-[#f5f2f0] w-full fixed top-0'>

                <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

                    <div className='logo sm:text-2xl font-semibold text-[#1f2937]'>
                        <Link to='/admain'>StyleVuibe </Link>
                    </div>

                    <ul className='flex items-center sm:gap-6 gap-2'>
                        <Link to='/admain'> <li className='cursor-pointer hover:font-semibold sm:flex hidden'>Home</li> </Link>
                        <Link to='/admain/order'> <li className='cursor-pointer hover:font-semibold'>Order</li> </Link>
                        <Link to='/admain/product/add'> <li className='cursor-pointer hover:font-semibold'>Add Products</li> </Link>

                        <li>  {token === null ? <Link to='/singin' className='sm:px-3 py-1 px-2  bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer'>Login</Link> :
                            <FaUser onClick={() => setSideBar(!sideBar)} className='cursor-pointer sm:h-8 sm:w-8 h-6 w-6' />}</li>
                    </ul>

                </div>
            </nav>

            {/* For Side bar */}
            <div className={`${sideBar ? "right-0 fixed z-50 text-gray-700 sm:w-[30%] w-[75%] py-10 mx-auto bg-[#f5f2f0] rounded-2xl" : "hidden"}`}>
              <UserProfile setSideBar={setSideBar} />
            </div>


        </div>
    )
}

export default ANavbar