import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form } from "react-bootstrap";
import '../assets/review.css';
import Jumbo from "./jumbo";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {


        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
        const fetchReviews = async () => {
            try {
                //http://127.0.0.1:8000/api/get_reviews/
                //http://mrhaydenn.us.to:8000/api/get_reviews/
                const response = await axios.get('http://mrhaydenn.us.to:8000/api/get_reviews/');
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
                <Jumbo />
            </header>
            <main id="reviewMain">
                <div className="subtitle" id="revBut">
                    <h2>Reviews</h2>
                    {isLoggedIn ? (
                        <NavLink to="/make">
                            <button className="btn btn-lg dark text-warning btn-outline-warning">Leave a Review!</button>
                        </NavLink>) : ("")
                    }
                </div>
                {reviews.map((review) => (
                    <div className="reviewFeed" key={review.title}>
                        <div id="example">
                            <h3>{review.title} | Review By: {review.name} | Date:{review.date}</h3>
                            <p>-{review.q1}</p>
                            <p>-{review.q2}</p>
                            <p>-{review.q3}</p>
                            <p>-{review.q4}</p>
                            <p>-{review.q5}</p>
                            <p>-{review.q6}</p>
                            <p>{review.q7}/10</p>
                            <p>Comments: {review.comments}</p>
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
