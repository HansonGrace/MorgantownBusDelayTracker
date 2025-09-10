import React from 'react';
import {useEffect, useState} from 'react';
import './submit.css';

function Submit() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedRoute, setSelectedRoute] = useState('');

    //all mlta bus routes for drop down
    const busRoutes = [
        "Blue Line",
        "Red Line",
        "Gold Line",
        "Green Line",
        "Purple Line",
        "Campus PM",
        "Mountain Heights",
        "Valley View",
        "West Run",
        "Cassville Direct"
    ];

    //clock
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleRouteChange = (event) => {
        setSelectedRoute(event.target.value);
    }

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
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="route">Select Bus Route:</label>
                        <select
                            id="route"
                            value={selectedRoute}
                            onChange={handleRouteChange}
                            required
                        >
                            <option value="">-- Select a route --</option>
                            {busRoutes.map((route, index) => (
                                <option key={index} value={route}>
                                    {route}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>

            <div className='button'>
                
            </div>
        </div>
    );
}

export default Submit;