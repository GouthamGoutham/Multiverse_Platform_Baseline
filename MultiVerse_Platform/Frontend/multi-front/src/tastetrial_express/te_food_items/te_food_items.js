import React, { useState, useEffect } from 'react';
import './te_food_items.css';
import { NavLink } from 'react-router-dom';
import Te_Navbar from '../te_navbar/te_navbar.js';

const Te_food_items = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [foodItems, setfoodItems] = useState([]);
    const [loadCount, setLoadCount] = useState(8);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?query=foods&count=${loadCount}&client_id=_PRKwe1atbNW58pFe_9vfmieuf8g56o5GZzL9EeNFA4`
                );
                const data = await response.json();
                const newfoodItems = data.map((item, index) => ({
                    id: index + 1,
                    name: item.alt_description,
                    cuisine: "South Indian, Chinese", // Hardcoded cuisine value
                    src: item.urls.regular,
                }));
                setfoodItems([...foodItems, ...newfoodItems]);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [loadCount]); // Trigger fetchImages when loadCount changes

    const handleLoadMore = () => {
        setLoadCount(loadCount + 8); // Increase loadCount by 8 to load more images
    };

    const filteredfoodItems = foodItems.filter((foodItem) =>
        foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Te_Navbar />
            <div className="foodItems-container">
                <h2>&#127836;Food Items&#127828;</h2>
                <div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search Your Favourite Food"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="foodItem-list">
                    {filteredfoodItems.map((foodItem) => (
                        <div key={foodItem.id} className="foodItem-item">
                            <NavLink to={`/foodDetails/${foodItem.id}`}>
                                <img src={foodItem.src} alt={foodItem.name} />
                                <h3>{foodItem.name}</h3>
                                <p>{foodItem.cuisine}</p>
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

export default Te_food_items;
