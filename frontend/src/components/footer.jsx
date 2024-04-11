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
                    <h5>Created By Zack Martin, Hayden Wheeler, & Carter Milroy</h5>
                </div>

            </main>
        </div>
    )
}

export default Footer