import React from 'react'

const ProductProfile = ({ selectedProduct, userInput, products }) => {
  console.log(selectedProduct)
  console.log('products', products)
  
  const product = products.find((p) => p?.id === selectedProduct);


  if (userInput !== '') { 
    return (
        <div className='product-profile'>
          {userInput === ''}
          {product ? (
            <div>
              <h3>Product Selected:</h3>
              <h4>Brand: {product.brand}</h4>
              <p>Name: {product.name}</p>
            </div>
          ) : (
            <div>No product selected.</div>
          )}
        </div>
      ) 
  }
}

export default ProductProfile