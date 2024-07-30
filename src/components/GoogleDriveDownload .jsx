import React from "react";

function GoogleDriveDownload(driveLink) {
  // Function to convert view link to direct download link
  const getDownloadLink = (link) => {
    const fileId = link.driveLink.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  const handleDownload = () => {
    const downloadLink = getDownloadLink(driveLink);
    const link = document.createElement("a");
    link.href = downloadLink;
    link.setAttribute("download", "file"); // You can set a filename here
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div>
      <button className="btn btn-sm btn-success mb-2" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
}

export default GoogleDriveDownload;
