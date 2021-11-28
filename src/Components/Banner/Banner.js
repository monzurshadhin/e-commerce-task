import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container" id="banner">
        <Carousel>
          <Carousel.Item>
            <div className="row w-75 mx-auto slider-section">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <div className="">
                  <div>
                    <h3>
                      HP 15s-du1087TU Intel Celeron N4020 15.6 inch FHD Laptop
                      with Win 10
                    </h3>
                    <p>
                      Intel Celeron Processor N4020 (4M Cache, up to 2.80 GHz){" "}
                      <br />
                      4GB DDR4 RAM + 1TB HDD <br />
                      15.6 inch Full HD 1920x1080 Display <br />
                      Windows 10 Home
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <img
                  className="d-block img-fluid banner-img"
                  src="https://i.ibb.co/NnFsC4k/hp-15s-0002-228x228.jpg"
                  alt="carousel images"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row w-75 mx-auto slider-section">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <div className="">
                <div>
                    <h3>
                    HP 15s-du1115TU Celeron N4020 15.6" HD Laptop
                    </h3>
                    <p>
                      Intel Celeron Processor N4020 (4M Cache, up to 2.80 GHz){" "}
                      <br />
                      4GB DDR4 RAM + 1TB HDD <br />
                      15.6 inch Full HD 1920x1080 Display <br />
                      Windows 10 Home
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <img
                  className="d-block img-fluid banner-img"
                  src="https://i.ibb.co/jJySZsC/hp-15s-00010-228x228.jpg"
                  alt="carousel images"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row w-75 mx-auto slider-section">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <div className="">
                <div>
                    <h3>
                    HP 15s-du1114TU Celeron N4020 15.6" HD Laptop
                    </h3>
                    <p>
                      Intel Celeron Processor N4020 (4M Cache, up to 2.80 GHz){" "}
                      <br />
                      4GB DDR4 RAM + 1TB HDD <br />
                      15.6 inch Full HD 1920x1080 Display <br />
                      Windows 10 Home
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <img
                  className="d-block img-fluid banner-img"
                  src="https://i.ibb.co/mC2Lrhz/hp-15s-du1088tu-228x228.jpg"
                  alt="carousel images"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
