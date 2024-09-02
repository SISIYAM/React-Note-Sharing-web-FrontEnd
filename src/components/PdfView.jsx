import React from "react";
import Error from "./Error";

function PdfView({ drive_link }) {
  // Function to convert view link to embed link
  const getEmbedLink = (link) => {
    if (!link.includes("drive.google.com")) {
      return false;
    }

    const regex = /\/d\/([a-zA-Z0-9-_]+)/;
    const match = link.match(regex);

    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    } else {
      return false;
    }
  };

  const embedLink = getEmbedLink(drive_link);

  if (!embedLink) {
    return <Error />;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={embedLink}
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default PdfView;
