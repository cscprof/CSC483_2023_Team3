import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/navbar.css';
import Logo from '../assets/images/genevalogo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-elements">
                    <ul className="navList">
                        <li>
                            <img src={Logo} className="genLogo" alt="geneva logo" />
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trivia">Trivia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload">Upload</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reviews">Reviews</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar