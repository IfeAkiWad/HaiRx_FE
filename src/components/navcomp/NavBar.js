import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav">
        <div>      
                <Link id="link" to="/HOME">HOME</Link> 
                <Link id="link" to="/products">PRODUCTS</Link>  
        </div>
    </nav>
    )
}

export default NavBar
