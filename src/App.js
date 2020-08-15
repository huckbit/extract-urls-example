import React, { useState } from "react";
import extractUrls from "extract-urls";
import "./App.css";
import Nabar from "./components/Navbar";
import Form from "./components/Form";
import Url from "./components/Url";

function App() {
  const [checked, setChecked] = useState(false);
  const [urls, setUrls] = useState("");

  const handleSwitchChange = () => {
    setChecked(!checked);
    console.log(checked);
  };
  const handleUrls = (text) => {
    let urlsData = extractUrls(text);
    console.log(urlsData);
    if (typeof urlsData === "undefined" || !urls.length > 0) {
      setUrls("No urls inside the string");
    } else {
      setUrls(urlsData.map((uri, key) => <Url key={key} uri={uri} />));
    }
  };
  return (
    <div>
      <Nabar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Form handleUrls={handleUrls} />
            {urls}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
