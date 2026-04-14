import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/StoreContext'
import { allItemsApi, suggestion, trendingApi } from '../Api/user.api'
import ProductsBox from '../Component/ProductsBox'

const Home = () => {

  const { setCategory } = useContext(AppContext)

  const { data: trendingItems } = useQuery(
    { queryKey: ['trendingItems'], queryFn: trendingApi, staleTime: Infinity })

  const { data: allItems } = useQuery(
    { queryKey: ['allItems'], queryFn: allItemsApi, staleTime: Infinity })

  const { data: beauity } = useQuery(
    { queryKey: ['beauity'], queryFn: () => suggestion('beauity products'), staleTime: Infinity }
  )

  const { data: accessories } = useQuery(
    { queryKey: ['accessories'], queryFn: () => suggestion('mens accessories'), staleTime: Infinity }
  )

  return (
    <div className='md:mb-24 mb-16'>

      {/* Hero image */}
      <div className='md:h-screen h-[30vh] w-full bg-cover bg-center md:mt-20 mt-16 bg-[url("/home-image.jpg")]'></div>


      {/* Product Cetogry */}
      <div className='w-full md:my-15 my-6 flex flex-col md:gap-4 gap-1.5 justify-center items-center '>

        <p className='text-gray-800 font-semibold text-xl md:text-3xl'>New Arrival</p>

        <ul className='flex md:gap-8 gap-3 text-gray-400 '>

          <li className="md:text-lg hover:font-semibold hover:text-gray-700" onClick={() => setCategory('mens were')}>
            <Link to='/search'>Men</Link>
          </li>
          <li className="md:text-lg hover:font-semibold hover:text-gray-700" onClick={() => setCategory('womens were')}>
            <Link to='/search'>Women</Link>
          </li>
          <li className="md:text-lg hover:font-semibold hover:text-gray-700" onClick={() => setCategory('shose')}
          ><Link to='/search'>Shoes</Link>
          </li>
          <li className="md:text-lg hover:font-semibold hover:text-gray-700" onClick={() => setCategory('Beauity Products')}>
            <Link to='/search'>Beauty</Link>
          </li>
          <li className="md:text-lg hover:font-semibold hover:text-gray-700" onClick={() => setCategory('Mens Accessories')}>
            <Link to='/search'>Accessories</Link>
          </li>

        </ul>
      </div>




      {/*products */}
      <div className='my-10 md:w-[96%] xl:w-[90%] mx-2 sm:mx-auto '>

        <ProductsBox itemsDetail={trendingItems} />

        <div className='h-[30vh] md:h-[65vh] w-full rounded-2xl'>
          <img src='./hero-image.jpg' className='h-full w-full' />
        </div>
        <ProductsBox itemsDetail={allItems} />

        <div className='discont text-[#5A4634] md:h-34 h-20 w-full text-2xl md:text-5xl md:mt-4 my-2 font-semibold rounded-2xl flex items-center justify-center'>
          <p>Beauty product upto 50% off</p>
        </div>
        <ProductsBox itemsDetail={beauity} />

        <div className='discont text-[#5A4634] md:h-34 h-20 w-full text-2xl md:text-5xl md:mt-4 my-2  font-semibold rounded-2xl flex items-center justify-center'>
          <p>Mens Accessories upto 50% off</p>
        </div>
        <ProductsBox itemsDetail={accessories} />

      </div>


      {/* Get or app*/}
        <div className={`flex justify-evenly sm:mt-24 mt-16 md:w-[80%] mx-auto`}>
          <img src='/google-play.webp' className='md:w-[30%] w-[40%] cursor-pointer'/>
          <img src='/app-store.png'  className='md:w-[30%] w-[40%] cursor-pointer'/>
        </div>

    </div>
  )
}

export default Home