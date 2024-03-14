import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/gallery.css';

const Table = () => {
    const [events, setEvents] = useState([]);



    useEffect(() => {
        // http://mrhaydenn.us.to:8000/api/images/
        // http://127.0.0.1:8000/api/images/
        axios.get('http://127.0.0.1:8000/api/images/')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching uploads:', error);
            });
    }, []);

    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Selected Building</th>
                        <th>Description</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(upload => (
                        <tr key={upload.description}>
                            <td>{upload.selectedBuilding}</td>
                            <td>{upload.description}</td>
                            <td>{upload.image}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;