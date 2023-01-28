import React, {useState} from 'react'
import ProductsFilter from '../components/prodcomp/ProductsFilter'

const ProductFilterContainer = ({ products }) => {
    console.log('product filter container', products)
    const [brand, setBrand] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')

  return (
    <div>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='submit' />
        <ProductsFilter />
    </div>
  )
}

export default ProductFilterContainer