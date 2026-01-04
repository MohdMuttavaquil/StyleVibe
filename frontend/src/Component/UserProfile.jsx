import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/StoreContext'

const UserProfile = () => {

    const { token, url } = useContext(AppContext)
    const [ userInfo, setUserInfo ] = useState()

    const fetchData = async ()=>{
       const res = await fetch(`${url}/user/info`, { method: 'GET', headers: {token}})
       const result = await res.json()
       console.log(result)
       const data = result.user
       setUserInfo(prev => ({...prev, ...data}))
    }

    useEffect(()=>{
        console.log(userInfo)
       if (token) {
        fetchData() 
       }     
    }, [token])

    return (
            <div>
                <p className='text-xl font-semibold'>Username: <span className='text-lg'>{userInfo?.name}</span></p>
                <p className='text-xl font-semibold'>Email: <span className='text-lg'>{userInfo?.email}</span></p>
                <button className='.button bg-blue-500'>Track Orders</button> <br></br>
                <button className='.button bg-red-500'>Sing Out</button>
            </div>
   
    )
}

export default UserProfile