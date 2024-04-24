import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboAlex from "../jumboAlex";
import '/Users/cmilr/OneDrive/Desktop/CSC483_2023_Team3/frontend/src/assets/Buildings/Alex.css';


const Alex = () => {
  return (
    <div className="Alex">
      <header>
        <Navbar />
        <JumboAlex />
      </header>
      <main>
        <div className="pageTitle">
          <h1>Alexander Hall</h1>
        </div>
        <div className="container">
          <div className="displayLeft">
            <div className="about">
              <p>Alexander Hall is home to the main dining facility on campus, 
                as well as the Admissions and Institutional Advancement Offices. 
                Alexander Dining Hall was renovated in the summer of 2014, and 
                includes a wide variety of food offerings.
              </p>
              <p>Students, staff and faculty members often mingle and fellowship 
                around tables in the dining hall, and large windows overlooking 
                campus make it an inviting place to eat, converse or study.
              </p>
            </div>          
          </div>
          <div className="displayRight">
            <div className="gallery">
              <div className="galleryImage">
                  <img src="https://www.geneva.edu/campusmap/_assets/images/bld-alexander-1.jpg" alt="Alexander Hall"></img>
              </div>
            </div>
            <div className="quickFacts">
              <ul className="factsList">
                <h2>Quick Facts</h2>
                <li>Renovated in 2014</li>
                <li>Serves dishes from areas top chef, Tom</li>
                <li>Geneva College's primary Dining Hall</li>
                <li>Features a self-serve Ice Cream bar</li>
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

export default Alex;