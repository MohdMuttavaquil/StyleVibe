import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from '../Context/StoreContext';
import { itemsApi, toast } from '../utlis/helper'
import { itemById } from '../Api/user.api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { showAlertToast } from '../utlis/toast';


const Detail = () => {

    const { token, url, setPrice, setSellerName, setName } = useContext(AppContext)
    const navigate = useNavigate()
    const { state } = useLocation()
    const [items, setItems] = useState([])
    const [size, setSize] = useState([])
    const [active, setActive] = useState(null)

    const quantity = state.quantity
    const rating = (Math.random() * 2 + 3).toFixed(1)
    const people =  Math.floor(Math.random() * 100 + 50)
    const discount = Math.floor(((state.MRPPrice - state.price) / state.MRPPrice) * 100);


    // Set Items Details
    const result = async () => {
        const res = await itemsApi(state.category)
        setItems(res)
        setSellerName(state.admainName)
        setPrice(state.price)
        setName(state.name)
    }

    useEffect(() => {
        result()
        setSize(state.size)
    }, [state])

    // set item detail 
    const itemDetail = async (id) => {
        const res = await itemById(id)
        navigate(`/detail/${id}`, { state: res })
    }

    // Add item in cart after login
    const addToCart = async (itemId) => {
        if (!token) {
            return showAlertToast('Login required!')
        }
        const res = await fetch(`${url}/cart/addincart`, {
            method: "POST",
            headers: { "Content-Type": "application/json", token: token },
            body: JSON.stringify({ itemId: itemId })
        }
        )
        const result = await res.json()
        toast(result)
    }


    return (
        <div className='sm:w-[80%] sm:mx-auto mx-2 sm:my-16 min-h-screen'>

            <div className='flex sm:flex-row flex-col gap-2'>

                <div className='flex flex-nowrap overflow-x-auto sm:w-[50%] no-scrollbar sm:mt-12'>
                    {state.images.map((i, index) => <img key={index} src={i.url} className='min-w-full mx-2 h-[60vh] rounded-2xl cursor-pointer'></img>)}
                </div>

                <div className='sm:w-[45%] sm:mx-auto mx-2 sm:mt-20'>

                    <p className='text-2xl font-semibold'>{state.name}</p>

                    <div className='flex items-center gap-2'>
                        <p>{rating}</p>
                        <img src='/rating.webp' className='h-5 w-5'></img>
                        <p>({people})</p>
                    </div>


                    <p className='bg-[#2196f3] text-white px-3 py-1 rounded-xl w-fit font-semibold mt-4'>{quantity > 9 ? 'India’s Top Picks' : `Hurry only ${quantity} left`}</p>

                    <p className='text-xl mt-4 w-[80%]' >{state.desc}</p>

                    <div className='my-5 flex gap-3'>
                        {size && size.map((i, index) => <button key={index} onClick={() => setActive(i)} className={`${active === i ? "bg-gray-700 text-white" : ""} text-gray-800 text-lg border-2 px-2 cursor-pointer rounded-lg border-gray-500`}>{i}</button>)}
                    </div>

                    <div className='flex gap-2 my-5'>
                        <p className='text-2xl font-semibold opacity-75 line-through'>₹{state.MRPPrice}</p>
                        <p className='text-2xl font-semibold'>{state.price}</p>
                        <p className={`${discount <= 1 ? "hidden" : ""} bg-[#2196f3] text-white px-3 text-lg font-semibold py-0.5 text-center rounded-xl`}>{discount}% off</p>
                    </div>


                    <div className='flex gap-4 mt-5'>
                        <button onClick={() => addToCart(state._id)} className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2 items-center'>Add To Cart
                            <FaShoppingCart className='h-5 w-5 ' />
                        </button>
                        <Link to='/order'>
                            <button className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2'>Bye Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* suggestion items */}

            <p className='text-2xl font-semibold mt-20'>Suggestion for you</p>
            <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-wrap sm:justify-evenly gap-2 w-full sm:mx-auto mx-2 py-3">

                {items && items.map((i, index) => <div onClick={() => itemDetail(i._id)} key={index} className=' box-shadow rounded-2xl bg-[#f5f2f0] text-gray-700 min-h-[45vh] max-h-[45vh] sm:w-[40%] w-[46%] cursor-pointer sm:my-6 my-3'>
                    <img src={i.images[1].url} className='h-[30vh] w-full rounded-2xl'></img>
                    <p className='sm:text-lg sm:font-semibold px-2 mt-4'>{i.name}</p>
                    <p className='text-xl font-semibold px-2'>₹{i.price}</p>
                </div>)}

            </div>

        </div>
    )
}

export default Detail