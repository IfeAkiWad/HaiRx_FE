import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsDisplay from '../components/prodcomp/ProductsDisplay'


class ProductContainer extends Component {
   
    render () { 
        console.log('Products Container', this.props.products) 
         
        return (
                <div>
                    Product container
                    {this.props.products.map( (p, index) => {
                        return <ProductsDisplay key={index} products={p} />
                    })}
                
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