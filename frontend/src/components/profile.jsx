import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import '../assets/profile.css';
import Logo from "../assets/images/profile-icon.png";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch user details
        const response = await axios.get("http://mrhaydenn.us.to:8000/api/register", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Assuming you store the user's access token in localStorage
          },
        });

        // Update the state with the user details from the response
        setUser({
          username: response.data.username,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Call the function to fetch user details
    fetchUserDetails();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div className="Profile">
      <header>
        <Navbar />
        <div className="jumbo">
          <h1>EXPERIENCE Geneva</h1>
        </div>
        <div className="subtitle">
          <h2>Profile</h2>
        </div>
      </header>
      <body>
        <div className="profileImage">
          <img src={Logo} alt="Profile Icon" />
        </div>

        <div className="container">
          <div className="column">
            <p className="description">
              <b>First Name:</b> {user.firstName}
            </p>
            <p className="description">
              <b>Last Name:</b> {user.lastName}
            </p>
            <p className="description">
              <b>Username:</b> {user.username}
            </p>
            <p className="description">
              <b>Email:</b> {user.email}
            </p>
            {/* Add other fields as needed */}
          </div>

          <div className="column">
            {/* Display user information */}
            <p className="user">{user.firstName}</p>
            <p className="user">{user.lastName}</p>
            <p className="user">{user.username}</p>
            <p className="user">{user.email}</p>
            {/* Add other fields as needed */}
          </div>

          <div className="column">
            <button type="button" className="buttons">
              Edit Profile
            </button>
          </div>
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
