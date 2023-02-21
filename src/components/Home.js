import React from 'react'
import Dashboard from './modalcomp/Dashboard'
import ImageAnimation from './imagecomp/ImageAnimation'
// import lede from '../hairx model images/lede.webp'


const Home = () => {
  return (
    <div className='home-container'>
        <div id="home">
          <h1>Welcome To <span>HaiRx</span>!</h1>
          <h2>The one-stop shop for your hair care faves.</h2>
          <p>To begin your subscription to healthy hair, please:</p>
          < Dashboard />
          <ImageAnimation />
       </div>
       {/* <div id='lede-img'>
          <img  src={lede} alt="img..." />
       </div> */}

       
    </div>
    
  )
}

export default Home