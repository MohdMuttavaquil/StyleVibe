import React from 'react'
import { Link } from 'react-router-dom'

const ANavbar = () => {
    return (
        <div>
            <nav className='bg-[#f5f2f0] w-full fixed top-0'>

                <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

                    <div className='logo sm:text-2xl font-semibold text-[#1f2937]'>
                        <Link to='/'> CartZo </Link>
                    </div>

                    <ul className='flex items-center sm:gap-6 gap-2'>
                        <Link to='/'> <li className='cursor-pointer hover:font-semibold sm:flex hidden'>Home</li> </Link>
                        <Link to='/order'> <li className='cursor-pointer hover:font-semibold'>Order</li> </Link>
                        <Link to='/addproduct'> <li className='cursor-pointer hover:font-semibold'>Add Products</li> </Link>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default ANavbar