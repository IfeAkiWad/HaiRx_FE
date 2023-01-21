import React from 'react'
import background from '../../hairx model images/background.jpg'
const UserLanding = () => {

  return (
    <div>
        <div id='img'>
          <img  className='background-img' src={background} alt="img..." />
       </div>
       <h1 id='user-landing-text'>
        Healthy Hair starts <a id="product-link" href="http://localhost:3001/products">HERE</a>
       </h1>
       
    </div>
  )
}

export default UserLanding