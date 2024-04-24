import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboLibrary from "../jumboLibrary";

const Library = () => {
  return (
    <div className="Library">
    <header>
      <Navbar />
      <JumboLibrary />
    </header>
    <main>
      <div className="pageTitle">
        <h1>McCartney Library</h1>
      </div>
      <div className="container">
        <div className="displayLeft">
          <div className="about">
            <p>Welcome to McCartney Library, a hub of knowledge and exploration at Geneva College.
            </p>
            <p>The library boasts an exstensive collection of written and digital works. Students
              often visit the homey nooks and crannies of the library to do homework, read, and prepare
              for classes. The library also hosts events such as the Academic partners lectures, as well
              as the Work of Our Hands series. 
            </p>
          </div>          
        </div>
        <div className="displayRight">
          <div className="gallery">
            <div className="galleryImage">
                <img src="https://www.geneva.edu/campusmap/_assets/images/bld-library-1.jpg" alt="McCartney Library"></img>
            </div>
          </div>
          <div className="quickFacts">
            <ul className="factsList">
              <h2>Quick Facts</h2>
              <li>Offers a variety of seating, including, beanbags!</li>
              <li>Boasts multiple historic collections</li>
              <li>Has lots of books</li>
              <li>Has a bell tower that alerts the entire town of the hour</li>
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

export default Library;
