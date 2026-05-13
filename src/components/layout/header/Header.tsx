import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import logo from "public/images/logo.png";
import logo from 'public/images/Untitled-1-removebg-preview.png';
import Offcanvas from "./Offcanvas";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultClasses = "primary-navbar py-0! secondary--navbar";
  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar flex justify-between items-center p-0 gap-3">
                  {/* Logo */}
                  <div className="navbar__logo flex-shrink-0">
                    <Link href="/" aria-label="Crown - go to home">
                      <Image
                        src={logoSrc}
                        alt="Crown Agency Logo"
                        priority
                        width={120}
                        height={40}
                      />
                    </Link>
                  </div>

                  {/* Desktop Menu - Hidden when burger is visible */}
                  <div className="navbar__menu d-none d-xl-flex justify-center! items-center!">
                    <ul>
                      <li className="navbar__item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="navbar__item">
                        <Link href="about-us">About Us</Link>
                      </li>
                      <li className="navbar__item">
                        <Link href="our-services">Services</Link>
                      </li>
                      <li className="navbar__item">
                        <Link href="blog">Blog</Link>
                      </li>
                      <li className="navbar__item">
                        <Link href="contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Desktop CTA */}
                  <Link
                    href="contact-us"
                    className="d-none d-xl-flex p-2! group relative items-center gap-3 px-6 py-2.5 border hover:bg-(--black) transition-all duration-300 hover:border-(--black) border-white/20 rounded-full hover:border-white no-underline ml-6 flex-shrink-0"
                  >
                    <span className="text-white text-[11px] hover:text-white font-black uppercase tracking-widest whitespace-nowrap">
                      Get A Proposal
                    </span>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                      <ArrowUpRight
                        className="text-(--black) hover:text-white"
                        size={14}
                      />
                    </div>
                  </Link>

                  {/* 🔥 Premium Burger Button */}
                  <div className="navbar__options flex-shrink-0">
                    <button
                      className={`burger-premium d-xl-none ${
                        openNav ? "is-open" : ""
                      }`}
                      aria-label={openNav ? "Close menu" : "Open menu"}
                      aria-expanded={openNav}
                      onClick={handleNav}
                    >
                      <span className="burger-bg" />
                      <span className="burger-lines">
                        <span className="line line-1" />
                        <span className="line line-2" />
                        <span className="line line-3" />
                      </span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />

      <style jsx>{`
        .primary-navbar {
          transition: all 0.4s ease;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
        }
        .navbar-active {
          background: rgba(5, 5, 5, 0.6) !important;
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 0.75rem !important;
          padding-bottom: 0.75rem !important;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
        }

        :global(.primary-navbar.navbar-active .navbar__logo img) {
          transform: scale(0.9);
          transition: transform 0.4s ease;
        }

        :global(.primary-navbar.navbar-active .navbar__menu ul li a) {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        :global(.primary-navbar.navbar-active .navbar__menu ul li a:hover) {
          color: var(--primary-color) !important;
        }

        /* ============================================ */
        /* 🔥 PREMIUM BURGER BUTTON                     */
        /* ============================================ */

        .burger-premium {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .burger-premium:hover {
          border-color: rgba(0, 114, 237, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -8px rgba(0, 114, 237, 0.4);
        }

        .burger-premium:active {
          transform: translateY(0) scale(0.95);
        }

        .burger-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0072ed, #6366f1);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .burger-premium:hover .burger-bg {
          opacity: 0.15;
        }

        .burger-premium.is-open .burger-bg {
          opacity: 0.25;
        }

        .burger-lines {
          position: relative;
          width: 18px;
          height: 14px;
          z-index: 1;
        }

        .line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: #fff;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          transform-origin: center;
        }

        .line-1 {
          top: 0;
        }

        .line-2 {
          top: 50%;
          transform: translateY(-50%);
          width: 70%;
        }

        .line-3 {
          bottom: 0;
        }

        .burger-premium:hover .line-2 {
          width: 100%;
        }

        /* Open State - Animate to X */
        .burger-premium.is-open .line-1 {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .burger-premium.is-open .line-2 {
          opacity: 0;
          transform: translateY(-50%) scaleX(0);
        }

        .burger-premium.is-open .line-3 {
          bottom: auto;
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }

        /* ============================================ */
        /* RESPONSIVE                                   */
        /* ============================================ */

        @media (max-width: 575px) {
          .burger-premium {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }

          .burger-lines {
            width: 16px;
            height: 12px;
          }
        }

        @media (max-width: 374px) {
          .burger-premium {
            width: 40px;
            height: 40px;
            border-radius: 11px;
          }

          .burger-lines {
            width: 15px;
            height: 11px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
