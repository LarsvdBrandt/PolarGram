import React, { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Polaroid from "./Polaroid";
import * as Icon from 'react-bootstrap-icons';


function HomePage() {
  return (
      <div className="container">
        <div className="row" style={{ paddingBottom: '1rem'}}>
          <div className="col-lg-3">
            <Polaroid />
          </div>
          <div className="col-lg-3">
          <Polaroid />
          </div>
          <div className="col-lg-3">
          <Polaroid />
          </div>
          <div className="col-lg-3 border" >
            <div className="row h3" style={{ paddingTop: '1rem', paddingLeft: '1rem'}}>
              <p> <Icon.People /> : 255</p>
            </div>
            <div className="row h3" style={{ paddingLeft: '1rem'}}>
              <p> <Icon.PeopleFill /> : 330</p>
            </div>
            <div className="row h3" style={{ paddingLeft: '1rem'}}>
              <p> <Icon.Envelope /> : 0</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Polaroid />
          </div>
          <div className="col-lg-3">
          <Polaroid />
          </div>
          <div className="col-lg-3">
          <Polaroid />
          </div>
          <div className="col-lg-3">
          <Polaroid />
          </div>
        </div>
        
      </div>
  );
}

export default HomePage;