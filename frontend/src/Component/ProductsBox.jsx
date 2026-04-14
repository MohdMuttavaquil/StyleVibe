import React from 'react'
import { itemById } from '../Api/user.api'
import { useNavigate } from 'react-router-dom'

const ProductsBox = ({ itemsDetail }) => {

    const navigate = useNavigate()

    const itemDetail = async (id) => {
        const res = await itemById(id)
        navigate(`/detail/${id}`, { state: res })
    }

    return (
        <>

      <div className='flex w-full justify-evenly flex-wrap'>

          {itemsDetail && itemsDetail.map((i, index) => <div onClick={() => itemDetail(i._id)} key={index} className={`${index >= 4 ? "hidden md:flex": ""} text-gray-700 md:h-[40vh] h-[30vh] md:w-[24%] w-[45%] cursor-pointer sm:my-4 my-2 rounded-2xl bg-[#F0F2F5] flex flex-col justify-center items-center`}>

            <img src={i.images[0].url} className='h-[70%] w-[90%] rounded-2xl box-shadow '></img>
            <p className='text-sm md:text-lg my-2 px-2 mt-4'>{i.name}</p>

          </div>)}

        </div>
            

        </>
    )
}

export default ProductsBox