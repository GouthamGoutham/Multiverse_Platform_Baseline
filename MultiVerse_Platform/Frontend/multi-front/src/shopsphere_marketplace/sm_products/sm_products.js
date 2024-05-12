import React, { useState, useEffect } from 'react';
import Sm_Navbar from '../sm_navbar/sm_navbar';
import './sm_products.css';
import { Link, NavLink } from 'react-router-dom';

const Sm_Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [loadCount, setLoadCount] = useState(8);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?query=clothing&count=${loadCount}&client_id=_PRKwe1atbNW58pFe_9vfmieuf8g56o5GZzL9EeNFA4`
                );
                const data = await response.json();
                const newProducts = data.map((item, index) => ({
                    id: index + 1,
                    P_name: item.alt_description,
                    price: 400 + index * 100,
                    src: item.urls.regular,
                }));
                setProducts([...products, ...newProducts]);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [loadCount]); // Trigger fetchImages when loadCount changes


    const handleLoadMore = () => {
        setLoadCount(loadCount + 8); // Increase loadCount by 8 to load more images
    };

    const filteredProducts = products.filter((product) =>
        product.P_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Sm_Navbar />
            <div className="products-container">
                <h2>Our Products</h2>
                <div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search Products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    ></input>
                </div>
                <div className="product-list">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-item">
                            <NavLink to={`/productdetails/${product.id}`}>
                            <img src={product.src} alt={product.P_name}></img>
                            <h3>{product.P_name}</h3>
                            <p>${product.price}</p>
                            <button>Add to Cart</button>
                            </NavLink>
                        </div>
                    ))}
                </div>
                    <button className="p_sm_btn" onClick={handleLoadMore}>
                        Load More
                    </button>
            </div>
        </div>
    );
};

export default Sm_Products;
