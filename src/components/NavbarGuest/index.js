import "./style-navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class NavbarGuest extends Component {
  handleLogOut = () => {
    localStorage.clear();
  };
  renderUserName = () => {
    if (localStorage.getItem("UserName") === null) {
      return (
        <Link to={"/login"}>
          <div className="nav-link text-light btn btn-danger">Login</div>
        </Link>
      );
    } else {
      return (
        <div className="dropdown address mt-1">
          <button
            className="btn btn-secondary dropdown-toggle bg-white text-dark address__drop"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hi, {localStorage.getItem("UserName")}
          </button>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={"/login"}>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </Link>

            <Link to={"/"}>
              <a className="dropdown-item" href="#" onClick={this.handleLogOut}>
                Log Out
              </a>
            </Link>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="header__nav">
        <div className="header__content container-fluid">
          <nav className="navbar navbar-expand-lg row">
            <Link className="navbar-brand col-sm-4" to={"/"}>
              <img
                className="webLogo ml-2"
                src="/img/logo-aurora.png"
                alt="webLogo"
              />
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
            <div
              className="collapse navbar-collapse col-sm-4"
              id="navbarSupportedContent"
            >
              <h1 className="brand-name">Aurora Ticket</h1>
            </div>
            <div className="col-sm-4 navbar-right">
              <div className="log-in mr-4">{this.renderUserName()}</div>

              <div className="dropdown address mt-1">
                <button
                  className="btn btn-secondary dropdown-toggle bg-white text-dark address__drop"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-location-arrow mr-2"></i>
                  <a href />
                  Hồ Chí Minh
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Hồ Chí Minh
                  </a>
                  <a className="dropdown-item" href="#">
                    Hà Nội
                  </a>
                  <a className="dropdown-item" href="#">
                    Đà Nẵng
                  </a>
                  <a className="dropdown-item" href="#">
                    Hải Phòng
                  </a>
                  <a className="dropdown-item" href="#">
                    Biên Hòa
                  </a>
                  <a className="dropdown-item" href="#">
                    Nha Trang
                  </a>
                  <a className="dropdown-item" href="#">
                    Bình Dương
                  </a>
                  <a className="dropdown-item" href="#">
                    Phan Thiết
                  </a>
                  <a className="dropdown-item" href="#">
                    Hạ Long
                  </a>
                  <a className="dropdown-item" href="#">
                    Cần Thơ
                  </a>
                  <a className="dropdown-item" href="#">
                    Vũng Tàu
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
