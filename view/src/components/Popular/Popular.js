import React from 'react'
import data_product from './../../assets/data.js'
import Item from '../Item/Item.js'
import "./Popular.css"
const Popular = () => {
  return (
    <div>
        <div className="popular">
            <div className="container">
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className="row">
                    {data_product.map((item) =>
                    {
                        return <Item item={item}/>
                    })
                    }
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Popular;
