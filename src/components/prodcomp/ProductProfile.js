import React from 'react'
// import Footer from '../../Footer'

const ProductProfile = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return <div>No product selected.</div>;
  }

  console.log(selectedProduct)
  return (
    <div>
      <div className='footer'>
        {/* {selectedProduct} */}
            {/* <Footer /> */}
          </div>
    </div>
  )
}

export default ProductProfile