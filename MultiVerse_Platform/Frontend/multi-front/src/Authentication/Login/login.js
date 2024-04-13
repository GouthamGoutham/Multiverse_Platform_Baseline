import React, { useState } from 'react';
import axios from 'axios';
import '../Login/login.css';
import glogo from '../Login/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [error,seterror] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(username == '' || username == null){
            seterror("Please enter the username!");
            return false;
        }
        if(password == '' || password == null){
            seterror("Please enter the password!");
            return false;
        }
        try{
            const response = await axios.post('/api/login',{username,password});
            console.log(response.data);
        }
        catch(err){
            console.log(err.response.data);
            seterror(err.response.data.message);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className="container">
            <h2 className="special">~Log<span>-</span>in~</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type='text' name='username' id='username' value={username} onChange={(e)=>setusername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type={showPassword ? 'text' : 'password'}  name='password' id='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                </div>
                <button className="login-btn" type='submit'>Login</button>
            </form>
            <div className='forgot-password'>
                <a href='#'>Forgot Password?</a>
            </div>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register here!</a></p>
            </div>
            <div className="google-login">
                <button className="btn-google">
                    <img src={glogo} alt="Google Icon" /> <span>Login with Google</span>
                </button>
            </div>
        </div>

    )
}

export default Login;
