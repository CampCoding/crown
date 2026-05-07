import React, { Fragment, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { useRouter } from "next/router";
import Header from "./header/Header";
import HeaderTwo from "./header/HeaderTwo";
import HeaderThree from "./header/HeaderThree";
import HeaderFour from "./header/HeaderFour";
import HeaderFive from "./header/HeaderFive";
import Footer from "./footer/Footer";
import FooterTwo from "./footer/FooterTwo";
import FooterThree from "./footer/FooterThree";
import FooterFour from "./footer/FooterFour";
import FooterFive from "./footer/FooterFive";
import VideoModal from "./VideoModal";
import ScrollProgressBtn from "./ScrollProgressBtn";
import CustomCursor from "./CustomCursor";
import SplitType from "split-type";
import dynamic from "next/dynamic";
const SplashCursor = dynamic(() => import("../SplashCursor"), { ssr: false });
import NetworkGrid from "./NetworkGrid";
import FloatingSocials from "./FloatingSocials";
import SEO from "../Seo"; // 👈 NEW: Default SEO fallback
const LightRays = dynamic(() => import("../containers/LightRays"), {
  ssr: false,
});

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  video?: React.ReactNode;
};

const Layout = ({
  children,
  header,
  footer,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
  video,
}: LayoutProps) => {
  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".topy-tilt");

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();

  const classMappings: Record<string, string> = {
    "/index-light": "home-light",
    "/index-two-light": "home-two-light",
    "/index-three-light": "home-three-light",
    "/index-four-light": "home-four-light",
    "/index-five-light": "home-five-light",
  };

  const classNameForCurrentPath = classMappings[router.pathname] || "";

  let additionalClasses = " ";

  const combinedClasses = `${additionalClasses} my-app`;

  const combinedClassName = `${combinedClasses}${
    openNav ? " body-active" : ""
  } ${classNameForCurrentPath}`;

  // fade animation
  useEffect(() => {
    const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

    fadeWrapperRefs.forEach((fadeWrapperRef) => {
      const fadeItems = fadeWrapperRef.querySelectorAll(
        ".fade-top, .fade-left, .fade-right"
      );

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;
        const isLeft = element.classList.contains("fade-left");
        const isRight = element.classList.contains("fade-right");
        const isTop = element.classList.contains("fade-top");

        gsap.set(element, {
          opacity: 0,
          y: isTop ? 100 : 0,
          x: isLeft ? -100 : isRight ? 100 : 0,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              x: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll(".appear-down");

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    const myText = new SplitType(".title-anim");
    const titleAnims = document.querySelectorAll(".title-anim");

    titleAnims.forEach((titleAnim) => {
      const charElements = titleAnim.querySelectorAll(".char");

      charElements.forEach((char, index) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const charDelay = index * 0.03;

        tl2.from(char, {
          duration: 0.8,
          x: 70,
          delay: charDelay,
          autoAlpha: 0,
        });
      });
    });
  }, []);

  // 🔥 Auto-generate SEO based on current route
  const getDefaultSEOForRoute = () => {
    const pathname = router.pathname;
    const routeMap: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Home",
        description:
          "Crown — A premier Marketing & Software Development Agency. We craft digital experiences, build powerful applications, and scale brands worldwide.",
      },
      "/about-us": {
        title: "About Us",
        description:
          "Discover Crown's story, vision, and the team behind our cutting-edge marketing and software solutions.",
      },
      "/our-services": {
        title: "Our Services",
        description:
          "Explore Crown's full range of services: UI/UX Design, Web & Mobile Development, SEO, Branding, Performance Marketing, and Content Creation.",
      },
      "/service-single": {
        title: "Service Details",
        description:
          "Learn more about our specialized digital services and how Crown can help scale your brand.",
      },
      "/our-projects": {
        title: "Our Projects",
        description:
          "Browse Crown's portfolio of successful projects across various industries — from startups to enterprises.",
      },
      "/portfolio": {
        title: "Portfolio",
        description:
          "Explore Crown's award-winning portfolio of marketing campaigns and software development projects.",
      },
      "/project-single": {
        title: "Project Details",
        description:
          "A deep dive into one of Crown's signature projects — case study, strategy, and results.",
      },
      "/blog": {
        title: "Blog & News",
        description:
          "Stay updated with the latest insights from Crown on marketing trends, software innovations, and industry news.",
      },
      "/blog-single": {
        title: "Blog Post",
        description: "Read in-depth articles from Crown's team of experts.",
      },
      "/contact-us": {
        title: "Contact Us",
        description:
          "Get in touch with Crown today. Let's talk about your next big project — marketing, branding, or software.",
      },
      "/our-story": {
        title: "Our Story",
        description:
          "The journey behind Crown — how we became a trusted name in marketing and software development.",
      },
      "/our-teams": {
        title: "Our Team",
        description:
          "Meet the talented professionals at Crown driving innovation across marketing and software.",
      },
      "/team-single": {
        title: "Team Member",
        description: "Get to know one of Crown's expert team members.",
      },
      "/faq": {
        title: "FAQ",
        description:
          "Frequently asked questions about Crown's services, processes, and pricing.",
      },
      "/client-feedback": {
        title: "Client Feedback",
        description:
          "Real testimonials from Crown's satisfied clients across the globe.",
      },
    };

    return (
      routeMap[pathname] || {
        title: "Crown — Marketing & Software Agency",
        description:
          "Crown is a full-service marketing and software development agency. We build, brand, and scale.",
      }
    );
  };

  const defaultSEO = getDefaultSEOForRoute();

  return (
    <Fragment>
      {/* 🌟 Default SEO fallback - Each page can override with its own <SEO /> */}
      <SEO title={defaultSEO.title} description={defaultSEO.description} />

      <div className={combinedClassName}>
        {header === 1 && (
          <Header
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 2 && (
          <HeaderTwo
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 3 && (
          <HeaderThree
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 4 && (
          <HeaderFour
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 5 && (
          <HeaderFive
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}

        <main>{children}</main>

        <LightRays />
        <NetworkGrid />

        {footer === 1 && <Footer />}
        {footer === 2 && <FooterTwo />}
        {footer === 3 && <FooterThree />}
        {footer === 4 && <FooterFour />}
        {footer === 5 && <FooterFive />}

        <ScrollProgressBtn />
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#0072ed"
        />
        <FloatingSocials />
      </div>
    </Fragment>
  );
};

export default Layout;
