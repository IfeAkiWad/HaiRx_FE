import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const BrandFilter = ({ filterProducts, handleProductClick }) => {
    console.log('filteredProducts', filterProducts)

    const [brand, setBrand] = useState('')

    const handleOnChangeBrand = (event) => {
        setBrand(event.target.value)
    }

    // const handleProductClick = (product) => {
    //     // Update the selected product in the parent component's state or using a state management solution
    // };
    
    // eslint-disable-next-line array-callback-return
    let renderFilter = filterProducts.filter(product => {
        if(brand !== '') {
            return Object.values(product).some(val =>
                typeof val === "string" && val.toLowerCase().includes(brand.toLowerCase())
            );
        }
    });
    

    console.log('render filter', renderFilter.length)

  return (
    <div>

        <br />
            <input className='search-input-field' type='text' placeholder='Brand' value={brand} onChange={handleOnChangeBrand}/>&nbsp;
        <br />
        <div className='search-result-container'>
        <br /><br />    
            <span >
                {renderFilter.length} result(s)
                <ul>
                    {renderFilter.map((product, index) => {
                        const productLink = `/products/${product?.id}=${product?.name}`;
                        return <li key={index}>
                            <Link 
                            id='product-link' 
                            to={productLink} 
                            onClick={(event) => handleProductClick(event, product.id)} 
                            data-product-id={product.id}
                            >
                                <h4>{product.brand}</h4>
                                <p>{product.name}</p>
                            </Link>
                        </li>
                    })}
                    {/* <Link to={`/products/${products?.id}=${products?.name}`}>{products?.name}</Link> */}
                </ul>
            </span>
            
        </div>
    </div>
  )
}

export default BrandFilter