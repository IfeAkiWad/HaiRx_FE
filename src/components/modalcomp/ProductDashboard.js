import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import BrandFilterModal from '../modalcomp/BrandFilterModal'
import ProductProfile from '../prodcomp/ProductProfile'

const Dashboard = ({ filterProducts }) => {
    const [brand, setBrand] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const brandFilterModal = (e) => {
        setBrand(true)
    } 

    const hideBrandFilterModal = (e) => {
        setBrand(false)
    } 
    
    const handleProductClick = (event,productId) => {
      // const productId = event.target.dataset.productId;
      event.preventDefault()
      setSelectedProduct(productId);
    };
    return (
    <div className='prod-dashboard-container'>
      <button id='dashboard-button' onClick={brandFilterModal}>Search Products</button>&nbsp;
      <BrandFilterModal 
      filterProducts={filterProducts} 
      handleClose={hideBrandFilterModal} 
      show={brand} 
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