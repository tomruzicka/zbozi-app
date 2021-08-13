import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="jidlovej logo" className="logo" />
        </Link>
        <SearchForm />
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-question-circle"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
