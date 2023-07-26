import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductFilterContainer from './ProductFilterContainer'


class ProductContainer extends Component {
   
    render () { 
        return (
                <div id="prod-container-div">
                    <ProductFilterContainer products={this.props.products} />
                </div>
        )
    }           
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(ProductContainer)