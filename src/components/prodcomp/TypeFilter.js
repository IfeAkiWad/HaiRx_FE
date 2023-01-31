import React, { useState } from 'react'

const TypeFilter = ({ filterProducts }) => {
    console.log('filteredProducts', filterProducts)

    const [type, setType] = useState('')

    const handleOnChangeType = (event) => {
        setType(event.target.value)
    }

    // eslint-disable-next-line array-callback-return
    let renderFilter = filterProducts.filter(product => {
        if(type !== '') {
            return Object.values(product).some(val =>
                typeof val === "string" && val.toLowerCase().includes(type.toLowerCase())
            );
        }
    });

    console.log('render filter', renderFilter)

  return (
    <div>
        TypeFilter
        <br /><br />
        <input className='input-field' type='text' placeholder='Product Type' value={type} onChange={handleOnChangeType}/>
        <br /><br />
        <div>
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

export default TypeFilter