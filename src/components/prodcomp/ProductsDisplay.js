import React from 'react'
import { Link } from 'react-router-dom'

const ProductsDisplay = ({ products }) => {
    // const hairProd = props.product.name
    console.log('product', products)
    

  return (
    <div id="products-display">
        <button><Link to="">{products?.name}</Link></button><br /><br />
    </div>
  )
}

export default ProductsDisplay