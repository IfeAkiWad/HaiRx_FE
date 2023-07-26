import React from 'react'
import background from '../../hairx model images/background.jpg'
import { Link } from 'react-router-dom'
import ProductContainer from '../../containers/ProductContainer'
import Footer from '../../Footer'

const UserLanding = () => {

  return (
    <div className='user-landing-container'>
        <div id='img'>
          <img  className='background-img' src={background} alt="img..." />
       </div>
          <h1 id='user-landing-text'>
          Healthy Hair starts HERE
          </h1>
          <ProductContainer />
          <div className='footer' id='user-landing-footer'>
            <Footer />
          </div>
    </div>
  )
}

export default UserLanding