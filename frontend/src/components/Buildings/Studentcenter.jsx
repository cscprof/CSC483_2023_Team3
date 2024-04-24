import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../assets/Buildings/Studentcenter.css";
import JumboStudentCenter from "../jumboStudentCenter";

const StudentCenter = () => {
  return (

    <div className="Student Success Center">
      <header>
        <Navbar />
        <JumboStudentCenter />
      </header>
      <main>
        <div className="pageTitle">
          <h1>Student Success Center</h1>
        </div>
        <div className="container">
          <div className="displayLeft">
            <div className="about">
            <p>Skye Lounge: A useful study area on campus for all students. Balconies off Skye Lounge and the Brig feature a beautiful overlook the Beaver River and the valley.</p>
              <p>The Brigadoon, AKA the “Brig”: An alternative dining facility to the cafeteria, with a variety of convenient food options. The Brig also contains the Riverview Café, which proudly brews Starbucks Coffee.</p>
              <p>The Campus Bookstore.</p>
              <p>The Center for Calling and Career: This office works with all students from their first year through graduation, helping them to discover and develop their calling and vocation. Services offered here include career coaching, internship and job search assistance, help with resume writing, business etiquette and interview skills, and help with grad school admission.</p>
              <p>The Student Success Center: Academic support, tutoring, accommodations for students with disabilities, and other workshops and seminars are available through this department.</p>
              <p>The Fitness Center: Accessible to students, faculty, and staff with a college I.D. card, includes a variety of cardio machines, a spacious aerobic area for flexibility training, and well-equipped weight rooms with options ranging from free weights to state-of-the-art resistance equipment.</p>
              <p>Mail and Print Services. </p>
              <p>Other: Residence Life, the Center for Student Engagement, Campus Ministry, Dean of Students, Off-Campus Study, and International Student Services offices.</p>
            </div>          
          </div>
          <div className="displayRight">
            <div className="gallery">
              <div className="galleryImage">
                  <img src="https://www.geneva.edu/campusmap/_assets/images/bld-studentcenter-1.jpg" alt="Student Center"></img>
              </div>
            </div>
            <div className="quickFacts">
              <ul className="factsList">
                <h2>Quick Facts</h2>
                <li>Rock Wall available in the Basement</li>
                <li>Offers state of the art commuter lounge</li>
                <li>If you are lucky, you can score Oram's every once in a while</li>
                <li>Hosts campus events</li>
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





export default StudentCenter;

