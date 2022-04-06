import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { auth0, useAuth0 } from '@auth0/auth0-react'
import { Link } from "react-router-dom";

function LoginToUse() {
    const { loginWithRedirect } = useAuth0();
    return (
        <section id="Banner" className="content-section">
            <div className="container content-wrap text-center">
                <h3>
                    Login or register to use this functionality!
                </h3>
                <button className="btn btn-primary btn-xl" to={loginWithRedirect}> Login/Register </button>
            </div>
            <div className="overlay"></div>
        </section>
    );
}


export default LoginToUse;
