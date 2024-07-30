import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="/assets/images/element/error404-01.svg"
              className="h-200px h-md-400px mb-4"
              alt="Error 404"
            />

            <h1 className="display-1 text-danger mb-0">404</h1>

            <h2>Oh no, something went wrong!</h2>

            <h5 className="mb-4 text-danger">{props.message}</h5>
            <hr />

            <Link to="/" className="btn btn-primary mb-0">
              Take me to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Setting default props
Error.defaultProps = {
  message:
    "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
};

export default Error;
