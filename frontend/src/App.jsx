import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Peges/Home'
import Footer from './Component/Footer'
import Singin from './Peges/Singin'
import Cart from './Peges/Cart'
import Detail from './Peges/Detail'
import Products from './Peges/Products'
import ANavbar from './Abmain/Component/ANavbar'
import AHome from './Abmain/Pages/AHome'
import AddProducts from './Abmain/Pages/AddProducts'
import AOrder from './Abmain/Pages/AOrder'
import Order from './Peges/Order'

function App() {

  const role = sessionStorage.getItem('role')

  return (
    <>

      {role === "admain" ? <div>
        <ANavbar />
        <div className='sm:my-24 my-20 sm:w-[80%] sm:mx-auto mx-2'>
          <Routes>
            <Route path='/' element={<AHome />}></Route>
            <Route path='/addproduct' element={<AddProducts />}></Route>
            <Route path='/order' element={<AOrder />}></Route>
          </Routes>
        </div>

      </div> :

        <div>
          <Navbar />

          <div className='sm:mt-24 mt-16 '>

            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/singin' element={<Singin />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/detail' element={<Detail />}></Route>
              <Route path='/search' element={<Products />}></Route>
              <Route path='/order' element={<Order />}></Route>
            </Routes>
          </div>

        </div>}

      <Footer />

    </>
  )
}

export default App
