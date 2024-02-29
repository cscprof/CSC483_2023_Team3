import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboRapp from "../jumboRapp";

const Rapp = () => {
  return (
    <div className="Rapp">
      <header>
        <Navbar />
        <JumboRapp />
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Discover the innovation and creativity that defines the Rapp Technical Design Center at Geneva College. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus, vitae feugiat quam interdum in. Nulla facilisi. Duis et turpis euismod, efficitur ligula vel, malesuada justo. Sed in purus nec tellus pharetra efficitur. In hac habitasse platea dictumst. Aenean tincidunt est eu odio laoreet, ut elementum sem laoreet. Nulla facilisi. Integer sagittis cursus massa, non consequat sapien ultricies at. Sed nec eros sit amet urna varius cursus. Proin euismod eros id purus vehicula, vitae dictum metus feugiat. Nulla facilisi. Morbi eu diam vitae libero tincidunt tristique. Curabitur nec euismod urna. Mauris sit amet egestas velit.
          </p>
        </div>
        <div class="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>State-of-the-Art Facilities: Rapp Tech Center is equipped with cutting-edge technology and resources to support technical design and innovation.</li>
                <li>Collaborative Spaces: Explore collaborative workspaces that foster creativity and teamwork among students and faculty.</li>
                <li>Industry Connections: Rapp Tech Center maintains strong ties with industry partners, providing students with real-world experiences and opportunities.</li>
                <li>Student Projects: Learn about impressive student projects and achievements that originated from Rapp Tech Center.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/academics/programs/_images/program-thumbnail-engineering.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Year of Establishment: [Year]</li>
            <li>Technological Focus: Rapp Tech Center specializes in [Technical Focus Area].</li>
            <li>Innovative Initiatives: Rapp Tech Center has initiated [Number] innovative programs to promote technical design excellence.</li>
            <li>Student Success: Graduates from Rapp Tech Center have excelled in various industries, contributing to advancements in [Industry Focus].</li>
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

export default Rapp;
