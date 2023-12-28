import React from 'react';
import './Sign.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    constructor(props) {
        super(props);
        this.state={
            fname="",
            lname="",
            email="",
            password="",
        };
    }
    const navigate = useNavigate();

    const handleSignInLinkClick = () => {
        navigate('/signin');
    }

    return (
        <form className="bg-main bg-cover h-screen w-screen justify-center items-center">
            <h3>Sign Up</h3>
            <div className="fillbox">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name"></input>
            </div>
            <div className="fillbox">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name"></input>
            </div>
            <div className="fillbox">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email Address"></input>
            </div>
            <div className="fillbox">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"></input>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password">
          Already registered <a href="/signin">sign in?</a>
            </p>
        </form>
    )
}

export default Signup;

