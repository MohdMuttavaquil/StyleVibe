import Navbar from "./Abmain/Component/Navbar"
import Home from "./Abmain/Pages/Home"
import TestCloude from "./Abmain/Pages/testCloude"
import Footer from "./Component/Footer"


function App() {

  return (
    <>
    <Navbar />
    <div className="my-20">
    <Home /> 
    <TestCloude />
    </div>
    <Footer />
    </>
  )
}

export default App
