import React from "react";
import './modal.css';
import TypeFilter from "../prodcomp/TypeFilter";

const TypeFilterModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "type-filter-modal display-block" : "type-filter-modal display-none";
    return (
        <div className={showHideClassName}>
      
            <div id='type-filter-modal' className="modal-main">
                <TypeFilter />
                <br />
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default TypeFilterModal