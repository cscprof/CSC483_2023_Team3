import React, { useState } from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Footer from "./footer";
import { Modal, Button } from "react-bootstrap";
import "../assets/trivia.css";
import Logo from "../assets/images/trivia_image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Trivia = () => {
    const questions = [
        {
            question: "In what year was Geneva College founded?",
            options: ["1848", "1870", "1902", "1925"],
            correctAnswer: "1848",
        },
        {
            question: "Which department offers the Computer Science major at Geneva College?",
            options: ["Mathematics", "Business", "Computer Science", "Psychology"],
            correctAnswer: "Computer Science",
        },
        {
            question: "What is the official mascot of Geneva College?",
            options: ["Eagle", "Lion", "Bear", "Golden Tornado"],
            correctAnswer: "Golden Tornado",
        },
        {
            question: "Which building serves as the iconic centerpiece on Geneva College's campus?",
            options: ["Old Main", "Library", "Science Building", "Athletic Center"],
            correctAnswer: "Old Main",
        },
        {
            question: "In which state is Geneva College located?",
            options: ["Ohio", "New York", "Pennsylvania", "Indiana"],
            correctAnswer: "Pennsylvania",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(null);
    const [showResultsModal, setShowResultsModal] = useState(false);

    const handleAnswer = (answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestion] = answer;
        setUserAnswers(newAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prevQuestion) => prevQuestion - 1);
        }
    };

    const handleStart = () => {
        setCurrentQuestion(0);
    };

    const handleSubmit = () => {
        const newScore = userAnswers.reduce((acc, userAnswer, index) => {
            if (userAnswer === questions[index].correctAnswer) {
                return acc + 1;
            }
            return acc;
        }, 0);
        setScore(newScore);
        setShowResultsModal(true);
    };

    const handleTryAgain = () => {
        setCurrentQuestion(null);
        setUserAnswers(Array(questions.length).fill(null));
        setScore(null);
        setShowResultsModal(false);
    };

    const handleCloseModal = () => {
        setShowResultsModal(false);
    };

    return (
        <div className="Trivia">
            <header>
                <Navbar />
                <Jumbo />
                <div className="subtitle">
                    <h2>Trivia</h2>
                </div>
            </header>

            <main>
                <div className="woah">
                    <h1 className="title">Test Your Geneva Knowledge!</h1>
                    <div className="imgMove">
                        <img src={Logo} className="triviaImage" alt="Trivia Logo" />
                    </div>
                    <div className="quizArea">
                        {score === null && currentQuestion === null ? (
                            <div>
                                <button className="btn btn-warning btn-outline-dark btn-lg" id="btnOof" onClick={handleStart}>
                                    Start
                                </button>
                            </div>
                        ) : (
                            <div>
                                {currentQuestion !== null && (
                                    <div className="questions">
                                        <h4>{`Question #${currentQuestion + 1}: ${questions[currentQuestion].question}`}</h4>
                                        {questions[currentQuestion].options.map((option, index) => (
                                            <div key={index} className="custom-control custom-radio larger-radio">
                                                <input
                                                    type="radio"
                                                    id={`radio${index}`}
                                                    name={`question${currentQuestion}`}
                                                    value={option}
                                                    checked={userAnswers[currentQuestion] === option}
                                                    onChange={() => handleAnswer(option)}
                                                    className="custom-control-input"
                                                />
                                                <label htmlFor={`radio${index}`} className="custom-control-label larger-radio">
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div>
                                    {currentQuestion !== null && (
                                        <>
                                            <button
                                                className="btn btn-danger"
                                                onClick={handlePrevQuestion}
                                                disabled={currentQuestion === 0}
                                            >
                                                Previous Question
                                            </button>
                                            <button
                                                className="btn btn-success"
                                                onClick={handleNextQuestion}
                                                disabled={currentQuestion === questions.length - 1}
                                            >
                                                Next Question
                                            </button>
                                        </>
                                    )}

                                    {currentQuestion === questions.length - 1 && (
                                        <button className="btn btn-success" onClick={handleSubmit}>
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                        {score !== null && (
                            <div>
                                <p className="score">Your Score: {score}/{questions.length}</p>
                                <button className="btn btn-dark" onClick={() => setShowResultsModal(true)}>
                                    View Results
                                </button>
                                <button className="btn btn-warning btn-outline-dark" onClick={handleTryAgain}>
                                    Try Again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Modal show={showResultsModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Results</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <p>{`Question #${index + 1}: ${question.question}`}</p>
                            <p>{`Your Answer: ${userAnswers[index]}`}</p>
                            <p>{`Correct Answer: ${question.correctAnswer}`}</p>
                            <hr />
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleTryAgain}>
                        Try Again
                    </Button>
                </Modal.Footer>
            </Modal>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Trivia;