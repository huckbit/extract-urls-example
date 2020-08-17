import React, { useState, useEffect } from "react";
import extractUrls from "extract-urls";
import "./App.css";
import Nabar from "./components/Navbar";
import Form from "./components/Form";
import Url from "./components/Url";
import Message from "./components/Message";
import Footer from "./components/Footer";
import DownloadBtn from "./components/DownloadBtn";

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

  // Warning rendering state reset
  useEffect(() => {
    setWarning(null);
  }, [urls]);

  // Create new txt export file using dataExport state
  const handleDownloadTxt = () => {
    const elem = document.createElement("a");
    let links = dataExport.map((item) => `${item} \n`);
    let urlsFile = new Blob(links, { type: "text/plain" });
    elem.href = URL.createObjectURL(urlsFile);
    elem.download = `urls-export-${Date.now()}.txt`;
    elem.click();
  };

  // Create new markdown export file using dataExport state
  const handleDownloadMd = () => {
    const elem = document.createElement("a");
    let links = dataExport.map((item) => `[${item}](${item}) \n`);
    let urlsFile = new Blob(links, { type: "text/plain" });
    elem.href = URL.createObjectURL(urlsFile);
    elem.download = `urls-export-${Date.now()}.md`;
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
            <div className="my-5">
              {urlsCount && (
                <Message type="success">
                  {urlsCount > 1
                    ? `${urlsCount} urls found`
                    : `${urlsCount} url found`}
                </Message>
              )}
            </div>
            {warning && <Message type="warning">{warning}</Message>}
            {urls && (
              <div className="pb-5">
                {urls}
                <hr />
                <div className="download">
                  <DownloadBtn
                    handleDownload={handleDownloadTxt}
                    text="Export .txt"
                  />{" "}
                  <DownloadBtn
                    handleDownload={handleDownloadMd}
                    text="Export .md"
                  />
                </div>
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
