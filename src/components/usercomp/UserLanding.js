import React from 'react'
import background from '../../hairx model images/background.jpg'
import { Link } from 'react-router-dom'
const UserLanding = () => {

  return (
    <div>
        <div id='img'>
          <img  className='background-img' src={background} alt="img..." />
       </div>
       <Link id="product-link" to="/products">
          <h1 id='user-landing-text'>
          Healthy Hair starts HERE
          </h1>
        </Link>
       
    </div>
  )
}

export default UserLanding