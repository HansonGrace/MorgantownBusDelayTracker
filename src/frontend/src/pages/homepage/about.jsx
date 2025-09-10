import React from 'react';
import './about.css';

function About() {
    return (
        <div className="aboutPage">

            <nav className="navbar">
                <ul>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/submit">Submit a Delay</a></li>
                    <li><a href="/view">View Delays</a></li>
                </ul>
            </nav>

            <div className="about">
                <h1>About</h1>
            </div>


        </div>
    );
}

export default About;