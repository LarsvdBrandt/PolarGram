import React, { useState, useEffect } from "react";
import { useLocation, useRouteMatch, Link } from "react-router-dom";
import PostService from "../services/PostService";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import { auth0, useAuth0 } from '@auth0/auth0-react'


const PolaroidPage = (props) => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    // const [userId, setUserId] = useState({ userId: user.sub.split("|")[1] });
    const [userId, setUserId] = useState("");

    const location = useLocation();
    let match = useRouteMatch("/PolaroidPage/:photoid");
    let state = Number(match.params.photoid);

    const initialPostState = {
        id: null,
        userId: "",
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
        if (isAuthenticated) {
            setUserId(user.sub.split("|")[1])
        }
    }, []);

    return (
        <section id="Services" className="content-section text-center">
            <div className="container">
                <div className="block-heading">
                    <h2>Polaroid Page</h2>
                    <p>Find the polaroid information right here!</p>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <Card style={{ width: '100%', height: '370px', marginBottom: "10px" }}>
                            <Card.Img variant="top" src={"http://localhost:5000/imageapi/images/" + post.imgSrc} style={{ paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', height: '260px' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'left' }}>{post.name}</Card.Title>
                                <Card.Text style={{ textAlign: 'left' }}>
                                    {post.date}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-8 col-sm-6 border"
                        style={{ borderRadius: '5px', backgroundColor: "white", marginBottom: "10px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="row" style={{ padding: "1rem" }}>
                            <div style={{ textAlign: "left", borderRadius: "5px", overflowY: "scroll", height: '330px' }} className="col-md-6 col-sm-6 border">
                                <h4 style={{ position: "sticky", top: "0", background: "white" }}>Comments:</h4>
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                <p>Lars: Test</p>
                                <hr />
                                {!isAuthenticated && (
                                    <div style={{ position: "sticky", bottom: "10px", marginBottom: "10px", backgroundColor: "black", background: "" }}>
                                        <button onClick={() => loginWithRedirect()} className="btn btn-light" style={{ width: "100%", borderColor: "black" }}>Login to comment</button>
                                    </div>
                                )}
                                {isAuthenticated && (
                                    <div style={{ position: "sticky", bottom: "10px", marginBottom: "10px", backgroundColor: "black", background: "" }}>
                                        <input name="comment" className="form-control" placeholder="Comment something..." type="comment" required />
                                    </div>
                                )}
                            </div>
                            <div style={{ textAlign: "left" }} className="col-md-6 col-sm-6">
                                <div className="row">
                                    <div className="col-md-10 col-sm-8">
                                        <h4>Post information:</h4>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <Link
                                            to={{
                                                pathname: "/PolaroidEdit/" + post.id,
                                                state: post.id,
                                            }} style={{ marginLeft: "0" }}>
                                            {isAuthenticated && post.userId === userId.userId && (
                                                <div className="row">
                                                    <Icon.PencilSquare style={{ marginTop: "4px" }} />
                                                    <p style={{ marginLeft: "5px" }}>Edit</p>
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                                <p>User: {post.name}</p>
                                <hr />
                                <p>Place: Amsterdam</p>
                                <hr />
                                <p>Date: {post.date}</p>
                                <hr />
                                <p>PostID: {post.id}</p>
                                <hr />
                                <p>Current userId: {post.userId}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default PolaroidPage;
