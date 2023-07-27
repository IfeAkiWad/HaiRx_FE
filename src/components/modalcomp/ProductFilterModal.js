import React from "react";
import './modal.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductFilter from "../prodcomp/ProductFilter";
import ProductProfile from "../prodcomp/ProductProfile";

// this ProductFilterModal will render the ProductFilter that will contain the input field for the search. Product Filter Modal will handle the closing of the pop up window as well
// eslint-disable-next-line no-use-before-define
const ProductFilterModal = ({ filterProducts, handleClose, show, handleProductClick, selectedProduct={selectedProduct} }) => {
    const showHideClassName = show ? "brand-filter-modal display-block" : "brand-filter-modal display-none";
    let productNameLink = filterProducts.map(p => {
        if(selectedProduct === p?.id) {
            return p.name
        }
    })

    console.log('productNameLink', productNameLink)

    return (
        <div className={showHideClassName}>
      
            <div id='brand-filter-modal' className="modal-main">
                <ProductFilter filterProducts={filterProducts} handleProductClick={handleProductClick} selectedProduct={selectedProduct}/>
                <br />
                {selectedProduct && (
                <button>
                    <Link to={`/products/${selectedProduct}=${productNameLink}`} className="profile-link">
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

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(ProductFilterModal)