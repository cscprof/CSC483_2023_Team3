import React, { Component } from 'react';
import "../assets/uploadForm.css";

class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBuilding: '',
            description: '',
            file: null,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { selectedBuilding, description, file } = this.state;

        // Handle form submission, e.g., send data to a server or perform an action

        console.log('Selected Building:', selectedBuilding);
        console.log('Description:', description);
        console.log('Selected File:', file);
    };

    render() {
        return (
            <div className='uploadForm'>
                <h2>Upload Image</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="selectedBuilding">Select a Playlist:</label>
                    <select
                        id="selectedBuilding"
                        name="selectedBuilding"
                        value={this.state.selectedBuilding}
                        onChange={this.handleInputChange}
                        required
                    >
                        <option value="">Select a Building</option>
                        <option value="oldMain">Old Main</option>
                        <option value="s&e">S&E</option>
                        <option value="northwood">Northwood</option>
                    </select>
                    <br />

                    <label htmlFor="description">Event Description:</label><br />
                    <textarea
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        rows="4"
                        cols="50"
                        required
                    ></textarea>
                    <br />

                    <center><label htmlFor="image"></label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={this.handleFileChange}
                            required
                        /></center>
                    <br /> <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default UploadForm;



