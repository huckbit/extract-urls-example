import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default (download) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button className={`btn btn--${theme} btn-sm mt-1`} onClick={() => download.handleDownload()} download>
        <i className="fas fa-download"></i> {download.text}
      </button>
    </>
  );
};
