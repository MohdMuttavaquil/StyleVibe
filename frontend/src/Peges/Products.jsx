import React, { useState, useContext, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AppContext } from '../Context/StoreContext'
import { itemsApi } from '../utlis/helper'
import { useNavigate } from 'react-router-dom'

const Products = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const { category, setName, setDesc, setImages, setAdmainName, setPrice, setCategory } = useContext(AppContext)

    const result = async ()=>{
      const res = await itemsApi(category)
      setItems(res)
    }

    useEffect(() => {
      result()
    }, [])

    // set item detail 
     const itemDetail = (data) => {
        setName(data.name)
        setAdmainName(data.admainName)
        setDesc(data.desc)
        setPrice(data.price)
        setImages(data.images)
        setCategory(data.category)
        navigate('/detail')
    }

    return (
        <div className='sm:w-[85%] min-h-screen sm:mx-auto mx-2'>

        <div className='md:w-[70%] xl:w-[60%]'>

            {items && items.map((i, index) => <div key={index} onClick={() => itemDetail(i)}  className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

               <img src={i.images[0].url} className='sm:h-[40vh] sm:min-w-[50%] sm:max-w-[50%]  rounded-2xl cursor-pointer'></img>
               
                <div className='sm:my-10 px-3'>
                    <p className='text-xl font-semibold'>{i.name}</p>
                    <p className='text-2xl font-semibold my-1 sm:my-4'>{i.price}</p>
                    <button className='px-4 py-1 bg-amber-500 text-white rounded-2xl cursor-pointer flex gap-2 items-center sm:mt-10 '>Add To Cart
                        <FaShoppingCart className='h-5 w-5 ' />
                    </button>
                </div>

            </div>)}

        </div>

        </div>
    )
}

export default Products