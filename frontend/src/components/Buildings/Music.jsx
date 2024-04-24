import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboMusic from "../jumboMusic";

const JohnstonGym = () => {
  return (
    <div className="Johnston">
    <header>
      <Navbar />
      <JumboMusic />
    </header>
    <main>
      <div className="pageTitle">
        <h1>Johnston Gym</h1>
      </div>
      <div className="container">
        <div className="displayLeft">
          <div className="about">
            <p>Welcome to Johnston Gym, a historic space at Geneva College with a rich legacy in both athletics and the arts. Originally known for hosting the first-ever college basketball game, Johnston Gym now serves as a vibrant hub for music and cultural events.
            </p>
            <p>Now retired from athletic events, the historic gym is used for various campus events such as socials, Wellness Wednesday's, Battle of the Bands, and more. 
            </p>
          </div>          
        </div>
        <div className="displayRight">
          <div className="gallery">
            <div className="galleryImage">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchampshoops.com%2Fwp-content%2Fuploads%2F2022%2F12%2Fold-basketball-pic.jpg&f=1&nofb=1&ipt=0b613cfac82db9fee211acf388d914cabee09ddeb8e703b8d449177767d2b756&ipo=images" alt="old basketball"></img>
            </div>
          </div>
          <div className="quickFacts">
            <ul className="factsList">
              <h2>Quick Facts</h2>
              <li>Hosted the first basketball game in 1892</li>
              <li>Has a full basketball court, and track</li>
              <li>One of Geneva's oldest buildings</li>
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

export default JohnstonGym;
