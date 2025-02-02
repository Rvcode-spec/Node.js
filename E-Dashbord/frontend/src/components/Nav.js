import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav-bar' >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Add Product</Link></li>
            <li><Link to="/services">Update Product</Link></li>
            <li><Link to="/contact">Log Out</Link></li>
            <li><Link to ="/profile">Profile</Link></li>
            <li><Link to ="/singup">SingUp</Link></li>
        </ul>
      
    </div>
  )
}
