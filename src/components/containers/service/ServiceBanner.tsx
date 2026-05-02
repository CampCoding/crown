import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Mail, Phone, Sparkles, ChevronRight } from "lucide-react";

// Images & Components
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import thumb from "public/images/agency/thumb-two-new.png";
import NetworkGrid from "@/components/layout/NetworkGrid";
import Orb from "../../Orb";

// New high-tech assets
import serviceBg from "public/images/service/service-bg.png";
import techTeam from "public/images/service/tech-team.png";
import abstractTech from "public/images/service/abstract-tech.png";

gsap.registerPlugin(ScrollTrigger);

interface ServiceBannerProps {
  title?: string;
  subtitle?: string;
}

// Custom Rough Notation Component
const RoughNotation = ({ children, color = "#ffdf00", strokeWidth = 3, show = true }: { children: React.ReactNode, color?: string, strokeWidth?: number, show?: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (show && pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.fromTo(pathRef.current, 
        { strokeDashoffset: length, strokeDasharray: length },
        { strokeDashoffset: 0, duration: 1, ease: "power2.inOut", delay: 1.5 }
      );
    }
  }, [show]);

  return (
    <span className="position-relative d-inline-block px-2">
      {children}
      <svg
        className="position-absolute top-0 start-0 w-100 h-100 overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ pointerEvents: 'none', zIndex: -1 }}
      >
        <path
          ref={pathRef}
          d="M5,50 C5,10 95,10 95,50 C95,90 5,90 5,50 Z M10,45 C15,15 85,15 90,45 C95,75 5,75 10,45"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.8 }}
        />
      </svg>
    </span>
  );
};

