import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductFilterContainer from './ProductFilterContainer'


class ProductContainer extends Component {
//    Product Container retrieving product objects from global state storage 
    render () { 
        return (
                <div id="prod-container-div">
                    {/* sending retrieved state into ProductFilterContainer as props to begin the product filter upon user-search-input process */}
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