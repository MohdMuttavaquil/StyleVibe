import React from 'react'
import { itemById, suggestion } from '../Api/user.api'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const ProductsBox = () => {

    const navigate = useNavigate()

    const { data: shose } = useQuery(
        { queryKey: ['shose'], queryFn: ()=> suggestion('shose'), staleTime: Infinity }
    )

    const { data: beauity } = useQuery(
        { queryKey: ['beauity'], queryFn: ()=> suggestion('beauity products'), staleTime: Infinity }
    )

    const itemDetail = async (id) => {
        const res = await itemById(id)
        navigate('/detail', { state: res })
    }

    return (
        <>
            
            <div className='my-10'>
                <h1 className='my-5 text-2xl font-semibold'>Shose</h1>

                <div className='flex w-full justify-evenly flex-wrap'>

                    {shose && shose.map((i, index) => <div onClick={() => itemDetail(i._id)} key={index} className='box-shadow rounded-2xl bg-[#f5f2f0] text-gray-700 h-[45vh] sm:w-[30%] w-[45%] cursor-pointer sm:my-6 my-3'>
                        <img src={i.images[0].url} className='h-[30vh] w-full rounded-2xl'></img>
                        <p className='text-lg font-semibold my-2 px-2 mt-4'>{i.name}</p>
                    </div>)}

                </div>

            </div>


            <div className='my-10'>
                <h1 className='my-5 text-2xl font-semibold'>Beauity Products</h1>

                <div className='flex w-full justify-evenly flex-wrap'>

                    {beauity && beauity.map((i, index) => <div onClick={() => itemDetail(i._id)} key={index} className='box-shadow rounded-2xl bg-[#f5f2f0] text-gray-700 h-[45vh] sm:w-[30%] w-[45%] cursor-pointer sm:my-6 my-3'>
                        <img src={i.images[0].url} className='h-[30vh] w-full rounded-2xl'></img>
                        <p className='text-lg font-semibold my-2 px-2 mt-4'>{i.name}</p>
                    </div>)}

                </div>

            </div>

        </>
    )
}

export default ProductsBox