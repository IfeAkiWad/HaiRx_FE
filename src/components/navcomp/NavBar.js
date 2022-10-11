import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav">
        <div>      
                <Link id="link" to="/">signin</Link>  
        </div>
    </nav>
    )
}

export default NavBar
