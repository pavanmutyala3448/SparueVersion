import React from "react";
import "./ComponentsStyles/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../sparue.png";

const Navbar = () => {
  return (
<div className='Navbar'>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <NavLink className="navbar-brand" to="/">

      <img className="Navbar-logo" src={logo} alt="logo" />
    </NavLink>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class=" fas fa-bars"></span>
  </button>
    <div className=" collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link active"
            aria-current="page"
            to="/"
            activeClassName="current"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link"
            to="/Services"
            activeClassName="current"
          >
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link"
            to="/CaseStudy"
            activeClassName="current"
          >
            Case Studies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link"
            to="/About"
            activeClassName="current"
          >
            About us
          </NavLink>
        </li>
      </ul>
      <button className='button'>
      Contact Us
      </button>
    </div>
  </div>
</nav>
</div>

    




  );
};
export default Navbar;
