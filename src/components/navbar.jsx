import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">RehabRight</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/programs" className="nav-link">Programs</Link>
            </li>
            <li className="nav-item">
              <Link to="/clients" className="nav-link">Clients</Link>
            </li>
            <li className="nav-item">
              <Link to="/exercises" className="nav-link">Exercises</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
  
  export default Navbar;