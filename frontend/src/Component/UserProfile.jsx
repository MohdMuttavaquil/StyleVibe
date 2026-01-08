import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'
import { userData } from '../Api/user.api'

const UserProfile = ({ setSideBar }) => {

    const { token, setToken, setRole } = useContext(AppContext)
    const [userInfo, setUserInfo] = useState()
    const navigate = useNavigate()

    const fetchData = async () => {
       const data = await userData(token)
        setUserInfo(prev => ({ ...prev, ...data }))
    }

    useEffect(() => {
        if (token) {
            fetchData()
        }
    }, [token])

    const singOut = () => {
        sessionStorage.clear()
        setSideBar(false)
        setToken('')
        setRole('')
        navigate('/')
    }

    return (
        <div>
            <p className='text-xl font-semibold px-2 my-2 '>Username: <span className='text-lg'>{userInfo?.name}</span></p>
            <p className='text-xl font-semibold px-2 my-2'>Email: <span className='text-lg'>{userInfo?.email}</span></p>
            <Link to='/order/info' onClick={() => setSideBar(false)} className={`${userInfo?.role === 'admain' ? "hidden" : ""} button mx-2 my-1 sm:my-2 bg-blue-500`}>Track Orders</Link> <br></br>
            <button onClick={() => singOut()} className='button mx-2 my-1 sm:my-2 bg-red-500'>Sing Out</button>
        </div>

    )
}

export default UserProfile