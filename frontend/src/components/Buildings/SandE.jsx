import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const SandE = () => {
  return (
    <div className="S&E">
      <header>
        <Navbar />
        <div className="jumboSC">
          <h1>Science & Engineering</h1>
        </div>
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Explore the world of innovation and discovery at the Science & Engineering Building of Geneva College. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus, vitae feugiat quam interdum in. Nulla facilisi. Duis et turpis euismod, efficitur ligula vel, malesuada justo. Sed in purus nec tellus pharetra efficitur. In hac habitasse platea dictumst. Aenean tincidunt est eu odio laoreet, ut elementum sem laoreet. Nulla facilisi. Integer sagittis cursus massa, non consequat sapien ultricies at. Sed nec eros sit amet urna varius cursus. Proin euismod eros id purus vehicula, vitae dictum metus feugiat. Nulla facilisi. Morbi eu diam vitae libero tincidunt tristique. Curabitur nec euismod urna. Mauris sit amet egestas velit.
          </p>
        </div>
        <div class="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>State-of-the-Art Laboratories: The Science & Engineering Building is equipped with advanced laboratories for hands-on experimentation and research.</li>
                <li>Collaborative Spaces: Discover collaborative workspaces that promote interdisciplinary collaboration among students and faculty.</li>
                <li>Cutting-Edge Equipment: Explore the latest technological equipment and tools used in various scientific and engineering disciplines.</li>
                <li>Research Initiatives: Learn about ongoing research initiatives and projects conducted at the Science & Engineering Building.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-sande-2.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Year of Establishment: [Year]</li>
            <li>Academic Excellence: The Science & Engineering Building is a hub for academic excellence, producing graduates who excel in their fields.</li>
            <li>Major Disciplines: Discover major disciplines housed in the building, including [Discipline 1], [Discipline 2], and [Discipline 3].</li>
            <li>Student Achievements: Celebrate notable achievements and innovations accomplished by students at the Science & Engineering Building.</li>
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

export default SandE;
