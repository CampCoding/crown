import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import thumb from "public/images/agency/thumb-one-new.png";
import NetworkGrid from "@/components/layout/NetworkGrid";

gsap.registerPlugin(ScrollTrigger);

const AboutUsBanner = () => {
  useEffect(() => {
    const device_width = window.innerWidth;
    if (device_width > 576) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-banner",
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

      tl.to(
        ".about-banner__thumb",
        {
          y: "50px",
          duration: 2,
        },
        "<"
      );
    }
  }, []);

  return (
    <section className="banner about-banner pb-0! pt-45! fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="banner__content text-start">
              <span className="sub-title">
                About Crown
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h1 className="text-uppercase fw-9 mb-0 title-anim">
                Building <span className="text-stroke">Digital</span> <br />
                Success Stories
              </h1>
              <div className="banner__content-inner fade-top">
                <p>
                  Crown is a leading digital agency dedicated to transforming
                  brands through creative shooting, strategic content creation,
                  and innovative business development. We partner with
                  visionaries to build lasting visual identities.
                </p>
                <div className="cta section__content-cta">
                  <div className="single">
                    <h5 className="fw-7">12+</h5>
                    <p className="fw-5">years of experience</p>
                  </div>
                  <div className="single">
                    <h5 className="fw-7">25k</h5>
                    <p className="fw-5">completed projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-banner__thumb fade-right">
              <Image src={thumb} alt="Image" className="unset" />
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />

      <div className="banner-left-text banner-social-text d-none d-md-flex">
        <Link href="mailto:info@crown.com">mail : info@crown.com</Link>
        <Link href="tel:99-2158-003-6980">Call : +99 2158 003 6980</Link>
      </div>

      <NetworkGrid />
    </section>
  );
};

export default AboutUsBanner;
