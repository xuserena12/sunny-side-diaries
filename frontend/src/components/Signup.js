import React, { useState } from 'react';
import axios from "axios";
import './Sign.css';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });
    const isValidPassword = data.password.length >= 6;
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
        setError('');
    };

    const handleSubmit = async(e) => {
        e.preventDefault();  
        if (!isValidPassword) {
            setError('Password must be at least 6 characters');
            return;
        }
        try {
            const url = "http://localhost:4000/register";
            const { data: res } = await axios.post(url, data);
            setSuccess(res.message);
            console.log(res.message);
            navigate('/signin');
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 && error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-main bg-cover h-screen w-screen justify-center items-center">
            <h3>Sign Up</h3>
            <div className="fillbox">
                <label>First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    name='fname'
                    onChange={handleChange}
                    value = {data.fname}
                    required
                    className="form-control"
                />
            </div>
            <div className="fillbox">
                <label>Last Name</label>
                <input 
                    type="text"
                    placeholder="Last Name"
                    name='lname'
                    onChange={handleChange}
                    value = {data.lname}
                    required
                    className="form-control"/>
            </div>
            <div className="fillbox">
                <label>Email Address</label>
                <input 
                    type="email"
                    placeholder="Enter Email"
                    name='email'
                    onChange={handleChange}
                    value = {data.email}
                    required
                    className="form-control"
                />
            </div>
            <div className="fillbox">
                <label>Password</label>
                <input 
                    type="password"
                    placeholder="Enter Password"
                    name='password'
                    onChange={handleChange}
                    value = {data.password}
                    required
                    className="form-control"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password">
          Already registered <a className="underline" href="/signin">sign in?</a>
            </p>
            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}
        </form>
    )
}

export default Signup;

