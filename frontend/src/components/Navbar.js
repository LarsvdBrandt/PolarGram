import polargramlogo from "../images/PolarGramLogo.PNG";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { NavHashLink } from 'react-router-hash-link';

import { Nav,Container,Navbar } from 'react-bootstrap';



function Navbarr() {
  return (
    <div>
      <div className="logo">
        <Link to="/" className="navbar-title">
          <img className="navbar-Logo" src={polargramlogo} alt="Logo" /><span className='navbar-title'>PolarGram</span>
        </ Link>
      </div>
      <a className="menu-toggle rounded" href="#">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a className="smooth-scroll" href="#Header"></a>
          </li>
          <li className="sidebar-nav-item">
            <NavHashLink to="/#Banner" >Home</NavHashLink>
          </li>
          <li className="sidebar-nav-item">
            <Link to='/Discovery'className="nav-link"> Discovery page </Link>
          </li>
          <li className="sidebar-nav-item">
            <NavHashLink to="/#Services" >How does it work?</NavHashLink>
          </li>
          <li className="sidebar-nav-item">
            <Link to='/Contact'className="nav-link"> Contact </Link>
          </li>
          <div className="input-group">
            <div className="input-group-btn">
              <button className="btn nav-link" style={{ color: 'white'}} ><Icon.Search /></button>
            </div>
            <input type="text" className="search-click" name="" placeholder="Search.." /> 
          </div>
        </ul>
        <div class="sidebar-footer">
        <ul className="sidebar-nav">
            <li className="sidebar-nav-item" >
              <Link to='/Login'className="nav-link"> Login </Link>
            </li>
        </ul>
          </div>
    </nav>
  </div>
  );
}

export default Navbarr;
