import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import thumb from "public/images/agency/thumb-one-new.png";
import NetworkGrid from "@/components/layout/NetworkGrid";
import { COMPANY_INFO } from "@/lib/constants";

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
                About Crown Agency
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h1 className="text-uppercase fw-9 mb-0 title-anim">
                Building <span className="text-stroke">Digital</span> <br />
                Success Stories
              </h1>
              <div className="banner__content-inner fade-top">
                <p>
                  Crown Agency is a leading marketing & software agency
                  dedicated to transforming brands through strategic branding,
                  creative content, performance marketing, and cutting-edge
                  development. We partner with visionaries to build lasting
                  digital identities.
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
              <Image src={thumb} alt="Crown Agency Team" className="unset" />
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="decorative star" className="star" priority />
      <Image
        src={dotlarge}
        alt="decorative dot"
        className="dot-large"
        priority
      />

      <div className="banner-left-text banner-social-text d-none d-md-flex">
        <Link
          href={`mailto:${COMPANY_INFO.email}`}
          aria-label="Email Crown Agency"
        >
          mail : {COMPANY_INFO.email}
        </Link>
        <Link href={`tel:${COMPANY_INFO.phone}`} aria-label="Call Crown Agency">
          Call : {COMPANY_INFO.phone}
        </Link>
      </div>

      <NetworkGrid />
    </section>
  );
};

export default AboutUsBanner;
