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
        BrandFilter
        <br /><br />
            <input className='input-field' type='text' placeholder='Brand Name' value={brand} onChange={handleOnChangeBrand}/>&nbsp;
        <br />
        <div>
            
            <ul>
                {renderFilter.map((product, index) => {
                    return <li key={index}><h4>{product.brand}</h4><p>{product.name}</p></li>
                })}
            </ul>
            
        </div>
    </div>
  )
}

export default BrandFilter