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
                            <button className="oldMain-button"></button>
                        </NavLink>
                        <NavLink to="/libary">
                            <button className="library-button"></button>
                        </NavLink>
                        <NavLink to="/Alex">
                            <button className="alex-button"></button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="pierce-button"></button>
                            <button className="memorial-button"></button>
                            <button className="clarke-button"></button>
                            <button className="mckee-button"></button>
                            <button className="apartments-button"></button>
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
                            <button className="wood-button"></button>
                        </NavLink>
                        <NavLink to="/SandE">
                            <button className="sande-button"></button>
                        </NavLink>
                        <NavLink to="Studentcenter">
                            <button className="studentcenter-button"></button>
                        </NavLink>
                        <NavLink to="/Sports">
                            <button className="methany-button"></button>
                            <button className="baseball-button"></button>
                            <button className="softball-button"></button>
                            <button className="football-button"></button>
                            <button className="track-button"></button>
                        </NavLink>
                        <NavLink to="/Rapp">
                            <button className="rapp-button"></button>
                        </NavLink>
                        <NavLink to="/Music">
                            <button className="music-button"></button>
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