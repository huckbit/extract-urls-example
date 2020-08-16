import React from "react";

export default () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          <i class="fas fa-link"></i> extract-urls
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
                href="https://github.com/huckbit/extract-urls/blob/master/README.md"
                target="blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-npm"></i> Package
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.npmjs.com/package/extract-urls"
                target="blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-code-branch"></i> Repository
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
