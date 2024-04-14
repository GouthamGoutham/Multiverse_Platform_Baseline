import React, { useState } from 'react';
import axios from 'axios';
import '../Register/register.css';
import glogo from '../Login/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [username,setusername] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [password,setpassword] = useState('');
    const [conpassword,setconpassword] = useState('');
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
        if(password != conpassword){
            seterror("Please enter the same password twice!");
            return false;
        }
        if(email == '' || email == null){
            seterror("Please enter the mail id!");
            return false;
        }
        if(mobile == '' || mobile == null){
            seterror("Please enter the mobile number!");
            return false;
        }
        try{
            const response = await axios.post('/api/register',{username,password});
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
        <div className="reg-container">
            <h2 className="special">~Register~</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label-reg" htmlFor="username">Username:</label>
                    <input className='input-tag-reg' type='text' name='username' id='username' value={username} onChange={(e)=>setusername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="label-reg" htmlFor="email">Mail id:</label>
                    <input className='input-tag-reg' type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="label-reg" htmlFor="number">Mobile Number:</label>
                    <input className='input-tag-reg' type='number' name='mobnumber' id='mobnumber' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                </div>
                <div className="form-group password-container-reg">
                    <label className="label-reg" htmlFor="password">Password:</label>
                    <input className='input-tag-reg' type={showPassword ? 'text' : 'password'}  name='password' id='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <button type="button" className="toggle-password-reg" onClick={togglePasswordVisibility}>
                            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                </div>
                <div className="form-group">
                    <label className="label-reg" htmlFor="confirmpassword">Confirm Password:</label>
                    <input className='input-tag-reg' type='password'  name='confirmpassword' id='confirmpassword' value={conpassword} onChange={(e)=>setconpassword(e.target.value)}/>
                </div>
                <button className="register-btn" type='submit'>Register</button>
            </form>
            <div className="register-link">
                <p>Already have account? <a className='reg-log' href="/login">Login here!</a></p>
            </div>
        </div>

    )
}

export default Register;
