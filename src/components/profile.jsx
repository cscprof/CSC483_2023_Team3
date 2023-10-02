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
                <h1>Profile</h1>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;