import React from "react";
import { NavLink } from 'react-router-dom'
import '../assets/jumboAlex.css'

const JumboAlex = () => {
    return (
        <div className = "wrap">
             <img
                class="backgroundImage"
                src="C:\Users\cmilr\OneDrive\Desktop\CSC483_2023_Team3\frontend\src\assets\images\bld-alexander-2-782720129.jpg"
                alt="alexander hall"
            ></img>
            <div className="jumboAlex">
                  <h1>Alexander Hall</h1>
             </div> 
        </div>
    )
}

export default JumboAlex