import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductFilterContainer from '../containers/ProductFilterContainer'


class ProductContainer extends Component {
   
    render () { 
        // console.log('Products Container', this.props.products) 
         
        return (
                <div id="prod-container-div">
                    <h2 id="prod-container-h2">What are you looking for?</h2>
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