import React from 'react';
import './Navbar.css';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="/assets/Group 1.png" alt="Logo" className="logo-image" />
        </a>
      </div>
      <div className="navbar-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search a song of your choice"
            className="search-input"
          />
          <button className="search-button">
            <FiSearch />
          </button>
        </div>
      </div>
      <button className="navbar-feedback">Give Feedback</button>
    </nav>
  );
};

export default Navbar;
