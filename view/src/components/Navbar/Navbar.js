import React, { createContext, useContext, useState } from 'react'
import logo from './../../assets/logo.png';
import cart from './../../assets/header-cart.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import ContentProduct from '../ContentProduct/ContentProduct';
import { countContext } from '../../context/ProductContext';

const Navbar = () => {
  const { countCart } = useContext(countContext);
  return (
    <div>
      <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 header-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />    
                    </Link>
                        <span>Coolmate.</span>
            
                </div>
                <div className="col-lg-5 header-navbar">
                    <ul className="nav">
                        <li className="nav-item"><Link style={{textDecoration: 'none'}} to="/">HOME</Link></li>
                        <li className="nav-item"><Link style={{textDecoration: 'none'}} to="/men">MEN</Link></li>
                        <li className="nav-item"><Link style={{textDecoration: 'none'}} to="/women">WOMEN</Link></li>
                        <li className="nav-item"><Link style={{textDecoration: 'none'}} to="/kids">KIDS</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 header-act">
                    <button className='btn btn-custom'><Link style={{textDecoration: 'none'}} to="/login">Login</Link></button>
                    <div className="header-cart">
                        <Link style={{textDecoration: 'none'}} to="/cart" ><img src={cart} alt="Cart"  /></Link> 
                        <div className='cart-count'>{countCart}</div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>

  );
}

export default Navbar;
