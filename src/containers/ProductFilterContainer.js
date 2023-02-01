import React from 'react'
import ProductDashboard from '../components/modalcomp/ProductDashboard'

const ProductFilterContainer = ({ products }) => {
    // const [productSearch, setProductSearch] = useState('')
    // const [brand, setBrand] = useState('')
    // const [name, setName] = useState('')
    // const [type, setType] = useState('')

    // const handleOnChange = (event) => {
    //     setProductSearch(event.target.value.toLowerCase())
    // }

    // const handleOnChangeBrand = (event) => {
    //     setBrand(event.target.value.toLowerCase())
    // }

    // const handleOnChangeName = (event) => {
    //     setName(event.target.value.toLowerCase())
    // }

    // const handleOnChangeType = (event) => {
    //     setType(event.target.value.toLowerCase())
    // }

    // const handleOnSubmit = (event) => {
    //     event.preventDefault()
        
    // }

    // let filteredBrand = products.filter(product => {
    //     if(brand !== '') {
    //         return product.brand.includes(brand)
    //     }
    // })

    // let filteredName = products.filter(product => {
    //     if(name !== '') {
    //         return product.name.includes(name)
    //     }
    // })

    // let filteredType = products.filter(product => {
    //     if(type !== '') {
    //         return product.product_type.includes(type)
    //     }
    // })

    // // console.log('filteredProducts', filteredProducts)
    // console.log('filtered Brand', filteredBrand)
    // console.log('filtered Name', filteredName)
    // console.log('filtered Type', filteredType)

  return (
    <div>
        <h2 id='prodfilter-container-h2'>Search by brand, product name, or product type</h2>
        {/* <button id='button'>Brand</button>&nbsp;
        <button id='button'>Product Name</button>&nbsp;
        <button id='button'>Product Type</button> */}
        {/* <form onSubmit={handleOnSubmit}> */}
        {/* <input className='input-field' type='text' value={productSearch} onChange={handleOnChangeProduct}/>&nbsp; */}
            {/* <input className='input-field' type='text' placeholder='Brand Name' value={brand} onChange={handleOnChangeBrand}/>&nbsp; */}
            {/* <input className='input-field' type='text' placeholder='Product Name' value={name} onChange={handleOnChangeName}/>&nbsp;
            <input className='input-field' type='text' placeholder='Product Type' value={type} onChange={handleOnChangeType}/>&nbsp; */}
            {/* <input id='button' type='submit' value='Search'/> */}
        {/* </form> */}
        <br /><ProductDashboard filterProducts={products}/>

        
    </div>
    
  )
}

export default ProductFilterContainer