import React from 'react'
import '../Item/Item.css'
import { Link, useParams } from 'react-router-dom';

const Item = ({item}) => {
  console.log(item)
  return (
    <div className="col-lg-3 col-md-4 popular-item">
        <Link to={`product/${item.id}`}>
          <img src={item.image} alt="" /> 
        </Link>
        <p>{item.name}</p>
        <span className='me-3' style={{ fontWeight: 'bold' }}>Price: {item.new_price}$</span>
        <span>
          <del>
            {item.old_price}$
          </del>
          </span>      
    </div>
  )
}

export default Item;

