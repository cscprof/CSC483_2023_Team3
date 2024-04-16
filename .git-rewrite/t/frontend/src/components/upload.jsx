import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import EventForm from "./eventForm";
import UploadForm from "./uploadForm";
import '../assets/upload.css';
const Upload = () => {
    return (
        <div className="Upload">
            <header>
                <Navbar />
                <div className="jumbo">
                    <h1>EXPERIENCE Geneva</h1>
                </div>
            </header>
            <main className="uploadFields">
                <div className="subtitle">
                    <h2>Upload</h2>
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