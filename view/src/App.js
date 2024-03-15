import Navbar from "./components/Navbar/Navbar.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.js";
import Categories from "./pages/Categories.js";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";
import Footer from "./components/Footer/Footer.js";
import banner_men from "./assets/banner_men.png"
import banner_women from "./assets/banner_women.png"
import banner_kids from "./assets/banner_kids.png"
import Product from "./pages/Product.js"
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/men" element={<Categories  banner={banner_men} product="men" />}></Route>
        <Route path="men/product/:productId" element={<Product />} />
   
        <Route exact path="/women" element={<Categories  banner={banner_women} product="women" />}></Route>
        <Route path="women/product/:productId" element={<Product />} />

        <Route exact path="/kids" element={<Categories  banner={banner_kids} product="kid" />}></Route>
        <Route path="kids/product/:productId" element={<Product />} />

        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
