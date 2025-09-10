import React from 'react';
import {useEffect, useState} from 'react';
import './submit.css';

function Submit() {

    //clock
    const [currentTime, setCurrentTime] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() => setCurrentTime(new Date()), 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="submit">

            <nav className="navbar">
                <ul>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/view">View Delays</a></li>
                </ul>
            </nav>

            <div className="submitDelay">
                <h1>Submit a Delay</h1>
            </div>

            <div className="clock">
                <p>{currentTime.toLocaleTimeString()}</p>
            </div>

        </div>
    );
}

export default Submit;