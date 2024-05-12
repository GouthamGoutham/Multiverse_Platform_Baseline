import React, { useState, useEffect } from 'react';
import './te_restaurants.css';
import { NavLink } from 'react-router-dom';
import Te_Navbar from '../te_navbar/te_navbar.js';

const Te_Restaurants = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [loadCount, setLoadCount] = useState(8);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?query=Restaurant&count=${loadCount}&client_id=_PRKwe1atbNW58pFe_9vfmieuf8g56o5GZzL9EeNFA4`
                );
                const data = await response.json();
                const newRestaurants = data.map((item, index) => ({
                    id: index + 1,
                    name: item.alt_description,
                    cuisine: "South Indian, Chinese", // Hardcoded cuisine value
                    src: item.urls.regular,
                }));
                setRestaurants([...restaurants, ...newRestaurants]);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [loadCount]); // Trigger fetchImages when loadCount changes

    const handleLoadMore = () => {
        setLoadCount(loadCount + 8); // Increase loadCount by 8 to load more images
    };

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Te_Navbar />
            <div className="restaurants-container">
                <h2>Restaurants &#127867;</h2>
                <div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => (
                        <div key={restaurant.id} className="restaurant-item">
                            <NavLink to={`/foodItems/${restaurant.id}`}>
                                <img src={restaurant.src} alt={restaurant.name} />
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.cuisine}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <button className="p_te_btn" onClick={handleLoadMore}>
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Te_Restaurants;
