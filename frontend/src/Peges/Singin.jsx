import React, { useState, useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { singinApi, loginApi } from '../Api/user.api'
import { AppContext } from '../Context/StoreContext'

const Singin = () => {

    const navigate = useNavigate()

    const { setToken, setRole } = useContext(AppContext)

    const [data, setData] = useState({
        email: "",
        name: "",
        password: "",
        admain: false
    })
    const [singin, setSingin] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const setvalue = (res) => {
        sessionStorage.setItem('token', res.token)
        sessionStorage.setItem('role', res.role)
        setToken(res.token)
        setRole(res.role)
        if (res.role === 'admain') {
            navigate('/admain')
        } else {
            navigate("/")
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (singin) {
            const res = await singinApi(data)
            console.log(res)
            res.success ? setvalue(res) : alert(res.message)
        } else {
            const res = await loginApi(data)
            console.log(res)
            res.success ? setvalue(res) : alert(res.message)
        }

    }

    return (
        <div className='h-screen mt-0 bg-black/30 flex justify-center items-center overflow-hidden'>

            <form onSubmit={handleSubmit} className='sm:w-[30%] w-[90%] mx-auto rounded-2xl bg-[#f5f2f0] text-gray-800 text-xl flex flex-col gap-2 px-4 py-6'>

                <div className='flex justify-between items-center'>
                    <p className='text-2xl'>{singin ? "SingIn" : "Login"}</p>
                    <Link to='/'>
                        <FaTimes className='text-gray-800 h-6 w-6 cursor-pointer' />
                    </Link>
                </div>

                <label >
                    <p>Email</p>
                    <input type='text' placeholder='Enter Emali' name='email' onChange={handleChange} value={data.email} className='input w-full' required />
                </label>

                <label className={`${singin ? "" : "hidden"}`}>
                    <p>User Name</p>
                    <input type='text' placeholder='Enter user Name' name='name' onChange={handleChange} value={data.name} className='input w-full' />
                </label>

                <label>
                    <p>Password</p>
                    <input type='password' placeholder='Enter Password' name='password' onChange={handleChange} value={data.password} className='input w-full' required />
                </label>

                {singin && <label className='flex gap-2'>
                    <input type='checkbox' checked={data.admain} onChange={(e) => setData((prev) => ({ ...prev, admain: e.target.checked }))} />
                    <p>Create account as a admain</p>
                </label>}

                <input type='submit' className='px-3 py-1 bg-[#f97316] text-white rounded-lg cursor-pointer my-2 font-semibold' value={singin ? "Singin" : "Login"} />

                {singin ? <p>If you already have account <span onClick={() => setSingin(!singin)} className='px-1 text-red-600 cursor-pointer'>Login</span></p> :

                    <p>If you did not have a account <span onClick={() => setSingin(!singin)} className='px-1 text-red-600 cursor-pointer'>Create Account</span></p>
                }

            </form>

        </div>
    )
}

export default Singin