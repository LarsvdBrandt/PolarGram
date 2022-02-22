import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
  <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center">Login</h3>
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
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block login-button"> Login </button>
                            </div>
                            <div className="form-group text-center">
				                      <a href="/register">Don't have an account? Create one!</a>
				                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Login;
