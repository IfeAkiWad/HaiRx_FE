import React, { useState } from 'react'
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const Dashboard = () => {
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)
    
    const signInModal = (e) => {
      setSignIn(true)
    }

    const signUpModal = (e) => {
      setSignUp(true)
    };

    const hideSignInModal = (e) => {
      setSignIn(false)
    };
    
    const hideSignUpModal = (e) => {
      setSignUp(false)
    };

  return (
    <div>
      <SignUpModal handleClose={hideSignUpModal} show={signUp} />
      <SignInModal handleClose={hideSignInModal} show={signIn} />
      <button  onClick={signInModal}> Sign In</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button  onClick={signUpModal}> Create Account</button>
    </div>
  )
}

export default Dashboard