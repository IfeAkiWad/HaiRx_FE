import React from "react";
import './modal.css';
import ProductFilter from "../prodcomp/ProductFilter";

// this ProductFilterModal will render the ProductFilter that will contain the input field for the search. Product Filter Modal will handle the closing of the pop up window as well
// eslint-disable-next-line no-use-before-define
const ProductFilterModal = ({ filterProducts, handleClose, show, handleProductClick, selectedProduct={selectedProduct} }) => {
    const showHideClassName = show ? "brand-filter-modal display-block" : "brand-filter-modal display-none";


    return (
        <div className={showHideClassName}>
      
            <div id='brand-filter-modal' className="modal-main">
                <ProductFilter filterProducts={filterProducts} handleProductClick={handleProductClick} selectedProduct={selectedProduct} />
                <br /><br /> 
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ProductFilterModal
