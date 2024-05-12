import React from 'react';
import Te_Navbar from '../te_navbar/te_navbar';
import './te_home.css';
import { Link } from 'react-router-dom';

const Te_Home = () => {
    return (
        <div>
            <Te_Navbar />
            <div className="te-welcome-container">
                <div className="te-welcome-content">
                    <h1>Welcome to TasteTrial Express</h1>
                    <p>
                        At TasteTrial Express, we're passionate about connecting you with the best restaurants
                        and delicious foods. Whether you're craving your favorite dish or eager to explore new
                        flavors, we've got you covered.
                    </p>
                    <p>
                        Browse our curated selection of restaurants, discover mouthwatering dishes, and place
                        your order with ease. With fast delivery and a wide range of cuisines to choose from,
                        your next culinary adventure is just a click away.
                    </p>
                    <p>
                        Start exploring and treat your taste buds to something special today!
                    </p>
                    <Link to='/te_restaurants' className="te_btn">Explore Now &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default Te_Home;
