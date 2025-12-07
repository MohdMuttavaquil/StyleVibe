import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-[#f5f2f0] w-full fixed top-0'>

                <div className='flex sm:h-20 h-16 sm:[80%] sm:mx-auto mx-1 justify-around items-center'>

                    <div className='logo sm:text-2xl font-semibold text-[#1f2937]'>
                        CartZo
                    </div>

                    <ul className='flex items-center sm:gap-6 gap-2'>
                        <li className='cursor-pointer hover:font-semibold sm:flex hidden'>Home</li>
                        <li className='cursor-pointer hover:font-semibold'>Order</li>
                        <li className='cursor-pointer hover:font-semibold'>Add Products</li>
                    </ul>


                    <button className='sm:px-3 py-1 px-2  bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer'>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar