import { NavLink } from 'react-router-dom'
import '../assets/navbar.css'
import "react-modal"
import Logo from '../assets/images/profile-icon.png'

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
                        
                    </ul>
                    <input id="myBtn" className="buttonImg" type="Image" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" height="50" width="50" name="Icon"></input>
                    <div id="myModal" class="modal">

                        <div class="modal-content">
                            <span class="close">&times;</span>

                            <h3>Login</h3>
                            <p>Username:</p><input></input>
                            <p>Password:</p><input></input>
                            <button>Login</button>
                            <button>Create Account</button>

                            <NavLink to="/profile">Go To Profile (temporary)</NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </nav >
    )
    
}





export default Navbar

window.onload = function(){ 
    

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
};