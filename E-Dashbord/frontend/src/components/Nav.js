import React from 'react'
import { Link, useNavigate} from 'react-router-dom'


export default function Nav() {
  const auth =localStorage.getItem('user')
  const navigate =useNavigate();

  const logout =()=>{
    navigate('/signup')
    localStorage.clear();
    console.log("Logout");
    
  }
  return (
    <div className='nav-bar' >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Add Product</Link></li>
            <li><Link to="/services">Update Product</Link></li>
            <li><Link to ="/profile">Profile</Link></li>
            <li>{auth?<Link onClick={logout} to ="/signup">Log Out </Link>:
            <Link to ="/signup">SignUp</Link>}</li>
        </ul>
      
    </div>
  )
}
