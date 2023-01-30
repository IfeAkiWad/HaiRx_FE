import React from "react";
import './modal.css';
import SignUp from '../authcomp/SignUp'

const SignUpModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    // if(!show) return null
    return (
        <div className={showHideClassName}>
            <div id='signup-modal' className="modal-main">
                <SignUp />
                <br />
                <button type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default SignUpModal