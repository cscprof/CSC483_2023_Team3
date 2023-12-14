import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Library = () => {
  return (
    <div className="Library">
      <header>
        <Navbar />
        <div className="jumboSC">
          <h1>McCartney Library</h1>
        </div>
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Welcome to McCartney Library, a hub of knowledge and exploration at Geneva College. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus, vitae feugiat quam interdum in. Nulla facilisi. Duis et turpis euismod, efficitur ligula vel, malesuada justo. Sed in purus nec tellus pharetra efficitur. In hac habitasse platea dictumst. Aenean tincidunt est eu odio laoreet, ut elementum sem laoreet. Nulla facilisi. Integer sagittis cursus massa, non consequat sapien ultricies at. Sed nec eros sit amet urna varius cursus. Proin euismod eros id purus vehicula, vitae dictum metus feugiat. Nulla facilisi. Morbi eu diam vitae libero tincidunt tristique. Curabitur nec euismod urna. Mauris sit amet egestas velit.
          </p>
        </div>
        <div className="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Architectural Beauty: McCartney Library boasts stunning architectural design, creating a welcoming and inspiring space for students.</li>
                <li>Extensive Collection: With over [number] volumes, the library houses a vast collection of books, journals, and multimedia resources.</li>
                <li>Modern Technology: Equipped with state-of-the-art technology, the library provides a contemporary and efficient learning environment.</li>
                <li>Study Spaces: Various study areas cater to different learning preferences, including quiet zones and collaborative spaces.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-library-2.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Established In: [Year]</li>
            <li>Named After: [Full Name of the Person]</li>
            <li>Library Hours: [Operating Hours]</li>
            <li>Special Collections: [Any special collections or unique features]</li>
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

export default Library;
