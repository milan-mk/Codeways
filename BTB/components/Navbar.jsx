import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <>
    <nav className="navbar">
        <div>
            <h3 className="nav-logo">Codeways</h3>
        </div>
        <ul className="side-nav">
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
    
  )
}

export default Navbar
