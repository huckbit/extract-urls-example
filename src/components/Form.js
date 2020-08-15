import React, { useState } from "react";

export default (form) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    form.handleUrls(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>String to clean</h3>
          <textarea
            className="form-control"
            rows="5"
            placeholder="paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Get Urls
        </button>
      </form>
    </>
  );
};
