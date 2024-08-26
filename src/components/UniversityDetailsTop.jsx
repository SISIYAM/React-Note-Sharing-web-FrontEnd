import React from "react";

function UniversityDetailsTop(props) {
  return (
    <section className="bg-light py-0 py-sm-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8">
            {/* Title */}
            <h1>{props.name}</h1>
            {/* Content */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                <i className="fas fa-star text-warning me-2" />
                4.5/5.0
              </li>
              <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                <i className="fas fa-user-graduate text-orange me-2" />
                12k Enrolled
              </li>
              <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                <i className="fas fa-folder text-success me-2" />
                {props.semistersLength} Semesters &amp; {props.countMaterials}{" "}
                Materials
              </li>
              <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                <i className="bi bi-patch-exclamation-fill text-danger me-2" />
                Last updated at {props.updated_at}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UniversityDetailsTop;
