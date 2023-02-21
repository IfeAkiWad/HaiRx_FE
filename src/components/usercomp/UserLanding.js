import React from 'react'
import background from '../../hairx model images/background.jpg'
import { Link } from 'react-router-dom'
import ProductContainer from '../../containers/ProductContainer'
// import ImageAnimation from '../imagecomp/ImageAnimation'
const UserLanding = () => {

  return (
    <div>
        <div id='img'>
          <img  className='background-img' src={background} alt="img..." />
       </div>
       {/* <Link id="product-link" to="/products"> */}
          <h1 id='user-landing-text'>
          Healthy Hair starts HERE
          
          </h1>
          {/* <h2 id='user-landing-text2'>Begin your search.</h2> */}
          <ProductContainer />
          {/* <ImageAnimation /> */}
        {/* </Link> */}
       
    </div>
  )
}

export default UserLanding