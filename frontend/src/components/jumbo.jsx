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
            <Carousel>
                <Carousel.Item>
                    <img src={jumbo4} class="d-block w-100"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={jumbo1} class="d-block w-100"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={jumbo2} class="d-block w-100"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={jumbo3} class="d-block w-100"></img>
                </Carousel.Item>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
            </Carousel> 
        </div> 
        
    )
}

export default Jumbo