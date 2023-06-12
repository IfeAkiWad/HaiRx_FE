// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const TypeFilter = ({ filterProducts }) => {
//     console.log('filteredProducts', filterProducts)

//     const [type, setType] = useState('')

//     const handleOnChangeType = (event) => {
//         setType(event.target.value)
//     }

//     // eslint-disable-next-line array-callback-return
//     let renderFilter = filterProducts.filter(product => {
//         if(type !== '') {
//             return Object.values(product).some(val =>
//                 typeof val === "string" && val.toLowerCase().includes(type.toLowerCase())
//             );
//         }
//     });

//     console.log('render filter', renderFilter)

//   return (
//     <div>
//        <span><h2>Search Product Type</h2></span>
//         <br />
//         <input className='search-input-field' type='text' placeholder='Product Type' value={type} onChange={handleOnChangeType}/>
//         <br />
//         <div className='search-result-container'>
//         <br /><br />
//             <span>
//             {renderFilter.length} result(s)
//                 <ul>
//                     {renderFilter.map((product, index) => {
//                         return <li key={index}><Link id='product-link' to={`/products/${product?.id}=${product?.name}`}><h4>{product.brand}</h4><p>{product.name}</p></Link></li>
//                     })}
//                 </ul>
//             </span>
//         </div>
//     </div>
//   )
// }

// export default TypeFilter