import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../assets/navbar.css';
import Logo from '../assets/images/genevalogo.svg';
import Logo1 from '../assets/images/profile-icon.png';
import axios from 'axios';

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8000',  // Use the URL of your Django server
    });

    const handleLogin = () => {
        if (username && password) {
            // Define the data to be sent in the POST request
            const data = {
                username: username,
                password: password,
            };

            // Send the POST request to the Django API
            axiosInstance.post('http://127.0.0.1:8000/api/login/', data)
                .then(response => {
                    // Handle successful authentication
                    console.log(response.data);

                    // Assuming your Django API returns a token on successful login
                    // You can save this token in local storage or a cookie for future requests
                    localStorage.setItem('token', response.data.token);

                    // Update the state to reflect that the user is logged in
                    setIsLoggedIn(true);
                })
                .catch(error => {
                    // Handle authentication failure
                    console.error(error);
                });
        }
    };
    const handleLogout = () => {
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.querySelector(".close");

        if (btn && modal && span) {
            btn.onclick = function () {
                modal.style.display = "block";
            }

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }, []);

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
                    </ul>
                    <input id="myBtn" className="buttonImg" type="Image" src={Logo1} height="50" width="50" name="Icon"></input>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => handleLogout()}>&times;</span>
                            {isLoggedIn ? (
                                <div>
                                    <h3>Welcome, {username}!</h3>
                                    <button onClick={() => handleLogout()}>Logout</button>
                                </div>
                            ) : (
                                <div>
                                    <h3>Login</h3>
                                    <p>Username:</p>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <p>Password:</p>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button onClick={() => handleLogin()}>Login</button>
                                    <a href='/register' target="_blank" rel="noopener noreferrer">
                                        <button className="register-button">Create Account</button>
                                    </a>

                                </div>
                            )}
                            <NavLink to="/profile">Go To Profile (temporary)</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;