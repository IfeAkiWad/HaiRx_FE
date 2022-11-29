import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <nav id="nav">
                <div>      
                        <Link id="link" to="/hairx">HaiRx</Link> 
                        <Link id="link" to="/products">Products</Link>  
                </div>
            </nav>
        </div>
    )
}

export default NavBar
