import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './sm_prod_dtls.css'; // Import the CSS file for ProductDetails
import Sm_Navbar from '../../sm_navbar/sm_navbar';

const Sm_Prod_Dtls = () => {

    const testProduct = {
        id: 1,
        name: "Test Product",
        description: "This is a test product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 50,
        src: 'https://images.meesho.com/images/products/316900781/tdzix_512.webp',
        reviews: [
            { id: 1, rating: 4,username:'goutham', comment: "Great product! Highly recommended." },
            { id: 2, rating: 5, comment: "Excellent quality and fast shipping." },
            { id: 3, rating: 3,username:'vijay', comment: "Good product but packaging could be improved." }
        ]
    };

    const { productId } = useParams();
    const [product, setProduct] = useState(testProduct);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [submitting, setSubmitting] = useState(false);

    
    const fetchProductDetails = async () => {
        try {
            // Fetch product details using productId
            const response = await axios.get(`/api/products/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmitReview = async () => {
        try {
            setSubmitting(true);
            // Send API request to save review and rating
            await axios.post('/api/reviews', {
                productId,
                rating,
                reviewText
            });
            // Reset state after submitting
            setRating(0);
            setReviewText('');
            setSubmitting(false);
            // Refetch product details to update reviews
            await fetchProductDetails();
        } catch (error) {
            console.error('Error submitting review:', error);
            setSubmitting(false);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Sm_Navbar />
            <div className="product-details-container">
                <div className='prod-cont'><div className='prod-img'><img src={product.src} alt={product.name} /></div>
                <div className='prod-details'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price  :<del>${product.price + 120}</del>&nbsp; ${product.price} (20% offer)</p>
                <div className="action-buttons">
                    <button className="add-to-cart-button">Add to Cart</button>
                    <button className="order-now-button">Order Now</button>
                </div>
                </div>
                </div>
                <hr color="black" width="100%"/>
                <h3>User Rating & Reviews</h3>
                {product.reviews.map((review) => (
                    <div key={review.id} className="previous-review">
                        <div className="rating">
                        <h4 style={{display:'inline'}}>{review.username}</h4>:&nbsp;{[1, 2, 3, 4, 5].map((value) => (
                                <span
                                    key={value}
                                    className={value <= review.rating ? 'star filled' : 'star'}
                                >
                                    &#9733;
                                </span>
                            ))}
                        </div>
                        <p className="user-comment">{review.comment}</p>
                    </div>
                ))}
                <hr color="black" width="100%" size="2"/>
                <div className="user-review">
                    {/* Allow users to give ratings and reviews */}
                    <div className="rating">
                        <h3>Your Rating:</h3>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={value <= rating ? 'star filled' : 'star'}
                                onClick={() => handleRatingChange(value)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <textarea
                        placeholder="Write your review"
                        value={reviewText}
                        onChange={handleReviewChange}
                    />
                    <button onClick={handleSubmitReview} disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sm_Prod_Dtls;
