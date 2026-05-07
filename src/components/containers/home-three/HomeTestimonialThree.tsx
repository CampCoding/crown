import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import sthumb from "public/images/testimonial/s-thumb-real.png";
import sthumbtwo from "public/images/testimonial/s-thumb-two-real.png";
import sthumbthree from "public/images/testimonial/s-thumb-three-real.png";

gsap.registerPlugin(ScrollTrigger);

const HomeTestimonialThree = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-v2__card", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };

  // Crown's Client Testimonials
  const testimonials = [
    {
      name: "Daniel Smith",
      role: "Senior Engineer",
      thumb: sthumb,
      content:
        "Crown delivered a level of precision and innovation we hadn't seen before. Their end-to-end approach helped us scale our digital infrastructure faster than anticipated.",
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      thumb: sthumbtwo,
      content:
        "Crafting digital experiences requires deep understanding of both tech and art. Crown excels at both — delivering results that are as beautiful as they are functional.",
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      thumb: sthumbthree,
      content:
        "Working with Crown was the best decision for our brand. Their strategic UI architecture and growth-focused marketing defined our success in a crowded market.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section testimonial-v2 position-relative overflow-hidden"
    >
      {/* Background Text Slider */}
      <div className="bg-text-slider-wrapper opacity-5 mb-4 mb-md-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={100}
          speed={10000}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          className="bg-text-slider"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <h2 className="bg-marquee-text fw-900 text-white text-uppercase ls-3 m-0">
                CLIENT FEEDBACK • CROWN • INNOVATION • EXPERTISE •
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container position-relative z-2">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-v2__card rounded-5 overflow-hidden p-3 p-sm-4 p-md-5">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                speed={1000}
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testi-v2",
                  prevEl: ".prev-testi-v2",
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                className="testimonial-v2__slider"
              >
                {testimonials.map((testi, index) => (
                  <SwiperSlide key={index}>
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4">
                        <div
                          className="testimonial-thumb-wrapper position-relative mx-auto"
                          style={{ maxWidth: "260px" }}
                        >
                          <div className="thumb-border" />
                          <div className="thumb-inner rounded-circle overflow-hidden border border-white-20 p-2">
                            <Image
                              src={testi.thumb}
                              alt={`${testi.name} - Crown Client`}
                              className="img-fluid rounded-circle"
                            />
                          </div>
                          <div className="quote-icon-box position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center p-2 p-md-3 shadow-xl">
                            <Quote
                              size={18}
                              className="text-white"
                              fill="white"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 text-center text-lg-start mt-4 mt-lg-0">
                        <div className="testimonial-v2__content">
                          <h4 className="testimonial-quote fw-500 text-slate-200 leading-relaxed italic mb-4 mb-md-5">
                            &quot;{testi.content}&quot;
                          </h4>
                          <div className="author-info">
                            <h5 className="text-white fw-900 text-uppercase ls-1 mb-1">
                              {testi.name}
                            </h5>
                            <p className="text-primary small fw-bold text-uppercase ls-2 mb-0">
                              {testi.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="d-flex gap-3 mt-4 mt-md-5 justify-content-center justify-content-lg-start px-2">
                <button
                  className="nav-btn prev-testi-v2"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="nav-btn next-testi-v2"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-v2 {
          background: transparent;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .bg-text-slider-wrapper {
          user-select: none;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-marquee-text {
          font-size: clamp(2.5rem, 8vw, 6rem);
          line-height: 1;
          white-space: nowrap;
        }

        .ls-3 {
          letter-spacing: 10px;
        }
        .ls-2 {
          letter-spacing: 2px;
        }
        .ls-1 {
          letter-spacing: 1px;
        }

        .testimonial-v2__card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }

        /* Quote text - Responsive */
        .testimonial-quote {
          font-size: clamp(1rem, 2vw, 1.5rem);
          line-height: 1.7;
        }

        .testimonial-thumb-wrapper {
          padding: 10px;
        }
        .thumb-border {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed rgba(0, 114, 237, 0.3);
          animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .leading-relaxed {
          line-height: 1.6;
        }

        .nav-btn {
          width: 50px;
          height: 50px;
          min-width: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          transform: scale(1.1);
        }

        /* ============================================ */
        /* RESPONSIVE                                   */
        /* ============================================ */

        @media (max-width: 991px) {
          .testimonial-v2 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .testimonial-v2__card {
            padding: 2rem !important;
          }
          .ls-3 {
            letter-spacing: 6px;
          }
        }

        @media (max-width: 767px) {
          .testimonial-v2 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .testimonial-v2__card {
            padding: 1.5rem !important;
          }
          .testimonial-thumb-wrapper {
            max-width: 200px !important;
          }
          .ls-3 {
            letter-spacing: 4px;
          }
        }

        @media (max-width: 575px) {
          .testimonial-v2__card {
            padding: 1.25rem !important;
            border-radius: 1.5rem !important;
          }
          .testimonial-thumb-wrapper {
            max-width: 170px !important;
          }
          .nav-btn {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonialThree;
