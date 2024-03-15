import React, { useContext } from 'react'
import { AllProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcum/Breadcrum'
import ContentProduct from '../components/ContentProduct/ContentProduct'

const Product = () => {
  const {all_product} = useContext(AllProductContext)
  const {productId} = useParams();
  const product = all_product.find((element) => element.id == Number(productId))
  
  return (
    <div>
      <Breadcrum product={product}/>
      <ContentProduct product={product}/>
    </div>
  )
}

export default Product;
