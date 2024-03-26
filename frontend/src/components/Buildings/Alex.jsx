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
        <div id="pageTitle">
          <h2>Alexander Hall</h2>
        </div>
        <div className="about">
          <p>Alexander Hall, situated at the heart of Geneva College, stands as a symbol of the institution's rich history and academic legacy. Originally constructed in [year], this architectural masterpiece has been a witness to generations of students, faculty, and countless milestones in the college's journey.</p>
          <p>The hall is named after [Name], one of the founding figures of Geneva College, whose vision and dedication played a pivotal role in shaping the institution. With its timeless design and central location on campus, Alexander Hall continues to serve as a hub for academic, cultural, and social activities.</p>
        </div>
        <div className="quickFacts">
          <ul className="factsList">
            <li>Founded in [Year]</li>
            <li>Named after [Name]</li>
            <li>Historical Signifigance</li>
            <li>Notable Alumni</li>
          </ul>          
        </div>
        <div className="gallery">
          <div className="galleryImage">
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-alexander-1.jpg" alt="Alexander Hall"></img>
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