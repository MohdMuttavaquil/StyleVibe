import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/StoreContext'
import { allOrder } from '../Api/user.api'
import { cancelOrder } from '../Api/admain.api'

const OrderIngo = () => {

    const [orders, setOrders] = useState([])
    const { token } = useContext(AppContext)

    const fetchData = async () => {
        const res = await allOrder(token)
        setOrders(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const cancel = async (id) => {
    const result = await cancelOrder(id)
    alert(result)
    fetchData()
  }

    return (
        <div className='sm:w-[85%] sm:mx-auto mx-2 min-h-screen'>

            {orders && orders.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] md:w-[70%] xl:w-[60%] sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

                {/* Products detail */}
                <div className='sm:my-10 px-3'>
                    <p className='text-2xl font-semibold my-1 '>Product Information</p>
                    <p className='text-xl font-semibold'>Product Name : <span className='text-lg'>{i.productName}</span></p>
                    <p className='text-2xl font-semibold my-1 '>Price: ₹{i.price}</p>
                    <p className='text-xl font-semibold'>Payment Mode: {i.payment}</p>
                    <p className='text-xl font-semibold'>Order Status : <span className='text-lg'>{i.status}</span></p>

                    <div>
                        <button onClick={() => cancel(i._id)} className={`button bg-red-600 ${i.status === 'Delivered' || i.status === 'Cancel' ? "hidden" : ""}`}>Cancel Oeder </button>
                    </div>
                </div>

            </div>)}

        </div>
    )
}

export default OrderIngo