const ServiceBanner = ({ 
  title = "Empowering Brands Through Innovation", 
  subtitle = "Our Expertise" 
}: ServiceBannerProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);
  
  // Independent image refs for animations
  const imgMainRef = useRef<HTMLDivElement>(null);
  const imgOverlay1Ref = useRef<HTMLDivElement>(null);
  const imgOverlay2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Entry Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      tl.fromTo(cardRef.current, 
        { opacity: 0, x: -150, rotateY: -20 }, 
        { opacity: 1, x: 0, rotateY: 0, duration: 2 }
      )
      .from(".title-span", {
        y: 80,
        opacity: 0,
        rotateX: -45,
        stagger: 0.1,
      }, "-=1.5")
      .from([imgMainRef.current, imgOverlay1Ref.current, imgOverlay2Ref.current], {
        opacity: 0,
        x: 50,
        scale: 0.8,
        stagger: 0.2,
        duration: 2
      }, "-=1.8")
      .from(".stat-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2
      }, "-=1");

      // 2. Continuous Floating Animations (Independent Speeds)
      gsap.to(imgMainRef.current, {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(imgOverlay1Ref.current, {
        y: -25,
        x: -10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      gsap.to(imgOverlay2Ref.current, {
        y: 20,
        x: 15,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // 3. Magnetic Hover Effect for Content Card
      const handleMouseMove = (e: MouseEvent) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.05;
        const y = (e.clientY - top - height / 2) * 0.05;
        
        gsap.to(cardRef.current, {
          x: x,
          y: y,
          rotateX: -y * 0.5,
          rotateY: x * 0.5,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)"
        });
      };

      cardRef.current?.addEventListener("mousemove", handleMouseMove);
      cardRef.current?.addEventListener("mouseleave", handleMouseLeave);

      // 4. Parallax Background
      gsap.to(".parallax-bg", {
        y: (i, target) => -150 * parseFloat(target.getAttribute("data-speed") || "1"),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="service-banner bg-(--black)! min-h-100! py-50! position-relative d-flex align-items-center overflow-hidden"
      style={{ background: "#050505", perspective: "1500px" }}
    >
      {/* Immersive Background Image */}
      <div className="position-absolute inset-0 z-0">
        {/* <Image 
          src={serviceBg} 
          alt="Banner Background" 
          fill 
          className="object-fit-cover opacity-40"
          priority
        /> */}
        {/* <div className="position-absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" /> */}
      </div>

      <NetworkGrid opacity={0.15} />
      
      {/* Dynamic Background Orb */}
      <div 
        ref={orbContainerRef}
        className="position-absolute top-50 start-50 translate-middle opacity-30"
        style={{ width: "1200px", height: "1200px", zIndex: 1, pointerEvents: "none" }}
      >
        <Orb hue={210} hoverIntensity={0.5} backgroundColor="transparent" />
      </div>

      {/* Decorative Parallax Elements */}
      <div className="parallax-bg position-absolute top-10 start-15 star z-2" data-speed="3">
        <Image src={star} alt="star" width={60} className="opacity-40 animate-pulse-slow" />
      </div>
      <div className="parallax-bg position-absolute bottom-10 end-10 dot-large z-2" data-speed="1.5">
        <Image src={dotlarge} alt="dot" width={180} className="opacity-20" />
      </div>

      <div className="container position-relative z-3">
        <div className="row g-5 align-items-center">
          
          {/* Content Column */}
          <div className="col-12 col-xl-6">
            <div 
              ref={cardRef}
              className="creative-card p-4 p-md-5 rounded-5 shadow-3xl"
            >
              <div className="badge-glow d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-4">
                <Sparkles size={16} className="text-primary animate-bounce" />
                <span className="text-primary small fw-bold text-uppercase ls-2">{subtitle}</span>
                <ArrowUpRight size={14} className="text-white-50" />
              </div>

              <h1 className="display-3 fw-900 text-white text-uppercase mb-4 lh-1-1">
                {title.split(' ').map((word, i) => {
                  const isAnnotated = word === "Innovation";
                  const isStroke = word === "Brands";
                  
                  return (
                    <span key={i} className="d-inline-block title-span" style={{ transformStyle: "preserve-3d" }}>
                      {isAnnotated ? (
                        <RoughNotation color="#0072ed">
                          <span className="annotated-word">
                            {word}&nbsp;
                          </span>
                        </RoughNotation>
                      ) : (
                        <span className={isStroke ? "text-stroke-premium" : ""}>
                          {word}&nbsp;
                        </span>
                      )}
                      {(i === 1 || i === 3) && <br className="d-none d-md-block" />}
                    </span>
                  );
                })}
              </h1>

              <p className="text-white-70 mb-5 fs-5 max-w-500 leading-relaxed">
                We craft end-to-end digital experiences that define industries. 
                From immersive UI architecture to strategic scaling, we ensure 
                your brand cuts through the noise with creative precision.
              </p>

              {/* Stats Row */}
              <div className="d-flex flex-wrap gap-5 mb-5">
                <div className="stat-item">
                  <h2 className="display-5 fw-900 text-primary mb-0">100+</h2>
                  <p className="text-white-50 small text-uppercase ls-1">Global Clients</p>
                </div>
                <div className="vr opacity-20 d-none d-sm-block"></div>
                <div className="stat-item">
                  <h2 className="display-5 fw-900 text-white mb-0">98%</h2>
                  <p className="text-white-50 small text-uppercase ls-1">Satisfaction</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary-pill">
                  GET STARTED <ChevronRight size={18} className="ms-2" />
                </Link>
                <Link href="/services" className="btn-outline-white-pill">
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </div>

          {/* Multi-Image Composition Column */}
          <div className="col-12 col-xl-6 position-relative">
            <div className="image-composition-wrapper">
              
              {/* Main Image Card */}
              <div 
                ref={imgMainRef}
                className="img-card main-img rounded-5 overflow-hidden border border-white-10"
              >
                <Image 
                  src={techTeam} 
                  alt="Team Collaboration" 
                  fill 
                  className="object-fit-cover transition-all duration-700" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Top Overlay Card */}
              <div 
                ref={imgOverlay1Ref}
                className="img-card overlay-top rounded-4 overflow-hidden border border-white-20 shadow-2xl"
              >
                <Image 
                  src={abstractTech} 
                  alt="Tech Abstract" 
                  fill 
                  className="object-fit-cover" 
                />
                <div className="glass-overlay" />
              </div>

              {/* Bottom Overlay Card */}
              <div 
                ref={imgOverlay2Ref}
                className="img-card overlay-bottom rounded-4 overflow-hidden border border-white-20 shadow-2xl"
              >
                <Image 
                  src={thumb} 
                  alt="Visual Concept" 
                  fill 
                  className="object-fit-cover" 
                />
                
                {/* Floating ORB Indicator */}
                <div className="orb-badge position-absolute bottom-3 left-3 d-flex align-items-center gap-2 px-3 py-1 rounded-pill">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-white tiny fw-bold ls-1">ORB ACTIVE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .service-banner {
          min-height: 100vh;
        }
        .creative-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: border 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .creative-card:hover {
          border: 1px solid rgba(0, 114, 237, 0.3);
        }
        .badge-glow {
          background: rgba(0, 114, 237, 0.1);
          border: 1px solid rgba(0, 114, 237, 0.2);
        }
        .text-stroke-premium {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.3);
          transition: -webkit-text-stroke 0.3s ease;
        }
        .text-stroke-premium:hover {
          -webkit-text-stroke: 1.5px var(--primary-color);
        }
        .annotated-word {
          color: var(--primary-color);
          text-shadow: 0 0 20px rgba(0, 114, 237, 0.4);
        }
        .lh-1-1 { line-height: 1.1; }
        .ls-2 { letter-spacing: 2px; }
        .ls-1 { letter-spacing: 1px; }
        .tiny { font-size: 10px; }
        .max-w-500 { max-width: 500px; }
        
        /* Image Composition Styling */
        .image-composition-wrapper {
          position: relative;
          height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img-card {
          position: absolute;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7);
        }
        .main-img {
          width: 85%;
          height: 80%;
          z-index: 1;
        }
        .overlay-top {
          width: 240px;
          height: 200px;
          top: 0;
          left: -20px;
          z-index: 3;
        }
        .overlay-bottom {
          width: 280px;
          height: 220px;
          bottom: 10px;
          right: -10px;
          z-index: 2;
        }
        .glass-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
          pointer-events: none;
        }
        .orb-badge {
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* Buttons Styling */
        .btn-primary-pill {
          display: inline-flex;
          align-items: center;
          padding: 14px 30px;
          background: var(--primary-color);
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(0, 114, 237, 0.4);
        }
        .btn-primary-pill:hover {
          transform: translateY(-3px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px rgba(0, 114, 237, 0.5);
        }
        .btn-outline-white-pill {
          display: inline-flex;
          align-items: center;
          padding: 14px 30px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-outline-white-pill:hover {
          background: white;
          color: var(--primary-color);
          border-color: white;
          transform: translateY(-3px);
        }

        .animate-pulse-slow { animation: pulse 6s infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 1199px) {
          .image-composition-wrapper {
            height: 450px;
            margin-top: 3rem;
          }
          .overlay-top { width: 180px; height: 150px; left: 0; }
          .overlay-bottom { width: 200px; height: 160px; right: 0; }
        }
        @media (max-width: 575px) {
          .display-3 { font-size: 2.2rem; }
          .image-composition-wrapper { height: 350px; }
          .overlay-top, .overlay-bottom { display: none; }
          .main-img { width: 100%; height: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ServiceBanner;