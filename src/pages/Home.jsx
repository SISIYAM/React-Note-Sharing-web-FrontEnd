import React from "react";
import Universities from "../components/Universities";

function Home() {
  return (
    <div>
      <section className="bg-light">
        <div className="container pt-5 mt-0 mt-lg-5">
          {/* Title and SVG START */}
          <div className="row position-relative mb-0 mb-sm-5 pb-0 pb-lg-5">
            <div className="col-lg-8 text-center mx-auto position-relative">
              {/* SVG decoration */}
              <figure className="position-absolute top-100 start-50 translate-middle mt-4 ms-n9 pe-5 d-none d-lg-block">
                <svg>
                  <path
                    className="fill-success"
                    d="m181.6 6.7c-0.1 0-0.2-0.1-0.3 0-2.5-0.3-4.9-1-7.3-1.4-2.7-0.4-5.5-0.7-8.2-0.8-1.4-0.1-2.8-0.1-4.1-0.1-0.5 0-0.9-0.1-1.4-0.2-0.9-0.3-1.9-0.1-2.8-0.1-5.4 0.2-10.8 0.6-16.1 1.4-2.7 0.3-5.3 0.8-7.9 1.3-0.6 0.1-1.1 0.3-1.8 0.3-0.4 0-0.7-0.1-1.1-0.1-1.5 0-3 0.7-4.3 1.2-3 1-6 2.4-8.8 3.9-2.1 1.1-4 2.4-5.9 3.9-1 0.7-1.8 1.5-2.7 2.2-0.5 0.4-1.1 0.5-1.5 0.9s-0.7 0.8-1.1 1.2c-1 1-1.9 2-2.9 2.9-0.4 0.3-0.8 0.5-1.2 0.5-1.3-0.1-2.7-0.4-3.9-0.6-0.7-0.1-1.2 0-1.8 0-3.1 0-6.4-0.1-9.5 0.4-1.7 0.3-3.4 0.5-5.1 0.7-5.3 0.7-10.7 1.4-15.8 3.1-4.6 1.6-8.9 3.8-13.1 6.3-2.1 1.2-4.2 2.5-6.2 3.9-0.9 0.6-1.7 0.9-2.6 1.2s-1.7 1-2.5 1.6c-1.5 1.1-3 2.1-4.6 3.2-1.2 0.9-2.7 1.7-3.9 2.7-1 0.8-2.2 1.5-3.2 2.2-1.1 0.7-2.2 1.5-3.3 2.3-0.8 0.5-1.7 0.9-2.5 1.5-0.9 0.8-1.9 1.5-2.9 2.2 0.1-0.6 0.3-1.2 0.4-1.9 0.3-1.7 0.2-3.6 0-5.3-0.1-0.9-0.3-1.7-0.8-2.4s-1.5-1.1-2.3-0.8c-0.2 0-0.3 0.1-0.4 0.3s-0.1 0.4-0.1 0.6c0.3 3.6 0.2 7.2-0.7 10.7-0.5 2.2-1.5 4.5-2.7 6.4-0.6 0.9-1.4 1.7-2 2.6s-1.5 1.6-2.3 2.3c-0.2 0.2-0.5 0.4-0.6 0.7s0 0.7 0.1 1.1c0.2 0.8 0.6 1.6 1.3 1.8 0.5 0.1 0.9-0.1 1.3-0.3 0.9-0.4 1.8-0.8 2.7-1.2 0.4-0.2 0.7-0.3 1.1-0.6 1.8-1 3.8-1.7 5.8-2.3 4.3-1.1 9-1.1 13.3 0.1 0.2 0.1 0.4 0.1 0.6 0.1 0.7-0.1 0.9-1 0.6-1.6-0.4-0.6-1-0.9-1.7-1.2-2.5-1.1-4.9-2.1-7.5-2.7-0.6-0.2-1.3-0.3-2-0.4-0.3-0.1-0.5 0-0.8-0.1s-0.9 0-1.1-0.1-0.3 0-0.3-0.2c0-0.4 0.7-0.7 1-0.8 0.5-0.3 1-0.7 1.5-1l5.4-3.6c0.4-0.2 0.6-0.6 1-0.9 1.2-0.9 2.8-1.3 4-2.2 0.4-0.3 0.9-0.6 1.3-0.9l2.7-1.8c1-0.6 2.2-1.2 3.2-1.8 0.9-0.5 1.9-0.8 2.7-1.6 0.9-0.8 2.2-1.4 3.2-2 1.2-0.7 2.3-1.4 3.5-2.1 4.1-2.5 8.2-4.9 12.7-6.6 5.2-1.9 10.6-3.4 16.2-4 5.4-0.6 10.8-0.3 16.2-0.5h0.5c1.4-0.1 2.3-0.1 1.7 1.7-1.4 4.5 1.3 7.5 4.3 10 3.4 2.9 7 5.7 11.3 7.1 4.8 1.6 9.6 3.8 14.9 2.7 3-0.6 6.5-4 6.8-6.4 0.2-1.7 0.1-3.3-0.3-4.9-0.4-1.4-1-3-2.2-3.9-0.9-0.6-1.6-1.6-2.4-2.4-0.9-0.8-1.9-1.7-2.9-2.3-2.1-1.4-4.2-2.6-6.5-3.5-3.2-1.3-6.6-2.2-10-3-0.8-0.2-1.6-0.4-2.5-0.5-0.2 0-1.3-0.1-1.3-0.3-0.1-0.2 0.3-0.4 0.5-0.6 0.9-0.8 1.8-1.5 2.7-2.2 1.9-1.4 3.8-2.8 5.8-3.9 2.1-1.2 4.3-2.3 6.6-3.2 1.2-0.4 2.3-0.8 3.6-1 0.6-0.2 1.2-0.2 1.8-0.4 0.4-0.1 0.7-0.3 1.1-0.5 1.2-0.5 2.7-0.5 3.9-0.8 1.3-0.2 2.7-0.4 4.1-0.7 2.7-0.4 5.5-0.8 8.2-1.1 3.3-0.4 6.7-0.7 10-1 7.7-0.6 15.3-0.3 23 1.3 4.2 0.9 8.3 1.9 12.3 3.6 1.2 0.5 2.3 1.1 3.5 1.5 0.7 0.2 1.3 0.7 1.8 1.1 0.7 0.6 1.5 1.1 2.3 1.7 0.2 0.2 0.6 0.3 0.8 0.2 0.1-0.1 0.1-0.2 0.2-0.4 0.1-0.9-0.2-1.7-0.7-2.4-0.4-0.6-1-1.4-1.6-1.9-0.8-0.7-2-1.1-2.9-1.6-1-0.5-2-0.9-3.1-1.3-2.5-1.1-5.2-2-7.8-2.8-1-0.8-2.4-1.2-3.7-1.4zm-64.4 25.8c4.7 1.3 10.3 3.3 14.6 7.9 0.9 1 2.4 1.8 1.8 3.5-0.6 1.6-2.2 1.5-3.6 1.7-4.9 0.8-9.4-1.2-13.6-2.9-4.5-1.7-8.8-4.3-11.9-8.3-0.5-0.6-1-1.4-1.1-2.2 0-0.3 0-0.6-0.1-0.9s-0.2-0.6 0.1-0.9c0.2-0.2 0.5-0.2 0.8-0.2 2.3-0.1 4.7 0 7.1 0.4 0.9 0.1 1.6 0.6 2.5 0.8 1.1 0.4 2.3 0.8 3.4 1.1z"
                  />
                </svg>
              </figure>
              {/* SVG decoration */}
              <figure className="position-absolute top-0 start-0 ms-n9">
                <svg width="22px" height="22px" viewBox="0 0 22 22">
                  <polygon
                    className="fill-orange"
                    points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "
                  />
                </svg>
              </figure>
              {/* SVG decoration */}
              <figure className="position-absolute top-100 start-100 translate-middle ms-5 d-none d-lg-block">
                <svg width="21.5px" height="21.5px" viewBox="0 0 21.5 21.5">
                  <polygon
                    className="fill-danger"
                    points="21.5,14.3 14.4,9.9 18.9,2.8 14.3,0 9.9,7.1 2.8,2.6 0,7.2 7.1,11.6 2.6,18.7 7.2,21.5 11.6,14.4 18.7,18.9 "
                  />
                </svg>
              </figure>
              {/* SVG decoration */}
              <figure className="position-absolute top-0 start-100 translate-middle d-none d-md-block">
                <svg width="27px" height="27px">
                  <path
                    className="fill-purple"
                    d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
                  />
                </svg>
              </figure>
              {/* Title */}
              <h1>
                Education, talents, and career opportunities. All in one place.
              </h1>
              <p>
                Get inspired and discover something new today. Grow your skill
                with the most reliable online courses and certifications in
                marketing, information technology, programming, and data
                science.{" "}
              </p>
              {/* Search course */}
              <div className="col-md-8 text-center mx-auto pb-5">
                <form className="bg-body shadow rounded p-2">
                  <div className="input-group">
                    <input
                      className="form-control border-0 me-1"
                      type="search"
                      placeholder="Find your course"
                    />
                    <button
                      type="button"
                      className="btn btn-primary mb-0 rounded z-index-1"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Title and SVG END */}
        </div>
      </section>

      <section className="pb-0 py-sm-0 mt-n8">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center mx-auto">
              <div className="card card-body shadow p-2">
                <div className="position-relative">
                  {/* Image */}
                  <img
                    src="assets/images/about/12.jpg"
                    className="card-img rounded-2"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    {/* Video link */}
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <a
                        href="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
                        data-glightbox
                        data-gallery="video-tour"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fetch universities */}

      <Universities />

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

export default Home;
