import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Sports = () => {
  return (
    <div className="Sports">
      <header>
        <Navbar />
        <div className="jumboSC">
          <h1>Athletics</h1>
        </div>
      </header>
      <main>
        <div className="about">
          <h1 className="sectTitle">About</h1>
          <p className="aboutP">
            Immerse yourself in the spirit of sports and athleticism at the Athletics building of Geneva College. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus, vitae feugiat quam interdum in. Nulla facilisi. Duis et turpis euismod, efficitur ligula vel, malesuada justo. Sed in purus nec tellus pharetra efficitur. In hac habitasse platea dictumst. Aenean tincidunt est eu odio laoreet, ut elementum sem laoreet. Nulla facilisi. Integer sagittis cursus massa, non consequat sapien ultricies at. Sed nec eros sit amet urna varius cursus. Proin euismod eros id purus vehicula, vitae dictum metus feugiat. Nulla facilisi. Morbi eu diam vitae libero tincidunt tristique. Curabitur nec euismod urna. Mauris sit amet egestas velit.
          </p>
        </div>
        <div class="funFacts">
          <div className="column">
            <div className="col">
              <h1 className="sectTitle">Notable Features</h1>
              <ul className="noteList">
                <li>Sports Facilities: Explore state-of-the-art sports facilities designed to enhance athletic training and performance.</li>
                <li>Team Training Areas: Learn about dedicated training areas for various sports teams, fostering team spirit and collaboration.</li>
                <li>History of Excellence: Discover the rich history of athletic excellence and achievements at Geneva College.</li>
                <li>Community Engagement: The Athletics building actively engages with the community through sports events, tournaments, and outreach programs.</li>
              </ul>
            </div>
            <div className="col" id="imgPlace">
              <img src="https://images.sidearmdev.com/crop?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fgenevacollege.sidearmsports.com%2fimages%2f2021%2f1%2f26%2f2021_01_05_SouthCampus_Complete_9531.jpg&height=700&width=700&type=jpeg&gravity=centre" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>
          <ul id="factList">
            <li>Year of Establishment: [Year]</li>
            <li>Championship Titles: Celebrate the numerous championship titles won by Geneva College's athletic teams over the years.</li>
            <li>Alumni Success: Learn about successful alumni who began their journey at the Athletics building and excelled in their respective sports careers.</li>
            <li>Student Involvement: Explore opportunities for students to actively participate in various sports and contribute to the vibrant athletic community.</li>
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

export default Sports;