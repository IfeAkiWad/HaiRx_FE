import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductFilterContainer from './ProductFilterContainer'


class ProductContainer extends Component {
   
    render () { 
        // console.log('Products Container', this.props.products) 
         
        return (
                <div id="prod-container-div">
                    {/* <h1 id='prod-container-h1'> What are you looking for?</h1> */}
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