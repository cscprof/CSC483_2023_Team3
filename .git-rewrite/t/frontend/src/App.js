import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Help from "./components/help";
import Events from "./components/events";
import Profile from "./components/profile";
import OldMain from './components/Buildings/oldMain.jsx';
import Trivia from "./components/trivia";
import Upload from "./components/upload";
import Reviews from "./components/reviews";
import Alex from "./components/Buildings/Alex";
import Dorms from "./components/Buildings/Dorms";
import Library from './components/Buildings/Library';
import Music from "./components/Buildings/Music";
import Northwood from "./components/Buildings/Northwood";
import Other from "./components/Buildings/Other";
import Rapp from "./components/Buildings/Rapp";
import SandE from "./components/Buildings/SandE";
import Sports from "./components/Buildings/Sports";
import Studentcenter from "./components/Buildings/Studentcenter";
import Register from './components/Register';
import Make from './components/make.jsx'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/help' element={<Help />} />

        <Route path='/events' element={<Events />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/oldmain' element={<OldMain />} />

        <Route path='/trivia' element={<Trivia />} />

        <Route path='/upload' element={<Upload />} />

        <Route path='/reviews' element={<Reviews />} />
        <Route path='/register' element={<Register />} />
        <Route path='/make' element={<Make />} />


        <Route path='/Alex' element={<Alex />} />

        <Route path='/Dorms' element={<Dorms />} />

        <Route path='/Library' element={<Library />} />

        <Route path='/Music' element={<Music />} />

        <Route path='/Northwood' element={<Northwood />} />

        <Route path='/Other' element={<Other />} />

        <Route path='/Rapp' element={<Rapp />} />

        <Route path='/SandE' element={<SandE />} />

        <Route path='/Sports' element={<Sports />} />

        <Route path='/Studentcenter' element={<Studentcenter />} />
      </Routes>
    </Router>
  );
};


export default App;
