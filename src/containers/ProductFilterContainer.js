import React from 'react'
import ProductDashboard from '../components/modalcomp/ProductDashboard'

const ProductFilterContainer = ({ products }) => {
  return (
    <div>
        <br /><ProductDashboard filterProducts={products}/>
    </div>
    
  )
}

export default ProductFilterContainer