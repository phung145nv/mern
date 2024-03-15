import { useContext, createContext, useState } from "react"
import React from 'react'
import all_product from "../assets/all_product.js"

export const AllProductContext = createContext(null);
export const countContext = createContext();
export const orderItem = createContext();
const ProductContextProvider = (props) =>
{
    const contextValue = {all_product};
    const [countCart, setCounCart] = useState(0);
    const [orderItem, setOrderItem] = useState([
        {
            id: 1,
            name: null,
            category: null,
            image: null,
            price: 50.0,
        }
    ])

    const incrementCount = () => {
        setCounCart(countCart => countCart + 1)
    }

    const addOrderItem = () =>
    {

    }
    const obCountContext = {incrementCount, countCart}
    return (
        <>
        <AllProductContext.Provider value={contextValue}>
            <countContext.Provider value={obCountContext}>
                {props.children}
            </countContext.Provider>
        </AllProductContext.Provider>
        </>

    )
}
export default ProductContextProvider;
