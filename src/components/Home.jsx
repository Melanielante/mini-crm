// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router';


function Home() {
  return (
    <div className='page-wrapper'>
    <div className="home-container">
      <div className='hero-blob'/>  
      <div className="hero-content">
        <h1 className="hero-title">Welcome to MiniCRM</h1>
        <p className="hero-subtitle">
          Easily manage your customers and grow your business with confidence.
        </p>
        <Link to="/list">
          <button className="hero-button">Get Started →</button>
        </Link>
      </div>
      </div>
    </div>
    
  );
}


export default Home;

