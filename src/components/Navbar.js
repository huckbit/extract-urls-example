import React, { useState } from "react";

export default () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const handleBurgerClick = () => {
    setNavbarOpened(!navbarOpened);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
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
        <div
          className={
            navbarOpened
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/huckbit/extract-urls#readme"
              >
                <i className="fas fa-file-code"></i> Documentation
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.npmjs.com/package/extract-urls"
              >
                <i className="fab fa-npm"></i> Package
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/huckbit/extract-urls"
              >
                <i className="fas fa-code-branch"></i> Repository
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
