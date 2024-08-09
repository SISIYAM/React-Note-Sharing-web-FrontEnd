import React from "react";

function Banner() {
  return (
    <section className="py-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-dark p-4 text-center rounded-3">
              <h1 className="text-white m-0">Faculties list</h1>
              {/* Breadcrumb */}
              <div className="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Faculties list
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
