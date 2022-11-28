import React from "react";
import './modal.css';
import SignIn from '../authcomp/SignIn'

const SignInModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    // if(!show) return null
    return (
        <div className={showHideClassName}>
      
            Hello Modal
            <div className="modal-main">
                {/* {children} */}
               
                <SignIn />
                <br />
                <button type="button" onClick={handleClose}>
                Cancel
                </button>
            </div>
        </div>
    )
}

export default SignInModal