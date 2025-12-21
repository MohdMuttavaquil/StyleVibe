import React, { useState, useContext, useEffect } from 'react'
import { cetogry } from '../Data/Data'
import { FaShoppingCart } from 'react-icons/fa'
import { AppContext } from '../Context/StoreContext'
import { categoryItmeApi } from '../Api/user.api'
import { Link } from 'react-router-dom'

const Products = () => {

    const [items, setItems] = useState([])
    const { category } = useContext(AppContext)

    const itemsApi = async () => {
        console.log(category)
        const value = category.toLowerCase()
        const data = { category: value }
        const res = await categoryItmeApi(data)
        setItems(res)
        
      /*  console.log(datt)
        const res = await fetch('http://localhost:3000/api/items/category', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(datt)
        })
        const data = await res.json()
        console.log(data)*/
    }

    useEffect(() => {
        itemsApi()
    }, [])

    return (
        <div className='sm:w-[85%] min-h-screen sm:mx-auto mx-2'>

        <div className='md:w-[70%] xl:w-[60%]'>

            {items && items.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

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