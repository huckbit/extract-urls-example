import React from "react";
export default (download) => {
  return (
    <>
      <button
        className="btn btn-outline-primary btn-sm mt-1"
        onClick={() => download.handleDownload()}
        download
      >
        <i class="fas fa-download"></i> {download.text}
      </button>
    </>
  );
};
