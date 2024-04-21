import React from 'react';
import '../Portfolio/about.css'
import Navbar from '../nav';


function About(){
    return(
        <div>
        <Navbar/>
        <div className="hero">
        <div className="content">
            <span className="title">A Full Stack Developer</span>
            <h1>Hello I'm <span>Goutham</span></h1>
            <p>
                I’m working on a professional, visually sophisticated and
                technologically proficient, responsive and multi-functional
                React Components.
            </p>
            <a className="btn">GOUTHAM .M</a>
        </div>  
        </div>
        </div>
    );
}

export default About;