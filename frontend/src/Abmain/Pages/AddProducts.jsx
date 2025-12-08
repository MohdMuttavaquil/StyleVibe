import React, { useState } from 'react'

const AddProducts = () => {

  const [data, setData] = useState({
    name: "",
    disc: "",
    price: "",
    mrpPrice: "",
    quantity: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data, images)
  }

  const [images, setImages] = useState([]);

  const handleUplode = (e) => {
    const files = Array.from(e.target.files);
    const previewUrls = files.map((file) => ({
      file: file,
      preview: URL.createObjectURL(file)
    }));
    setImages((prev) => [...prev, ...previewUrls]);
  }

  return (
    <div className='sm:w-[80%] sm:mx-auto mx-2 text-gray-800 min-h-screen'>

      <form onSubmit={handleSubmit} className='sm:w-[40%] flex-col flex gap-2 py-6 px-3 sm:mx-auto mx-2 rounded-2xl bg-[#f5f2f0]'>

        <p className='text-2xl font-semibold text-center mb-2'>Add New Products</p>

        <label>
          <p>Products name</p>
          <input type='text' name='name' onChange={handleChange} value={data.name} className='input w-full' required />
        </label>

        <label>
          <p>Products Images</p>
          <input type='file' accept='image/*' name='image' onChange={handleUplode} multiple className='input w-full' required />
        </label>

        <label>
          <p>Products Discription</p>
          <textarea type='text' name='disc' placeholder='Include fiture and detail product' onChange={handleChange} value={data.disc} className='input w-full' required > </textarea>
        </label>

        <label>
          <p>Products Price</p>
          <div className='flex gap-2'>
            <input type='number' name='mrpPrice' onChange={handleChange} value={data.mrpPrice} className='input w-1/2' placeholder='M.R.P Price' required />
            <input type='number' name='price' onChange={handleChange} value={data.price} className='input w-1/2' placeholder='Finel Price' required />
          </div>
        </label>

        <label>
          <p>Products quantity</p>
          <input type='number' name='quantity' onChange={handleChange} value={data.quantity} className='input w-full' required />
        </label>

        <input type='submit' className='px-3 py-1 bg-[#f97316] text-white rounded-lg cursor-pointer my-2 font-semibold' value={"Uplode"} />

      </form>

      <div className='flex flex-wrap justify-evenly'>
        {images.map((i, index)=> 
        <img key={index} src={i.preview} className='sm:w-[30%] my-4 w-full h-[50vh] sm:h-[30vh]' /> 
        )}
      </div>
    </div>
  )
}

export default AddProducts