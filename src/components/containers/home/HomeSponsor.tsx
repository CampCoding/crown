import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/sponsor/one-new.png";
import two from "public/images/sponsor/two-new.png";
import three from "public/images/sponsor/three-new.png";
import four from "public/images/sponsor/four-new.png";
import five from "public/images/sponsor/five-new.png";

const HomeSponsor = () => {
  const logos = [one, two, three, four, five, one];
  return (
    <div className="sponsor section pb-0 fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header text-center fade-top">
              <span className="sub-title text-white!">
                Our Partners
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w fade-top">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                {logos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <div className="sponsor__slider-item">
                      <Image src={logo} alt="Image" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeSponsor;
