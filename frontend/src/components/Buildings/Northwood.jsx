import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../assets/buildings/music.css";

const NorthWood = () => {
  return (
    <div className="Northwood">
      <header>
        <Navbar />
        <div className="jumboSC">
          <h1>Northwood Hall</h1>

        </div>
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus</p>
        </div>
        <div class="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
                <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
              </ul>
            </div>

            <div className="col" id="imgPlace">
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-studentcenter-4.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>

          <ul id="factList">
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
          </ul>
        </div>
        <div className="gallery">
          <h1 className="sectTitle">Gallery</h1>
          <div>
            <center><p>Photo Area Here</p></center>
          </div>
        </div>
      </main><footer>
        <Footer />
      </footer>
    </div>
  );
};





export default NorthWood;