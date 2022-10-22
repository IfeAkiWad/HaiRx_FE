import React from 'react'
import { connect } from 'react-redux'
import ProductDisplay from '../components/prodcomp/ProductDisplay'


const ProductContainer = (props) => {
    console.log(props.products)
    const products = props.products

    return (
        <div>
            Product container
            {products.map((p, index) => {
                return <ProductDisplay key={index} product={p} />
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