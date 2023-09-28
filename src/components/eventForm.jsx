import React, { Component } from 'react';
import "../assets/eventForm.css";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      description: '',
      location: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form data:', this.state);
  };

  render() {
    return (
      <div className='eventForm'>
        <h2>Upload Event</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            required
          /><br /><br />

          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.handleInputChange}
            required
          /><br /><br />

          <label htmlFor="description">Event Description:</label><br />
          <textarea
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
            rows="4"
            cols="50"
            required
          ></textarea><br /><br />

          <label htmlFor="location">Event Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={this.state.location}
            onChange={this.handleInputChange}
            required
          /><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EventForm;