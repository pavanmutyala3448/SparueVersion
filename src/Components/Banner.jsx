import React from "react";
import "./ComponentsStyles/Banner.css";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";
import banner4 from "../images/banner-4.png";

const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"

      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="false"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval='500'>
            <img src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cloud Infrastructure for Managed cloud services</h5>
              <p>
              Automated, simple, and affordable to everyone.
Get started building your cool digital stuff right now
              </p>
            </div>
          </div>
          <div className="carousel-item" data-interval='500'>
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cloud Infrastructure for Aws Devops</h5>
              <p>
              Automated, simple, and affordable to everyone.
Get started building your cool digital stuff right now
              </p>
            </div>
          </div>
          <div className="carousel-item" data-interval='500'>
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cloud Infrastructure for Aws Database migrations</h5>
              <p>
              Automated, simple, and affordable to everyone.
Get started building your cool digital stuff right now
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cloud Infrastructure for Security in the cloud - Aws</h5>
              <p>
              Automated, simple, and affordable to everyone.
Get started building your cool digital stuff right now
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Banner;
