import React from 'react'
import ProductDashboard from '../components/modalcomp/ProductDashboard'

const ProductFilterContainer = ({ products }) => {
  // sending state as props to ProductDashboard to facilitate product search filter feature
  return (
    <div>
        <br /><ProductDashboard filterProducts={products}/>
    </div>
    
  )
}

export default ProductFilterContainer