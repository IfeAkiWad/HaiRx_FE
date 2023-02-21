import React, { useState } from 'react'
import BrandFilterModal from '../modalcomp/BrandFilterModal'
import searchbg from '../../Hairx Product Images/searchbg.webp'
// import NameFilterModal from '../modalcomp/NameFilterModal'
// import TypeFilterModal from '../modalcomp/TypeFilterModal'

const Dashboard = ({ filterProducts }) => {
    const [brand, setBrand] = useState(false)
    // const [name, setName] = useState(false)
    // const [type, setType] = useState(false)

    const brandFilterModal = (e) => {
        setBrand(true)
    } 

  //  const nameFilterModal = (e) => {
  //       setName(true)
  //   }

  //   const typeFilterModal = (e) => {
  //       setType(true)
    // }

    const hideBrandFilterModal = (e) => {
        setBrand(false)
    } 

  //  const hideNameFilterModal = (e) => {
  //       setName(false)
  //   }

  //   const hideTypeFilterModal = (e) => {
  //       setType(false)
    // }

    return (
    <div className='prod-dashboard-container'>
      <button id='dashboard-button' onClick={brandFilterModal}>Search Products</button>&nbsp;
      {/* <button id='button' onClick={nameFilterModal}>Product Name</button>&nbsp;
      <button id='button' onClick={typeFilterModal}>Product Type</button> */}
      <BrandFilterModal filterProducts={filterProducts} handleClose={hideBrandFilterModal} show={brand} />
      {/* <div id='searchbg'>
          <img   src={searchbg} alt="img..." />
       </div>  */}
      {/* <NameFilterModal filterProducts={filterProducts} handleClose={hideNameFilterModal} show={name} />
      <TypeFilterModal filterProducts={filterProducts} handleClose={hideTypeFilterModal} show={type} /> */}
    </div>
  )
}

export default Dashboard