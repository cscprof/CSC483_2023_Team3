import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Trivia = () => {
    return (
        <div className="Trivia">
            <header>
                <Navbar />
            </header>
            <main>
                <h1>Trivia</h1>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Trivia;