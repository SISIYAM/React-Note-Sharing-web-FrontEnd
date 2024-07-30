import React from "react";

function Loading() {
  return (
    <section className="pt-3 pt-xl-5">
      <div className="container" data-sticky-container>
        <div className="row g-4">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </button>
        </div>
      </div>
    </section>
  );
}

export default Loading;
