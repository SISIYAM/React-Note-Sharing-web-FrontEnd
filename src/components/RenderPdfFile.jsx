import React from "react";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { baseAssetsUrl } from "./Myconst";

function RenderPdfFile(pdf) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={baseAssetsUrl + pdf.pdf_link} />
    </Worker>
  );
}

export default RenderPdfFile;
