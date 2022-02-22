import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUsers, faUser} from '@fortawesome/free-solid-svg-icons';

function Register() {
  return (
  <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center">Register</h3>
                            <div className="form-group input-group">
							        <div className="input-group-prepend">
		    					        <span className="input-group-text"> <FontAwesomeIcon icon={faUser}/></span>
		 					        </div>
        					        <input name="name" className="form-control" placeholder="Full name" type="name" required/>
    					    </div>
                            <div className="form-group input-group">
							        <div className="input-group-prepend">
		    					        <span className="input-group-text"> <FontAwesomeIcon icon={faUsers}/></span>
		 					        </div>
        					        <input name="username" className="form-control" placeholder="Username" type="Username" required/>
    					    </div>
                            <div className="form-group input-group">
							        <div className="input-group-prepend">
		    					        <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope}/></span>
		 					        </div>
        					        <input name="email" className="form-control" placeholder="Email" type="email" required/>
    					    </div>

                            <div className="form-group input-group">
							        <div className="input-group-prepend">
		    					        <span className="input-group-text"> <FontAwesomeIcon icon={faLock}/></span>
		 					        </div>
        					        <input name="password" className="form-control" placeholder="Password" type="password" required/>
    					    </div>

                            <div className="form-group input-group">
							        <div className="input-group-prepend">
		    					        <span className="input-group-text"> <FontAwesomeIcon icon={faLock}/></span>
		 					        </div>
        					        <input name="password" className="form-control" placeholder="Repeat password" type="repeatpassword" required/>
    					    </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block login-button"> Login </button>
                            </div>
                            <div className="form-group text-center">
				                      <a href="/login">Already have an account? Log in!</a>
				            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Register;
