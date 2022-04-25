import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer.js"
import Navbar from "./components/Navbar.js"
import Cookies from "./components/Cookies.js"
import Home from "./subsites/Home"
import Company from "./subsites/Company.js"
import Impressum from "./subsites/Impressum.js"
import Investors from "./subsites/Investors.js"
import Products from "./subsites/Products.js"
import Contact from "./subsites/Contact.js"
import Fail from "./subsites/404.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<><Navbar /> <Home /></>} />
          <Route exact path='/company' element={<><Navbar /><Company /></>} />
          <Route exact path='/investors' element={<><Navbar /><Investors /></>} />
          <Route exact path='/imprint' element={<><Navbar /><Impressum /></>} />
          <Route exact path='/products' element={<><Navbar /><Products /></>} />
          <Route exact path='/contact' element={<><Navbar /><Contact /></>} />
          <Route exact path='*' element={<><Navbar /><Fail /></>} />
        </Routes>
        <Cookies />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
