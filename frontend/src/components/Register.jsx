import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import '../assets/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const redirectToHomePage = () => {
    navigate('/');
  };



  const handleRegistration = async (e) => {
    e.preventDefault();

    const registrationData = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const response = await axios.post('http://mrhaydenn.us.to:8000/api/register/', registrationData);
      console.log('Registration successful', response.data);
      alert('Account Successfully Created');
      redirectToHomePage();
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
        <h2 id="regTitle">Register</h2>
        <div id="regForm">
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
            <button type="submit">Register</button>
          </form></div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Register;
