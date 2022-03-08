import React, { useState, useEffect } from "react";
import {Card} from "react-bootstrap";
import fontyslogo from "../images/steen.PNG";


function HomePage() {
  return (
<div className="card shadow-md compact side bg-base-100 rounded-none">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img src={fontyslogo} alt={`player-image-1`} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-base-content">1</p>
          <h2 className="card-title">Lars</h2>
          <p className="text-base-content">Voor</p>
        </div>
      </div>
      <div className="card-body text-gray-600">
        <p className="flex">
          <span className="flex-1">Nationality</span>
          <span className="flex-1 text-right font-bold">Nederland</span>
        </p>
        <p className="flex">
          <span className="flex-1">Appearances</span>
          <span className="flex-1 text-right font-bold">40 keer</span>
        </p>
        <p className="flex">
          <span className="flex-1">Goals</span>
          <span className="flex-1 text-right font-bold">7</span>
        </p>
        <p className="flex">
          <span className="flex-1">Assists</span>
          <span className="flex-1 text-right font-bold">1</span>
        </p>
      </div>
    </div>
      // <Card style={{ width: '15rem' }}>
      //   <Card.Img variant="top" src={fontyslogo} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }}  />
      //   <Card.Body>
      //     <Card.Title>Lars</Card.Title>
      //     <Card.Text>
      //       22-02-2022
      //     </Card.Text>
      //   </Card.Body>
      // </Card>
      
  );
}

export default HomePage;
