import React from 'react';
import './Sign.css';
const Signin = () => {
    return (
        <form className="bg-main background">
            <div className="overall">
        <h3>Sign In</h3>
        <div className="fillbox">
            <input type="email" className="form-control" placeholder="Enter Email"></input>
        </div>
        <div className="fillbox">
            <input type="password" className="form-control" placeholder="Enter Password"></input>
        </div>
        <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
        </div>
        <p className="forgot-password underline">
          Forgot <a href="#">password?</a>
        </p>
        </div>
      </form>
    )
};

export default Signin;

