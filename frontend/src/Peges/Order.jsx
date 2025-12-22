import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/StoreContext'

const Order = () => {

    const { price } = useContext(AppContext)
    const [data, setData] = useState({
        fristName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        street: "",
        city: "",
        zipCode: ""
    })
    const [code, setCode] = useState("")

    const handlechange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const submit = () => {
        
        console.log(data, code)

        setData({
            fristName: "",
            lastName: "",
            phoneNo: "",
            street: "",
            city: "",
            zipCode: "",
            email: ""
        })
    }


    return (
        <div className='sm:w-[80%] sm:mx-auto mx-2 min-h-screen'>

            <div className='flex sm:flex-row flex-col sm:my-24 my-8 sm:justify-evenly sm:min-h-[70vh] items-center'>

                <form className='sm:w-[40%] text-lg text-gray-800'>

                    <div className='w-full flex gap-2'>
                        <input type='text' name='fristName' value={data.fristName} onChange={handlechange} placeholder='Frist Name' className='w-[50%] input' required />
                        <input type='text' name='lastName' value={data.lastName} onChange={handlechange} placeholder='Last Name' className='w-[50%] input' required />
                    </div>

                    <input type='number' name='phoneNo' value={data.phoneNo} onChange={handlechange} placeholder='Phone No' className='w-full input' required />
                    <input type='text' name='street' value={data.street} onChange={handlechange} placeholder='Street' className='w-full input' required />

                    <div className='flex gap-2 w-full'>
                        <input type='text' name='city' value={data.city} onChange={handlechange} placeholder='City' className='w-[50%] input' required />
                        <input type='number' name='zipCode' value={data.zipCode} onChange={handlechange} placeholder='Zip Code' className='w-[50%] input' required />
                    </div>

                    <input type='email' name='email' value={data.email} onChange={handlechange} placeholder='Email' className='w-full input' />

                </form>

                <div className='sm:w-[30%] flex flex-col gap-2 text-lg font-semibold text-gray-800 mt-10 sm:mt-0'>

                    <p className='text-center text-xl font-semibold mb-2'>Amount</p>

                    <div className='flex justify-between'>
                        <p>Price</p>
                        <p>{price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Dlivery Charge</p>
                        <p>40</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Plateform Fee</p>
                        <p>2.0</p>
                    </div>
                      <div className='flex justify-between'>
                        <p>Totel </p>
                        <p>{price + 40 +2}</p>
                    </div>
                    <div className='flex sm:flex-row flex-col justify-between'>
                        <p>Apply Coupne</p>
                        <input type='text' name='code' value={code} onChange={(e) => setCode(e.target.value)} className='input sm:w-[50%]' />
                    </div>

                    <div>
                        <button onClick={()=> payment()} className='w-full py-1 bg-green-700 text-white rounded-lg cursor-pointer my-2'>Pay Now</button>
                        <button onClick={()=> submit()} className='w-full py-1 bg-green-700 text-white rounded-lg cursor-pointer my-2'>Cash on Delivery</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Order