
  //need to do:
    /* check if user is already logged in or not
    *  if not, remove some buttons and show login button in top right corner
    *  if logged in, show logout button and user info
    **/

    /* Home page layout ideas
    * green wv state logo in middle
    *  below OR above it, show title "Morgantown Bus Delays", with a small description under it
    *
    * Maybe a map of motown as the main image, or the mountainline bus, remember to make it dark
    * Green and white theme idea
    * Maybe a small gif animation of a bus moving across the screen? Will have to find video or gif tho :()
    *  */

import React from "react";
import "./homepage.css";

function Home() {
  return (
    <div className="home">
   
      <nav className="navbar">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/delays">View Delays</a></li>
        </ul>
      </nav>

      <div className="welcome">
        <h1>Welcome!</h1>
      </div>
    </div>
  );
}

export default Home;
