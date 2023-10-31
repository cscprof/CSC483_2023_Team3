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
                        <a href="/Library" target="_blank" rel="noopener noreferrer">
                            <button className="library-button">Library</button>
                        </a>
                        <a href="/Alex" target="_blank" rel="noopener noreferrer">
                            <button className="alex-button">Alex's</button>
                        </a>
                        <a href="/Dorms" target="_blank" rel="noopener noreferrer">
                            <button className="pierce-button">Pierce</button>
                            <button className="memorial-button">Memorial</button>
                            <button className="clarke-button">Clarke</button>
                            <button className="mckee-button">McKee</button>
                            <button className="apartments-button">Apartments</button>
                        </a>
                        <a href="/Northwood" target="_blank" rel="noopener noreferrer">
                            <button className="wood-button">Northwood</button>
                        </a>
                        <a href="/SandE" target="_blank" rel="noopener noreferrer">
                            <button className="sande-button">S&E</button>
                        </a>
                        <a href="/Studentcenter" target="_blank" rel="noopener noreferrer">
                            <button className="studentcenter-button">Student <br></br> center</button>
                        </a>
                        <a href="/Sports" target="_blank" rel="noopener noreferrer">
                            <button className="methany-button">Methany</button>
                            <button className="baseball-button">Baseball</button>
                            <button className="softball-button">Softball</button>
                            <button className="football-button">Football</button>
                            <button className="track-button">Track & Field</button>
                        </a>
                        <a href="/Rapp" target="_blank" rel="noopener noreferrer">
                            <button className="rapp-button">Rapp</button>
                        </a>
                        <a href="/other" target="_blank" rel="noopener noreferrer">
                            <button className="other-button">Alumni</button>
                        </a>
                        <a href="/Music" target="_blank" rel="noopener noreferrer">
                            <button className="music-button">Johnston</button>
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