import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sm_navbar/sm_navbar.css';
import logout from '../../HomePage/logout.jpg';
import title from '../sm_home/SM_Title.png';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Sm_Navbar = () => {
  return (
    <nav className="sm_navbar">
      <div>
        <img src={title} className="sm_navbar-logo" alt="Multiverse" />
      </div>
      <ul className="sm_navbar-links">
        <li><NavLink exact to="/shopsphere" activeClassName="active"><FontAwesomeIcon icon={faHome} /> Home</NavLink></li>
        <li><NavLink to="/sm_products" activeClassName="active"><FontAwesomeIcon icon={faShoppingBag} />Products</NavLink></li>
        <li><NavLink to="/sm_cart" activeClassName="active"><FontAwesomeIcon icon={faShoppingCart} />Cart</NavLink></li>
      </ul>
    </nav>
  );
};

export default Sm_Navbar;
