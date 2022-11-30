import React from 'react'
import Dashboard from './modalcomp/Dashboard'

const Home = () => {
  return (
    <div className='home-container'>
        <div id="home">
          <h1>Welcome To <span>HaiRx</span>!</h1>
          <h2>To begin your subscription to healthy hair, please:</h2>
          < Dashboard />
       </div>
    </div>
    
  )
}

export default Home