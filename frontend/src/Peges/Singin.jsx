import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Singin = () => {

    const [data, setData] = useState({
        email: "",
        userName: "",
        password: ""
    })
    const [singin, setSingin] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div className='h-screen bg-black/30 flex justify-center items-center overflow-hidden'>

            <form onSubmit={handleSubmit} className='sm:w-[30%] w-[90%] mx-auto rounded-2xl bg-[#f5f2f0] text-gray-800 text-xl flex flex-col gap-2 px-4 py-6'>

                <div className='flex justify-between items-center'>
                    <p className='text-2xl'>{singin ? "SingIn" : "Login"}</p>
                    <FaTimes className='text-gray-800 h-6 w-6 cursor-pointer' />
                </div>

                <label className={`${singin ? "" : "hidden"}`}>
                    <p>Email</p>
                    <input type='text' placeholder='Enter Emali' name='email' onChange={handleChange} value={data.email} className='input w-full' />
                </label>

                <label>
                    <p>User Name</p>
                    <input type='text' placeholder='Enter user Name' name='userName' onChange={handleChange} value={data.userName} className='input w-full' required />
                </label>

                <label>
                    <p>Password</p>
                    <input type='text' placeholder='Enter Password' name='password' onChange={handleChange} value={data.password} className='input w-full' required />
                </label>

                <label className='flex gap-2'>
                    <input type='checkbox' required />
                    <p>I accepte all term & condition</p>
                </label>

                <input type='submit' className='px-3 py-1 bg-[#f97316] text-white rounded-lg cursor-pointer my-2 font-semibold' value={singin ? "Singin" : "Login"} />

                {singin ? <p>If you already have account <span onClick={() => setSingin(!singin)} className='px-1 text-red-600 cursor-pointer'>Login</span></p> :

                    <p>If you did not have a account <span onClick={() => setSingin(!singin)} className='px-1 text-red-600 cursor-pointer'>Create Account</span></p>
                }

            </form>
            
        </div>
    )
}

export default Singin