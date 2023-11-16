import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { NavLink } from 'react-router-dom';
const Reviews = () => {
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
                </div>
                <NavLink to="/make">
                    <button className="make-button">Leave a Review!</button>
                </NavLink>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Reviews;