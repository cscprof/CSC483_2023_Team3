import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";


const Dorms = () => {
  return (
    <div className="Dorms">
      <header>
        <Navbar />
        <div className="jumboSC">
          <h1>Residence Halls</h1>
        </div>
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Welcome to the residence halls at Geneva College! Our living spaces are designed to provide a comfortable and enriching environment for students.
          </p>
        </div>
        <div className="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Modern Facilities: Our residence halls are equipped with state-of-the-art facilities, providing students with a comfortable living experience.</li>
                <li>Community Spaces: Each hall includes communal areas where students can gather, study, and build a sense of community.</li>
                <li>Residential Life Programs: We offer various programs and events to enhance the residential experience, fostering a vibrant community.</li>
                <li>Security Measures: Ensuring the safety of our students is a top priority, and our residence halls are equipped with security features.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/residence-life/_assets/memorial-hall-web.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Founded: [Year]</li>
            <li>Total Residence Halls: [Number]</li>
            <li>Capacity: [Total Capacity]</li>
            <li>Special Amenities: [Any special features or amenities]</li>
          </ul>
        </div>
        <div className="gallery">
          <h1 className="sectTitle">Gallery</h1>
          <div>
            <center><p>Photo Area Here</p></center>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dorms;