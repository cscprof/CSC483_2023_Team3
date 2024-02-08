import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../assets/oldmain.css"; // Import the specific styles for Old Main

const OldMain = () => {
  return (
    <div className="OldMain">
      <header>
        <Navbar />
        <OldMain />
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Explore the rich history and significance of Old Main at Geneva College. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus, vitae feugiat quam interdum in. Nulla facilisi. Duis et turpis euismod, efficitur ligula vel, malesuada justo. Sed in purus nec tellus pharetra efficitur. In hac habitasse platea dictumst. Aenean tincidunt est eu odio laoreet, ut elementum sem laoreet. Nulla facilisi. Integer sagittis cursus massa, non consequat sapien ultricies at. Sed nec eros sit amet urna varius cursus. Proin euismod eros id purus vehicula, vitae dictum metus feugiat. Nulla facilisi. Morbi eu diam vitae libero tincidunt tristique. Curabitur nec euismod urna. Mauris sit amet egestas velit.
          </p>
        </div>
        <div class="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Architectural Elegance: Old Main boasts stunning architectural features that reflect the craftsmanship of its time.</li>
                <li>Historical Significance: Discover the historical milestones associated with Old Main, a building that has stood witness to decades of academic excellence.</li>
                <li>Academic Hub: Old Main serves as a central hub for academic activities, housing classrooms, offices, and communal spaces.</li>
                <li>Renovations: Learn about any significant renovations that have enhanced the functionality and aesthetics of Old Main over the years.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/blog/old_assets/campus%20image.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Year of Construction: [Year]</li>
            <li>Architect: [Architect's Name]</li>
            <li>Original Purpose: Old Main was initially built for [Original Purpose].</li>
            <li>Alumni Connection: Many notable alumni have fond memories of Old Main as a central part of their college experience.</li>
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

export default OldMain;
