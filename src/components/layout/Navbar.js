import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container bg-danger">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand" href="!#">
          Task Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="!#">
                <i className="fas fa-home mr-2" />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link" href="!#">
                <i className="fas fa-plus mr-2" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="!#">
                <i className="fas fa-question mr-2" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
