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
import oldMain from "./components/oldMain";
import Trivia from "./components/trivia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
