import polargramlogo from "../images/PolarGramLogo.PNG";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-title">
        <img className="navbar-Logo" src={polargramlogo} alt="Logo" />
        PolarGram
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <Link to="/Search" className="nav-link text-uppercase ">
              <Icon.Search />
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/NewPost" className="nav-link text-uppercase">
              <Icon.PlusSquare />
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/Login" className="nav-link text-uppercase navbar-rechts">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
