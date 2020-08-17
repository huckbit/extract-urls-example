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
          <textarea
            className="form-control mb-3"
            rows="7"
            placeholder="paste text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Urls
        </button>
      </form>
    </>
  );
};
