import React from 'react';
import './view.css';

function View() {
    return (
        <div className="view">

            <nav className="navbar">
                <ul>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/submit">Submit a Delay</a></li>
                </ul>
            </nav>

            <div className="viewDelay">
                <h1>View Active Delays</h1>
            </div>


        </div>
    );
}

export default View;