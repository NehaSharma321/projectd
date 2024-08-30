import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Disaster Management</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#prevention">Prevention Resources</a></li>
        <li><a href="#news">News Updates</a></li>
        <li><a href="#donation">Donation</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
