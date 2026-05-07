import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import PixelSnow from "../../PixelSnow";
import { COMPANY_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp link with pre-filled message
  const whatsappMessage = encodeURIComponent(
    `Hello ${COMPANY_INFO.name}! I'm interested in your services.`
  );
  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  // Google Maps link from address
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    COMPANY_INFO.address.full
  )}`;

  return (
    <footer
      className="footer section pb-0 fade-wrapper relative overflow-hidden"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          {/* Column 1: Logo + Contact Info */}
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single fade-top">
              <Link
                href="/"
                className="logo h-26 w-26"
                aria-label="Crown - Home"
              >
                <Image src={logo} alt="Crown Agency Logo" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View location on Google Maps"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  {COMPANY_INFO.address.full}
                </Link>
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  aria-label="Call Crown"
                >
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  {COMPANY_INFO.phone}
                </Link>
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  aria-label="Email Crown"
                >
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  {COMPANY_INFO.email}
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Crown on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Chat on WhatsApp
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="/contact-us" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Discover Links */}
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single fade-top">
              <div className="footer__single-intro">
                <h5>Discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/our-services">Services</Link>
                  </li>
                  <li>
                    <Link href="/our-projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/blog">News & Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single fade-top">
              <div className="footer__single-intro">
                <h5>Subscribe to our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Stay updated with the latest in marketing trends, software
                  innovations, and exclusive insights from {COMPANY_INFO.name}.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                        aria-label="Email for newsletter"
                      />
                      <button
                        type="submit"
                        className="subscribe"
                        aria-label="Subscribe to newsletter"
                      >
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright fade-top">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear"> {currentYear} </span>
                      <strong>{COMPANY_INFO.name}</strong> — All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    {COMPANY_INFO.social.facebook && (
                      <Link
                        href={COMPANY_INFO.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on Facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    )}
                    {COMPANY_INFO.social.instagram && (
                      <Link
                        href={COMPANY_INFO.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on Instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    )}
                    {COMPANY_INFO.social.linkedin && (
                      <Link
                        href={COMPANY_INFO.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    )}
                    {COMPANY_INFO.social.twitter && (
                      <Link
                        href={COMPANY_INFO.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on Twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    )}
                    {COMPANY_INFO.social.behance && (
                      <Link
                        href={COMPANY_INFO.social.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on Behance"
                      >
                        <i className="fa-brands fa-behance"></i>
                      </Link>
                    )}
                    {COMPANY_INFO.social.youtube && (
                      <Link
                        href={COMPANY_INFO.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on YouTube"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    )}
                    {COMPANY_INFO.social.tiktok && (
                      <Link
                        href={COMPANY_INFO.social.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Crown on TikTok"
                      >
                        <i className="fa-brands fa-tiktok"></i>
                      </Link>
                    )}
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Crown on WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
