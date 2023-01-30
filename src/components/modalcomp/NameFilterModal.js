import React from "react";
import './modal.css';
import NameFilter from "../prodcomp/NameFilter";

const NameFilterModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "name-filter-modal display-block" : "name-filter-modal display-none";
    return (
        <div className={showHideClassName}>
      
            <div id='name-filter-modal' className="modal-main">
                <NameFilter />
                <br />
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default NameFilterModal