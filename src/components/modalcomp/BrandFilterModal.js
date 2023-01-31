import React from "react";
import './modal.css';
import BrandFilter from "../prodcomp/BrandFilter";

const BrandFilterModal = ({ filterProducts, handleClose, show}) => {
    const showHideClassName = show ? "brand-filter-modal display-block" : "brand-filter-modal display-none";
    return (
        <div className={showHideClassName}>
      
            <div id='brand-filter-modal' className="modal-main">
                <BrandFilter filterProducts={filterProducts}/>
                <br />
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default BrandFilterModal