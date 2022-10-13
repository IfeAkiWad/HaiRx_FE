import React from 'react'
import { connect } from 'react-redux'
import ProductDisplay from '../components/prodcomp/ProductDisplay'


const ProductContainer = ({ products }) => {
    console.log(products)

    return (
        <div>
            Product container
            {products.map(prod => {
                return <ProductDisplay key={prod.id} product={prod} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(ProductContainer)