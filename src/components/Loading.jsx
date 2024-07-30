import React from "react";
import "./loader/loader.css";
function Loading() {
  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-lg-8 text-center mx-auto">
            <h2 className="fs-1 mt-5">
              <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                  class="spinner-border text-success border-sm ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
