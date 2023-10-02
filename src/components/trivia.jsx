import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import '../assets/trivia.css';
import Logo from "../assets/images/trivia_image.jpg";
const Trivia = () => {
    return (
        <div className="Trivia">
            <header>
            <Navbar />
                <div className="jumbo">
                    <h1>EXPERIENCE Geneva</h1>
                </div>
                <div className="subtitle">
                    <h2>Upload</h2>
                </div>
            </header>
            
            <main>
                <h1 className="title">Weekly Geneva Trivia</h1>
                <div className="imgMove">
                <img src={Logo} className="triviaImage"></img>
                </div>
                    <div  className="startButton">
                    <button>Start</button>
                    </div>
                    <button>View Previous Weeks Answers</button>


                <div className="questions">
                    <h4>Question #1:</h4>
                    <div><button>A</button><span>answer</span></div>
                    <div><button>B</button><span>answer</span></div>
                    <div><button>C</button><span>answer</span></div>
                    <div><button>D</button><span>answer</span></div>

                    <h4>Question #2:</h4>
                    <div><input type="radio" id="2" name="question2" value="answer"></input>
                    <label for="html">HTML</label></div>
                    <div><input type="radio" id="2" name="question2" value="answer"></input>
                    <label for="html">HTML</label></div>
                    <div><input type="radio" id="2" name="question2" value="answer"></input>
                    <label for="html">HTML</label></div>
                    <div><input type="radio" id="2" name="question2" value="answer"></input>
                    <label for="html">HTML</label></div>
                    
                </div>
                <div>
                    <button>Complete</button>
                </div>



                <div className="footer">
                       <p>Current Score: ((01))<span>All Time High Score: ((10))</span></p>
                </div>
                            
              
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Trivia;