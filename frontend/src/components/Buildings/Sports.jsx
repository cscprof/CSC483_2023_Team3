import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboAthletics from "../jumboAthletics";

const Sports = () => {
  return (
    <div className="Athletics">
    <header>
      <Navbar />
      <JumboAthletics />
    </header>
    <main>
      <div className="pageTitle">
        <h1>Athletics</h1>
      </div>
      <div className="container">
        <div className="displayLeft">
          <div className="about">
            <p>Geneva College boasts some of the nicest athletic facilities in the PAC conference. A prestine 
              football field, soccer field, softball field, baseball field, hardwood court, athletic gym, training 
              facility, and recover equipment all makeup what is an impressive athletic offering for Geneva Students.
            </p>
            <p>Students often spend weekday and weekend nights cheering on their favorit sports teams. Basketball, soccer, 
              volleyball, baseball, and women's lacrosse, just to name a few. 
            </p>
          </div>          
        </div>
        <div className="displayRight">
          <div className="gallery">
            <div className="galleryImage">
                <img src="https://www.geneva.edu/campusmap/_assets/images/bld-reeves-4.jpg" alt="Geneva Athletics"></img>
            </div>
          </div>
          <div className="quickFacts">
            <ul className="factsList">
              <h2>Quick Facts</h2>
              <li>Dedicated playing surfaces and locker rooms to each team</li>
              <li>Geneva brought home 4 conference titles in the last academic year</li>
              <li>Sporting events occur most evenings</li>
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

export default Sports;