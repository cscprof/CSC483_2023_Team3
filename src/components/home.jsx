import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
const Home = () => {
    return (
        <div className="Home">
            <header>
                <Navbar />
            </header>
            <main>
                <h1>Home Page</h1>
                <p>AHHHH</p>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;