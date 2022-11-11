import React from "react";
import DownloadBtn from "./DownloadBtn";

export default ({ dataExport }) => {
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

  const handleDownloadCsv = () => {
    const elem = document.createElement("a");
    const links = dataExport.map((item, index, array) => {
      return array.length - 1 === index ? item : `${item},`;
    });
    let urlsFile = new Blob(links, { type: "text/plain" });
    elem.href = URL.createObjectURL(urlsFile);
    elem.download = `urls-export-${Date.now()}.csv`;
    elem.click();
  };
  return (
    <div className="download">
      <DownloadBtn handleDownload={handleDownloadTxt} text="Export .txt" />{" "}
      <DownloadBtn handleDownload={handleDownloadMd} text="Export .md" />{" "}
      <DownloadBtn handleDownload={handleDownloadCsv} text="Export .csv" />
    </div>
  );
};
