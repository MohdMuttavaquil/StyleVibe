import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 w-full bg-[#dcdcdc] text-gray-700 '>

        <div className='flex sm:flex-row flex-col sm:w-[80%] sm:mx-auto mx-2'>

            <div className='my-4 sm:w-[50%]'>

                <p className='text-2xl logo font-semibold'>StyleVibe</p>
                <div>
                    StyleVibe is a modern e-commerce store offering stylish men's and women's clothing, trendy shoes, and quality beauty products. We provide affordable fashion, fast delivery, and a smooth shopping experience to help customers look and feel their best.
                </div>
            </div>

            <ul className='my-10 font-semibold text-center w-[50%]'>
                <li>About Us</li>
                <li>Contect Us</li>
                <li>Privacy & Policy</li>
            </ul>

        </div>

        <p className='w-[80%] mx-auto text-center pb-4'>© 2025 StyleVibe. All rights reserved. Unauthorized use or duplication of content is strictly prohibited</p>

    </div>
  )
}

export default Footer