import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboNorthwood from "../jumboNorthwood";

const NorthwoodHall = () => {
  return (
    <div className="NorthwoodHall">
      <header>
        <Navbar />
        <JumboNorthwood />
      </header>
      <main>
        <div className="pageTitle">
          <h1>Northwood Hall</h1>
        </div>
        <div className="container">
          <div className="displayLeft">
            <div className="about">
              <p>Discover the charm and significance of Northwood Hall at Geneva College.
              </p>
              <p>Architectural Beauty: Northwood Hall showcases exquisite architecture that reflects the college's commitment to a conducive learning environment.</p>
              <p>Historic Significance: Explore the history of Northwood Hall, a building that has witnessed generations of students and contributed to the college's legacy.</p>
              <p>Community Spaces: Northwood Hall provides various community spaces for student gatherings, meetings, and social activities.</p>
              <p>Modern Amenities: Equipped with modern facilities, Northwood Hall offers students a comfortable and enriching living experience.</p>
            </div>          
          </div>
          <div className="displayRight">
            <div className="gallery">
              <div className="galleryImage">
                  <img src="https://www.geneva.edu/campusmap/_assets/images/bld-northwood-2a.jpg" alt="Alexander Hall"></img>
              </div>
            </div>
            <div className="quickFacts">
              <ul className="factsList">
                <h2>Quick Facts</h2>
                <li>Hosts the business and accounting courses</li>
                <li>Blocks the view of Old Main from Beaver Falls</li>
                <li>Features beautiful architectural ornamentation inside and out</li>
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

export default NorthwoodHall;
