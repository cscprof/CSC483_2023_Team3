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
        <div className="pageTitle">
          <h1>Rapp Center</h1>
        </div>
        <div className="container">
          <div className="displayLeft">
            <div className="about">
              <p>The Rapp Center offers the latest technology in the engineering professional 
                landscape. 3D printers, laser cutters, and more. 
              </p>
              <p>State-of-the-Art Facilities: Rapp Tech Center is equipped with cutting-edge technology and resources to support technical design and innovation.</p>
              <p>Collaborative Spaces: Explore collaborative workspaces that foster creativity and teamwork among students and faculty.</p>
              <p>Industry Connections: Rapp Tech Center maintains strong ties with industry partners, providing students with real-world experiences and opportunities.</p>
              <p>Student Projects: Learn about impressive student projects and achievements that originated from Rapp Tech Center.</p>
            </div>          
          </div>
          <div className="displayRight">
            <div className="gallery">
              <div className="galleryImage">
                  <img src="https://www.geneva.edu//academics/programs/_images/program-thumbnail-engineering-biomedical.jpg" alt="Engineering"></img>
              </div>
            </div>
            <div className="quickFacts">
              <ul className="factsList">
                <h2>Quick Facts</h2>
                <li>Dedicated Engineering Technology</li>
                <li>Engineering students compete in an annual race using Geneva's Baja Cart</li>
                <li>Department floats are constructed using the Rapp Center</li>
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

export default Rapp;
