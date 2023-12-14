import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../assets/review.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get_reviews/');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="Reviews">
            <header>
                <Navbar />
                <div className="jumbo">
                    <h1>EXPERIENCE Geneva</h1>
                </div>
            </header>
            <main>
                <div className="subtitle">
                    <h2>Reviews</h2>
                    <NavLink to="/make">
                        <button className="make-button">Leave a Review!</button>
                    </NavLink>
                </div>
                {reviews.map((review) => (
                    <div className="reviewFeed" key={review.title}>
                        <div id="example">
                            <h3>{review.title}</h3>
                            <p> Date:{review.date}</p>
                            <p>Tour Guide's Knowledge:{review.q1}</p>
                            <p>Information Provided:{review.q2}</p>
                            <p>Tour Guide & Faculty Engagement Level:{review.q3}</p>
                            <p>Campus Facilities: {review.q4}</p>
                            <p>Tour Organization and Structure:{review.q5}</p>
                            <p>Campus Accessibility:{review.q6}</p>
                            <p>Interactive Elements:{review.q7}</p>
                            <p>Tour Duration:{review.q8}</p>
                            <p>Dining Experience:{review.q9}</p>
                            <p>Overall Satisfaction:{review.q10}</p>
                        </div></div>
                ))}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Reviews;
