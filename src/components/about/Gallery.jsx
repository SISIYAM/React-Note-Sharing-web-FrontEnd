import { useState, useEffect } from "react";

const fetchImagesFromDrive = async () => {
  const folderId = "10ZyS3rP3Rt3aBzbTG0tAIT0SngLVvAFz";
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents and mimeType contains 'image/'&key=${apiKey}`
  );
  const data = await response.json();

  if (data.files) {
    return data.files;
  } else {
    throw new Error("Failed to fetch images");
  }
};
function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImagesFromDrive()
      .then((files) => setImages(files))
      .catch((error) => console.error(error));
  }, []);
  console.log(images);
  return (
    <div className="row position-relative mb-0">
      <div className="col-lg-8 text-center mx-auto position-relative">
        <figure className="position-absolute top-0 start-0 ms-n9">
          <svg width="22px" height="22px" viewBox="0 0 22 22">
            <polygon
              className="fill-orange"
              points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "
            />
          </svg>
        </figure>
        {/* SVG decoration */}
        <figure className="position-absolute top-100 start-100 translate-middle ms-5 d-none d-lg-block">
          <svg width="21.5px" height="21.5px" viewBox="0 0 21.5 21.5">
            <polygon
              className="fill-danger"
              points="21.5,14.3 14.4,9.9 18.9,2.8 14.3,0 9.9,7.1 2.8,2.6 0,7.2 7.1,11.6 2.6,18.7 7.2,21.5 11.6,14.4 18.7,18.9 "
            />
          </svg>
        </figure>
        {/* SVG decoration */}
        <figure className="position-absolute top-0 start-100 translate-middle d-none d-md-block">
          <svg width="27px" height="27px">
            <path
              className="fill-purple"
              d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
            />
          </svg>
        </figure>
        {/* Title */}
        <h3>Developed by MD Saymum Islam Siyam </h3>

        <div className="row">
          {images.map((image) => (
            <div className="col-md-4">
              <div className="gallery-item">
                <img
                  key={image.id}
                  src={`https://drive.google.com/uc?export=view&id=${image.id}`}
                  alt={image.name}
                  className="img-fluid"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
