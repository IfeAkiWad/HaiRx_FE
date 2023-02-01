import React, {useState} from 'react'

const BrandFilter = ({ filterProducts }) => {
    console.log('filteredProducts', filterProducts)

    const [brand, setBrand] = useState('')

    const handleOnChangeBrand = (event) => {
        setBrand(event.target.value)
    }

    // eslint-disable-next-line array-callback-return
    let renderFilter = filterProducts.filter(product => {
        if(brand !== '') {
            return Object.values(product).some(val =>
                typeof val === "string" && val.toLowerCase().includes(brand.toLowerCase())
            );
        }
    });
    

    console.log('render filter', renderFilter)

  return (
    <div>
       <span><h2>Search Your Favorite Brand</h2></span>
        <br />
            <input className='search-input-field' type='text' placeholder='Brand Name' value={brand} onChange={handleOnChangeBrand}/>&nbsp;
        <br />
        <div>
        <br /><br />    
            <span>
                <ul>
                    {renderFilter.map((product, index) => {
                        return <li key={index}><h4>{product.brand}</h4><p>{product.name}</p></li>
                    })}
                </ul>
            </span>
            
        </div>
    </div>
  )
}

export default BrandFilter