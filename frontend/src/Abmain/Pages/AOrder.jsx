import React, { useContext, useEffect, useState } from 'react'
import { allOrder, cancelOrder, confirmOrder, deliverdOrder, getReturnOrder } from '../../Api/admain.api'
import { AppContext } from '../../Context/StoreContext'
import { toast } from '../../utlis/helper'

const AOrder = () => {

  const { token } = useContext(AppContext)

  const [orders, setOrders] = useState([])
  const [ allOrders, setAllOrders ] = useState(true)

  const fetchData = async () => {
    const res = await allOrder(token)
    setOrders(res)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const update = (result) => {
    toast(result)
    fetchData()
  }

  const confirm = async (id, name) => {
    const result = await confirmOrder(id, name)
    update(result)
  }

  const deliverd = async (id) => {
    const result = await deliverdOrder(id)
    update(result)
  }

  const cancel = async (id) => {
    const result = await cancelOrder(id)
    update(result)
  }

  const returnOrd = async () => {
    const result = await getReturnOrder(token)
    setOrders(result)
    setAllOrders(!allOrders)
  }

  const getAllOrd = async () =>{
    fetchData()
    setAllOrders(!allOrders)
  }

  return (
    <div className='min-h-screen sm:w-[80%] sm:mx-auto mx-2'>

      <button onClick={() => returnOrd()} className={`${allOrders ? "" : "hidden"} button bg-blue-600 font-semibold`}>Get Return <br></br> Orders</button>

      <button onClick={() => getAllOrd()} className={`${allOrders ? "hidden" : ""} button bg-blue-600 font-semibold`}>Get All <br></br> Orders</button>

      <div className='w-full mx-auto'>

        {orders && orders.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

          {/* Products detail */}
          <div className='sm:my-10 px-3'>
            <p className='text-2xl font-semibold my-1 '>Product Information</p>
            {i.productName && <p className='text-xl font-semibold'>Product Name : <span className='text-lg'>{i.productName}</span></p>}
            {i.price && <p className='text-2xl font-semibold my-1 '>₹{i.price}</p>}
            {i.payment && <p className='text-xl font-semibold'>Payment Mode: {i.payment}</p>}

            {i.casueOfReturn && <div className='text-xl font-semibold'>
              <p >Casue Of Return </p>
              <p>{i.casueOfReturn}</p>
            </div>}

            {/* Confirm button */}
           {i.status && <div className='flex gap-4'>

              <div className={`${i.status === 'Processing' ? "flex" : "hidden"}`}>
                <button onClick={() => confirm(i._id, i.productName)} className={`button bg-blue-500 hover:bg-blue-600`}>Ship Order</button>
              </div>

              <div className={`${i.status === 'Processing' ? "hidden" : "flex"}`}>
                {i.status === 'shipping' ? (<button onClick={() => deliverd(i._id)} className={`button bg-[#f97316]`}>Deliver Order</button>) :
                  (<button className={`button ${i.status === "Cancel" ? "bg-red-600" : "bg-green-600"} `}>{i.status} </button>)}
              </div>

              <div>
                <button onClick={() => cancel(i._id)} className={`${i.status === "Cancel" || i.status === "Delivered" || i.status === "Return" ? "hidden" : "button bg-red-600"} `}>Cancel Oeder </button>
              </div>

            </div>}

          </div>

          {/* buyer Info*/}
          <div className='sm:my-10 px-3'>
            <p className='text-2xl font-semibold my-1 '>Buyer Information</p>
            {i.buyerName && <p className='text-xl font-semibold'>Name: <span className='text-lg'>{i.buyerName}</span></p>}
            {i.phoneNo && <p className='text-xl font-semibold'>Phone Number: <span className='text-lg'>{i.phoneNo}</span></p>}
            {i.address && <p className='text-xl font-semibold'>Address: <span className='text-lg'>{i.address}</span></p>}
          </div>

        </div>)}

      </div>

    </div>
  )
}

export default AOrder