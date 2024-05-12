import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './te_food_dtls.css';
import Te_Navbar from '../../tastetrial_express/te_navbar/te_navbar.js';

const Te_Food_Dtls = () => {
    const testFood = {
        id: 1,
        name: "Test Food",
        description: "This is a test food description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 50,
        src: 'https://c.ndtvimg.com/2023-02/q8h7u3t_fish-fry_625x300_25_February_23.jpg',
        feedbacks: [
            { id: 1, username: 'goutham', feedback: "Great food! Highly recommended." },
            { id: 2, username: 'Simbu', feedback: "Excellent taste and delicious Food." },
            { id: 3, username: 'vijay', feedback: "Good food but taste could be improved." }
        ]
    };

    const { foodId } = useParams();
    const [food, setFood] = useState(testFood);
    const [rating, setRating] = useState(0);
    const [feedbackText, setFeedbackText] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [submitting, setSubmitting] = useState(false);

    const fetchFoodDetails = async () => {
        try {
            // Fetch food details using foodId
            const response = await axios.get(`/api/foods/${foodId}`);
            setFood(response.data);
        } catch (error) {
            console.error('Error fetching food details:', error);
        }
    };

    useEffect(() => {
        fetchFoodDetails();
    }, [foodId]);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (event) => {
        setFeedbackText(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const calculateFinalPrice = () => {
        if (quantity <= 0 || isNaN(quantity)) {
            return food.price; // Return 0 if quantity is 0 or NaN
        } else {
            return food.price * quantity; // Calculate final price based on quantity
        }
    };

    const handleSubmitReview = async () => {
        try {
            setSubmitting(true);
            // Send API request to save feedback and rating
            await axios.post('/api/feedbacks', {
                foodId,
                rating,
                feedbackText
            });
            // Reset state after submitting
            setRating(0);
            setFeedbackText('');
            setSubmitting(false);
            // Refetch food details to update feedbacks
            await fetchFoodDetails();
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setSubmitting(false);
        }
    };

    if (!food) {
        return <div>Loading...</div>;
    }

    // Calculate final price based on quantity
    const finalPrice = food.price * quantity;

    return (
        <div>
            <Te_Navbar />
            <div className="food-details-container">
                <div className='food-cont'>
                    <div className='food-img'><img src={food.src} alt={food.name} /></div>
                    <div className='food-details'>
                        <h2>{food.name}</h2>
                        <p>{food.description}</p>
                        <p>Price: <del>${food.price + 120}</del> ${food.price} (20% offer)</p>
                        <p>
                            <label>Quantity: </label>
                            <input type="number" min="1" style={{ width: '35px' }} value={quantity} onChange={handleQuantityChange} />
                        </p>
                        <p>Total Price: ${calculateFinalPrice()}</p>
                        <div className="action-buttons">
                            <button className="order-now-button">Order Now</button>
                        </div>
                    </div>
                </div>
                <hr color="black" width="100%" />
                <h3>Customer feedbacks :-</h3>
                {food.feedbacks.map((feedback) => (
                    <div key={feedback.id} className="previous-feedback">
                        <div className="rating">
                            <h4 style={{ display: 'inline' }}>{feedback.username}</h4>:&nbsp;
                        </div>
                        <p className="user-feedback">{feedback.feedback}</p>
                    </div>
                ))}
                <hr color="black" width="100%" size="2" />
                <div className="user-feedback">
                    {/* Allow users to give ratings and feedbacks */}
                    <div className="te-rating">
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
                        placeholder="Write your feedback"
                        value={feedbackText}
                        onChange={handleReviewChange}
                    />
                    <button onClick={handleSubmitReview} disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Te_Food_Dtls;
