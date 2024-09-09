import React from "react";

function LeftCard() {
  return (
    <div className="col-lg-6 position-relative overflow-hidden">
      <div className="bg-primary bg-opacity-10 rounded-3 p-5 h-100">
        {/* Image */}
        <div className="position-absolute bottom-0 end-0 me-3">
          <img
            src="assets/images/element/08.svg"
            className="h-100px h-sm-200px"
            alt
          />
        </div>
        {/* Content */}
        <div className="row">
          <div className="col-sm-8 position-relative">
            <h3 className="mb-1">Explore BAAU Materials</h3>
            <p className="mb-3 h5 fw-light lead">
              Access a wide collection of study materials from BAAU,
              specifically tailored for aviation and aerospace students.
            </p>
            <a href="#" className="btn btn-primary mb-0">
              View Materials
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard;
