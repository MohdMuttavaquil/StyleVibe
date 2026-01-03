import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { allOrder, confirmOrder } from '../../Api/admain.api'

const AOrder = () => {

  const [orders, setOrders ] = useState([])
  const [ click, setClick ] = useState(true)
  const fetcgData = async ()=>{
    const res = await allOrder()
    setOrders(res)
  }
  useEffect(()=>{
    fetcgData()
  }, [])
  
  const confirm = async (id, name) => {
    const result = await confirmOrder(id, name)
    setClick(false)
    alert(result)
  }

  return (
    <div className='min-h-screen sm:w-[80%] sm:mx-auto mx-2'>


      <div className='w-full mx-auto'>

        {orders && orders.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

          <div className='sm:my-10 px-3'>
            <p className='text-2xl font-semibold my-1 '>Product Information</p>
            <p className='text-xl font-semibold'>Product Name : <span className='text-lg'>{i.productName}</span></p>
            <p className='text-2xl font-semibold my-1 '>₹{i.price}</p>
            <p className='text-xl font-semibold'>Payment Mode: {i.payment}</p>
            <p className='text-xl font-semibold'>Order Status: <span className='text-lg'>{click ? i.status : 'Shipping' }</span></p>
           
            <div className={`${i.status === 'Processing' ? "flex": "hidden"}`}>
               <button onClick={() => confirm(i._id, i.productName)} className={`px-3 py-1 text-white font-semibold cursor-pointer my-2 rounded-xl ${click ? "bg-blue-500 hover:bg-blue-600 " : "bg-green-600"}` }>Ship Order</button>
            </div>
          </div>

          <div className='sm:my-10 px-3'>
            <p className='text-2xl font-semibold my-1 '>Buyer Information</p>
            <p className='text-xl font-semibold'>Name: <span className='text-lg'>{i.buyerName}</span></p>
            <p className='text-xl font-semibold'>Phone Number: <span className='text-lg'>{i.phoneNo}</span></p>
            <p className='text-xl font-semibold'>Address: <span className='text-lg'>{i.address}</span></p>
          </div>

        </div>)}

      </div>

    </div>
  )
}

export default AOrder