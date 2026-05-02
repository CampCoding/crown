import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sthumb from "public/images/testimonial/sthumb-new.png";
import sthumbtwo from "public/images/testimonial/sthumbtwo-new.png";
import sthumbthree from "public/images/testimonial/sthumbthree-new.png";
import NetworkGrid from "../../layout/NetworkGrid";

const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };
  return (
    <section 
    className="section testimonial bg-[#1c2a33]! pt-0 position-relative fade-wrapper">
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          data-cursor="drag"
          className="testimonial__text-slider"
        >
          {[...Array(7)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial__text-slider-single">
                <h2 className="h1">
                  <Link href="client-feedback">
                    client&apos;s testimonial
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w fade-top">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                data-cursor="drag"
                className="testimonial-s__slider"
              >
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={sthumb} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h4>
                              &quot;Crown transformed our brand identity completely. Their shooting team captured our essence in ways we didn&apos;t think possible. The ROI on our last campaign was incredible.&quot;
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Daniel Smith</h5>
                            <p>Marketing Director at TechFlow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={sthumbtwo} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h4>
                              &quot;The content strategy provided by Crown was a game-changer for our social presence. Our engagement rates tripled within three months. Professional and highly creative team!&quot;
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Sarah Jenkins</h5>
                            <p>CEO of Luxe Creative</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={sthumbthree} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h4>
                              &quot;Working with Crown on our business development strategy opened doors we hadn&apos;t even considered. Their holistic approach to branding and digital presence is unmatched.&quot;
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Alex Rivera</h5>
                            <p>Founder of Innovate Lab</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slide-group justify-content-start fade-top">
          <button
            aria-label="previous item"
            className="slide-btn prev-testimonial-three"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-testimonial-three"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="other-section">
        <Image
          className="other-section-image"
          src={
            nextSlideIndex === 0
              ? sthumb
              : nextSlideIndex === 1
              ? sthumbtwo
              : sthumbthree
          }
          alt="Next Slide Image"
        />
      </div>
      
      <NetworkGrid />
    </section>
  );
};

export default HomeTestimonial;
