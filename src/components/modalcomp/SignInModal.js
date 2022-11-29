import React from "react";
import './modal.css';
import SignIn from '../authcomp/SignIn'

const SignInModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
      
            <div className="modal-main">
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