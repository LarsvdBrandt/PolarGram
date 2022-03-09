import React from 'react';
import polargramlogo from "../images/PolarGramLogo.PNG";
import { Link } from "react-router-dom";
import Navbarr from './Navbar';



function Testlandingpage() {
    return (
      <div>


        <Navbarr />

          {/* <nav id="sidebar-wrapper">
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
          </nav> */}
         
          <section id="Banner" className="content-section">
            <div className="container content-wrap text-center">
              <h1>The new and the old combined</h1>
              <h3>
                  Post and share with your friends!
                </h3>
              <a className="btn btn-primary btn-xl smooth-scroll" href="#About">Find Out More</a>
            </div>
            <div className="overlay"></div>
          </section>

          <br />
         
          <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h2>What We Offer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="service-box">
                    <div className="service-icon yellow">
                      <div className="front-content">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <h3>Family Travel</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Family Travel</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-box">
                    <div className="service-icon orange">
                      <div className="front-content">
                        <i className="fa fa-suitcase"></i>
                        <h3>Business Travel</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Business Travel</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-box ">
                    <div className="service-icon red">
                      <div className="front-content">
                        <i className="fa fa-male" aria-hidden="true"></i>
                        <h3>Solo Travel</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Solo Travel</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-box">
                    <div className="service-icon grey">
                      <div className="front-content">
                        <i className="fa fa-users"></i>
                        <h3>Camping</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Camping</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="Contact" className="content-section">
            <div className="container">
              <div className="block-heading">
                <h2>Contact</h2>
                <p>Any questions? Just ask them!</p>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="contact-wrapper">
                    <div className="address-block border-bottom">
                      <h3 className="add-title">Fontys</h3>
                      <div className="c-detail">
                        <span className="c-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span><span className="c-info"> Eindhoven, Achtseweg Zuid 151 C</span>
                      </div>
                      <div className="c-detail">
                        <span className="c-icon"><i className="fa fa-phone" aria-hidden="true"></i></span><span className="c-info">08850 80000</span>
                      </div>
                      <div className="c-detail">
                        <span className="c-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span><span className="c-info">Fontys@fontys.nl</span>
                      </div>
                    </div>
                    <div className="address-block">
                      <h3 className="add-title">Student</h3>
                      <div className="c-detail">
                        <span className="c-icon"><i className="fa fa-user" aria-hidden="true"></i></span><span className="c-info"> Lars van den Brandt</span>
                      </div>
                      <div className="c-detail">
                        <span className="c-icon"><i className="fa fa-phone" aria-hidden="true"></i></span><span className="c-info">+31612345678</span>
                      </div>
                      <div className="c-detail">
                        <span className="c-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span><span className="c-info">434565@student.fontys.nl</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-wrap">
                    <form>
                      <div className="fname floating-label">
                        <input type="text" className="floating-input" name="full name" />
                        <label for="title">First Name</label>
                      </div>
                      <div className="fname floating-label">
                        <input type="text" className="floating-input" name="full name" />
                        <label for="title">Last Name</label>
                      </div>
                      <div className="email floating-label">
                        <input type="email" className="floating-input" name="email" />
                        <label for="email">Email</label>
                      </div>
                      <div className="contact floating-label">
                        <input type="tel" className="floating-input" name="contact" />
                        <label for="email">Mobile</label>
                      </div>
                      <div className="company floating-label">
                        <textarea type="text" className="floating-input" name="company"></textarea>
                        <label for="email">Message</label>
                      </div>
                      <div className="submit-btn">
                        <button type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>      
      </div>
       
) } 
 export default Testlandingpage;