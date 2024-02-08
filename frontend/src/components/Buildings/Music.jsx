import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import JumboMusic from "../jumboMusic";

const JohnstonGym = () => {
  return (
    <div className="JohnstonGym">
      <header>
        <Navbar />
        <JumboMusic />
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Welcome to Johnston Gym, a historic space at Geneva College with a rich legacy in both athletics and the arts. Originally known for hosting the first-ever college basketball game, Johnston Gym now serves as a vibrant hub for music and cultural events. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus, vitae feugiat quam interdum in. Nulla facilisi. Duis et turpis euismod, efficitur ligula vel, malesuada justo. Sed in purus nec tellus pharetra efficitur. In hac habitasse platea dictumst. Aenean tincidunt est eu odio laoreet, ut elementum sem laoreet. Nulla facilisi. Integer sagittis cursus massa, non consequat sapien ultricies at. Sed nec eros sit amet urna varius cursus. Proin euismod eros id purus vehicula, vitae dictum metus feugiat. Nulla facilisi. Morbi eu diam vitae libero tincidunt tristique. Curabitur nec euismod urna. Mauris sit amet egestas velit.
          </p>
        </div>
        <div class="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Historical Significance: Johnston Gym is home to the site of the first college basketball game, marking a pivotal moment in sports history.</li>
                <li>Musical Venue: With its acoustically designed spaces, Johnston Gym is now a central location for musical performances, concerts, and cultural events.</li>
                <li>Community Space: The gym serves as a gathering place for students, faculty, and the community to enjoy the arts and celebrate shared interests.</li>
                <li>Modern Amenities: Renovated to meet the needs of the arts community, Johnston Gym offers modern facilities for music rehearsals and performances.</li>
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
            <li>First College Basketball Game: The historic gymnasium hosted the first college basketball game on [Date].</li>
            <li>Musical Performances: Johnston Gym is a popular venue for musical performances, including concerts, recitals, and rehearsals.</li>
            <li>Architectural Heritage: The gym preserves its architectural heritage while adapting to modern uses, creating a unique and inspiring space.</li>
            <li>Community Engagement: Johnston Gym continues to be a focal point for community engagement and cultural enrichment.</li>
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

export default JohnstonGym;
