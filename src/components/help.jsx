import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import '../assets/help.css';

const Help = () => {
    return (
        <div className="Help">
            <header>
                <Navbar />
            </header>
            <h1> Need help?</h1>
            
            <main>
                <h1>help</h1>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Help;