import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import Offcanvas from "./Offcanvas";
import { Menu, ArrowUpRight } from "lucide-react";

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar py-0!  secondary--navbar";

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
                <nav className="navbar  flex justify-between p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} alt="Image" priority width={120} height={30} />
                    </Link>
                  </div>
                  <div className="navbar__menu md:hidden  justify-center! flex! items-center!">
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
                      {/* <li className="navbar__item navbar__item--has-children">
                        <button className="navbar__dropdown-label">Services</button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">Our Services</Link>
                          </li>
                          <li>
                            <Link href="service-single">Shooting</Link>
                          </li>
                          <li>
                            <Link href="service-single">Branding & Design</Link>
                          </li>
                          <li>
                            <Link href="service-single">Content Creation</Link>
                          </li>
                          <li>
                            <Link href="service-single">Business Development</Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="navbar__item navbar__item--has-children">
                        <button className="navbar__dropdown-label">Projects</button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-projects">Our Projects</Link>
                          </li>
                          <li>
                            <Link href="project-single">Project Details</Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="navbar__item navbar__item--has-children">
                        <button className="navbar__dropdown-label">Pages</button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="faq">FAQ</Link>
                          </li>
                          <li>
                            <Link href="our-story">Our Story</Link>
                          </li>
                          <li>
                            <Link href="portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link href="client-feedback">Testimonials</Link>
                          </li>
                          <li>
                            <Link href="contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li className="navbar__item">
                        <Link href="blog">Blog</Link>
                      </li>
                      <li className="navbar__item">
                        <Link href="contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  <Link href="contact-us" className="d-none d-xl-flex p-2! group relative items-center gap-3 px-6 py-2.5 border hover:bg-(--black) transition-all duration-300 hover:border-(--black) border-white/20 rounded-full hover:border-white transition-all duration-300 no-underline ml-6">
                    <span className="text-white text-[11px] hover:text-white font-black uppercase tracking-widest">Get A Proposal</span>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="text-(--black) hover:text-white" size={14} />
                    </div>
                  </Link>

                  <div className="navbar__options">
                    <button
                      className="d-xl-none w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    >
                      <Menu className="text-white" size={20} />
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
      `}</style>
    </>
  );
};

export default Header;
