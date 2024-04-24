import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Footer from "./footer";
import EventForm from "./eventForm";
import UploadForm from "./uploadForm";
import '../assets/upload.css';
const Upload = () => {
    return (
        <div className="Upload">
            <header>
                <Navbar />
                <Jumbo />
                <div className="shapeLeft"></div>
                <div className="shapeRight"></div>
            </header>
            <main className="uploadFields">
            <div className="pageTitle">
                    <h1>Upload Event</h1>
                </div>
                <div className="formsec">
                    <section className="eventForm">
                        <EventForm />
                    </section>
                </div>
                <div className="formsec">
                    <section className="uploadForm">
                        <UploadForm />
                    </section></div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Upload;