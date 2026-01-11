import React, { useContext } from 'react'
import { AppContext } from '../../Context/StoreContext'
import { allProducts } from '../../Api/admain.api'
import { useQuery } from '@tanstack/react-query'

const AHome = () => {
  const { token } = useContext(AppContext)

  const fetchData = async () => {
    const res = await allProducts(token)
    return res
  }

  const { data: products } = useQuery({
     queryKey: ['products'], queryFn: fetchData, enabled: !!token, staleTime: Infinity })

  return (
    <div className='min-h-screen sm:w-[80%] sm:mx-auto mx-2'>

      <div className='w-full mx-auto'>

        {products && products.map((i, index) => <div key={index} className='bg-[#f5f2f0] text-gray-700 rounded-2xl sm:h-[40vh] w-full sm:my-2 my-6 flex sm:flex-row flex-col pb-5 sm:pb-0'>

          <img src={i.images[0].url} className='sm:h-[40vh] sm:min-w-[40%] sm:max-w-[40%]  rounded-2xl cursor-pointer'></img>

          <div className='sm:my-10 px-3'>
            <p className='text-xl font-semibold'>{i.name}</p>
            <p className='text-2xl font-semibold my-1 '>₹{i.price}</p>
            <p className='text-lg font-semibold my-1'>Product Quantity {i.quantity}</p>
            <p>{i.desc}</p>
          </div>

        </div>)}

      </div>

    </div>
  )
}

export default AHome