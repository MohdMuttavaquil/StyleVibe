import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from '../Context/StoreContext';
import { itemsApi } from '../utlis/helper'
import { itemById } from '../Api/user.api';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {

    const { itemId, token, url, setPrice, setSellerName, setName } = useContext(AppContext)
    const navigate = useNavigate()
    const { state } = useLocation()
    // set some detail
    setSellerName(state.admainName)
    setPrice(state.price)
    setName(state.name)

    const [items, setItems] = useState([])

    const result = async () => {
        const res = await itemsApi(state.category)
        setItems(res)
    }

    useEffect(() => {
        result()
    }, [])

    // set item detail 
    const itemDetail = async (id) => {
        const res = await itemById(id)
        navigate('/detail', { state : res})
    }

   // Add item in cart after login
   const addToCart = async()=>{
       const res = await fetch(`${url}/user/addincart`, { method: "POST",
          headers: { "Content-Type": "application/json", token: token }, 
          body: JSON.stringify({ itemId:itemId }) }
       )
       const result = await res.json()
       console.log(result)
   }
    
    return (
        <div className='sm:w-[80%] sm:mx-auto mx-2 sm:my-16 min-h-screen'>

            <div className='flex sm:flex-row flex-col gap-2'>

                <div className='flex flex-nowrap overflow-x-auto sm:w-[50%] no-scrollbar sm:mt-12'>
                    {state.images.map((i, index) => <img key={index} src={i.url} className='min-w-full mx-2 h-[60vh] rounded-2xl cursor-pointer'></img>)}
                </div>

                <div className='sm:w-[45%] sm:mx-auto mx-2 sm:mt-20'>
                    <p className='text-2xl font-semibold'>{state.name}</p>
                    <img src='./rating.jpg' className='h-6 w-20'></img>
                    <p className='bg-[#2196f3] text-white px-3 py-1 rounded-xl w-fit font-semibold mt-4'>India’s Top Picks</p>
                    <p className='text-xl mt-4 w-[80%]' >{state.desc}</p>
                    <p className='text-2xl font-semibold my-1 sm:my-4'>₹{state.price}</p>

                    <div className='flex gap-4 sm:mt-5'>
                        <button onClick={()=> addToCart()} className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2 items-center'>Add To Cart
                            <FaShoppingCart className='h-5 w-5 ' />
                        </button>
                        <Link to='/order'>
                        <button className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2'>Bye Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* suggestion items */}

            <p className='text-2xl font-semibold sm:mt-20'>Suggestion for you</p>
            <div className="flex flex-nowrap overflow-x-auto gap-4 mx-2 py-3 no-scrollbar">

                {items && items.map((i, index) => <div onClick={() => itemDetail(i._id)} key={index} className='rounded-2xl bg-[#f5f2f0] text-gray-700 min-h-[45vh] max-h-[45vh] sm:min-w-[30%] sm:max-w-[30%] w-[45%] cursor-pointer sm:my-6 my-3'>
                    <img src={i.images[1].url} className='h-[30vh] w-full rounded-2xl'></img>
                    <p className='text-lg font-semibold my-2 px-2 mt-4'>{i.name}</p>
                </div>)}

            </div>

        </div>
    )
}

export default Detail