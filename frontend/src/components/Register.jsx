
import Navbar from "./navbar";
import Footer from "./footer";
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const registrationData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', registrationData);
      console.log('Registration successful', response.data);

    } catch (error) {
      console.error('Registration failed', error);
    }
  };


  return (
    <div className="Reviews">
      <div>
        <header>
          <Navbar />
          <div className="jumbo">
            <h1>EXPERIENCE Geneva</h1>
          </div>
        </header>
        <h2>Register</h2>
        <form onSubmit={handleRegistration}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Register;
