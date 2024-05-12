import React from 'react';
import Sm_Navbar from '../sm_navbar/sm_navbar';
import './sm_home.css';
import { Link } from 'react-router-dom';

const Sm_Home=()=>{
    return(
        <div>
            <Sm_Navbar/>
            <div className="sm-welcome-container">
                <h1>Welcome to ShopSphere Marketplace</h1>
                <p>Discover a wide variety of products in clothing, electronics, beauty products,<br/> and more...</p>
                <p>Find everything you need from trusted sellers all in one place.</p>
                <p>Start exploring and shop with confidence!</p>
                <Link to='/sm_products' className="sm_btn">Explore Now &rarr;</Link>
            </div>
        </div>
    )
}

export default Sm_Home;