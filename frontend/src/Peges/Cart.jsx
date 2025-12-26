import React, { useContext, useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppContext } from '../Context/StoreContext'
import { itemById, userCartApi } from '../Api/user.api'

const Cart = () => {

    const { token } = useContext(AppContext)
    const [cartItems, setCartItems] = useState([])
    const url = "http://localhost:3000/api"

    const setItems = async (list) => {    
        console.log(list) 
        for (const item of list) {
            const res = await itemById(item);
            setCartItems(prev => [...prev, res]);
        }
    }

    const cart = async()=>{
        const list = await userCartApi()
       setItems(list)
       console.log('api re call')
    }

    useEffect(() => {
       cart()
    }, [])

    const remove = async (itemId)=>{
      const res = await fetch(`${url}/user/removeincart`, { method: "POST",
          headers: { "Content-Type": "application/json", token: token }, 
          body: JSON.stringify({ itemId:itemId }) }
       )
       const result = await res.json()
       console.log(result)
       setCartItems([])
       setItems(result.userCart)
    }

    return (
        <>
            {token ? <div className='sm:w-[80%] sm:mx-auto mx-2 min-h-screen'>

                {cartItems && cartItems.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

                    <img src={i.images[0].url} className='sm:h-[40vh] sm:min-w-[50%] sm:max-w-[50%]  rounded-2xl cursor-pointer'></img>

                    <div className='sm:my-10 px-3'>
                        <p className='text-xl font-semibold'>{i.name}</p>
                        <p className='text-2xl font-semibold my-1 sm:my-4'>₹{i.price}</p>
 
                    <button onClick={()=> remove(i._id)} className='px-4 py-1 bg-red-500 text-white rounded-2xl cursor-pointer flex gap-2 items-center mt-8'>Reomve To Cart
                        <FaTrash className='h-4 w-4 ' />
                    </button>

                    </div>
                </div>)}


            </div> :
                <div className=' min-h-[50vh] flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold text-2xl'>Please login first</p>
                    <button className='px-3 py-1 rounded cursor-pointer border bg-blue-100'>login</button>
                </div>}

        </>
    )
}

export default Cart