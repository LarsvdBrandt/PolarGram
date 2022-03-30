import React, { useState, useEffect } from "react";
import { useLocation, useRouteMatch, Link } from "react-router-dom";
import PostService from "../services/PostService";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';


const PolaroidPage = (props) => {
    const location = useLocation();
    let match = useRouteMatch("/PolaroidPage/:photoid");
    let state = Number(match.params.photoid);

    const initialPostState = {
        id: null,
        name: "",
        date: "",
        imgSrc: ""
    };
    const [post, setPost] = useState(initialPostState);

    const getPost = () => {
        PostService.get(state)
            .then((response) => {
                setPost(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <section id="Services" className="content-section text-center">
            <div className="container">
                <div className="block-heading">
                    <h2>Discovery Page</h2>
                    <p>Find the newest post on this page, have fun!</p>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <Card style={{ width: '100%', marginBottom: '10px', height: '370px' }}>
                            <Card.Img variant="top" src={"http://localhost:5000/imageapi/images/" + post.imgSrc} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'left' }}>{post.name}</Card.Title>
                                <Card.Text style={{ textAlign: 'left' }}>
                                    {post.date}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-1 col-sm-6">
                        <Link
                            to={{
                                pathname: "/PolaroidEdit/" + post.id,
                                state: post.id,
                            }}>
                            <div className="row">
                                <Icon.PencilSquare style={{ marginTop: "5px" }} />
                                <p style={{ marginLeft: "5px" }}>Edit</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default PolaroidPage;
