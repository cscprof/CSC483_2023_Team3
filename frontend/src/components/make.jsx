import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import '../assets/make.css';

const Make = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
        q9: 0,
        q10: 0,
        comments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://127.0.0.1:8000/api/make_review/", formData);
            setSubmitted(true);

            setFormData({
                title: "",
                date: "",
                q1: 0,
                q2: 0,
                q3: 0,
                q4: 0,
                q5: 0,
                q6: 0,
                q7: 0,
                q8: 0,
                q9: 0,
                q10: 0,
                comments: "",
            });
            //this is a test thingy
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

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
                    <h2>Make Review</h2>
                </div>
                {submitted && <div className="success-message">Review submitted successfully!</div>}
                <form onSubmit={handleSubmit}>

                    <label>
                        Review Title:<br />
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>Date:<br /></label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <br />
                    <label>
                        From 1-10, Rate the Tour Guide's Knowledge:<br />
                        <input
                            type="number"
                            name="q1"
                            value={formData.q1}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate the Information Provided:<br />
                        <input
                            type="number"
                            name="q2"
                            value={formData.q2}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate the Tour Guide & Faculty Engagement Level:<br />
                        <input
                            type="number"
                            name="q3"
                            value={formData.q3}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate Our Campus Facilities:<br />
                        <input
                            type="number"
                            name="q4"
                            value={formData.q4}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate the Tour Organization and Structure:<br />
                        <input
                            type="number"
                            name="q5"
                            value={formData.q5}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate the Campus Accessibility:<br />
                        <input
                            type="number"
                            name="q6"
                            value={formData.q6}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate the Interactive Elements:<br />
                        <input
                            type="number"
                            name="q7"
                            value={formData.q7}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate the Tour Duration:<br />
                        <input
                            type="number"
                            name="q8"
                            value={formData.q8}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate Your Dining Experience:<br />
                        <input
                            type="number"
                            name="q9"
                            value={formData.q9}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        From 1-10, Rate Your Overall Satisfaction:<br />
                        <input
                            type="number"
                            name="q10"
                            value={formData.q10}
                            onChange={handleChange}
                            min="1"
                            max="10"
                        />
                    </label>
                    <br />
                    <label>
                        Comments:<br />
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        />
                    </label>
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Make;