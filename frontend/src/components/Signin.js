import React from 'react';
import './Sign.css';
const Signin = () => {
    return (
        <form className="bg-main bg-cover h-screen w-screen justify-center items-center">
        <h3>Sign In</h3>
        <div className="fillbox">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter Email"></input>
        </div>
        <div className="fillbox">
            <label>Password</label>
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
      </form>
    )
};

export default Signin;

