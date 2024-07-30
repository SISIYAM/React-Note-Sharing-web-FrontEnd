import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// Import server URL from myConst.js module
import serverUrl, { baseAssetsUrl } from "../components/Myconst";
import Loading from "../components/Loading";
import Error from "../components/Error";

const MaterialDetails = () => {
  const params = useParams();
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloadLoadingState, setDownloadLoadingState] = useState({}); // For managing loading state of each download
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `${serverUrl}/request/fetch/university/semesters/materials/${params.slug}`
      )
      .then((res) => {
        setMaterial(res.data.material);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
        setLoading(false);
      });
  }, []);

  const handleDownload = (pdfUrl, pdfSlug) => {
    setDownloadLoadingState((prevState) => ({ ...prevState, [pdfSlug]: true }));

    axios
      .get(`${baseAssetsUrl}${pdfUrl}`, {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", pdfUrl.split("/").pop());
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.log("Error downloading the PDF", error);
        alert("Error downloading the PDF, Please check console for more");
      })
      .finally(() => {
        setDownloadLoadingState((prevState) => ({
          ...prevState,
          [pdfSlug]: false,
        }));
      });
  };

  const downloadLoading = () => (
    <button className="btn btn-danger" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm mx-2"
        role="status"
        aria-hidden="true"
      />
      Downloading...
    </button>
  );

  if (loading) {
    return <Loading />;
  }

  if (!material) {
    return <Error message={error} />;
  }

  return (
    <div>
      <section className="pt-3 pt-xl-5">
        <div className="container" data-sticky-container>
          <div className="row g-4">
            <div className="col-xl-12">
              <div className="row g-4">
                <div className="col-12">
                  <h2>{material.title}</h2>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                      <i className="fas fa-signal me-2" />
                      <b className="text-primary">
                        {material.get_university.name +
                          " " +
                          material.get_semester.semister_name}
                      </b>
                    </li>
                    <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                      <i className="bi bi-patch-exclamation-fill me-2" />
                      Last updated: {material.updated_at}
                    </li>
                    <li className="list-inline-item fw-light h6">
                      <i className="fas fa-globe me-2" />
                      Uploaded By- {material.get_author.name}
                    </li>
                  </ul>
                </div>
                <div className="col-12 position-relative"></div>
                <div className="col-12">
                  <div className="card border">
                    <div className="card-header border-bottom">
                      <h3 className="mb-0">Description</h3>
                    </div>
                    <div className="card-body">
                      {material.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: material.description,
                          }}
                        />
                      ) : (
                        <p className="alert alert-danger">
                          No description added yet.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card border rounded-3">
                    <div className="card-header border-bottom">
                      <h3 className="mb-0">PDFS</h3>
                    </div>
                    <div className="card-body">
                      <div className="row g-5">
                        <div className="col-12">
                          {material.get_pdf.map((pdf, pdfIndex) => (
                            <div key={pdf.slug}>
                              <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <div className="d-flex">
                                  <Link
                                    to={`/university/${material.get_university.slug}/${material.get_semester.semister_name}/${material.slug}/${pdf.slug}`}
                                  >
                                    <button
                                      className="btn btn-danger-soft btn-round mt-1"
                                      disabled={downloadLoadingState[pdf.slug]}
                                    >
                                      <i className="fas fa-play" />
                                    </button>
                                  </Link>

                                  <div className="my-2 mx-3">
                                    <h5 className="mb-1">
                                      <Link
                                        to={`/university/${material.get_university.slug}/${material.get_semester.semister_name}/${material.slug}/${pdf.slug}`}
                                      >
                                        {pdf.title
                                          ? pdf.title
                                          : "Pdf- " + (pdfIndex + 1)}
                                      </Link>
                                    </h5>
                                  </div>
                                </div>
                                {downloadLoadingState[pdf.slug] ? (
                                  downloadLoading()
                                ) : (
                                  <button
                                    onClick={() =>
                                      handleDownload(pdf.pdf, pdf.slug)
                                    }
                                    className="btn btn-sm btn-success mb-0"
                                  >
                                    Download
                                  </button>
                                )}
                              </div>
                              <hr />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialDetails;
