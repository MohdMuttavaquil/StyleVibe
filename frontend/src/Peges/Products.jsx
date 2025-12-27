import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../Context/StoreContext'
import { itemsApi } from '../utlis/helper'
import { useNavigate } from 'react-router-dom'
import { itemById } from '../Api/user.api'

const Products = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const { category } = useContext(AppContext)

    const result = async ()=>{
      const res = await itemsApi(category)
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

    return (
        <div className='sm:w-[85%] min-h-screen sm:mx-auto mx-2'>

        <div className='md:w-[70%] xl:w-[60%]'>

            {items && items.map((i, index) => <div key={index} onClick={() => itemDetail(i._id)}  className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

               <img src={i.images[0].url} className='sm:h-[40vh] sm:min-w-[50%] sm:max-w-[50%]  rounded-2xl cursor-pointer'></img>
               
                <div className='sm:my-10 px-3'>
                    <p className='text-xl font-semibold'>{i.name}</p>
                    <p className='text-2xl font-semibold my-1 sm:my-4'>{i.price}</p>
                
                </div>
                
            </div>)}

        </div>

        </div>
    )
}

export default Products