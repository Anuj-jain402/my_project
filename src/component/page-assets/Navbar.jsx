import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav class="navbar">
      <div class="navbar-right">
        <a href="/" class="navbar-brand">
          Indore Experience
        </a>
        <span class="navbar-tagline">Discover the heart of Indore</span>
      </div>
      <div class="navbar-left">
        <span>
          <Link to="/adventure">Adventure</Link>
        </span>
        <span>
          <Link to="/unLeashAi">UnLeashAi</Link>
        </span>
        <span>
          <Link to="/sustainability">Sustainability</Link>
        </span>
        <span>
          <Link to="/about-us">About Us</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
