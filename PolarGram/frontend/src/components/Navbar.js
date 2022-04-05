import polargramlogo from "../images/PolarGramLogo.PNG";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { NavHashLink } from 'react-router-hash-link';

import { Nav, Container, Navbar } from 'react-bootstrap';
import { auth0, useAuth0 } from '@auth0/auth0-react'

const Navbarr = () => {
  const { loginWithRedirect } = useAuth0();
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  console.log(JSON.stringify(user, null, 2))
  return (
    <div>
      <div className="logo">
        <Link to="/" className="navbar-title">
          <img className="navbar-Logo" src={polargramlogo} alt="Logo" /><span className='navbar-title'>PolarGram</span>
        </ Link>

        {isAuthenticated && (
          <Link to="/PolaroidPost" className="navbar-title">
            <Icon.PlusSquare />
          </Link>
        )}
      </div>
      <a className="menu-toggle rounded" href="#">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            {/* <p className="smooth-scroll text-white">{user.nickname}</p> */}
          </li>
          <li className="sidebar-nav-item">
            <NavHashLink to="/#Banner" >Home</NavHashLink>
          </li>
          <li className="sidebar-nav-item">
            <Link to='/Discovery' className="nav-link"> Discovery page </Link>
          </li>
          <li className="sidebar-nav-item">
            <NavHashLink to="/#Services" >How does it work?</NavHashLink>
          </li>
          <li className="sidebar-nav-item">
            <Link to='/Contact' className="nav-link"> Contact </Link>
          </li>
          <div className="input-group">
            <div className="input-group-btn">
              <button className="btn nav-link" style={{ color: 'white' }} ><Icon.Search /></button>
            </div>
            <input type="text" className="search-click" name="" placeholder="Search.." />
          </div>
        </ul>
        <div class="sidebar-footer">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item" >
              {!isAuthenticated && (
                <a onClick={() => loginWithRedirect()} className="nav-link"> Login </a>
              )}
              {isAuthenticated && (
                <div>
                  <Link to='/ProfilePage' className="nav-link"> {user.nickname} </Link>
                  {/* <a onClick={() => logout()} className="nav-link"> Logout </a> */}
                </div>
              )}

            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;
