import React, { useState, useEffect } from "react";
import extractUrls from "extract-urls";
import "./App.css";
import Nabar from "./components/Navbar";
import Form from "./components/Form";
import Url from "./components/Url";
import Message from "./components/Message";
import Footer from "./components/Footer";

function App() {
  const [urls, setUrls] = useState("");
  const [warning, setWarning] = useState(null);
  const [urlsCount, setUrlsCount] = useState(null);

  const handleUrls = (text) => {
    let urlsData = extractUrls(text);
    if (typeof urlsData === "undefined" || urlsData.length === 0) {
      setWarning(`Last given string doesn't contain any Url!`);
    } else {
      setUrls(urlsData.map((uri, key) => <Url key={key} uri={uri} />));
      setUrlsCount(urlsData.length);
    }
  };

  // Resetting warning rendering state
  useEffect(() => {
    setWarning(null);
  }, [urls]);

  return (
    <main>
      <Nabar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">extract-urls</h1>
          <p className="lead">
            {" "}
            Extract urls from a given string. Recognise both{" "}
            <span className="badge badge-primary">https</span>{" "}
            <span className="badge badge-primary">http</span> and returns a
            lower case list of urls.
          </p>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col">
            <Form handleUrls={handleUrls} />
            <div className="my-3">
              {urlsCount && (
                <Message type="success">Found {urlsCount} urls</Message>
              )}
            </div>
            {warning && <Message type="warning">{warning}</Message>}
            <div className="pb-5">{urls}</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
