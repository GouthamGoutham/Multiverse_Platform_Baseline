import React from 'react';
import { NavLink } from 'react-router-dom';
import './cv_navbar.css';
import logout from '../../HomePage/logout.jpg';
import title from '../../Cv_Title.png';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cv_Navbar = () => {
  return (
    <nav className="cv_navbar">
      <div>
        <img src={title} className="cv_navbar-logo" alt="Multiverse" />
      </div>
      <ul className="cv_navbar-links">
        <li><NavLink exact to="/connectverse" activeClassName="active"><FontAwesomeIcon icon={faHome} /> Home</NavLink></li>
        <li><NavLink to="/cv_chat" activeClassName="active">&#127973;Messages</NavLink></li>
		<li><NavLink to="/cv_Profile" activeClassName="active">&#128100;Profile</NavLink></li>
      </ul>
    </nav>
  );
};

export default Cv_Navbar;
