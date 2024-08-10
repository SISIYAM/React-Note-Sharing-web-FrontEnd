import React, { useState } from "react";
import Star from "./star/Star";

function Review() {
  const [rating, setRating] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  console.log(rating);

  const handleChange = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className="tab-pane fade"
      id="course-pills-4"
      role="tabpanel"
      aria-labelledby="course-pills-tab-4"
    >
      {/* Add review details here */}
      <div className="row mb-4">
        <h5 className="mb-4">Our Student Reviews</h5>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="text-center">
            <h2 className="mb-0">4.5</h2>
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-0">
                <i className="fas fa-star text-warning" />
              </li>
              <li className="list-inline-item me-0">
                <i className="fas fa-star text-warning" />
              </li>
              <li className="list-inline-item me-0">
                <i className="fas fa-star text-warning" />
              </li>
              <li className="list-inline-item me-0">
                <i className="fas fa-star text-warning" />
              </li>
              <li className="list-inline-item me-0">
                <i className="fas fa-star-half-alt text-warning" />
              </li>
            </ul>
            <p className="mb-0">(Based on today’s review)</p>
          </div>
        </div>
        {/* Add review progress here */}
      </div>
      <div className="row">
        {/* Add individual reviews here */}
        <div className="d-md-flex my-4">
          <div className="avatar avatar-xl me-4 flex-shrink-0">
            <img
              className="avatar-img rounded-circle"
              src="assets/images/avatar/09.jpg"
              alt="avatar"
            />
          </div>
          <div>
            <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
              <h5 className="me-3 mb-0">Jacqueline Miller</h5>
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-0">
                  <i className="fas fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="fas fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="fas fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="fas fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="far fa-star text-warning" />
                </li>
              </ul>
            </div>
            <p className="small mb-2">2 days ago</p>
            <p className="mb-2">
              Perceived end knowledge certainly day sweetness why cordially. Ask
              a quick six seven offer see among. Handsome met debating sir
              dwelling age material. As style lived he worse dried. Offered
              related so visitors we private removed. Moderate do subjects to
              distance.
            </p>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
              />
              <label
                className="btn btn-outline-light btn-sm mb-0"
                htmlFor="btnradio1"
              >
                <i className="far fa-thumbs-up me-1" />
                25
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
              />
              <label
                className="btn btn-outline-light btn-sm mb-0"
                htmlFor="btnradio2"
              >
                <i className="far fa-thumbs-down me-1" />2
              </label>
            </div>
          </div>
        </div>
        <hr />
        {/* Add more reviews here */}
      </div>
      <div className="mt-2">
        <h5 className="mb-4">Leave a Review</h5>
        <form className="row g-3">
          <div className="col-md-6 bg-light-input">
            <Star onChangeRating={handleRatingChange} />
          </div>
          <hr />
          <div className="">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Anonymous Review
              </label>
            </div>
          </div>

          {!isOn ? (
            <>
              <div className="col-md-4 bg-light-input">
                <input
                  type="text"
                  className="form-control border-0 rounded-1"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-4 bg-light-input">
                <input
                  type="text"
                  className="form-control border-0 rounded-1"
                  name="department"
                  placeholder="Your department"
                />
              </div>
              <div className="col-md-4 bg-light-input">
                <input
                  type="text"
                  className="form-control border-0 rounded-1"
                  name="batch"
                  placeholder="your batch"
                />
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 bg-light-input">
                <input
                  type="text"
                  className="form-control border-0 rounded-1"
                  name="department"
                  placeholder="Your department"
                />
              </div>
              <div className="col-md-6 bg-light-input">
                <input
                  type="text"
                  className="form-control border-0 rounded-1"
                  name="batch"
                  placeholder="your batch"
                />
              </div>
            </>
          )}

          <div className="col-12 bg-light-input">
            <textarea
              name="review"
              className="form-control border-0 rounded-1"
              id="review-text"
              rows={6}
              placeholder="Write your review..."
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary px-4">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Review;
