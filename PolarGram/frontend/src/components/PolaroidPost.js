import React, { useRef, useState, useEffect } from "react";
import PostService from "../services/PostService";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { auth0, useAuth0 } from '@auth0/auth0-react'
import { Route, Redirect, RouteProps } from 'react-router-dom';
import LoginToUse from "./LoginToUse"

const PolaroidPost = (props) => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const [userId, setUserId] = useState("");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const history = useHistory();
    const [post, setPost] = useState({ userId: user['sub'].split("|")[1], name: user.nickname, imgSrc: "", date: date });
    const [message, setMessage] = useState("");

    const [file, setFile] = useState(""); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess barcd sou
    const el = useRef(); // accesing input element

    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };


    const handleUpload = (e) => {
        console.log(post)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        setPost({ ...post, [e.target.name]: e.target.files[0].name });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(file);

        PostService.create(post)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setMessage("Er is een post aangemaakt!");
            })
            .catch((err) => console.log(err));

        const formData = new FormData();
        formData.append("formFile", file); // appending file
        formData.append("fileName", user['sub'].split("|")[1] + post.imgSrc); // appending fileName
        axios
            .post("http://localhost:5000/ImageApi/File/upload", formData)
            .then((res) => {
                console.log("succes");
                props.history.push("/Discovery");

            })
            .catch((err) => console.log(err));

    };

    if (!isAuthenticated) {
        return <LoginToUse />
    }
    else {
        return (
            <section className="content-section">
                <div className="container">
                    <div>
                        <h2 className="text-center">Make a new post!</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label for="Name">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={user.nickname}
                                    data-testid="post-input-name"
                                    disabled
                                />
                            </div>
                            <p>Image: {post.imgSrc}</p>
                            <div class="custom-file mb-3">
                                <input
                                    type="file"
                                    class="custom-file-input"
                                    name="imgSrc"
                                    onChange={handleUpload}
                                    data-testid="post-input-image"
                                    required
                                />
                                <label class="custom-file-label" for="customFile">
                                    Choose file
                                </label>
                            </div>
                            <div>
                                <label for="title">Date</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="date"
                                    data-testid="post-input-date"
                                    placeholder={date}
                                    disabled
                                />
                            </div>
                            <br></br>
                            <button
                                className="btn btn-primary"
                                type="submit"
                                data-testid="post-input-submit"
                            >
                                Submit
                            </button>
                        </form>

                        <div className="alert alert-light" role="alert">
                            {message}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
export default PolaroidPost;
