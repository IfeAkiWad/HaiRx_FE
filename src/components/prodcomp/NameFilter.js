import React, {useState} from 'react'

const NameFilter = ({ filterProducts }) => {
    console.log('filteredProducts', filterProducts)

    const [name, setName] = useState('')

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    // eslint-disable-next-line array-callback-return
    let renderFilter = filterProducts.filter(product => {
        if(name !== '') {
            return Object.values(product).some(val =>
                typeof val === "string" && val.toLowerCase().includes(name.toLowerCase())
            );
        }
    });

    console.log('render filter', renderFilter)

  return (
    <div>
        NameFilter
        <br /><br />
        <input className='input-field' type='text' placeholder='Product Name' value={name} onChange={handleOnChangeName}/>
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

export default NameFilter