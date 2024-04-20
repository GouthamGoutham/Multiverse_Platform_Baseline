// Login.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './login.css'; // Update the import path
import glogo from './google.png'; // Update the import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '' || username === null) {
            seterror('Please enter the username!');
            return false;
        }
        if (password === '' || password === null) {
            seterror('Please enter the password!');
            return false;
        }
        try {
            //const response = await axios.post('/api/login', { username, password });
            window.location.href = "/home";
            //console.log(response.data);
        } catch (err) {
            //console.log(err.response.data);
            //seterror(err.response.data.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-wrapper"> {/* Add a wrapper div with class name */}
            <div className="container">
                <h2 className="special-log">~Log<span>-</span>in~</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label-style" htmlFor="username">
                            Username:
                        </label>
                        <input
                            className="input-tag-login"
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div className="form-group password-container-log">
                        <label className="label-style" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="input-tag-login"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                            ) : (
                                <FontAwesomeIcon icon={faEye} />
                            )}
                        </button>
                    </div>
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </form>
                <div className="forgot-password">
                    <a className="link-log" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="register-link">
                    <p>
                        Don't have an account?{' '}
                        <a className="link-log" href="/register">
                            Register here!
                        </a>
                    </p>
                </div>
                <div className="google-login">
                    <button className="btn-google">
                        <img src={glogo} alt="Google Icon" />{' '}
                        <span>Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
