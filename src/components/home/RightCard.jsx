import React from "react";

function RightCard() {
  return (
    <div className="col-lg-6 position-relative overflow-hidden">
      <div className="bg-secondary rounded-3 bg-opacity-10 p-5 h-100">
        {/* Image */}
        <div className="position-absolute bottom-0 end-0 me-3">
          <img
            src="assets/images/element/15.svg"
            className="h-100px h-sm-200px"
            alt
          />
        </div>
        {/* Content */}
        <div className="row">
          <div className="col-sm-8 position-relative">
            <h3 className="mb-1">Best Rated Courses</h3>
            <p className="mb-3 h5 fw-light lead">
              Enroll now in the most popular and best rated courses.
            </p>
            <a href="#" className="btn btn-warning mb-0">
              View Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCard;
