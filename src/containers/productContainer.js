import React from 'react'
import { connect } from 'react-redux'


function productContainer ({ products }) {
    let mapProduct = products.map(p => {
        return p
    })

    console.log(mapProduct)

    return (
        <div>
            <h1>productSignInContainer</h1>
            {mapProduct}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(productContainer)