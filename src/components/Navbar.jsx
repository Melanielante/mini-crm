import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar flex  items-center p-4 bg-gray-400">
      <div className="flex items-center justify-between w-full">
      <h1 className='font-bold'>Customer Relationship Management</h1>
      <ul className="flex space-x-4 ml-4">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/add">Add Customer</NavLink></li>
        <li><NavLink to="/list">Current Customers</NavLink></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar

