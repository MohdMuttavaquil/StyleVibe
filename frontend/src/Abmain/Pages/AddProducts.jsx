import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context/StoreContext'
import { toast } from '../../utlis/helper'

const AddProducts = () => {

  const [data, setData] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
    quantity: ""
  })

  const { token } = useContext(AppContext)
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const clear = ()=>{
    setData({name: "", desc: "", price: "", category: "", quantity: ""})
    setImages([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    images.map((img) => formData.append("images", img))
    formData.append("data", JSON.stringify(data))

    const res = await fetch('http://localhost:3000/api/product/add', {
      method: "POST",
      headers: { token },
      body: formData
    })

    const responce = await res.json()
    toast(responce)
    clear()
  }

  return (
    <div className='sm:w-[80%] sm:mx-auto text-gray-800 min-h-screen'>

      <form onSubmit={handleSubmit} className='sm:w-[40%] flex-col flex gap-2 py-6 px-3 sm:mx-auto rounded-2xl bg-[#f5f2f0]'>

        <p className='text-2xl font-semibold text-center mb-2'>Add New Products</p>

        <label>
          <p>Products name</p>
          <input type='text' name='name' onChange={handleChange} value={data.name} className='input w-full' placeholder='Product name' required />
        </label>

        <label>
          <p>Products Images</p>
          <input type='file' accept='image/*' multiple name='image'
            onChange={(e) => setImages((prev) => [...prev, ...Array.from(e.target.files)])} className='input w-full' required />
        </label>

        <label>
          <p>Products Description</p>
          <textarea type='text' name='desc' placeholder='Include fiture and detail product' onChange={handleChange} value={data.desc} className='input w-full' required > </textarea>
        </label>

        <div className='flex gap-2'>
          <label className=' w-1/2'>
            <p>Products Price</p>
            <input type='number' name='price' onChange={handleChange} value={data.price} placeholder='price' className='input' required />
          </label>

          <label className=' w-1/2'>
            <p>Products quantity</p>
            <input type='number' name='quantity' onChange={handleChange} value={data.quantity} placeholder=' Quantity' className='input' required />
          </label>
        </div>

        <p>Products category</p>
        <select name='category' value={data.category} onChange={handleChange} className='outline-none'>
          <option value=''>Select Category</option>
          <option value='mens were'>Mens were</option>
          <option value='womens were'>Women were</option>
          <option value='kids were'>Kids were</option>
          <option value='shose'>Shose</option>
          <option value='beauity products'>Beauity Products</option>
          <option value='jewelary'>Jewelary</option>
          <option value='mens accessories'>Mens Accessories</option>
        </select>

        <input type='submit' className='px-3 py-1 bg-[#f97316] text-white rounded-lg cursor-pointer my-2 font-semibold' value={"Uplode"} />

      </form>

    </div>
  )
}

export default AddProducts