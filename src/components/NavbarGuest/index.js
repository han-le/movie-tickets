import "./style-navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class NavbarGuest extends Component {
  handleLogOut = () => {
    localStorage.clear();
    window.history.back();
  };
  renderUserName = () => {
    if (localStorage.getItem("UserName") === null) {
      return (
        <Link to={"/login"}>
          <div className="btn mr-2" id="sign-in-btn">SIGN IN</div>
        </Link>
      );
    } else {
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-light"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user-alt mr-2" />
            {localStorage.getItem("UserName").replace(/[^\w\s]/gi, "")}
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-info">
            <Link to={"/profile"} className="dropdown-item">
              Profile
            </Link>
            <Link className="dropdown-item" onClick={this.handleLogOut}>
              Sign out
            </Link>
          </div>
        </li>
      );
    }
  };

  render() {
    return (
      <div className="navbar__section">
        <nav className="navbar navbar-expand-lg navbar-light" id="home__navbar">
          {/* Brand logo */}
          <Link to={"/"} className="navbar-brand">
            <img
              src="/img/logo-aurora.png"
              width={45}
              height={30}
              className="d-inline-block align-top"
              alt={"logo"}
            />
            <span className="brand-name">Aurora Ticket</span>
          </Link>
          {/* Hamburger: to open navbar content */}
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

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" id="nav__menu">
              {this.renderUserName()}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-light"
                  id="navbarDropdownMenuLink-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-map-marker-alt" /> Ho Chi Minh{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-info"
                  aria-labelledby="navbarDropdownMenuLink-4"
                >
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="#"
                  >
                    Can Tho
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="#"
                  >
                    Vung Tau
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="#"
                  >
                    Ha Noi
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="#"
                  >
                    Da Nang
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="just-a-div" />
      </div>
    );
  }
}
