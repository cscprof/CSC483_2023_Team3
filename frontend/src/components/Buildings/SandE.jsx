import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboSandE from "../jumboSandE";

const SandE = () => {
  return (
    <div className="SandE">
      <header>
        <Navbar />
        <JumboSandE />
      </header>
      <main>
        <div className="pageTitle">
          <h1>Science and Engineering</h1>
        </div>
        <div className="container">
          <div className="displayLeft">
            <div className="about">
              <p>One of Geneva College's most interesting buildings, Science and Engineering. 
                The building itself has been rebuilt three times due to fire accidents. Within these walls,
                the next generation of scientists and engineers prepare for their professional careers. 
              </p>
              <p>Science and Engineering is a laberinth of hallways and doors, often causeing anxiety to freshman
                on their first day. However, once you can navigate the space, the knowledge that can be gained from within its walls
                is invaluable. 
              </p>
            </div>          
          </div>
          <div className="displayRight">
            <div className="gallery">
              <div className="galleryImage">
                  <img src="https://www.geneva.edu/campusmap/_assets/images/bld-sande-4.jpg" alt="skeleton"></img>
              </div>
            </div>
            <div className="quickFacts">
              <ul className="factsList">
                <h2>Quick Facts</h2>
                <li>Has burned down more than once</li>
                <li>Has a robust fire safety protocol</li>
                <li>Is haunted by a student from 1896</li>
                <li>No student has ever navigated its halls perfectly</li>
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

export default SandE;
