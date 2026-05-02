import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import NetworkGrid from "@/components/layout/NetworkGrid";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetailsBanner = () => {
  useEffect(() => {
    const device_width = window.innerWidth;
    if (device_width > 576) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service-details-banner",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".star", {
        opacity: 0,
        scale: 2,
        y: "100%",
        zIndex: -1,
        duration: 2,
      });

      tl.to(
        ".dot-large",
        {
          opacity: 0,
          scale: 1.5,
          x: "50%",
          duration: 2,
        },
        "<"
      );
    }
  }, []);

  return (
    <section className="banner service-details-banner pb-0! pt-45! fade-wrapper position-relative overflow-hidden">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-7">
            <div className="banner__content text-start">
              <span className="sub-title">
                Service Details
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h1 className="text-uppercase fw-9 mb-0 title-anim">
                UX <span className="text-stroke">Design</span> <br />
                Solutions
              </h1>
              <div className="banner__content-inner fade-top">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="our-services">Our Services</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ux Design
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="slide-group justify-content-center justify-content-lg-end fade-right">
              <Link
                href="service-single"
                aria-label="previous item"
                className="slide-btn"
              >
                <i className="fa-light fa-angle-left"></i>
              </Link>
              <Link
                href="service-single"
                aria-label="next item"
                className="slide-btn"
              >
                <i className="fa-light fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />

      <NetworkGrid />
    </section>
  );
};

export default ServiceDetailsBanner;
