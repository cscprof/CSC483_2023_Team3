import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import { Button, Modal, Form } from "react-bootstrap";
import '../assets/make.css';

const Make = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        q1: "",
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,

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
        //http://127.0.0.1:8000/api/make_review/
        //http://mrhaydenn.us.to:8000/api/make_review/
        try {
            await axios.post("http://127.0.0.1:8000/api/make_review/", formData);
            setSubmitted(true);

            setFormData({
                title: "",
                date: "",
                q1: "",
                q2: 0,
                q3: 0,
                q4: 0,
                q5: 0,
                q6: 0,
                comments: "",
            });
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    const StudentReviewModal = () => (
        <Modal show={formData.q1 === "Student Review"} onHide={() => setFormData({ ...formData, q1: "" })}>
            <Modal.Header closeButton>
                <Modal.Title>Student Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formTitle">
                    <Form.Label>Review Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formQ2">
                    <Form.Label>Question 1</Form.Label>
                    <Form.Control
                        type="number"
                        name="q2"
                        value={formData.q2}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ3">
                    <Form.Label>Question 2</Form.Label>
                    <Form.Control
                        type="number"
                        name="q3"
                        value={formData.q3}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ4">
                    <Form.Label>Question 3</Form.Label>
                    <Form.Control
                        type="number"
                        name="q4"
                        value={formData.q4}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ5">
                    <Form.Label>Question 4</Form.Label>
                    <Form.Control
                        type="number"
                        name="q5"
                        value={formData.q5}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ6">
                    <Form.Label>Question 5</Form.Label>
                    <Form.Control
                        type="number"
                        name="q6"
                        value={formData.q6}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formComments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setFormData({ ...formData, q1: "" })}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const TourReviewModal = () => (
        <Modal show={formData.q1 === "Tour Review"} onHide={() => setFormData({ ...formData, q1: "" })}>
            <Modal.Header closeButton>
                <Modal.Title>Tour Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formTitle">
                    <Form.Label>Review Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formQ2">
                    <Form.Label>Question 1</Form.Label>
                    <Form.Control
                        type="number"
                        name="q2"
                        value={formData.q2}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ3">
                    <Form.Label>Question 2</Form.Label>
                    <Form.Control
                        type="number"
                        name="q3"
                        value={formData.q3}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ4">
                    <Form.Label>Question 3</Form.Label>
                    <Form.Control
                        type="number"
                        name="q4"
                        value={formData.q4}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ5">
                    <Form.Label>Question 4</Form.Label>
                    <Form.Control
                        type="number"
                        name="q5"
                        value={formData.q5}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formQ6">
                    <Form.Label>Question 5</Form.Label>
                    <Form.Control
                        type="number"
                        name="q6"
                        value={formData.q6}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </Form.Group>
                <Form.Group controlId="formComments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setFormData({ ...formData, q1: "" })}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );

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
                    <h2>Leave a Review!</h2>
                    <h5>Spread the word!</h5>
                </div>
                {submitted && <div className="success-message">Review submitted successfully!</div>}
                <div className="makeBut">
                    <p>Embarking on the journey of higher education is a significant decision, and Geneva College stands out as an exceptional institution for those seeking an enriching academic experience. Prospective students are encouraged to explore the unique offerings and vibrant community that define Geneva. By sharing your thoughts and experiences through a review, you not only contribute to the collective knowledge of the college but also provide invaluable insights for future students. Highlight the aspects that resonate with you, whether it's the dedicated faculty, diverse academic programs, or the strong sense of community. Your review becomes a beacon for those considering Geneva, guiding them towards a place where they can cultivate their passions, forge lasting connections, and thrive academically. Your perspective matters, and by sharing it, you play a crucial role in shaping the future of Geneva College for generations to come.</p>
                    <Button id="stud" className="btn btn-lg bg-secondary text-warning" onClick={() => setFormData({ ...formData, q1: "Student Review" })}>
                        Review as a Student
                    </Button>
                    <br />
                    <Button id="tour" className="btn btn-lg bg-secondary text-warning" onClick={() => setFormData({ ...formData, q1: "Tour Review" })}>
                        Review a Tour
                    </Button>
                </div>
                <Form onSubmit={handleSubmit}>
                    <StudentReviewModal />
                    <TourReviewModal />
                </Form>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Make;
