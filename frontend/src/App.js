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
import PolaroidPage from "./components/PolaroidPage"
import PolaroidEdit from "./components/PolaroidEdit"
import LandingPage from "./components/LandingPage";
import PolaroidPost from "./components/PolaroidPost";


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        {/* <hr /> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Discovery" component={Discovery} />
        <Route path="/Polaroidpage/:photoid" component={PolaroidPage} />
        <Route path="/PolaroidEdit/:photoid" component={PolaroidEdit} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Contact" component={Contact} />
        <Route path="/PolaroidPost" component={PolaroidPost} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
