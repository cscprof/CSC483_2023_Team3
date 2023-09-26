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
            <main>
                <div className="row">
                    <div className="cloumn">
                        <p><b>First Name:</b></p>
                        <p><b>Last Name:</b></p>
                        <p><b>Username:</b></p>
                        <p><b>Email:</b> <p className="user">Temp</p></p>
                        <p><b>Password:</b><button type="button" className="buttons">Reveal</button></p>
                        <p><b>temp:</b></p>
                        <p><b>temp:</b></p>
                    </div>

                    <div className="cloumn"> 
                        <h1 className="title">Profile</h1>
                        <p className="user">Temp</p>
                        <p className="user">Temp</p>
                        <p className="user">Temp</p>
                        <p className="user">Temp</p>
                        <p className="user">Temp</p>
                        <p className="user">Temp</p>
                        <p className="user">Temp</p>
                        </div>

                    <div className="cloumn">
                        <button type="button" className="buttons">Edit Profile</button>
                    </div>

                </div>


           
                
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;