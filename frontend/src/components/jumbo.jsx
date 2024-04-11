import React from "react";
import { NavLink } from 'react-router-dom'
import '../assets/jumbo.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-bootstrap/Carousel';
import jumbo1 from '../assets/images/jumbo1.jpg';
import jumbo2 from '../assets/images/jumbo2.jpg';
import jumbo3 from '../assets/images/jumbo3.jpg';
import jumbo4 from '../assets/images/jumbo4.jpg';

const Jumbo = () => {


    return (
        <div className="jumbo">
            <Carousel className="carousel">
                <Carousel.Item>
                    <div className="overlay"> 
                        <img src={jumbo4} className="carouselItem"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overlay"> 
                        <img src={jumbo1} className="carouselItem"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overlay"> 
                        <img src={jumbo2} className="carouselItem"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overlay"> 
                        <img src={jumbo3} className="carouselItem"/>
                    </div>
                </Carousel.Item>
            </Carousel> 
            {/* <div className="shapeLeft"></div>
            <div className="shapeRight"></div> */}
        </div> 
    )
}

export default Jumbo