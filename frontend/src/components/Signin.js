import React, { useState } from 'react';
import axios from "axios";
import './Sign.css';
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [data, setData] = useState({
        email:"",
        password:"",
    });
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
        setError('');
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/login";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            // window.location = "/";
            setSuccess(res.message);
            console.log(res.message);
            navigate('/journal');
        }
        catch(error) {
            if (
                error.response &&
                error.response.status >= 400 && error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="bg-main background">
            <div className="overall">
            <h3>Sign In</h3>
            <div className="fillbox">
            <input 
                    type="email"
                    placeholder="Email"
                    name='email'
                    onChange={handleChange}
                    value = {data.email}
                    required
                    className="form-control"
                />
            </div>
            <div className="fillbox">
                <input 
                    type="password"
                    placeholder="Password"
                    name='password'
                    onChange={handleChange}
                    value = {data.password}
                    required
                    className="form-control"
                />
            </div>
            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}
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

