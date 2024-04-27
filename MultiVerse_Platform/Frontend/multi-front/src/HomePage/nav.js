import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './nav.css'; // Import your CSS file for styling
import logout from '../HomePage/logout.jpg';
import title from '../Authentication/Login/multiverse.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={title} className="navbar-logo" alt="Multiverse" />
      </div>
      <ul className="navbar-links">
        <li><NavLink exact to="/home" activeClassName="active"><FontAwesomeIcon icon={faHome} />Home</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active"><FontAwesomeIcon icon={faInfoCircle} />About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active"><FontAwesomeIcon icon={faEnvelope} />Contact Me</NavLink></li>
        <li><NavLink to="/login"><img src={logout} className="logout-icon" alt="Logout" /></NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
