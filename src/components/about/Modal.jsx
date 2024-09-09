// Modal.js
import React from "react";
import "./modal.css"; // Add necessary CSS for modal styling

const Modal = ({ isOpen, onClose, currentImage, images, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <img
          src={`/assets/images/memories/${currentImage}`}
          alt="modal"
          className="img-fluid"
        />
        <div className="modal-controls">
          <button
            onClick={onPrev}
            disabled={images.indexOf(currentImage) === 0}
          >
            Prev
          </button>
          <button
            onClick={onNext}
            disabled={images.indexOf(currentImage) === images.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
