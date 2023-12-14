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
                        <NavLink to="/Library">
                            <button className="library-button">Library</button>
                        </NavLink>
                        <NavLink to="/Alex">
                            <button className="alex-button">Alex's</button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="pierce-button">Pierce</button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="apartments-button">Apartments</button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="clarke-button">Clarke</button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="memorial-button">Memorial</button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="mckee-button">McKee</button>
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
                        <NavLink to="/Sports">
                            <button className="methany-button">Methany</button>
                        </NavLink>
                        <NavLink to="/Sports">
                            <button className="baseball-button">Baseball</button>
                        </NavLink>
                        <NavLink to="/Sports">
                            <button className="softball-button">Softball</button>
                        </NavLink>
                        <NavLink to="/Sports">
                            <button className="football-button">Football</button>
                        </NavLink>
                        <NavLink to="/Sports">
                            <button className="track-button">Track & Field</button>
                        </NavLink>
                        <NavLink to="/Rapp">
                            <button className="rapp-button">Rapp</button>
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