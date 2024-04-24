import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboDorms from "../jumboClarke";
import JumboClarke from "../jumboClarke";


const Dorms = () => {
  return (
    <div className="ResidenceHall">
    <header>
      <Navbar />
      <JumboClarke />
    </header>
    <main>
      <div className="pageTitle">
        <h1>Residence Halls</h1>
      </div>
      <div className="container">
        <div className="displayLeft">
          <div className="about">
            <p>Welcome to the residence halls at Geneva College! Our living spaces are designed to provide a comfortable and enriching environment for students.</p>
            <p>Modern Facilities: Our residence halls are equipped with state-of-the-art facilities, providing students with a comfortable living experience.</p>
            <p>Community Spaces: Each hall includes communal areas where students can gather, study, and build a sense of community.</p>
            <p>Residential Life Programs: We offer various programs and events to enhance the residential experience, fostering a vibrant community.</p>
            <p>Security Measures: Ensuring the safety of our students is a top priority, and our residence halls are equipped with security features.</p>
          </div>          
        </div>
        <div className="displayRight">
          <div className="gallery">
            <div className="galleryImage">
                <img src="https://www.geneva.edu/campusmap/_assets/images/bld-young-7.jpg" alt="Memorial Hall"></img>
            </div>
          </div>
          <div className="quickFacts">
            <ul className="factsList">
              <h2>Quick Facts</h2>
              <li>Five total Residence Halls</li>
              <li>Each hall has a special semester event.</li>
              <li>Served as Infirmary in WWII</li>
              <li>Hot Tub in Apartment Rooms</li>
            </ul>
          </div>
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