import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/StoreContext'
import { useLocation } from 'react-router-dom'


const ReturnItem = () => {

    const { state } = useLocation()
    const { token, url } = useContext(AppContext)
    const [data, setDate] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        // const res = await fetch(`${url}/order/return`, {
        //     method : 'POST',
        //     headers: {"Content-Type": "application/json",  token: token },
        //     body: JSON.stringify(state.id)
        // })
        // const responce = await res.json()
        console.log(data)
    }

    return (
        <div className='md:w-[80%] min-h-[60vh] flex items-center sm:mx-auto mx-2'>

            <form className='flex flex-col justify-between w-fit px-10 py-16 text-gray-700 bg-[#f5f2f0] items-center gap-4 rounded-2xl' onSubmit={handleSubmit}>

                <p className='text-2xl font-semibold'>
                    Product Name: <span className='text-xl'>{state.name}</span>
                </p>

                <div className='w-full text-center' >
                    <p  className='text-2xl font-semibold '>Write a Cuse of Return</p>
                    <label>
                        <textarea type='text' value={data} onChange={(e) => setDate(e.target.value)} placeholder='Write a Cuse of Return' className='input md:w-[60%] text-lg ' />
                    </label>
                </div>

                <input type='submit' className='button bg-[#f97316] w-fit' />
            </form>



        </div>
    )
}

export default ReturnItem