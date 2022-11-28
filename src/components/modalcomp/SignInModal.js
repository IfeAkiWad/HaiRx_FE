import React from "react";
import './modal.css';
import SignIn from '../authcomp/SignIn'

const SignInModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    // if(!show) return null
    return (
        <div className={showHideClassName}>
      
            Hello Modal
            <section className="modal-main">
                {/* {children} */}
               
                <SignIn />
                <button type="button" onClick={handleClose}>
                Close
                </button>
            </section>
        </div>
    )
}

export default SignInModal