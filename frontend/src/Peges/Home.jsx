import React from 'react'
import { cetogry } from '../Data/Data'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const render = ()=>{
    console.log("send to detail")
    navigate('/detail')
  }
  return (
    <>

      {/* Hero image */}
      <div className='heroImage relative h-[60vh] mx-2 sm:h-[75vh] my-10 sm:w-[90%] sm:mt-24 mt-16 sm:mx-auto rounded-2xl '>

        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        <div className="relative z-10 flex flex-col justify-center my-2 h-full text-white text-center px-4">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">All Fashion in One Place</h1>
          <p className="text-xl">Shop the latest trends at CartZo</p>
        </div>
      </div>


      {/* Product Cetogry */}
      <div className="flex flex-nowrap overflow-x-auto gap-4 sm:w-[80%] sm:mx-auto mx-2 py-3 cetogry">

        {cetogry.map((i, index) => <div key={index}>
          <img src={i.url} className='min-h-40 min-w-40 max-h-40 max-w-40 rounded-full hover:px-2 hover:py-1 cursor-pointer' ></img>
          <p className='text-center font-semibold text-lg mt-2'>{i.name}</p>
        </div>)}

      </div>

      {/*products */}
      <div className='my-10 sm:w-[80%] mx-2 sm:mx-auto '>
        <p className='my-5 text-2xl font-semibold'>Tranding In India</p>

        <div className='flex w-full justify-evenly flex-wrap items-center h-[90vh]'>

          {cetogry.map((i, index) => <div onClick={()=> render()} key={index} className='rounded-2xl bg-[#f5f2f0] text-gray-700 h-[40vh] sm:w-[30%] w-[45%] cursor-pointer'>
            <img src={i.url} className='h-[32vh] w-full rounded-2xl'></img>
            <p className='text-lg font-semibold my-2 px-2'>{i.name}</p>
          </div>)}

        </div>

        <p className='my-5 text-2xl font-semibold'>For You</p>

        <div className='flex w-full justify-evenly flex-wrap items-center h-[90vh]'>

          {cetogry.map((i, index) => <div onClick={()=> render()} key={index} className='rounded-2xl bg-[#f5f2f0] text-gray-700 h-[40vh] sm:w-[30%] w-[45%] cursor-pointer'>
            <img src={i.url} className='h-[32vh] w-full rounded-2xl'></img>
            <p className='text-lg font-semibold my-2 px-2'>{i.name}</p>
          </div>)}

        </div>

      </div>

    </>
  )
}

export default Home