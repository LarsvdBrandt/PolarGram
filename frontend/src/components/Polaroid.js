import React, { useState, useEffect } from "react";
import {Card} from "react-bootstrap";
import fontyslogo from "../images/steen.PNG";


function HomePage() {
  return (

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={fontyslogo} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }}  />
        <Card.Body>
          <Card.Title>Lars</Card.Title>
          <Card.Text>
            22-02-2022
          </Card.Text>
        </Card.Body>
      </Card>
      
  );
}

export default HomePage;
