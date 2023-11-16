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
            <div className="top">
                <h1> Need help?</h1>
            </div>
            <main>
                <div className="FAQ">
                    <h1>FAQ!</h1>
                    <b> Question 1?</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectet</p>
                    <b> Question 2?</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectet</p>
                    <b> Question 3?</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectet</p>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Help;