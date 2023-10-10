import React from "react";
import { NavLink } from 'react-router-dom'
import '../assets/footer.css'
const Footer = () => {
    return (
        <div className="Footer">
            <main>
                <div className="link">
                    <NavLink to="/help">Help</NavLink>
                </div>
                <div className="desc">
                    <h3>Created By Zack Martin, Hayden Wheeler, & Parker Guice</h3>
                </div>
            </main>
        </div>
    )
}

export default Footer