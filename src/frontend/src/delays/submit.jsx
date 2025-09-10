import React from 'react';
import './submit.css';

function Submit() {
    return (
        <div className="submit">

            <nav className="navebar">
                <ul>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/view">View Delays</a></li>
                </ul>
            </nav>

            <div className="submitDelay">
                <h1>Submit a Delay</h1>
            </div>


        </div>
    );
}

export default Submit;