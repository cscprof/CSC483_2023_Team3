import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Footer from "./footer";
import '../assets/profile.css';
import Logo from "../assets/images/profile-icon.png"
const Profile = () => {
    return (
        <div className="Profile">
          <header>
            <Navbar />
            <Jumbo />
                <div className="subtitle">
                    <h2>Profile</h2>
                </div>
            </header>
            <body>
            <div className="profileImage">
            <img src={Logo}></img>
            </div>
            
                <div className="container">
                    <div className="column">
                        <p className="description"><b>First Name:</b></p>
                        <p className="description"><b>Last Name:</b></p>
                        <p className="description"><b>Username:</b></p>
                        <p className="description"><b>Email:</b></p>
                        <p className="description"><b>Password:</b></p>
                        <p className="description"><b>Trivia High Score:</b></p>
                        <p className="description"><b>temp:</b></p>
                    </div>

                    <div className="column"> 
                        <p className="user">((Temp))</p>
                        <p className="user">((Temp))</p>
                        <p className="user">((Temp))</p>
                        <p className="user">((Temp))</p>
                        <p className="user">((Temp))</p> 
                        <p className="user">((Temp))</p>
                        <p className="user">((Temp))</p>
                        </div>

                    <div className="column">
                    <button type="button" className="buttons">Edit Profile</button>
                    </div>

                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;