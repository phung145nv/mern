import React, { useContext } from 'react'
import "./ContentProduct.css"
import { countContext } from '../../context/ProductContext'

const ContentProduct = ({product}) => {
  const {incrementCount} = useContext(countContext);
  console.log(incrementCount)
  return (
    <div className='content-product'>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className='image-product'>
                    <img src={product.image} alt="" />
                    <div className="small-images">
                        <img src={product.image} alt="" /> 
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h2>{product.name}</h2>
                <div className='prices'><span>{product.new_price}$</span> <del>{product.old_price}$</del>
                </div>
                <p className='description'>A lightweifht, usually knitted, pullover shirt, close and with a round neckline</p>
                
                <div className="size-product">
                    <p>Select Size</p>
                    <div className="type-of-size">
                        <div className="item-size">XS</div>
                        <div className="item-size">S</div>
                        <div className="item-size">M</div>
                        <div className="item-size">L</div>
                        <div className="item-size">XXL</div>
                    </div>
                </div>

                <button className='btn-cart' onClick={incrementCount}>ADD TO CART</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContentProduct
