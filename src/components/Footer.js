import GitHubButton from "react-github-btn";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer--${theme}`}>
      <div className="container">
        <p
          style={{
            paddingTop: "15px",
            textAlign: "center",
            marginBottom: "7px",
          }}
        >
          <a href="https://github.com/huckbit">© huckbit {new Date().getFullYear()} </a>
        </p>
        <p>
          <GitHubButton
            href="https://github.com/huckbit/extract-urls"
            data-icon="octicon-star"
            aria-label="Star huckbit/extract-urls on GitHub"
          >
            Star
          </GitHubButton>{" "}
          <GitHubButton
            href="https://github.com/huckbit/extract-urls/subscription"
            data-icon="octicon-eye"
            aria-label="Watch huckbit/extract-urls on GitHub"
          >
            Watch
          </GitHubButton>{" "}
          <GitHubButton
            href="https://github.com/huckbit/extract-urls/fork"
            data-icon="octicon-repo-forked"
            aria-label="Fork huckbit/extract-urls on GitHub"
          >
            Fork
          </GitHubButton>
        </p>
      </div>
    </footer>
  );
};
