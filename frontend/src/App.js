import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Polaroid from "./components/Polaroid";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <hr />
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
