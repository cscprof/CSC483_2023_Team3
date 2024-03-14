import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import Jumbo from './jumbo';
import '../assets/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
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

    const { username, password, email } = formData;

    // Check if the email contains "@geneva.edu"
    if (!email.includes('@geneva.edu')) {
      alert('Please register with a @geneva.edu email address.');
      return;
    }

    const registrationData = {
      username,
      password,
      email,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', registrationData);
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
          <Jumbo />
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
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Register;
