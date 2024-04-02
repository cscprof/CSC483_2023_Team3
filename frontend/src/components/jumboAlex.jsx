import React from "react";
import { NavLink } from 'react-router-dom'
import '../assets/jumboAlex.css'

const JumboAlex = () => {
    return (
        <div className = "wrap">
            <div className="jumboAlex">
                  {/* <h1>Alexander Hall</h1> */}
                <div className="shapeLeft"></div>
                <div className="shapeRight"></div>
            </div> 
        </div>
    )
}

export default JumboAlex