import React, { useEffect, useState } from "react";
import Star from "./star/Star";
import axios from "axios";
import baseUrl, { timeAgo } from "./Myconst";
import { toast } from "react-toastify";
import ActiveStar from "./star/ActiveStar";

function Review(props) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [sending, setSending] = useState(false);
  const [avgRating, setAvgRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleChange = () => {
    setIsOn(!isOn);
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const body = {
      rating: rating,
      pdf_id: props.pdfId,
      name: isOn ? "Anonymous Student" : e.target.name.value,
      department: e.target.department.value,
      batch: e.target.batch.value,
      review: e.target.review.value,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/request/material/pdf/review`,
        body
      );

      if (response.data.status === 200) {
        toast.success(response.data.message);
        // add the new review to the end of the list
        setReviews((prevReviews) =>
          [...prevReviews, body].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
        e.target.reset(); // reset form fields
      }
    } catch (error) {
      console.log(error.response.data.errors);
      if (error.response.data.status === 422) {
        const errors = error.response.data.errors;
        for (const key in errors) {
          if (errors[key]) {
            toast.error(errors[key][0]);
          }
        }
      }
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const body = {
      pdf_id: props.pdfId,
    };
    handleFetchReviews(body);
  }, [reviews]);

  const handleFetchReviews = async (body) => {
    try {
      const response = await axios.post(
        `${baseUrl}/request/material/pdf/review/all`,
        body
      );

      if (response.data.status === 200) {
        const sortedReviews = response.data.review.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setReviews(sortedReviews);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleSending = () => (
    <button className="btn btn-success" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm mx-2"
        role="status"
        aria-hidden="true"
      />
      Sending...
    </button>
  );

  // calculate average rating

  useEffect(() => {
    if (reviews.length === 0) return;
    // collect ratings
    const ratings = reviews.map((res) => Number(res.rating));
    // calculate average rating
    const average =
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
    setAvgRating(average);
  }, [reviews]); // depend on reviews so it updates when reviews change
  return (
    <div
      className="tab-pane fade"
      id="course-pills-4"
      role="tabpanel"
      aria-labelledby="course-pills-tab-4"
    >
      <div className="row mb-4">
        <h5 className="mb-4">Reviews</h5>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="text-center">
            <h2 className="mb-0">{avgRating.toFixed(1)}/5</h2>
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-0">
                <i className="fas fa-star text-warning" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        {currentReviews.map((res, index) => (
          <>
            <div key={index} className="d-md-flex my-4 p-3 bg-light rounded">
              <div>
                <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                  <h5 className="me-3 mb-0">{res.name}</h5>

                  <ActiveStar rating={res.rating} />
                </div>
                <p className="small mb-2">{timeAgo(res.created_at)}</p>
                <p className="mb-2 reviewField">{res.review}</p>
              </div>
            </div>
            <hr />
          </>
        ))}
        <nav
          className="mt-4 d-flex justify-content-center"
          aria-label="navigation"
        >
          <ul className="pagination pagination-primary-soft rounded mb-0">
            <li className="page-item mb-0">
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
                aria-disabled={currentPage === 1}
              >
                <i className="fas fa-angle-double-left"></i>
              </a>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item mb-0 ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li className="page-item mb-0">
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                aria-disabled={currentPage === totalPages}
              >
                <i className="fas fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-2">
        <h5 className="mb-4">Leave a Review</h5>
        <form onSubmit={handleSubmit} className="row g-3">
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
              <input type="hidden" value="Anonymous Student" name="name" />
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
            {sending ? (
              handleSending()
            ) : (
              <button type="submit" className="btn btn-primary px-4">
                Submit Review
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Review;
