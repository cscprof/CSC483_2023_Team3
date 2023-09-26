import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Profile = () => {
    return (
        <div className="Profile">
            <header>
                <Navbar />
            </header>
            <main>
                <center>
                <h1>Profile   <button type="button">Edit Profile</button></h1>
                <p><b>First Name:</b> ((temp))</p>
                <p><b>Last Name:</b> ((temp))</p>
                <p><b>Username:</b> ((temp))</p>
                <p><b>Email:</b> ((temp))</p>
                <p><b>Password:</b> ((temp)) <button type="button">Reveal</button></p>
                <p><b>temp:</b> ((temp))</p>
                <p><b>temp:</b> ((temp))</p>
                </center>
            </main>
            <footer>

                <Footer />
            </footer>
        </div>
    );
};

export default Profile;