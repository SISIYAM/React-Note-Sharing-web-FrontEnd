import React from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const CategorySlider = () => {
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    items: 5,
    gutter: 80,
    autoplay: true,
    controls: true,
    responsive: {
      1200: {
        items: 5,
      },
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  };

  const categories = [
    {
      imgSrc: "assets/images/element/22.svg",
      title: "Chemistry",
      link: "#",
    },
    {
      imgSrc: "assets/images/element/23.svg",
      title: "Physics",
      link: "#",
    },
    {
      imgSrc: "assets/images/element/21.svg",
      title: "Technology",
      link: "#",
    },
    {
      imgSrc: "assets/images/element/24.svg",
      title: "Health",
      link: "#",
    },
    {
      imgSrc: "assets/images/element/25.svg",
      title: "Business",
      link: "#",
    },
    {
      imgSrc: "assets/images/element/26.svg",
      title: "Engineer",
      link: "#",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bg-light rounded-3 p-4">
              {/* Slider START */}
              <div className="tiny-slider arrow-round arrow-creative arrow-blur arrow-hover py-1">
                <TinySlider settings={settings}>
                  {categories.map((category, index) => (
                    <div key={index}>
                      <div className="bg-body text-center rounded-2 border py-2 px-1 position-relative">
                        <img
                          src={category.imgSrc}
                          className="h-40px"
                          alt={category.title}
                        />
                        <a
                          href={category.link}
                          className="text-primary-hover stretched-link"
                        >
                          <span className="h6 ms-2">{category.title}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </TinySlider>
              </div>
              {/* Slider END */}
            </div>
          </div>
        </div>
        {/* Row END */}
      </div>
    </section>
  );
};

export default CategorySlider;
