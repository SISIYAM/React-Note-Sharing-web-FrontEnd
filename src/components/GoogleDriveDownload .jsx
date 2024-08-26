import React, { useState } from "react";

function GoogleDriveDownload({ driveLink }) {
  const [isLoading, setIsLoading] = useState(false);

  const getDownloadLink = (link) => {
    const fileId = link.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  const handleDownload = () => {
    setIsLoading(true);
    const downloadLink = getDownloadLink(driveLink);
    const link = document.createElement("a");
    link.href = downloadLink;
    link.setAttribute("download", "file");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div>
      {isLoading ? (
        <button className="btn btn-sm btn-danger mb-2" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm mx-2"
            role="status"
            aria-hidden="true"
          />
          Downloading...
        </button>
      ) : (
        <button
          className="btn btn-sm btn-success mb-2"
          onClick={handleDownload}
        >
          Download PDF
        </button>
      )}
    </div>
  );
}

export default GoogleDriveDownload;
