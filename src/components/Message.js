import React from "react";

export default (message) => {
  return <div className={message.type}>{message.text}</div>;
};
