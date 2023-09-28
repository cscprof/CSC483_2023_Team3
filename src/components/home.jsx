import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import '../assets/home.css';
const Home = () => {
    return (
        <div className="Home">
            <header>
                <Navbar />
                <div className="jumbo">
                    <h1>EXPERIENCE Geneva</h1>
                </div>
            </header>
            <main>

                <div className="subtitle">
                    <h2>Interactive Map</h2>
                </div>
                <section className="map">
                    <div className="map-container">
                        <a href="/oldmain" target="_blank" rel="noopener noreferrer">
                            <button className="oldMain-button">Old Main</button>
                        </a>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;