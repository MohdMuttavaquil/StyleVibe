import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
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
import ScrollToTop from './utlis/scrollToTop'
import { AppContext } from './Context/StoreContext'

function App() {

  const { role, token } = useContext(AppContext)

  return (
    <>

      {role === "admain" ? <div>
       {token ?  <ANavbar />: <Navbar />}
        <ScrollToTop />

        <div className='sm:mt-24 mt-16 '>
          <Routes>
            <Route path='/' element={token ? <AHome /> : <Home />}></Route>
            <Route path='/addproduct' element={token ? <AddProducts />: <Home />}></Route>
            <Route path='/order' element={token ? <AOrder />: <Home />}></Route>
            <Route path='/singin' element={<Singin />}></Route>
          </Routes>
        </div>
      </div> :

        <div>
          <Navbar />

          <div className='sm:mt-24 mt-16 '>

            <ScrollToTop />

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
