import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboAlex from "../jumboAlex";


const Alex = () => {
  return (
    <div className="Alex">
      <header>
        <Navbar />
        <JumboAlex />
      </header>
      <main>
        <div className="border">
          <h5>Created By Zack Martin, Hayden Wheeler, & Carter Milroy</h5>
          <div className="shape"></div>
        </div>
        <div className="gallery">
          <h1 className="sectTitle">Gallery</h1>
          <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-alexander-1.jpg" alt="Alexander Hall"></img>
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