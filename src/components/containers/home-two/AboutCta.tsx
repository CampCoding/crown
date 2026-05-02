import React from "react";
import Image from "next/image";
import star from "public/images/testimonial/star.png";
import NetworkGrid from "@/components/layout/NetworkGrid";

const AboutCta = () => {
  return (
    <section className="cta-s section fade-wrapper position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper"
              data-background="assets/images/cta-bg.png"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center fade-top">
                    <h2 className="title title-anim">
                      Empower Your Brand with Crown&apos;s Expert Digital Solutions
                    </h2>
                  </div>
                  <div className="footer__single-form fade-top">
                    <form action="#" method="post">
                      <div className="input-email">
                        <input
                          type="email"
                          name="subscribe-news"
                          id="subscribeNews"
                          placeholder="Enter Your Email"
                          required
                        />
                        <button type="submit" className="subscribe">
                          <i className="fa-sharp fa-solid fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
      <NetworkGrid />
    </section>
  );
};

export default AboutCta;
