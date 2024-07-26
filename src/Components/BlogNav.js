import React from 'react';
// import './BlogNav.css';  // Import the CSS file for the BlogNav component
import logo from './block.png';
import { Link } from 'react-router-dom';

function BlogNav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Blog Platform</h1>
      </div>
      <ul className="nav-items">
        <li><Link to="/Post1">JavaScript</Link></li>
        <li><Link to="/Post2">Data Structure</Link></li>
        <li><Link to="/Post3">Algorithm</Link></li>
        <li><Link to="/Post4">Computer Network</Link></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default BlogNav;

