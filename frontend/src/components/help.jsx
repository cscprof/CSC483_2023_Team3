import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Jumbo from "./jumbo";
import '../assets/help.css';

const Help = () => {
    return (
        <div className="Help">
            <header>
                <Navbar />
                <Jumbo />
            </header>
            <main>
                <div className="subtitle">
                    <h2>Need Help?</h2>
                </div>
                <div className="FAQ">
                    <h1>FAQ!</h1>
                    <b> How does EXPERIENCE Geneva Work?</b>
                    <p>EXPERIENCE Geneva is a virtual showcase of the best of Geneva College! Through our Interactive Map, Events Showcase, Trivia, and much more, people can learn about Geneva in an interactive way!</p>
                    <b> Who is EXPERIENCE Geneva for?</b>
                    <p>EXPERIENCE Geneva was created with prospective students, parents, and alumni can view all of what Geneva has to offer</p>
                    <b> Who created EXPERIENCE Geneva?</b>
                    <p>EXPERIENCE Geneva was created by students Zack Martin, Hayden Wheeler, and Parker Guice for their CSC 483 Senior Project!</p>
                    <b>Where is Geneva College?</b>
                    <p>Geneva College is located right on College Hill in Beaver Falls, Pennsylvania, and about 25 miles from Pittsburgh!</p>
                    <b>How do I apply to Geneva College?</b>
                    <p><a href="https://apply.geneva.edu/portal/applynow/tug_apply">Apply Here!</a></p>
                    <b>How do i visit Geneva College?</b>
                    <p><a href="https://www.geneva.edu/admissions/visit/">Vist Here!</a></p>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Help;