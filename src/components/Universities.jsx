import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

// import server url from myConst.js module
import serverUrl, { baseAssetsUrl } from "../components/Myconst";

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${serverUrl}/request/fetch/universities`)
      .then((res) => {
        setUniversities(res.data.universities);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            alert(error.response.data.message);
            setLoading(false);
          }

          if (error.response.status === 500) {
            alert(error.response.data.message);
            setLoading(false);
          }
        }
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  let universityList = "";
  universityList = universities.map((university, index) => {
    return (
      <div className="col-sm-6 col-lg-4 col-xl-3" key={university.slug}>
        <div className="card card-metro overflow-hidden rounded-3">
          <img
            src={`${baseAssetsUrl}${
              university.image ?? "images/default-image.jpg"
            }`}
            alt="universityLogo"
          />

          <div className="card-img-overlay d-flex">
            <div className="mt-auto card-text">
              <Link
                to={`/university/${university.slug}`}
                className="text-white mt-auto h5 stretched-link"
              >
                {university.name}
              </Link>
              <div className="text-white">
                {university.semisters.length} Semisters and{" "}
                {university.material.length} Materials
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-lg-8 text-center mx-auto">
            <h2 className="fs-1">Top Universities</h2>
            <p className="mb-0">
              Information Technology Courses to expand your skills and boost
              your career &amp; salary
            </p>
          </div>
        </div>
        <div className="row g-4" id="loadSection">
          {universityList}
        </div>
      </div>
    </section>
  );
};

export default Universities;
