import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import thumbone from "public/images/agency/thumb-one-new.png";
import thumbtwo from "public/images/agency/thumb-two-new.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import NetworkGrid from "@/components/layout/NetworkGrid";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });

    // Parallax effect for thumbs
    if (window.innerWidth > 991) {
      gsap.to(".thumb-one", {
        y: -50,
        scrollTrigger: {
          trigger: ".agency",
          start: "top bottom",
          scrub: true,
        },
      });
      gsap.to(".thumb-two", {
        y: 50,
        scrollTrigger: {
          trigger: ".agency",
          start: "top bottom",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className="section py-0! agency fade-wrapper overflow-hidden">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb fade-left">
              <Image
                src={thumbone}
                alt="Crown Agency Team"
                className="thumb-one"
                priority
              />
              <Image
                src={thumbtwo}
                alt="Crown Agency Work"
                className="thumb-two"
                priority
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content fade-top">
              <span className="sub-title text-white!">
                WELCOME
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Empowering Brands Through Marketing & Software Excellence
              </h2>
              <div className="paragraph">
                <p>
                  Crown Agency is a forward-thinking marketing and software
                  agency dedicated to transforming visions into reality. We
                  combine strategic branding, performance marketing, and
                  cutting-edge software development to help your business lead
                  in a competitive market.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Marketing & Branding</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="95%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Web & Mobile Development</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section__content-cta">
                <Link
                  href="/about-us"
                  className="btn btn--primary hover:text-white!"
                >
                  Know More
                </Link>
              </div>
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
      <NetworkGrid />
    </section>
  );
};

export default Agency;
