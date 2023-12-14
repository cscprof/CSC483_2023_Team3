import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Alex = () => {
  return (
    <div className="Alex">
      <header>
        <Navbar />
        <div className="jumboSC">
          <h1>Alexander Hall</h1>
        </div>
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Alexander Hall, situated at the heart of Geneva College, stands as a symbol of the institution's rich history and academic legacy. Originally constructed in [year], this architectural masterpiece has been a witness to generations of students, faculty, and countless milestones in the college's journey.
          </p>
          <p className="aboutP">
            The hall is named after [Name], one of the founding figures of Geneva College, whose vision and dedication played a pivotal role in shaping the institution. With its timeless design and central location on campus, Alexander Hall continues to serve as a hub for academic, cultural, and social activities.
          </p>
        </div>
        <div className="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Architectural Style: Alexander Hall showcases impressive Gothic Revival architecture, contributing to the college's historical charm.</li>
                <li>Central Location: Positioned at the heart of the campus, the hall is a focal point for academic and community gatherings.</li>
                <li>Renovations: In [year], Alexander Hall underwent significant renovations to preserve its historic integrity while incorporating modern amenities.</li>
                <li>Academic Significance: The hall houses [specific departments or functions], adding to its role as a cornerstone of academic life at Geneva College.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-alexander-1.jpg" alt="Alexander Hall"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Founded In: [Year]</li>
            <li>Named After: [Full Name of the Person]</li>
            <li>Historical Significance: Alexander Hall played a key role in [specific historical event or tradition].</li>
            <li>Notable Alumni: Several distinguished individuals, including [names of notable alumni], have walked the halls of Alexander Hall.</li>
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

export default Alex;