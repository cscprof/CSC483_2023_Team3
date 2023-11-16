import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import '../assets/home.css';
import { NavLink } from 'react-router-dom';
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
                        <NavLink to="/oldmain">
                            <button className="oldMain-button">Old Main</button>
                        </NavLink>
                        <NavLink to="/libary">
                            <button className="library-button">Library</button>
                        </NavLink>
                        <NavLink to="/Alex">
                            <button className="alex-button">Old Main</button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="pierce-button">Pierce</button>
                            <button className="memorial-button">Memorial</button>
                            <button className="clarke-button">Clarke</button>
                            <button className="mckee-button">McKee</button>
                            <button className="apartments-button">Apartments</button>
                        </NavLink>
                        <NavLink to="/Northwood">
                            <button className="wood-button">Northwood</button>
                        </NavLink>
                        <NavLink to="/SandE">
                            <button className="sande-button">S&E</button>
                        </NavLink>
                        <NavLink to="Studentcenter">
                            <button className="studentcenter-button">Student <br></br> center</button>
                        </NavLink>
                        <NavLink t0="/Sports">
                            <button className="methany-button">Methany</button>
                            <button className="baseball-button">Baseball</button>
                            <button className="softball-button">Softball</button>
                            <button className="football-button">Football</button>
                            <button className="track-button">Track & Field</button>
                        </NavLink>
                        <NavLink to="/Rapp">
                            <button className="rapp-button">Rapp</button>
                        </NavLink>
                        <NavLink to="/other">
                            <button className="other-button">Alumni</button>
                        </NavLink>
                        <NavLink to="/Music">
                            <button className="music-button">Johnston</button>
                        </NavLink>
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