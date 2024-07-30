import React from "react";

function BottomContent() {
  return (
    <div>
      <section className="py-0">
        <div className="container">
          <div className="row g-4">
            {/* Action box item */}
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
                    <h3 className="mb-1">Earn a Certificate</h3>
                    <p className="mb-3 h5 fw-light lead">
                      Get the right professional certificate program for you.
                    </p>
                    <a href="#" className="btn btn-primary mb-0">
                      View Programs
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Action box item */}
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
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              {/* SVG decoration START */}
              <figure className="position-absolute top-50 start-50 translate-middle ms-2">
                <svg>
                  <path
                    className="fill-white opacity-2"
                    d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
                  />
                  <path
                    className="fill-white opacity-2"
                    d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
                  />
                  <path
                    className="fill-white opacity-2"
                    d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
                  />
                  <path
                    className="fill-white opacity-2"
                    d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
                  />
                </svg>
              </figure>
              {/* SVG decoration END */}
              <div className="bg-dark p-4 p-sm-5 rounded-3">
                <div className="row justify-content-center position-relative">
                  {/* Svg decoration START */}
                  <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                    <svg width="141px" height="141px">
                      <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                    </svg>
                  </figure>
                  {/* SVG decoration END */}
                  {/* Action box */}
                  <div className="col-11 position-relative">
                    <div className="row align-items-center">
                      {/* Title */}
                      <div className="col-lg-7">
                        <h3 className="text-white mb-0">
                          Create your first online assessment
                        </h3>
                        <p className="text-white small">
                          Boost up your knowledge, grow your skill with the most
                          reliable online courses and certifications
                        </p>
                        {/* List */}
                        <ul className="list-inline mb-0 justify-content-center justify-content-lg-start">
                          <li className="list-inline-item text-white me-2">
                            {" "}
                            <i className="bi bi-check-circle-fill text-success me-2" />
                            Free registration
                          </li>
                          <li className="list-inline-item text-white me-2">
                            {" "}
                            <i className="bi bi-check-circle-fill text-success me-2" />
                            Powerful features
                          </li>
                        </ul>
                      </div>
                      {/* Content and input */}
                      <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
                        <a href="#" className="btn btn-warning mb-0">
                          Sign Up for Free
                        </a>
                      </div>
                    </div>{" "}
                    {/* Row END */}
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </section>
    </div>
  );
}

export default BottomContent;
