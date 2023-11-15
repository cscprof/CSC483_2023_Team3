import React, { Component } from 'react';
import "../assets/eventForm.css";
import { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const eventData = {
      title: formData.title,
      date: formData.date,
      description: formData.description,
      location: formData.location,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/makeEvent/', eventData);
      console.log('Event Created', response.data);

    } catch (error) {
      console.error('Event Creation failed', error);
    }
  };

  return (
    <div className='eventForm'>
      <h2>Upload Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
}


export default EventForm;