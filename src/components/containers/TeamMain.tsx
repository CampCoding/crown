import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";
import one from "public/images/teams/one.png";
import two from "public/images/teams/two.png";
import three from "public/images/teams/three.png";
import four from "public/images/teams/four.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={one} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={two} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={three} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={four} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={five} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={six} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
