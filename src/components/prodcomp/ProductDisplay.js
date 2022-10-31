import React from 'react'

const ProductDisplay = ({ products }) => {
    // const hairProd = props.product.name
    console.log('product', products)
    

  return (
    <div>
        {products?.name}
    </div>
  )
}

export default ProductDisplay