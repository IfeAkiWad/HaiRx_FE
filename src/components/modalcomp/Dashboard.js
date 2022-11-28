import React, { useState } from 'react'
import SignInModal from './SignInModal';
// import SignIn from '../authcomp/SignIn'

// import SignUp from '../authcomp/SignUp'

const Dashboard = () => {
    const [show, setShow] = useState(false)
    
    const showModal = (e) => {
      setShow(true)
    };

    const hideModal = (e) => {
      setShow(false)
    };

  return (
    <div>
      <SignInModal handleClose={hideModal} show={show} />
      <button  onClick={showModal}> Sign In</button>
    </div>
  )
}

export default Dashboard