import React from "react";

export default () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          extract-urls
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/huckbit/extract-urls"
                target="blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.npmjs.com/package/extract-urls"
                target="blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
