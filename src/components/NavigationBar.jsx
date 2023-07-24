import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="sticky top-0 full-vw font-rm navbar-dark bg-black navbar navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
      <div className="container-fluid relative">
        <Link id="brand" className="hover-pointer navbar-brand cli-item" to="/">
          Kraken
        </Link>
        <div
          onClick={navButton}
          id="nav-button"
          className="nav-button closed"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="nav-button-top"></span>
          <span className="nav-button-middle"></span>
          <span className="nav-button-bottom"></span>
        </div>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item cli-item">
              <Link
                className="hover-pointer nav-link text-light"
                to="/Portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item cli-item">
              <Link
                className="hover-pointer nav-link text-light"
                to="/Business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item cli-item">
              <Link
                className="hover-pointer nav-link text-light"
                to="https://social.krakenlouis.com"
                target="blank"
              >
                Social
              </Link>
            </li>
            <li className="nav-item cli-item">
              <Link className="hover-pointer nav-link text-light" to="/Blogs">
                News
              </Link>
            </li>
            <li className="nav-item cli-item">
              <Link className="hover-pointer nav-link text-light" to="/About">
                Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function navButton() {
  var nav = document.getElementById("nav-button");
  nav.className = nav.classList.contains("open")
    ? "nav-button closed"
    : "nav-button open";
}

export default NavigationBar;
