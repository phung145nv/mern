import React, { useContext } from 'react'
import {AllProductContext} from "./../context/ProductContext.js"
import Item from '../components/Item/Item.js';
const Categories = (props) => {
    const {all_product} = useContext(AllProductContext);
    return (
        <>        
            <img src={props.banner} alt="" />

            <div className=' category-product'>
                <div className="container">
                    <div className="row">
                    {
                        all_product.map((item) => { 
                            console.log(item)
                            if((props.product ==='kid' ) && (item.category === 'kid'))
                            {
                                return <Item item={item}/>
                            }
                        })                          
                    }
                    </div>
                </div>
            </div>
        </>
        )
}

export default Categories
