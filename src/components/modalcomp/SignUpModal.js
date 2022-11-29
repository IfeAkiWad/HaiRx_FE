import React from "react";
import './modal.css';
import SignUp from "../authcomp/SignUp";

const SignUpModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    // if(!show) return null
    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <SignUp />
                <br />
                <ul>
                    <li>
                        <button type="button" onClick={handleClose}>
                            Cancel
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SignUpModal