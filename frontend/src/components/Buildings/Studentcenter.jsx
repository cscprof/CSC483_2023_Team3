import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../assets/Buildings/Studentcenter.css";
import JumboStudentCenter from "../jumboStudentCenter";

const StudentCenter = () => {
  return (
    <div className="StudentCenter">
      <header>
        <Navbar />
        <JumboStudentCenter />
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
                <li><b>Skye Lounge: </b>A useful study area on campus for all students. Balconies off Skye Lounge and the Brig feature a beautiful overlook the Beaver River and the valley.</li>
                <li><b>The Brigadoon, AKA the “Brig”:</b> An alternative dining facility to the cafeteria, with a variety of convenient food options. The Brig also contains the Riverview Café, which proudly brews Starbucks Coffee.</li>
                <li><b>The Campus Bookstore.</b></li>
                <li><b>The Center for Calling and Career:</b> This office works with all students from their first year through graduation, helping them to discover and develop their calling and vocation. Services offered here include career coaching, internship and job search assistance, help with resume writing, business etiquette and interview skills, and help with grad school admission.</li>
                <li><b>The Student Success Center:</b> Academic support, tutoring, accommodations for students with disabilities, and other workshops and seminars are available through this department.</li>
                <li><b>The Fitness Center:</b> Accessible to students, faculty, and staff with a college I.D. card, includes a variety of cardio machines, a spacious aerobic area for flexibility training, and well-equipped weight rooms with options ranging from free weights to state-of-the-art resistance equipment.</li>
                <li><b>Mail and Print Services.</b></li>
                <li><b>Other:</b> Residence Life, the Center for Student Engagement, Campus Ministry, Dean of Students, Off-Campus Study, and International Student Services offices.</li>
              </ul>
            </div>

            <div className="col" id="imgPlace">
              <h1 className="sectTitle">    <br /> </h1>
              <img src="https://www.geneva.edu/campusmap/_assets/images/bld-studentcenter-4.jpg" alt="placeholder"></img>
            </div>
          </div>
        </div>
        <div className="notable">
          <h1 className="sectTitle">Fun Facts!</h1>

          <div className="fun">
            <ul id="factList">
              <li>Fact 1: Skye Lounge is Named After </li>
              <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
              <li>Fact 3: There is a Rock Climbing Wall Located In the Basement</li>
              <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
              <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
              <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
              <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
              <li>Fact 1: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</li>
            </ul>
          </div>
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





export default StudentCenter;

