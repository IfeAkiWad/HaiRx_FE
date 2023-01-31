import React from "react";
import './modal.css';
import TypeFilter from "../prodcomp/TypeFilter";

const TypeFilterModal = ({ filterProducts, handleClose, show}) => {
    const showHideClassName = show ? "type-filter-modal display-block" : "type-filter-modal display-none";
    return (
        <div className={showHideClassName}>
      
            <div id='type-filter-modal' className="modal-main">
                <TypeFilter filterProducts={filterProducts}/>
                <br />
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default TypeFilterModal