import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/StoreContext'
import { toast } from '../../utlis/helper'
import { editProductApi } from '../../Api/admain.api'

const EditProduct = () => {

  const { state } = useLocation()
  const navigate  = useNavigate()
  const { url, token } = useContext(AppContext)

  const [proSize, setProSize] = useState('')
  const [rproSize, setRproSize] = useState('')
  const [data, setData] = useState({
    id: state._id,
    mrpPrice: "",
    price: "",
    quantity: "",
    addSize: [],
    removeSize: []
  })

  const addPro = () => {
    setData((prev) => ({ ...prev, addSize: [...prev.addSize, proSize] }))
    setProSize('')
  }

  const removePro = () => {
    setData((prev) => ({ ...prev, removeSize: [...prev.removeSize, rproSize] }))
    setRproSize('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const clear = () => {
    setData({ mrpPrice: "", price: "", quantity: "", size: [] })
  }

  const editPro = async () => {
    const result = await editProductApi(data, token)
    toast(result)
    clear()
    navigate("/admain")
  }

  return (
    <div className='min-h-screen flex sm:flex-row flex-col justify-evenly sm:justify-between sm:mx-auto sm:w-[80%] mx-2'>

      {/* Product info */}
      <div className='md:w-[48%] flex flex-col px-2 text-gray-800 sm:my-12 my-4'>

        <img src={state.images[0].url} className='h-[40%] rounded-xl' />
        <p className='text-2xl font-semibold mt-6'>Product Name {state.name}</p>
        <p className='font-semibold text-xl'>Sell Price {state.price}</p>
        <p className='font-semibold text-xl'>MRP Price {state.MRPPrice}</p>
        <p className='font-semibold text-xl'>Product quantity {state.quantity}</p>
        <div className='flex gap-2 text-xl font-semibold'>Product Size:
          {state.size.map((i, index) => <p key={index}>
            {i}
          </p>)}
        </div>

      </div>

      {/* edit product detail */}
      <div className='bg-[#f5f2f0] flex flex-col justify-center gap-2 py-10 px-4 rounded-xl h-fit sm:my-12 my-4'>

        <div className='flex gap-2'>
          <label className=' w-1/2'>
            <p>Sell Price</p>
            <input type='number' name='price' onChange={handleChange} value={data.price} placeholder='price' className='input' />
          </label>

          <label className=' w-1/2'>
            <p>MRP Price</p>
            <input type='number' name='mrpPrice' onChange={handleChange} value={data.mrpPrice} placeholder='MRP Price' className='input' />
          </label>
        </div>

        <div className='flex gap-2 sm:flex-row flex-col'>
          <div className='sm:w-1/2 flex items-center w-full' >
            <label className='w-[50%]'>
              <p>Add Size</p>
              <input type='text' name='proSize' onChange={(e) => setProSize(e.target.value)} value={proSize} placeholder='S' className='input' />
            </label>
            <button className='button h-fit bg-[#f97316]' onClick={() => addPro()}>Add</button>
          </div>

          <div className='sm:w-1/2 flex items-center w-full' >
            <label className='w-[50%]'>
              <p>Remove Size</p>
              <input type='text' name='proSize' onChange={(e) => setRproSize(e.target.value)} value={rproSize} placeholder='S' className='input' />
            </label>
            <button className='button h-fit bg-[#f97316]' onClick={() => removePro()}>Remove</button>
          </div>

        </div>

        <label className='sm:w-2/3 w-full'>
          <p>Products quantity</p>
          <input type='number' name='quantity' onChange={handleChange} value={data.quantity} placeholder='Quantity' className='input' />
        </label>

        <button onClick={() => editPro()} className='px-3 py-1 bg-[#f97316] text-white rounded-lg cursor-pointer my-2 font-semibold' >Uplode</button>

      </div>

    </div>
  )
}

export default EditProduct