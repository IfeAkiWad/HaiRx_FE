import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import ProductFilterModal from './ProductFilterModal'
import ProductProfile from '../prodcomp/ProductProfile'

const Dashboard = ({ filterProducts }) => {
  // Product Dashboard handles the new window feature when 'search product' button is clicked
    const [prod, setProduct] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const productFilterModal = (e) => {
        setProduct(true)
    } 

    const hideProductFilterModal = (e) => {
        setProduct(false)
    } 
    
    const handleProductClick = (event,product) => {
      event.preventDefault()
      setSelectedProduct(product);
    };
    return (
      // once new search window appears after clicking 'search Products', ProductFilterModal renders
    <div className='prod-dashboard-container'>
      <button id='dashboard-button' onClick={productFilterModal}>Search Products</button>&nbsp;
      <ProductFilterModal 
      filterProducts={filterProducts} 
      handleClose={hideProductFilterModal} 
      show={prod} 
      handleProductClick={handleProductClick} 
      selectedProduct={selectedProduct}
      />
      {/* <ProductProfile selectedProduct={selectedProduct}/>
      {selectedProduct && (
        <Link to={`/products/${selectedProduct}`} className="profile-link">
          View Product Profile
        </Link>
      )} */}
    </div>
  )
}

export default Dashboard