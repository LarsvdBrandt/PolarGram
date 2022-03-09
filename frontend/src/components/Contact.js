import React from "react";

function Contact() {
  return (
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
  );
}

export default Contact;