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
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.5 },
      });

      tl.from(".side-text", {
        x: -100,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          ".main-headline h1",
          {
            y: 100,
            opacity: 0,
            skewY: 7,
            stagger: 0.2,
          },
          "-=0.8"
        )
        .from(
          ".floating-mag",
          {
            scale: 0.5,
            opacity: 0,
            rotate: 15,
            duration: 2,
            ease: "expo.out",
          },
          "-=1"
        )
        .from(
          ".info-pill",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
          },
          "-=1.5"
        );

      // Continuous floating
      gsap.to(".floating-mag", {
        y: 30,
        rotate: -2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="blog-banner-v3 position-relative overflow-hidden d-flex py-50! align-items-center"
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
      </div>

      <div className="container-fluid px-4 px-md-5 px-lg-8 position-relative z-1">
        <div className="row g-4 g-lg-0 align-items-center">
          {/* Main Content Area */}
          <div className="col-12 col-lg-6 ps-lg-5">
            <div className="main-headline">
              <h1 className="banner-title fw-900 text-white text-uppercase mb-2 lh-0-9">
                Crown
                <span className="text-stroke">Insights</span>
              </h1>
              <h2 className="banner-volume fw-800 text-primary text-uppercase mb-4 mb-md-5">
                Vol. 2026.01
              </h2>

              <p className="text-slate-400 banner-desc mb-4 mb-md-5 max-w-500 leading-relaxed info-pill">
                Unveiling the hidden patterns of the digital age. Crown
                Agency&apos;s blog is a masterclass in marketing, software,
                design, and the strategy that drives them all.
              </p>

              <div className="d-flex flex-wrap gap-3 gap-md-4 align-items-center info-pill">
                <Link href="#blog-list" className="btn-v3">
                  ACCESS ARCHIVE <MoveRight size={20} />
                </Link>
                <div className="d-flex flex-wrap gap-3 gap-md-4">
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
                  alt="Crown Agency Blog Magazine"
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

        /* Title - Responsive */
        .banner-title {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.9;
        }

        .banner-volume {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
        }

        .banner-desc {
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
        }

        .lh-0-9 {
          line-height: 0.9;
        }
        .text-stroke {
          color: transparent;
          -webkit-text-stroke: 1.5px white;
        }

        .gradient-glow {
          background: radial-gradient(
            circle at top right,
            var(--primary-color) 0%,
            transparent 70%
          );
        }

        .btn-v3 {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 30px;
          background: white;
          color: black;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .btn-v3:hover {
          background: var(--primary-color);
          color: white;
          padding-right: 45px;
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

        .tiny {
          font-size: 10px;
        }
        .ls-3 {
          letter-spacing: 4px;
        }
        .ls-2 {
          letter-spacing: 2px;
        }
        .ls-1 {
          letter-spacing: 1px;
        }
        .max-w-500 {
          max-width: 500px;
        }

        /* ============================================ */
        /* RESPONSIVE                                   */
        /* ============================================ */

        @media (max-width: 991px) {
          .blog-banner-v3 {
            min-height: auto !important;
            padding-top: 130px;
            padding-bottom: 60px;
          }
        }

        @media (max-width: 767px) {
          .blog-banner-v3 {
            padding-top: 110px;
            padding-bottom: 40px;
          }
          .floating-mag-wrapper :global(img) {
            max-width: 380px;
          }
        }

        @media (max-width: 575px) {
          .blog-banner-v3 {
            padding-top: 100px;
            padding-bottom: 30px;
          }
          .btn-v3 {
            padding: 12px 24px;
            font-size: 12px;
            width: 100%;
            justify-content: center;
          }
          .floating-mag-wrapper :global(img) {
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogBanner;
