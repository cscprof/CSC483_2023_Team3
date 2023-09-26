import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Help = () => {
    return (
        <div className="Help">
            <header>
                <Navbar />
            </header>
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