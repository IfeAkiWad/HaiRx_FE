import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ProductProfile from './ProductProfile'

// ProductFilter handles the filtering of the products once the search has begun. It will render the resutls as links that - once clicked, will trigger the appearance of the product profile button (in the product Filter Modal) that will redirect to the product profile after click.
const ProductFilter = ({ filterProducts, handleProductClick, selectedProduct }) => {
    console.log('filteredProducts', filterProducts)
    console.log('selected products', selectedProduct)

    const [prod, setProduct] = useState('')

    const handleOnChangeProduct = (event) => {
        setProduct(event.target.value)
    }

    // eslint-disable-next-line array-callback-return
    let renderFilter = filterProducts.filter(p => {
        if(prod !== '') {
            return Object.values(p).some(val =>
                typeof val === "string" && val.toLowerCase().includes(prod.toLowerCase())
            );
        }
    });


    console.log('render filter', renderFilter.length)
    const productProfileElement = <ProductProfile selectedProduct={selectedProduct} userInput={prod}
    products={filterProducts} />

    return (
        <div>

            <br />
                <input className='search-input-field' type='text' placeholder='search..' value={prod} onChange={handleOnChangeProduct}/>&nbsp;
            <br />
            <div className='search-result-container'>
            <br /><br />    
                <span >
                    {renderFilter.length} result(s)
                    <ul>
                        {renderFilter.map((product, index) => {
                            return <li key={index}>
                                <Link 
                                id='product-link' 
                                onClick={(event) => handleProductClick(event, product.id)} 
                                data-product-id={product.id}
                                >
                                    <h4>{product.brand}</h4>
                                    <p>{product.name}</p>
                                </Link>
                            </li>
                        })}
                    </ul>
                </span>
            </div>
            {productProfileElement}
        </div>
    )
}

export default ProductFilter