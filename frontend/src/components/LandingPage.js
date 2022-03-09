import React from 'react';
import polargramlogo from "../images/PolarGramLogo.PNG";
import { Link } from "react-router-dom";
import Footer from './Footer';



function LandingPage() {
    return (
      <div>

          <section id="Banner" className="content-section">
            <div className="container content-wrap text-center">
              <h1>The new and the old combined</h1>
              <h3>
                  Check the newest posts on the discovery page!
                </h3>
                
              <Link to='/discovery'className="btn btn-primary btn-xl"> Discovery page </Link>
            </div>
            <div className="overlay"></div>
          </section>

          <br />
         
          <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h2>How does it work?</h2>
                <p>It's simpel, follow the steps below.</p>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="service-box">
                    <div className="service-icon yellow">
                      <div className="front-content">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <h3>Register</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Register</h3>
                      <p>Make an account, it is super simple and completely free!</p>
                      <a className="btn btn-primary btn-sm" style={{ marginTop: '30%'}} href="/register">Register</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-box">
                    <div className="service-icon orange">
                      <div className="front-content">
                        <i className="fa fa-plus-square"></i>
                        <h3>Post</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Post</h3>
                      <p>After you logged in, make a new post with your favorite image.</p>
                      <a className="btn btn-primary btn-sm" style={{ marginTop: '30%'}} href="/newPost">Post</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-box ">
                    <div className="service-icon red">
                      <div className="front-content">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <h3>Like</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Like</h3>
                      <p>Like your own post, or like a post you like on the discovery page!</p>
                      <a className="btn btn-primary btn-sm" style={{ marginTop: '30%'}} href="/discovery">Discovery</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-box">
                    <div className="service-icon yellow">
                      <div className="front-content">
                        <i className="fa fa-comment"></i>
                        <h3>Comment</h3>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Comment</h3>
                      <p>Coment on your own post, or comment on a post that you like on the discovery page!</p>
                      <a className="btn btn-primary btn-sm" style={{ marginTop: '20%'}} href="/discovery">Discovery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>    
          <br />
      <Footer />
      </div>
       
) } 
 export default LandingPage ;