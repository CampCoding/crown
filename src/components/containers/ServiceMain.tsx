"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Camera,
  Layers,
  Sparkles,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceMain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-v4-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: "01",
      title: "Shooting",
      subtitle: "Creative production for modern brands",
      icon: <Camera size={24} />,
      color: "#0072ed",
      items: ["Shooting Ideas", "Promo & Podcasts", "Reels & YouTube", "Models & Stylist"],
    },
    {
      id: "02",
      title: "Branding",
      subtitle: "Build a brand people remember",
      icon: <Layers size={24} />,
      color: "#6366f1",
      items: ["Visual Identity", "Strategy", "Logo Design", "UI/UX Design"],
    },
    {
      id: "03",
      title: "Content",
      subtitle: "Content that speaks and sells",
      icon: <Sparkles size={24} />,
      color: "#ec4899",
      items: ["Content Strategy", "Launching Plan", "Trendy Content", "Copywriting"],
    },
    {
      id: "04",
      title: "Growth",
      subtitle: "Scale with clarity, not chaos",
      icon: <BarChart3 size={24} />,
      color: "#f97316",
      items: ["Market Research", "Business Analysis", "Strategy Growth", "Scaling"],
    },
  ];

  return (
    <section 
    style={{
  backgroundImage: `linear-gradient(rgba(28, 42, 51, 0.9), rgba(28, 42, 51, 0.5)), url('/images/Untitled design - 2026-04-27T170151.794.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
    ref={containerRef} className="service-section bg-(--black) py-5">
      <div className="container">
        <div className="service-v4__slider-w position-relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            speed={1000}
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ nextEl: ".nav-next", prevEl: ".nav-prev" }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
            }}
            className="service-swiper pb-5"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="service-v4-card"
                  style={{ "--accent": service.color } as React.CSSProperties}
                >
                  <div className="service-glow"></div>

                  <div className="card-inner">
                    <span className="service-number">{service.id}</span>

                    <div>
                      <div className="card-header-area">
                        <div className="icon-box">{service.icon}</div>

                        <div className="mini-badge">
                          <span></span>
                          Service
                        </div>
                      </div>

                      <div className="card-content">
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-subtitle">{service.subtitle}</p>

                        <div className="service-tags">
                          {service.items.map((item, i) => (
                            <span key={i}>{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href="/service-single" className="action-link">
                      <span>Access Module</span>
                      <div className="arrow-box">
                        <ArrowRight size={16} />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex gap-2 justify-content-center mt-4">
            <button className="nav-btn nav-prev" aria-label="Previous service">
              <ChevronLeft size={20} />
            </button>
            <button className="nav-btn nav-next" aria-label="Next service">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-section {
          overflow: hidden;
          position: relative;
        }

        .service-section :global(.service-swiper .swiper-wrapper) {
          align-items: stretch;
        }

        .service-section :global(.service-swiper .swiper-slide) {
          height: auto;
          display: flex;
        }

        .service-v4-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 440px;
          border-radius: 28px;
          overflow: hidden;
          isolation: isolate;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02)),
            #090909;
          border: 1px solid rgba(255, 255, 255, 0.09);
          transition:
            transform 0.45s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .service-v4-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            var(--accent),
            rgba(255, 255, 255, 0.08),
            transparent 55%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.35;
          pointer-events: none;
          transition: opacity 0.45s ease;
        }

        .service-v4-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.45),
            0 0 45px -25px var(--accent);
        }

        .service-v4-card:hover::before {
          opacity: 1;
        }

        .service-glow {
          position: absolute;
          width: 190px;
          height: 190px;
          right: -70px;
          top: -70px;
          background: var(--accent);
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.18;
          z-index: -1;
          transition: 0.45s ease;
        }

        .service-v4-card:hover .service-glow {
          opacity: 0.34;
          transform: scale(1.15);
        }

        .card-inner {
          position: relative;
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1;
        }

        .service-number {
          position: absolute;
          right: 1.4rem;
          top: 1.1rem;
          font-size: 5.5rem;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -6px;
          color: rgba(255, 255, 255, 0.035);
          pointer-events: none;
          transition: 0.45s ease;
        }

        .service-v4-card:hover .service-number {
          color: rgba(255, 255, 255, 0.07);
          transform: translateY(8px) scale(1.04);
        }

        .card-header-area {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .icon-box {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.25), transparent 35%),
            linear-gradient(145deg, var(--accent), rgba(255, 255, 255, 0.08));
          box-shadow:
            0 16px 35px -18px var(--accent),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
          transition: 0.4s ease;
        }

        .service-v4-card:hover .icon-box {
          transform: rotate(-6deg) scale(1.08);
          box-shadow:
            0 20px 45px -15px var(--accent),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .mini-badge span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 14px var(--accent);
        }

        .card-content {
          margin-top: 0;
        }

        .service-title {
          color: #fff;
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.7px;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .service-subtitle {
          color: rgba(255, 255, 255, 0.52);
          font-size: 0.95rem;
          line-height: 1.7;
          min-height: 52px;
          margin-bottom: 1.4rem;
          max-width: 95%;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.6rem;
        }

        .service-tags span {
          display: inline-flex;
          align-items: center;
          padding: 0.55rem 0.75rem;
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.72);
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.075);
          font-size: 0.78rem;
          font-weight: 600;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        }

        .service-v4-card:hover .service-tags span {
          border-color: rgba(255, 255, 255, 0.13);
          background: rgba(255, 255, 255, 0.075);
          color: rgba(255, 255, 255, 0.9);
        }

        .action-link {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.9rem 0.95rem 0.9rem 1.15rem;
          border-radius: 999px;
          color: #fff;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: 0.35s ease;
        }

        .arrow-box {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          transition: 0.35s ease;
        }

        .action-link:hover {
          background: #fff;
          color: #050505;
          border-color: #fff;
        }

        .action-link:hover .arrow-box {
          transform: translateX(4px) rotate(-35deg);
          background: #050505;
          color: #fff;
        }

        .nav-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: white;
          transition: 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: white;
          color: black;
          border-color: white;
          transform: translateY(-3px);
        }

        @media (max-width: 767px) {
          .service-v4-card {
            min-height: 410px;
          }

          .card-inner {
            padding: 1.5rem;
          }

          .service-title {
            font-size: 1.45rem;
          }

          .service-number {
            font-size: 4.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceMain;