import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <nav id="nav">
                <div id='logo'> 
                        <Link id="link" to="/">HaiRx</Link> 
                </div> 
                <div>
                    <Link id="link" to="/products">Products</Link> 
                </div>
            </nav>
        </div>
    )
}

export default NavBar
