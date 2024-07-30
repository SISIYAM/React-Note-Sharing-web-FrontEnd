import React from "react";

function PdfView(drive_link) {
  // Function to convert view link to embed link
  const getEmbedLink = (link) => {
    const fileId = link.drive_link.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const embedLink = getEmbedLink(drive_link);

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
