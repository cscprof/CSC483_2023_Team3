import React from "react";
import Navbar from "./navbar.jsx";
import Jumbo from "./jumbo.jsx";
import Footer from "./footer.jsx";
import '../assets/home.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div className="Home">
            <header>
                <Navbar />
                <Jumbo />
            </header>
            <main>

                <div id="mapTitle">
                    <h2>Interactive Map</h2>
                </div>
                {/* <div className="pageTitle">
                    <h1>Interactive Map</h1>
                </div> */}
                <section className="map">
                    <div className="map-container">
                        <NavLink to="/oldmain">
                            <button className="oldMain-button"></button>
                        </NavLink>
                        <NavLink to="/Library">
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
                            <button className="clarke-button"></button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="memorial-button"></button>
                        </NavLink>
                        <NavLink to="/Dorms">
                            <button className="mckee-button"></button>
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