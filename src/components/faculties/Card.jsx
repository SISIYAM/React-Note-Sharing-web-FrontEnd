import React from "react";
import { baseAssetsUrl } from "../Myconst";

function Card(props) {
  return (
    <div className="col-lg-10 col-xl-6">
      <div className="card shadow p-2">
        <div className="row g-0">
          {/* Image */}
          <div className="col-md-4">
            <img
              src={baseAssetsUrl + props.image}
              className="rounded-3"
              alt="..."
            />
          </div>
          {/* Card body */}
          <div className="col-md-8">
            <div className="card-body">
              {/* Title */}
              <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                <div>
                  <h5 className="card-title mb-0">
                    <a href="#">{props.name}</a>
                  </h5>
                  <p className="small mb-2 mb-sm-0">{props.post}</p>
                </div>
              </div>
              {/* Content */}
              <p className="text-truncate-2 mb-3">
                Perceived end knowledge certainly day sweetness why cordially.
                Ask a quick six seven offer see among.
              </p>
              {/* Info */}
              <div className="d-sm-flex justify-content-sm-between align-items-center">
                {/* Title */}
                <h6 className="text-orange mb-0">01722463312</h6>
                {/* Social button */}
                <ul className="list-inline mb-0 mt-3 mt-sm-0">
                  <li className="list-inline-item">
                    <a className="mb-0 me-1 text-facebook" href="#">
                      <i className="bi bi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="mb-0 me-1 text-instagram-gradient" href="#">
                      <i className="bi bi-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="mb-0 me-1 text-twitter" href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="mb-0 text-linkedin" href="#">
                      <i className="bi bi-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
