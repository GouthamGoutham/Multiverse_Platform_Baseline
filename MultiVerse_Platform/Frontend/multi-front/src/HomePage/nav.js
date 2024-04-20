import React from 'react';
import './nav.css'; // Import your CSS file for styling
import LogoutIcon from './logout.jpg'; // Import your logout icon
import { Link } from 'react-router-dom';
import logout from '../HomePage/logout.jpg'
import title from '../Authentication/Login/multiverse.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={title} className="navbar-logo" alt="Multiverse" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
        <li><img src={logout} className="logout-icon" alt="Logout" /></li> {/* Add className="logout-icon" */}
      </ul>
    </nav>
  );
};


export default Navbar;
