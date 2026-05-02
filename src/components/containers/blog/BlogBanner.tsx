import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { MoveRight, Zap, Globe, Layers } from "lucide-react";
import NetworkGrid from "../../layout/NetworkGrid";
import Particles from "../../Particles";
import LightPillar from "../../LightPillar";

const BlogBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      tl.from(".side-text", {
        x: -100,
        opacity: 0,
        duration: 1.2
      })
      .from(".main-headline h1", {
        y: 100,
        opacity: 0,
        skewY: 7,
        stagger: 0.2
      }, "-=0.8")
      .from(".floating-mag", {
        scale: 0.5,
        opacity: 0,
        rotate: 15,
        duration: 2,
        ease: "expo.out"
      }, "-=1")
      .from(".info-pill", {
        opacity: 0,
        y: 20,
        stagger: 0.1
      }, "-=1.5");

      // Continuous floating
      gsap.to(".floating-mag", {
        y: 30,
        rotate: -2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="blog-banner-v3  position-relative overflow-hidden d-flex py-50! align-items-center"
      style={{ background: "#1c2a33", minHeight: "90vh" }}
    >
      <LightPillar 
      rotationSpeed={1.3}
    glowAmount={0.002}
    pillarWidth={3}
    pillarHeight={0.4}
    noiseIntensity={0.5}
    pillarRotation={25}
    interactive={false}
    mixBlendMode="screen"
    quality="high"
      />
      {/* Immersive Background */}
      <div className="position-absolute inset-0 z-0">
        <Particles
          particleCount={300}
          speed={0.1}
          sizeRandomness={7}
          particleColors={["#0072ed", "#ffffff"]}
        />
        {/* <div className="gradient-glow position-absolute top-0 end-0 w-50 h-100 opacity-20" /> */}
      </div>

      <div className="container-fluid px-8! position-relative z-1">
        <div className="row g-0 align-items-center">
                  

          {/* Main Content Area */}
          <div className="col-12 col-lg-6 ps-lg-5">
            <div className="main-headline">
              <h1 className="display-1 fw-900 text-white text-uppercase mb-2 lh-0-9">
                Digital 
                <span className="text-stroke">Archetype</span>
              </h1>
              <h1 className="display-4 fw-800 text-primary text-uppercase mb-5">
                Vol. 2024.01
              </h1>

              <p className="text-slate-400 fs-5 mb-5 max-w-500 leading-relaxed info-pill">
                Unveiling the hidden patterns of the digital age. 
                Our blog is a masterclass in technology, design, and 
                the strategy that drives them both.
              </p>

              <div className="d-flex flex-wrap gap-4 info-pill">
                <Link href="#blog-list" className="btn-v3">
                  ACCESS ARCHIVE <MoveRight size={20} />
                </Link>
                <div className="d-flex gap-4">
                  <div className="d-flex align-items-center gap-2 text-slate-500">
                    <Globe size={18} />
                    <span className="tiny fw-bold">GLOBAL REACH</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-slate-500">
                    <Layers size={18} />
                    <span className="tiny fw-bold">100+ ARTICLES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Floating Visual Area */}
          <div className="col-12 col-lg-5 position-relative mt-5 mt-lg-0 text-center">
            <div className="floating-mag-wrapper">
              <div className="floating-mag rounded-md overflow-hidden">
                <Image 
                  src="/images/news/blog-3d-mag.png" 
                  alt="3D Magazine" 
                  width={600} 
                  height={700} 
                  className="img-fluid drop-shadow-blue"
                  priority
                />
              </div>
             
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .blog-banner-v3 {
          padding-top: 100px;
          padding-bottom: 50px;
        }

        .side-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 14px;
        }

        .lh-0-9 { line-height: 0.9; }
        .text-stroke {
          color: transparent;
          -webkit-text-stroke: 1.5px white;
        }

        .gradient-glow {
          background: radial-gradient(circle at top right, var(--primary-color) 0%, transparent 70%);
        }

        .btn-v3 {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 16px 35px;
          background: white;
          color: black;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .btn-v3:hover {
          background: var(--primary-color);
          color: white;
          padding-right: 50px;
        }

        .floating-mag-wrapper {
          position: relative;
          display: inline-block;
        }
        .drop-shadow-blue {
          filter: drop-shadow(0 0 50px rgba(0, 114, 237, 0.4));
        }

        .glassy {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tiny { font-size: 10px; }
        .ls-3 { letter-spacing: 4px; }
        .ls-2 { letter-spacing: 2px; }
        .ls-1 { letter-spacing: 1px; }
        .max-w-500 { max-width: 500px; }
        .uppercase { text-transform: uppercase; }

        @media (max-width: 991px) {
          .display-1 { font-size: 4rem; }
          .blog-banner-v3 { min-height: auto; padding-top: 150px; }
        }
      `}</style>
    </section>
  );
};

export default BlogBanner;
