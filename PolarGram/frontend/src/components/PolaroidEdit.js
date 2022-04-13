import React, { useState, useEffect, useRef } from "react";
import PostService from "../services/PostService";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation, useRouteMatch } from "react-router-dom";
import { auth0, useAuth0 } from '@auth0/auth0-react'

const PolaroidEdit = (props) => {
    const history = useHistory();
    const { user } = useAuth0();
    let match = useRouteMatch("/PolaroidEdit/:photoid");
    let state = Number(match.params.photoid);
    const initialPostState = {
        id: null,
        userId: user.sub.split("|")[1],
        name: "",
        date: "",
        imgSrc: ""
    };

    const [post, setPost] = useState(initialPostState);
    const [message, setMessage] = useState("");

    const [file, setFile] = useState(""); // storing the uploaded file

    const getPost = async (id) => {
        let apiResponse = await PostService.get(match.params.photoid);
        setPost(apiResponse.data);
        console.log(apiResponse.data);
    };

    useEffect(() => {
        getPost();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const handleUpload = (e) => {
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        setPost({ ...post, [e.target.name]: e.target.files[0].name });
    };

    const updatePost = async (event) => {
        event.preventDefault();
        console.log(file);
        const formData = new FormData();
        formData.append("formFile", file); // appending file
        formData.append("fileName", post.imgSrc); // appending fileName
        console.log(formData);
        axios
            .post("http://localhost:5000/ImageApi/File", formData)
            .then((res) => {
                console.log("succes");
            })
            .catch((err) => console.log(err));

        PostService.update(post.id, post)
            .then((response) => {
                console.log(response.data);
                history.push("/Discovery");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deletePost = () => {
        PostService.remove(match.params.photoid)
            .then((response) => {
                console.log(response.data);
                props.history.push("/Discovery");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div>
            {post ? (
                <section className="content-section">
                    <div className="container">
                        <h2 className="text-center">Edit your post!</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    data-testid="post-input-name"
                                    value={post.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imgSrc">Image: {post.imgSrc}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imgSrc"
                                    name="imgSrc"
                                    value={post.imgSrc}
                                    data-testid="post-input-image"
                                    hidden
                                />
                            </div>
                            <div class="custom-file mb-3">
                                <input
                                    type="file"
                                    class="custom-file-input"
                                    name="imgSrc"
                                    onChange={handleUpload}
                                />
                                <label class="custom-file-label" for="customFile">
                                    Choose file
                                </label>
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    data-testid="post-input-date"
                                    value={post.date}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>

                        <button className="badge badge-danger mr-2" onClick={deletePost}>
                            Delete
                        </button>

                        <button
                            data-testid="post-input-submit"
                            type="submit"
                            className="badge badge-success"
                            onClick={updatePost}
                        >
                            Edit
                        </button>
                        <p>{message}</p>
                    </div>
                </section>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Post...</p>
                </div>
            )}
        </div>
    );
};

export default PolaroidEdit;
