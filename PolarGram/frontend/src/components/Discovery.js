import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostService from "../services/PostService";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';


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
                <Card style={{ width: '100%', marginBottom: '10px', height: '370px' }}>
                  <Card.Img variant="top" src={"https://blobstoragepolar.blob.core.windows.net/fileupload/" + post.imgSrc} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }} />
                  <Card.Body>
                    <Link
                      to={{
                        pathname: "/PolaroidPage/" + post.id,
                        state: post.id,
                      }}>
                      <Card.Title style={{ textAlign: 'left' }}>{post.name}</Card.Title>
                    </Link>

                    <Card.Text style={{ textAlign: 'left' }}>
                      {post.date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Discovery;