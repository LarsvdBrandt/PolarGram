import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostService from "../services/PostService";
import {Container, Row, Col, Card} from "react-bootstrap";
import Polaroid from "./Polaroid";
import * as Icon from 'react-bootstrap-icons';
import fontyslogo from "../images/steen.PNG";


function Discovery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    PostService.getAll()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h2>Discovery Page</h2>
                <p>Find the newest post on this page, have fun!</p>
              </div>
              <div className="row">
                {posts &&
                  posts.map((post, index) => (
                    
                <div className="col-md-3 col-sm-6">
                    <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={"http://localhost:5000/imageapi/images/" + post.imgSrc} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }}  />
                    <Card.Body>
                      <Card.Title>{post.name}</Card.Title>
                      <Card.Text>
                        {post.date}
                      </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                  ))}
              </div>
            </div>
          </section>    
    //   <div className="container">
    //     <div className="row" style={{ paddingBottom: '1rem'}}>
      // {posts &&
      //   posts.map((post, index) => (
      //     <div className="col-lg-3">
      //     <Card style={{ width: '15rem' }}>
      //     <Card.Img variant="top" src={"http://localhost:5000/imageapi/images/" + post.imgSrc} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }}  />
      //     <Card.Body>
      //       <Card.Title>{post.name}</Card.Title>
      //       <Card.Text>
      //         {post.date}
      //       </Card.Text>
      //     </Card.Body>
      //   </Card>
      //   </div>
      //   ))}
    //     </div>
    // </div>
      // <div className="container">
      //   <div className="row" style={{ paddingBottom: '1rem'}}>
      //     <div className="col-lg-3">
      //       <Polaroid />
      //     </div>
      //     <div className="col-lg-3">
      //     <Polaroid />
      //     </div>
      //     <div className="col-lg-3">
      //     <Polaroid />
      //     </div>
      //     <div className="col-lg-3 border" >
      //       <div className="row h3" style={{ paddingTop: '1rem', paddingLeft: '1rem'}}>
      //         <p> <Icon.People /> : 255</p>
      //       </div>
      //       <div className="row h3" style={{ paddingLeft: '1rem'}}>
      //         <p> <Icon.PeopleFill /> : 330</p>
      //       </div>
      //       <div className="row h3" style={{ paddingLeft: '1rem'}}>
      //         <p> <Icon.Envelope /> : 0</p>
      //       </div>
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="col-lg-3">
      //       <Polaroid />
      //     </div>
      //     <div className="col-lg-3">
      //     <Polaroid />
      //     </div>
      //     <div className="col-lg-3">
      //     <Polaroid />
      //     </div>
      //     <div className="col-lg-3">
      //     <Polaroid />
      //     </div>
      //   </div>
        
      // </div>
  );
}

export default Discovery;