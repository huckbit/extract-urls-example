import React from "react";

export default () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          extract-urls
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active"></li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Repo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
