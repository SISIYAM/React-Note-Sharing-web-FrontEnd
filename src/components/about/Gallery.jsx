import { useState } from "react";
import "./about.css";
import Modal from "./Modal";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetchImagesFromDrive()
  //     .then((files) => setImages(files))
  //     .catch((error) => console.error(error));
  // }, []);
  const images = [
    "photo_6269336802917727436_y.jpg",
    "IMG-20231010-WA0010.jpg",
    "IMG-20230818-WA0000.jpg",
    "IMG-20230912-WA0000.jpg",
    "IMG-20230919-WA0003.jpg",
    "photo_6269336802917727438_y.jpg", // shuvo
    "IMG-20231010-WA0032.jpg",
    "IMG-20231010-WA0037.jpg",
    "IMG-20231010-WA0045.jpg",
    "IMG-20231010-WA0084.jpg",
    "photo_6269336802917727442_y.jpg",
    "photo_6269336802917727443_y.jpg",
    "photo_6269336802917727444_y.jpg",
    "IMG-20231025-WA0000.jpg",
    "IMG-20231115-WA0026.jpg",
    "IMG-20231115-WA0040.jpg",
    "photo_6269336802917727445_y.jpg",
    "IMG-20231206-WA0001.jpg",
    "WhatsApp Image 2024-02-15 at 22.41.04_9454a957.jpg",
    "groupPhoto.jpg",
    "IMG-20230930-WA0006.jpg",
    "IMG-20231004-WA0004.jpg",
    "photo_6269336802917727428_y.jpg", // ghar
    "IMG-20231004-WA0005.jpg",
    "photo_6269336802917727439_y.jpg",
    "IMG-20231004-WA0006.jpg",
    "WhatsApp Image 2023-10-16 at 09.03.50_2474d88b.jpg",
    "photo_6269336802917727435_y.jpg",
    "WhatsApp Image 2023-10-16 at 09.03.51_4d9f9904.jpg",
    "WhatsApp Image 2023-10-16 at 09.03.54_c410196a.jpg",
    "IMG-20231012-WA0004.jpg",
    "photo_6269336802917727429_y.jpg",
    "photo_6269336802917727430_y.jpg",
    "photo_6269336802917727431_y.jpg",
    "IMG-20231010-WA0033.jpg",
    "photo_6269336802917727432_y.jpg",
    "photo_6269336802917727433_y.jpg",
    "photo_6269336802917727446_y.jpg",
    "photo_6269336802917727434_y.jpg",
    "photo_6269336802917727437_y.jpg",
    "IMG-20231010-WA0038.jpg",
    "photo_6269336802917727447_y.jpg",
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex < images.length - 1) {
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(images[currentIndex - 1]);
    }
  };

  return (
    <div className="row position-relative mb-0">
      <div className="col-lg-8 text-center mx-auto position-relative">
        {/* ...SVG decorations and title */}
        <h3>Our Gallery </h3>
        <p style={{ textAlign: "justify" }}>
          Include images from your group's memorable events here. You can create
          a gallery section by adding images in a grid layout to showcase batch
          photos, events, and significant moments.
        </p>
        <div className="row">
          {images.map((image, i) => (
            <div className="col-md-4 my-2 imageBox" key={i}>
              <div className="gallery-item" onClick={() => openModal(image)}>
                <img
                  src={`/assets/images/memories/${image}`}
                  alt={image}
                  className="img-fluid"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          currentImage={currentImage}
          images={images}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </div>
  );
}

export default Gallery;
