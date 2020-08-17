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
  const [dataExport, setDataExport] = useState(null);
  const [warning, setWarning] = useState(null);
  const [urlsCount, setUrlsCount] = useState(null);

  const handleUrls = (text) => {
    let urlsData = extractUrls(text);
    if (typeof urlsData === "undefined" || urlsData.length === 0) {
      setWarning(`Last given string doesn't contain any Url!`);
    } else {
      setDataExport(urlsData);
      setUrls(urlsData.map((uri, key) => <Url key={key} uri={uri} />));
      setUrlsCount(urlsData.length);
    }
  };

  // Resetting warning rendering state
  useEffect(() => {
    setWarning(null);
  }, [urls]);

  // Create new export file using dataExport state
  const handleDownloadUrls = () => {
    const elem = document.createElement("a");
    let links = dataExport.map((item) => `${item} \n`);
    let urlsFile = new Blob(links, { type: "text/plain" });
    elem.href = URL.createObjectURL(urlsFile);
    elem.download = `urls-export-${Date.now()}.txt`;
    elem.click();
  };

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
            {urls && (
              <div className="pb-5">
                {urls}
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleDownloadUrls}
                  download
                >
                  <i class="fas fa-download"></i> Download export file .txt
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
