import React from 'react';
import { NavLink } from 'react-router-dom';
import '../te_navbar/te_navbar.css';
import logout from '../../HomePage/logout.jpg';
import title from '../Te_Title.png';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Te_Navbar = () => {
  return (
    <nav className="te_navbar">
      <div>
        <img src={title} className="te_navbar-logo" alt="Multiverse" />
      </div>
      <ul className="te_navbar-links">
        <li><NavLink exact to="/tastetrial" activeClassName="active"><FontAwesomeIcon icon={faHome} /> Home</NavLink></li>
        <li><NavLink to="/te_restaurants" activeClassName="active">&#127867;Restaurants</NavLink></li>
        <li><NavLink to="/te_order_dtls" activeClassName="active">&#127828;Order Details</NavLink></li>
      </ul>
    </nav>
  );
};

export default Te_Navbar;
