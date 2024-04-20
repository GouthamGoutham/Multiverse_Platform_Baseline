// Home.js
import React from 'react';
import Navbar from './nav';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="welcome-text">
                <h1>Welcome to Our Services</h1>
                <p>Explore our range of services designed to meet your needs.</p>
            </div>
            <div className="service-tiles">
                <div className="service-tile">
                    <h2>ShopSphere Marketplace</h2>
                    <p>Discover a world of products and deals.</p>
                </div>
                <div className="service-tile">
                    <h2>Taste-Trial Express</h2>
                    <p>Experience new flavors with our curated taste trials.</p>
                </div>
                <div className="service-tile">
                    <h2>Journey Junction Navigator</h2>
                    <p>Find your way with our travel planning platform.</p>
                </div>
                <div className="service-tile">
                    <h2>Vitalverse Care</h2>
                    <p>Stay healthy and connected with our healthcare solutions.</p>
                </div>
                <div className="service-tile">
                    <h2>Connect-Verse Platform</h2>
                    <p>Connect with people and businesses effortlessly.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
