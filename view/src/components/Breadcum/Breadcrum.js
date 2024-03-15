import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "./../../assets/breadcrum_arrow.png"
const Breadcrum = ({product}) => {
  return (
    <div className="container">
      <div className='breadcrum'>
          <span>Home</span>  <img src={arrow_icon} alt="" />
          <span>Shop</span> <img src={arrow_icon} alt="" />
          <span>{product.name}</span>
      </div>
    </div>

  )
}

export default Breadcrum;
