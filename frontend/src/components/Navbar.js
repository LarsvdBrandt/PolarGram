import polargramlogo from "../images/PolarGramLogo.PNG";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';

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
        <a className="smooth-scroll" href="#Banner">Home</a>
      </li>
      <li className="sidebar-nav-item">
        <a className="smooth-scroll" href="#Services">Services</a>
      </li>
      <li className="sidebar-nav-item">
        <a className="smooth-scroll" href="#Contact">Contact</a>
      </li>
      <li className="sidebar-nav-item">
      <Link to='/Login'className="nav-link"> Login </Link>
      </li>
    </ul>
  </nav>
  </div>
    // <div>
    //   <Navbar collapseOnSelect expand="lg">
    //     <Container>
    //       <Link to="/" className="navbar-title">
    //         <img className="navbar-Logo" src={polargramlogo} alt="Logo" />
    //         PolarGram
    //       </Link>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link > 
    //           <div className="input-group">
    //             <input type="text" className="search-click" name="" placeholder="Search.." /> 
    //             <div className="input-group-btn">
    //               <button className="btn btn-default nav-link" type="submit" ><Icon.Search /></button>
    //             </div>
    //           </div>
    //         </Nav.Link>
    //         {/* <Nav.Link > <Link to='/Search' className="nav-link"><Icon.Search /> </Link> </Nav.Link> */}
    //         <Nav.Link > <Link to='/NewPost'className="nav-link"><Icon.PlusSquare /> </Link></Nav.Link>
    //         <Nav.Link > <Link to='/Login'className="nav-link">Login </Link></Nav.Link>
    //       </Nav>
        
    //     </Navbar.Collapse>
    //     </Container>
    //   </Navbar>


    // </div>
  );
}

export default Navbarr;
