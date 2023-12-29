import React, { useState } from 'react';
import './Sign.css';


const Signup = () => {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [error, setError] = useState();

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    /*const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    };*/

    const handleSubmit = e => {
        e.preventDefault();

        if (!fname) {
            setError('First name must be at least one character');
            return;
        }
        if (!lname) {
            setError('Last name must be at least one character');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid Email');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        console.log(fname, lname, email, password);
        fetch("http://localhost:4000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            email,
            lname,
            password,
          }),
        })
        .then((res) => {
            if (!res.ok) {
              return res.json().then((error) => {
                setError(error.error || 'An error occurred during registration.');
              });
            }
            return res.json();
          })
          .then((data) => {
            console.log('User registered successfully:', data);
            // Add further logic as needed
          })
          .catch((error) => {
            console.error('Error during registration:', error);
            setError('An error occurred during registration.');
          });
          setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-main bg-cover h-screen w-screen justify-center items-center">
            <h3>Sign Up</h3>
            <div className="fillbox">
                <label>First Name</label>
                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="First Name"
                                    required
                                    onChange={(e)=> {
                                        setFname(e.target.value);
                                        setError('');
                                    }}
                    /*type="text"
                    placeholder="First Name"
                    name='fname'
                    onChange={handleChange}
                    value = {data.fname}
    className="form-control"*/
                />
            </div>
            <div className="fillbox">
                <label>Last Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Last Name"
                    required
                    onChange={(e)=> {
                        setLname(e.target.value);
                        setError('');
                    }}/>
            </div>
            <div className="fillbox">
                <label>Email Address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter Email Address"
                    required
                    onChange={(e)=> {
                        setEmail(e.target.value);
                        setError('');
                        }}/>
            </div>
            <div className="fillbox">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter Password"
                    required
                    onChange={(e)=> {
                        setPassword(e.target.value);
                        setError('');
                    }}/>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password">
          Already registered <a className="underline" href="/signin">sign in?</a>
            </p>
            {error && <p className="error-message">{error}</p>}
        </form>
    )
}

export default Signup;

