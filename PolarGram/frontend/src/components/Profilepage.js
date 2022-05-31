import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth0, useAuth0 } from '@auth0/auth0-react'
import { Route, Redirect, RouteProps } from 'react-router-dom';
import PostService from "../services/PostService";
import CommentService from "../services/CommentService";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function ProfilePage() {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const [postData, setPostData] = useState([]);
    const [commentData, setCommentData] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getUserData = (event) => {
        event.preventDefault();
        PostService.getAllByUser(user['sub'].split("|")[1])
            .then((response) => {
                setPostData(response.data);
                console.log(postData);
            })
            .catch((e) => {
                console.log(e.message);
            });

        CommentService.getAllByUser(user['sub'].split("|")[1])
            .then((response) => {
                setCommentData(response.data);
                console.log(postData);
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    const clearUserData = (event) => {
        event.preventDefault();
        setPostData([]);
        setCommentData([])

    };

    const deleteUserData = (event) => {
        event.preventDefault();
        PostService.removeByUser(user['sub'].split("|")[1])
            .then((response) => {
                setPostData(response.data);
                console.log(postData);
            })
            .catch((e) => {
                console.log(e.message);
            });

        CommentService.removeByUser(user['sub'].split("|")[1])
            .then((response) => {
                setCommentData(response.data);
                console.log(postData);
            })
            .catch((e) => {
                console.log(e.message);
            });

        handleClose();

    };

    if (!isAuthenticated) {
        return <Redirect to={loginWithRedirect} />
    }
    else {
        return (
            <section className="content-section" id="title">
                <div className="container rounded bg-white mt-5 mb-5">
                    <h3 className="text-center">Profile page for {user.nickname}</h3>
                    <div className="row">
                        <div className="col-md-2 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="100px" src={user.picture} />
                                <span className="text-black-50">{user.nickname}</span>
                            </div>
                        </div>
                        <div className="col-md-4 border-right">
                            <div className="p-3 py-5">
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Name</label>
                                        <input type="text" className="form-control" placeholder="No name registerd" value={user.given_name} disabled />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Surname</label>
                                        <input type="text" className="form-control" value={user.family_name} placeholder="no last name registerd" disabled />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label className="labels">Email</label>
                                        <input type="text" className="form-control" placeholder="No email registered" value={user.email} disabled />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label className="labels">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="No phone numer registered" value={user.phone_number} disabled />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Country</label>
                                        <input type="text" className="form-control" placeholder="No country registered" value={user.country} disabled />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">City</label>
                                        <input type="text" className="form-control" value="No city registerd" placeholder={user.city} disabled />
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary w-100" type="button">Edit Profile</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={() => logout()} className="btn btn-danger w-100" type="button">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <button onClick={getUserData} className="btn btn-success w-100" type="button">Get all user data</button>
                                </div>
                                <div className="col-md-4">
                                    <button onClick={clearUserData} className="btn btn-primary w-100" type="button">Clear user data</button>
                                </div>
                                <div className="col-md-4">
                                    <Button onClick={handleShow} className="btn btn-danger w-100" type="button">Delete user data</Button>
                                </div>
                            </div>
                            <br />
                            <h3>Posts:</h3>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">ImgSrc</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">C Count</th>
                                    </tr>
                                </thead>
                                {postData &&
                                    postData.map((postData, index) => (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <Link
                                                        to={{
                                                            pathname: "/PolaroidPage/" + postData.id,
                                                            state: postData.id,
                                                        }}>
                                                        <td>{postData.id}</td>
                                                    </Link>
                                                    <td>{postData.imgSrc}</td>
                                                    <td>{postData.date}</td>
                                                    <td>{postData.commentCount}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    ))}

                            </table>

                            <h3>Comments:</h3>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">PostId</th>
                                        <th scope="col">Comment</th>
                                    </tr>
                                </thead>
                                {commentData &&
                                    commentData.map((commentData, index) => (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{commentData.id}</td>
                                                    <Link
                                                        to={{
                                                            pathname: "/PolaroidPage/" + commentData.postId,
                                                            state: commentData.postId,
                                                        }}>
                                                        <td>{commentData.postId}</td>
                                                    </Link>
                                                    <td>{commentData.comment}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    ))}

                            </table>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete user data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>Are you sure you want to delete all user data?</p>
                        <p>This includes all posts and comments you have made so far.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={deleteUserData}>
                            Delete all user data
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default ProfilePage;
