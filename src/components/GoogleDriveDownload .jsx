import React, { useState } from "react";

function GoogleDriveDownload({ driveLink }) {
  const [isLoading, setIsLoading] = useState(false);

  const getDownloadLink = (link) => {
    if (!link.includes("drive.google.com")) {
      return false;
    }
    const fileId = link.split("/d/")[1]?.split("/")[0];
    return fileId
      ? `https://drive.google.com/uc?export=download&id=${fileId}`
      : false;
  };

  const handleDownload = () => {
    const downloadLink = getDownloadLink(driveLink);

    if (downloadLink) {
      setIsLoading(true);
      const link = document.createElement("a");
      link.href = downloadLink;
      link.setAttribute("download", "file");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    } else {
      alert("This download link is not valid.");
    }
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
