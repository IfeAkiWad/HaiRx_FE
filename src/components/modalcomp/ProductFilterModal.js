import React from "react";
import './modal.css';
import { Link } from 'react-router-dom';
import ProductFilter from "../prodcomp/ProductFilter";
import ProductProfile from "../prodcomp/ProductProfile";

// eslint-disable-next-line no-use-before-define
const ProductFilterModal = ({ filterProducts, handleClose, show, handleProductClick, selectedProduct={selectedProduct} }) => {
    const showHideClassName = show ? "brand-filter-modal display-block" : "brand-filter-modal display-none";
    return (
        <div className={showHideClassName}>
      
            <div id='brand-filter-modal' className="modal-main">
                <ProductFilter filterProducts={filterProducts} handleProductClick={handleProductClick} selectedProduct={selectedProduct}/>
                <br />
                {selectedProduct && (
                <button>
                    <Link to={`/products/${selectedProduct}`} className="profile-link">
                        View Product Profile
                    </Link>
                </button>
                )}<br /><br />
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
                {/* <ProductProfile selectedProduct={selectedProduct}/> */}
            </div>
        </div>
    )
}

export default ProductFilterModal