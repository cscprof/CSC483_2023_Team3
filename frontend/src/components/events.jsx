import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Table from "./table";
import "../assets/events.css";
import Jumbo from "./jumbo";

const Events = () => {
    return (
        <div className="Events">
            <header>
                <Navbar />
                <Jumbo />
            </header>
            <main>
                <div className="subtitle">
                    <h2>Events</h2>
                </div>
                <section className="tableCont">
                    <Table />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Events;