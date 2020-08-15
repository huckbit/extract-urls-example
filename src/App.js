import React, { useState, useEffect } from "react";
import extractUrls from "extract-urls";
import "./App.css";
import Nabar from "./components/Navbar";
import Form from "./components/Form";
import Url from "./components/Url";
import Message from "./components/Message";

function App() {
  const [urls, setUrls] = useState("");
  const [warning, setWarning] = useState(null);
  const [urlsCount, setUrlsCount] = useState(null);

  const handleUrls = (text) => {
    let urlsData = extractUrls(text);
    if (typeof urlsData === "undefined" || urlsData.length === 0) {
      setWarning(`The given string doesn't contain any Url!`);
    } else {
      setUrls(urlsData.map((uri, key) => <Url key={key} uri={uri} />));
      setUrlsCount(urlsData.length);
    }
  };

  // Resetting warning rendering state
  useEffect(() => {
    setWarning(null);
  }, [urls]);

  //Resetting urls rendering state
  // useEffect(() => {
  //   setUrls(null);
  // }, [warning]);

  return (
    <div>
      <Nabar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Form handleUrls={handleUrls} />
            <div className="my-3">
              {urlsCount && (
                <Message type="success">Found {urlsCount} urls</Message>
              )}
            </div>
            {warning && <Message type="warning">{warning}</Message>}
            {urls}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
