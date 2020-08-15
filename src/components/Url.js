import React from "react";
export default (url) => {
  return (
    <div>
      <a href={url.uri} target="_blank" rel="noopener noreferrer">
        {url.uri}
      </a>
    </div>
  );
};
