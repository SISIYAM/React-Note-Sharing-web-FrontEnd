import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";

// import server url from myConst.js module
import serverUrl, { baseAssetsUrl, formatDate } from "../components/Myconst";
import Error from "../components/Error";

function Departments() {
  const [university, setUniversity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState([]);
  const [found, setFound] = useState(true);
  const [message, setMessage] = useState();

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${serverUrl}/request/fetch/university/details/${params.slug}`)
      .then((res) => {
        if (res.data.status) {
          const universityData = res.data.select;
          setUniversity(universityData);
          setDepartment(res.data.department);
        } else {
          setFound(false);
        }

        // stop loading
        setLoading(false);
      })
      .catch((error) => {
        setFound(false);
        setMessage(error.response.data.message);
        setLoading(false);
        console.log(error.response.data.message);
      });

    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

  // count total materials
  let totalMaterials = 0;

  department.forEach((dept) => {
    dept.get_semesters.forEach((semester) => {
      totalMaterials += semester.materials.length;
    });
  });

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
                  {department.length} Departments
                </li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="fas fa-folder text-success me-2" />
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
                    {/* Tab item */}
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                      <button
                        className="nav-link mb-2 mb-md-0"
                        id="course-pills-tab-2"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-2"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-2"
                        aria-selected="false"
                      >
                        Departments
                      </button>
                    </li>

                    {/* Tab item */}
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
                      id="course-pills-1"
                      role="tabpanel"
                      aria-labelledby="course-pills-tab-1"
                    >
                      {university.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: university.description,
                          }}
                        />
                      ) : (
                        <p className="alert alert-danger">
                          No description added yet.
                        </p>
                      )}
                    </div>
                    {/* Content END */}

                    {/* Content START */}
                    <div
                      className="tab-pane fade"
                      id="course-pills-2"
                      role="tabpanel"
                      aria-labelledby="course-pills-tab-2"
                    >
                      {/* Course accordion START */}
                      <div
                        className="accordion accordion-icon accordion-bg-light"
                        id="accordionExample2"
                      >
                        {/* Item */}
                        {department.length > 0 ? (
                          department.map((res, i) => (
                            <div className="accordion-item mb-3" key={i}>
                              <h6 className="accordion-header font-base">
                                <Link
                                  to={`/university/${university.slug}/${res.slug}`}
                                >
                                  <button
                                    className={`accordion-button fw-bold rounded d-sm-flex d-inline-block`}
                                    type="button"
                                  >
                                    {res.department}
                                    <span className="small ms-0 ms-sm-2">
                                      {res.get_semesters.length > 0 ? (
                                        <sub className="text-success">
                                          <b>
                                            {res.get_semesters.length} Semesters
                                          </b>
                                        </sub>
                                      ) : (
                                        <sub className="text-danger">
                                          <b>No Semesters added yet</b>
                                        </sub>
                                      )}
                                    </span>
                                  </button>
                                </Link>
                              </h6>
                            </div>
                          ))
                        ) : (
                          <p className="alert alert-danger">
                            No departments added yet !
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
                  {/* Video START */}
                  <div className="card shadow p-2 mb-4 z-index-9">
                    <div className="overflow-hidden rounded-3">
                      <img
                        src={`${baseAssetsUrl}${university.image}`}
                        className="card-img"
                        alt="course image"
                      />
                    </div>
                  </div>

                  {/* Course info START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-fw fa-clock text-primary"></i>
                          Departments
                        </span>
                        <span>{department.length}</span>
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
                          <i className="fas fa-fw fa-user-clock text-primary"></i>
                          Uploaded at
                        </span>
                        <span>{formatDate(university.created_at)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-fw fa-medal text-primary"></i>
                          Uploaded by
                        </span>
                        <span>{university.author}</span>
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
                  {/* Course info END */}
                </div>
              </div>
              {/* Row End */}
            </div>
            {/* Right sidebar END */}
          </div>
          {/* Row END */}
        </div>
      </section>
    </div>
  ) : (
    <Error message={message} />
  );
}

export default Departments;
