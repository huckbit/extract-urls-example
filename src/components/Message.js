import React from "react";

export default (message) => {
  return (
    <div className={`alert alert-${message.type}`} role="alert">
      {message.children}
    </div>
  );
};
