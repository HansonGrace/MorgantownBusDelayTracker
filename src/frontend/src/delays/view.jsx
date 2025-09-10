import React from 'react';
import {useEffect, useState} from 'react';
import './view.css';

function View() {

     //clock
        const [currentTime, setCurrentTime] = useState(new Date());
    
            useEffect(() => {
                const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
            return () => {
                clearInterval(timer);
            };
        }, []);
        
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

            <div className="clock">
                <p>{currentTime.toLocaleTimeString()}</p>
            </div>

        </div>
    );
}

export default View;