import React from 'react'
import "./css/Cart.css"
const Cart = () => {
  return (
    <div className="cart mt-5">
      <div className="container">
        <div className="row cart-title">
          <div className="col-lg-2">Product</div>
          <div className="col-lg-4">Title</div>
          <div className="col-lg-2">Price</div>
          <div className="col-lg-1">Quantity</div>
          <div className="col-lg-2">Total</div>
          <div className="col-lg-1">Remove</div>
          <hr />
        </div>
      </div>

    </div>
  )
}

export default Cart
