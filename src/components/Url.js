import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default (url) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <a className={`link--${theme}`} href={url.uri} target="_blank" rel="noopener noreferrer">
        {url.uri}
      </a>
    </div>
  );
};
