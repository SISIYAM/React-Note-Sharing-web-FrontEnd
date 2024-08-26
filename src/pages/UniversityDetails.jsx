import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";

// Import server URL and utility functions
import serverUrl, { baseAssetsUrl, formatDate } from "../components/Myconst";
import Error from "../components/Error";

function UniversityDetails() {
  const [university, setUniversity] = useState({});
  const [department, setDepartment] = useState({});
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);
  const [message, setMessage] = useState();

  const params = useParams();

  useEffect(() => {
    const body = {
      university_slug: params.slug,
      slug: params.department,
    };

    axios
      .post(`${serverUrl}/request/fetch/university/departments`, body)
      .then((res) => {
        if (res.data.status) {
          const universityData = res.data.select;
          const departmentData = res.data.department;

          setUniversity(universityData);
          setDepartment(departmentData);
          setFound(true);
        } else {
          setFound(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFound(false);
        setMessage(error.response.data.message);
        console.log(error.response.data);
      });

    window.scrollTo(0, 0);
  }, [params.slug, params.department]);

  if (loading) {
    return <Loading />;
  }

  // Calculate total materials
  let totalMaterials = 0;
  if (department.get_semesters) {
    department.get_semesters.forEach((semester) => {
      totalMaterials += semester.materials.length;
    });
  }

  return found ? (
    <div>
      <section className="bg-light py-0 py-sm-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-8">
              {/* Title */}
              <h1>{university.name}</h1>
              {/* Content */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="fas fa-user-graduate text-orange me-2" />
                  {department.department}
                </li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="fas fa-folder text-success me-2" />
                  {department.get_semesters.length} Semesters &amp;{" "}
                  {totalMaterials} Materials
                </li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="bi bi-patch-exclamation-fill text-danger me-2" />
                  Last updated at {formatDate(university.updated_at)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0 py-lg-5">
        <div className="container">
          <div className="row">
            {/* Main content START */}
            <div className="col-lg-8">
              <div className="card shadow rounded-2 p-4">
                <div className="card-header border-bottom px-4 py-3">
                  {/* Tabs START */}
                  <ul
                    className="nav nav-pills nav-tabs-line py-0"
                    id="course-pills-tab"
                    role="tablist"
                  >
                    {/* Tab item */}
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                      <button
                        className="nav-link mb-2 mb-md-0 active"
                        id="course-pills-tab-2"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-2"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-2"
                        aria-selected="false"
                      >
                        Materials
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Tabs END */}
                <div className="card-body p-4">
                  {/* Tab contents START */}
                  <div
                    className="tab-content pt-2"
                    id="course-pills-tabContent"
                  >
                    {/* Content START */}
                    <div
                      className="tab-pane fade show active"
                      id="course-pills-2"
                      role="tabpanel"
                      aria-labelledby="course-pills-tab-2"
                    >
                      {/* Course accordion START */}
                      <div
                        className="accordion accordion-icon accordion-bg-light"
                        id="accordionExample2"
                      >
                        {/* Loop through semesters */}
                        {department.get_semesters.length > 0 ? (
                          department.get_semesters.map((semesterRow, i) => (
                            <div
                              className="accordion-item mb-3 "
                              key={semesterRow.id}
                            >
                              <h6
                                className="accordion-header font-base"
                                id={`heading-${i}`}
                              >
                                <button
                                  className={`accordion-button fw-bold rounded d-sm-flex d-inline-block ${
                                    i === 0 ? "" : "collapsed"
                                  }`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${i}`}
                                  aria-expanded={i === 0 ? "true" : "false"}
                                  aria-controls={`collapse-${i}`}
                                >
                                  {semesterRow.semister_name}
                                  <span className="small ms-0 ms-sm-2">
                                    {semesterRow.materials.length > 0 ? (
                                      <sub className="text-success">
                                        <b>
                                          ({semesterRow.materials.length}{" "}
                                          Materials)
                                        </b>
                                      </sub>
                                    ) : (
                                      <sub className="text-danger">
                                        <b>(No Materials added yet)</b>
                                      </sub>
                                    )}
                                  </span>
                                </button>
                              </h6>
                              <div
                                id={`collapse-${i}`}
                                className={`accordion-collapse collapse ${
                                  i === 0 ? "show" : ""
                                }`}
                                aria-labelledby={`heading-${i}`}
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body mt-3">
                                  {semesterRow.materials.length > 0
                                    ? semesterRow.materials.map(
                                        (materialRow) => (
                                          <div key={materialRow.slug}>
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="position-relative d-flex align-items-center">
                                                <Link
                                                  to={`/university/${university.slug}/${semesterRow.semister_name}/${materialRow.slug}`}
                                                  className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                >
                                                  <i className="fas fa-play me-0" />
                                                </Link>
                                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                  {materialRow.title}
                                                </span>
                                              </div>
                                            </div>
                                            <hr />
                                          </div>
                                        )
                                      )
                                    : null}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="alert alert-danger">
                            Materials not found !
                          </p>
                        )}
                      </div>
                      {/* Course accordion END */}
                    </div>
                    {/* Content END */}
                  </div>
                  {/* Tab contents END */}
                </div>
              </div>
            </div>
            {/* Main content END */}

            {/* Right sidebar START */}
            <div className="col-lg-4 pt-5 pt-lg-0">
              <div className="row mb-5 mb-lg-0">
                <div className="col-md-6 col-lg-12">
                  {/* Image START */}
                  <div className="card shadow p-2 mb-4 z-index-9">
                    <div className="overflow-hidden rounded-3">
                      <img
                        src={`${baseAssetsUrl}${university.image}`}
                        className="card-img"
                        alt="university image"
                      />
                    </div>
                  </div>

                  {/* University info START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-fw fa-clock text-primary"></i>
                          Semesters
                        </span>
                        <span>{department.get_semesters.length}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-fw fa-book-open text-primary"></i>
                          Materials
                        </span>
                        <span>{totalMaterials}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-fw fa-user text-primary"></i>
                          Uploaded By
                        </span>
                        <span>{department.author}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-fw fa-user-clock text-primary"></i>
                          Uploaded at
                        </span>
                        <span>{formatDate(university.created_at)}</span>
                      </li>
                    </ul>
                    <Link to="/request/material">
                      <button
                        className="btn btn-success mt-2"
                        style={{ width: "100%" }}
                      >
                        Request For Material
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Right sidebar END */}
          </div>
        </div>
      </section>
    </div>
  ) : (
    <Error message={message} />
  );
}

export default UniversityDetails;
