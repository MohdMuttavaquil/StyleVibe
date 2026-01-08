import React, { useContext, useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppContext } from '../Context/StoreContext'
import { itemById, userCartApi } from '../Api/user.api'
import { Link, useNavigate } from 'react-router-dom'
import { showRemoveToast } from '../utlis/toast'

const Cart = () => {

    const { token, url } = useContext(AppContext)
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()

    // Get cart detail
    const setItems = async (list) => {
        for (const item of list) {
            const res = await itemById(item);
            setCartItems(prev => [...prev, res]);
        }
    }

    const cart = async () => {
        const list = await userCartApi(token)
        setItems(list)
    }

    useEffect(() => {
        cart()
    }, [token])

    // set Items detail 
    const itemDetail = async (id) => {
        const res = await itemById(id)
        navigate('/detail', { state: res })
    }

    // Remove from cart 
    const remove = async (itemId) => {
        const res = await fetch(`${url}/cart/removeincart`, {
            method: "POST",
            headers: { "Content-Type": "application/json", token: token },
            body: JSON.stringify({ itemId: itemId })
        }
        )
        const result = await res.json()
        setCartItems([])
        setItems(result.userCart)
        showRemoveToast("Item Removed")
    }

    return (
        <>
            {token ? <div className='sm:w-[80%] sm:mx-auto mx-2 min-h-screen '>

                {cartItems && cartItems.map((i, index) => <div key={index} className='box-shadow bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

                    <img src={i.images[0].url} onClick={() => itemDetail(i._id)} className='sm:h-[40vh] sm:min-w-[50%] sm:max-w-[50%]  rounded-2xl cursor-pointer'></img>

                    <div className='sm:my-10 px-3'>
                        <p className='text-xl font-semibold'>{i.name}</p>
                        <p className='text-2xl font-semibold my-1 sm:my-4'>₹{i.price}</p>

                        <button onClick={() => remove(i._id)} className='px-4 py-1 bg-red-500 text-white rounded-2xl cursor-pointer flex gap-2 items-center mt-8'>Reomve To Cart
                            <FaTrash className='h-4 w-4 ' />
                        </button>

                    </div>
                </div>)}


            </div> :
                <div className=' min-h-[50vh] flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold text-2xl'>Please login first</p>
                    <Link to='/singin' className='button bg-blue-500'>login</Link>
                </div>}

        </>
    )
}

export default Cart