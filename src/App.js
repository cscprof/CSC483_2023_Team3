
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
import OldMain from "./components/oldMain";
import Trivia from "./components/trivia";
import Upload from "./components/upload";
 HEAD



import Reviews from "./components/reviews";
 main

function App() {
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

      </Routes>
    </Router>

    
  );

}

export default App;
