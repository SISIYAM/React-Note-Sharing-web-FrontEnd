import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import baseUrl, { baseAssetsUrl, formatDate } from "../components/Myconst";
import Loading from "../components/Loading";
import Error from "../components/Error";
import GoogleDriveDownload from "../components/GoogleDriveDownload ";
import PdfView from "../components/PdfView";
import Review from "../components/Review";

function PdfDetails() {
  const params = useParams();
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloadLoadingState, setDownloadLoadingState] = useState({}); // For managing loading state of each download
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/request/fetch/university/semesters/materials/pdf/${params.slug}`
      )
      .then((res) => {
        setPdf(res.data.details);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error.response.data.message);
      });

    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = (pdfUrl, pdfSlug) => {
    setDownloadLoadingState((prevState) => ({ ...prevState, [pdfSlug]: true }));
    console.log(`${baseAssetsUrl}${pdfUrl}`);
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
        // alert("Error downloading the PDF, Please check console for more");
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

  if (error) {
    return <Error message={error} />;
  }

  if (!pdf) {
    return <Error message="No PDF details found." />;
  }

  return (
    <div>
      <section className="bg-light py-0 py-sm-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-8">
              <button
                onClick={() => window.history.back()}
                className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block border-0"
              >
                Go back
              </button>
              <h1>{pdf.title}</h1>
              <ul className="list-inline mb-0">
                <Link
                  to={`/university/${pdf.get_material.get_university.name}`}
                >
                  <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                    <i className="fas fa-signal text-success me-2" />
                    {`${pdf.get_material.get_university.name} | ${pdf.get_material.get_semester.semister_name}`}
                  </li>
                </Link>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="bi bi-patch-exclamation-fill text-danger me-2" />
                  Last updated at- {formatDate(pdf.updated_at)}
                </li>
                <li className="list-inline-item h6 mb-0">
                  <i className="fas fa-globe text-info me-2" />
                  Uploaded By {pdf.get_author.name}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0 py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card shadow rounded-2 p-4">
                <div className="card-header border-bottom px-4 py-3">
                  <ul
                    className="nav nav-pills nav-tabs-line pt-0"
                    id="course-pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                      <button
                        className="nav-link mb-2 mb-md-0 active"
                        id="course-pills-tab-1"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-1"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-1"
                        aria-selected="true"
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                      <button
                        className="nav-link mb-2 mb-md-0"
                        id="course-pills-tab-4"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-4"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-4"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-4">
                  <div
                    className="tab-content pt-2"
                    id="course-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="course-pills-1"
                      role="tabpanel"
                      aria-labelledby="course-pills-tab-1"
                    >
                      {pdf.type == 1 ? (
                        downloadLoadingState[pdf.slug] ? (
                          downloadLoading()
                        ) : (
                          <button
                            onClick={() => handleDownload(pdf.pdf, pdf.slug)}
                            className="btn btn-sm btn-success mb-2"
                          >
                            Download
                          </button>
                        )
                      ) : (
                        <div>
                          <GoogleDriveDownload driveLink={pdf.pdf} />
                          <PdfView drive_link={pdf.pdf} />
                        </div>
                      )}
                    </div>
                    {/*Review component*/}
                    <Review />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PdfDetails;
