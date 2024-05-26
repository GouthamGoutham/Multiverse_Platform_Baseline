import React from 'react';
import { NavLink } from 'react-router-dom';
import './vv_navbar.css';
import logout from '../../HomePage/logout.jpg';
import title from '../vc_title_2.jpg';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Vc_Navbar = () => {
  return (
    <nav className="vc_navbar">
      <div>
        <img src={title} className="vc_navbar-logo" alt="Multiverse" />
      </div>
      <ul className="vc_navbar-links">
        <li><NavLink exact to="/vitalverse" activeClassName="active"><FontAwesomeIcon icon={faHome} /> Home</NavLink></li>
        <li><NavLink to="/vv_Appointment" activeClassName="active">&#127973;Appointment Scheduling</NavLink></li>
		<li><NavLink to="/vv_user_dtls" activeClassName="active">&#128100;User Info</NavLink></li>
      </ul>
    </nav>
  );
};

export default Vc_Navbar;
