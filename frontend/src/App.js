import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Discovery from "./components/Discovery";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";

import LandingPage from "./components/LandingPage";
import NewPost from "./components/NewPost";


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        {/* <hr /> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Discovery" component={Discovery} />

        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Contact" component={Contact} />
        <Route path="/NewPost" component={NewPost} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
