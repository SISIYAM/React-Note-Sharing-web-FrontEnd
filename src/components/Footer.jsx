import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        {/* Row START */}
        <div className="row g-4">
          {/* Widget 1 START */}
          <div className="col-lg-3">
            {/* logo */}
            <a className="me-0" href="/">
              <b className="text-light h3">SEI Innovations</b>
            </a>
            <p className="my-3 text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              totam debitis asperiores voluptates earum facere cumque maiores
              iste placeat!{" "}
            </p>
            {/* Social media icon */}
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="#"
                >
                  <i className="fab fa-fw fa-facebook-f" />
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="#"
                >
                  <i className="fab fa-fw fa-instagram" />
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-twitter"
                  href="#"
                >
                  <i className="fab fa-fw fa-twitter" />
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="#"
                >
                  <i className="fab fa-fw fa-linkedin-in" />
                </a>{" "}
              </li>
            </ul>
          </div>
          {/* Widget 1 END */}
          {/* Widget 2 START */}
          <div className="col-lg-6">
            <div className="row g-4">
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4 text-white">Company</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      News and Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Library
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4 text-white">Community</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Documentation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Faq
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Forum
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4 text-white">Teaching</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Become a teacher
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      How to guide
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Terms &amp; Conditions
                    </a>
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
                    Developed By- MD Saymum Islam Siyam
                  </a>
                </b>
                <br />
                Copyrights{" "}
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
