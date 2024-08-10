import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        {/* Row START */}
        <div className="row g-4">
          {/* Widget 1 START */}
          <div className="col-lg-3">
            {/* logo */}
            <a className="me-0" href="https://seiinnovations.com/">
              <b className="text-light h3">
                <img
                  src="/assets/images/footer-logo.png"
                  style={{ width: "290px", height: "100px" }}
                  alt="footer-logo"
                  srcset=""
                />
              </b>
            </a>
            <p className="my-3 text-muted">
              From innovative website design and development to captivating
              graphics and branding solutions, we offer a comprehensive suite of
              services tailored to meet your every need.
            </p>
            {/* Social media icon */}
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="https://www.facebook.com/profile.php?id=100078912907311"
                  target="_blank"
                  title="Facebook"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="https://siyam70.netlify.app/"
                  target="_blank"
                  title="Portfolio"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-browser-safari"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0m0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0M4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341m6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8m12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8M2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091m6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354m9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353M1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483m-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177m12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177M3.045 12.944a.3.3 0 0 1-.029-.376l3.898-5.592a.3.3 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.3.3 0 0 1-.062.062l-5.592 3.898a.3.3 0 0 1-.382-.034zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176M9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176" />
                  </svg>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-twitter"
                  href="https://github.com/SISIYAM"
                  target="_blank"
                  title="Github"
                >
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="https://www.linkedin.com/in/md-saymum-islam-siyam-4998682a7"
                  title="Linkedin"
                  target="_blank"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* Widget 1 END */}
          {/* Widget 2 START */}
          <div className="col-lg-6">
            <div className="row g-10">
              {/* Link block */}
              <div className="col-6 col-md-6">
                <h5 className="mb-2 mb-md-4 text-white">Company</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://seiinnovations.com/about"
                    >
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://seiinnovations.com/contact"
                    >
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://seiinnovations.com/category?id=1"
                    >
                      Website Design and Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://seiinnovations.com/category?id=2"
                    >
                      Graphics Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://seiinnovations.com/category?id=3"
                    >
                      Programming and Technology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://seiinnovations.com/category?id=14"
                    >
                      Digital Marketing
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4 text-white">Community</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link" to="/request/material">
                      Request For Materials
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Give Feedback
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Report
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 2 END */}
          {/* Widget 3 START */}
          <div className="col-lg-3">
            <h5 className="mb-2 mb-md-4 text-white">Contact</h5>
            {/* Time */}
            <p className="mb-2 text-muted">
              Toll free:
              <span className="h6 fw-light text-white ms-2">+1234 568 963</span>
              <span className="d-block small">(9:AM to 8:PM IST)</span>
            </p>
            <p className="mb-0 text-muted">
              Email:
              <span className="h6 fw-light text-white ms-2">
                si31siyam@gmail.com
              </span>
            </p>
            {/* Row END */}
          </div>
          {/* Widget 3 END */}
        </div>
        {/* Row END */}
        {/* Divider */}
        <hr className="mt-4 mb-0" />
        {/* Bottom footer */}
        <div className="py-3">
          <div className="container px-0">
            <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
              {/* copyright text */}
              <div className="text-muted text-primary-hover">
                <b>
                  <a href="https://siyam70.netlify.app/">
                    Developed by MD Saymum Islam Siyam, AE (Avionics) 3rd Batch,
                    CTO at SEI Innovations
                  </a>
                </b>
                <br />
                Copyrights
                <a href="#" className="text-reset">
                  ©2024 SEI Innovations
                </a>
              </div>
              {/* copyright links*/}
              <div className=" mt-3 mt-md-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item text-primary-hover">
                    <a className="nav-link" href="#">
                      Terms of use
                    </a>
                  </li>
                  <li className="list-inline-item text-primary-hover">
                    <a className="nav-link pe-0" href="#">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
