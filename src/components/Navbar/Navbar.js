import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import "./navbar.scss";

export default () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const handleBurgerClick = () => {
    setNavbarOpened(!navbarOpened);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark" > */}
      <nav className={`navbar navbar-expand-lg nav-bg--${theme}`}>
        <a className={`navbar-brand--${theme}`} href="/">
          <i className="fas fa-link"></i> extract-urls
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleBurgerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse"> */}
        <div className={navbarOpened ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className={`nav-link nav-link--${theme}`} href="https://github.com/huckbit/extract-urls#readme">
                <i className="fas fa-file-code"></i> Documentation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link nav-link--${theme}`} href="https://www.npmjs.com/package/extract-urls">
                <i className="fab fa-npm"></i> Package
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link nav-link--${theme}`} href="https://github.com/huckbit/extract-urls">
                <i className="fas fa-code-branch"></i> Repository
              </a>
            </li>
            <li className="nav-item">
              <button
                className={`btn nav-link nav-link--${theme}`}
                style={{ marginLeft: "auto" }}
                onClick={toggleTheme}
              >
                <i className="fas fa-adjust"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
