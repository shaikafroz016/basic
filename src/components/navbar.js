import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Locationtracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Location</Link>
          </li>
          <li className="navbar-item">
          <Link to="/stores" className="nav-link">Available Stores</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}