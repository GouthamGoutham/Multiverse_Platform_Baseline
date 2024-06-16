import React from 'react';
import Navbar from './nav';
import './home.css';

import shopSphereImage from './shopSphere.jpg'; // Import image for ShopSphere Marketplace
import tasteTrialImage from './tasteTrial.jpg'; // Import image for Taste-Trial Express
import journeyJunctionImage from './journeyJunction.jpg'; // Import image for Journey Junction Navigator
import vitalverseImage from './vitalverse2.jpg'; // Import image for Vitalverse Care
import connectVerseImage from './connectVerse.jpg'; // Import image for Connect-Verse Platform
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="welcome-text">
                <h1>Welcome to Our Services</h1>
                <p>Explore our range of services designed to meet your needs.</p>
            </div>
            <div className="service-tiles">
                <Link to="/shopsphere" className="service-tile">
                    <img src={shopSphereImage} alt="ShopSphere Marketplace" />
                    <div className="service-tile-content">
                        <h2>ShopSphere Marketplace</h2>
                        <p>Discover a world of products and deals.</p>
                    </div>
                </Link>
                <Link to="/tastetrial" className="service-tile">
                    <img src={tasteTrialImage} alt="Taste-Trial Express" />
                    <div className="service-tile-content">
                        <h2>Taste-Trial Express</h2>
                        <p>Experience new flavors with our curated taste trials.</p>
                    </div>
                </Link>
                {/*<Link to="/journeyjunction" className="service-tile">
                    <img src={journeyJunctionImage} alt="Journey Junction Navigator" />
                    <div className="service-tile-content">
                        <h2>Journey Junction Nav</h2>
                        <p>Find your way with our travel planning platform.</p>
                    </div>
                </Link>*/}
                <Link to="/vitalverse" className="service-tile">
                    <img src={vitalverseImage} alt="Vitalverse Care" />
                    <div className="service-tile-content">
                        <h2>Vitalverse Care</h2>
                        <p>Stay healthy and connected with our healthcare solutions.</p>
                    </div>
                </Link>
                <Link to="/connectverse" className="service-tile">
                    <img src={connectVerseImage} alt="Connect-Verse Platform" />
                    <div className="service-tile-content">
                        <h2>Connect-Verse Platform</h2>
                        <p>Connect with people and businesses effortlessly.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
