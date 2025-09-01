
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/homepage/homepage';


function App() {

    //initialize authenticated state from local storage
     const [authenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('authenticated')) || false
  );

  //update loca storage whenever 'authenticated' state changes
    useEffect(() => {
        localStorage.setItem('authenticated', JSON.stringify(authenticated));
    }, [authenticated]);

    return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    )
}

export default App;

