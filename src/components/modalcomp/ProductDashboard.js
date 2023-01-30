import React, { useState } from 'react'
import BrandFilterModal from '../modalcomp/BrandFilterModal'
import NameFilterModal from '../modalcomp/NameFilterModal'
import TypeFilterModal from '../modalcomp/TypeFilterModal'

const Dashboard = () => {
    const [brand, setBrand] = useState(false)
    const [name, setName] = useState(false)
    const [type, setType] = useState(false)

    const brandFilterModal = (e) => {
        setBrand(true)
    } 

   const nameFilterModal = (e) => {
        setName(true)
    }

    const typeFilterModal = (e) => {
        setType(true)
    }

    const hideBrandFilterModal = (e) => {
        setBrand(false)
    } 

   const hideNameFilterModal = (e) => {
        setName(false)
    }

    const hideTypeFilterModal = (e) => {
        setType(false)
    }

  return (
    <div className='auth-container'>
      <button id='button' onClick={brandFilterModal}>Brand</button>&nbsp;
      <button id='button' onClick={nameFilterModal}>Product Name</button>&nbsp;
      <button id='button' onClick={typeFilterModal}>Product Type</button>
      <BrandFilterModal handleClose={hideBrandFilterModal} show={brand} />
      <NameFilterModal handleClose={hideNameFilterModal} show={name} />
      <TypeFilterModal handleClose={hideTypeFilterModal} show={type} />
      {/* <button  onClick={signInModal}> Sign In</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button  onClick={signUpModal}> Create Account</button> */}
    </div>
  )
}

export default Dashboard