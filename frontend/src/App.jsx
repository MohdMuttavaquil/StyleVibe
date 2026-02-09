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
import OrderIngo from './Peges/OrderIngo'
import { ToastContainer } from 'react-toastify'
import EditProduct from './Abmain/Pages/EditProduct'
import ReturnItem from './Peges/ReturnItem'

function App() {

  const { role } = useContext(AppContext)

  return (
    <>
      {role === 'admain' ? <ANavbar /> : <Navbar />}

      <div className='sm:mt-24 mt-16 '>

        <ScrollToTop />

        <Routes>

          {/* User Routes */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/singin' element={<Singin />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/search' element={<Products />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/order/info' element={<OrderIngo />}></Route>
          <Route path='/order/return' element={<ReturnItem />}></Route>

          {/* Admain Routes */}
          <Route path='/admain' element={<AHome />}></Route>
          <Route path='/admain/order' element={<AOrder />}></Route>
          <Route path='/admain/product/add' element={<AddProducts />}></Route>
          <Route path='/admain/product/edit' element={<EditProduct />}></Route>

        </Routes>
      </div>

      <Footer />
      <ToastContainer />

    </>
  )
}

export default App
