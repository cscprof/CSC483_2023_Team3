import { NavLink } from 'react-router-dom'
import '../assets/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-elements">
                    <ul className="navList">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trivia">Trivia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload">Upload</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                    <input className="buttonImg" type="Image" src="" height="50" width="50" name="profileIcon"></input>
                   

                </div>
            </div>
        </nav >
    )
}

export default Navbar