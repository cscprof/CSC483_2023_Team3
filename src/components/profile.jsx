import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import '../assets/profile.css';
const Profile = () => {
    return (
        <div className="Profile">
            <header>
                <Navbar />
            </header>
            <body>
            <h1 className="title">Profile</h1>
            
                <div className="container">
                    <div className="column">
                        <p className="description"><b>First Name:</b></p>
                        <p className="description"><b>Last Name:</b></p>
                        <p className="description"><b>Username:</b></p>
                        <p className="description"><b>Email:</b></p>
                        <p className="description"><b>Password:</b></p>
                        <p className="description"><b>temp:</b></p>
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