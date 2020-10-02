import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default (form) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    form.handleUrls(text);
    setText(""); //reset input after handling
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control mb-3"
            rows="7"
            required
            placeholder="paste text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" className={`btn btn--${theme}`}>
          Get Urls
        </button>
      </form>
    </>
  );
};
