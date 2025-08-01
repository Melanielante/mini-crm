import React from 'react'
import App from '../App';
import { NavLink } from 'react-router';


function Navbar() {
  return (
   <div>
    <nav>
      <h1>Customer Relationship Management</h1>
        <ul className='nav-links'>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/add"}>Add Customer</NavLink></li>
          <li><NavLink to={"/list"}>Current Customers</NavLink></li>
        </ul>
    </nav>

    </div>
        
    

  )
}

export default Navbar;