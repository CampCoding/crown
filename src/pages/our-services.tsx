'use client';
import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import gsap from "gsap";

const ServiceHeader = dynamic(() => import("@/components/containers/service/ServiceHeader"), { ssr: false });
const ServiceMain = dynamic(() => import("@/components/containers/ServiceMain"), { ssr: false });
const DomeGallery = dynamic(() => import("../components/DomeGallery"), { ssr: false });
const ServiceBanner = dynamic(() => import("@/components/containers/service/ServiceBanner"), { ssr: false });
const NetworkGrid = dynamic(() => import("../components/layout/NetworkGrid"), { ssr: false });
const HomeTestimonialThree = dynamic(() => import("@/components/containers/home-three/HomeTestimonialThree"), { ssr: false });
const AnimateSvg = dynamic(() => import("@/components/AnimateSvg"), { ssr: false });

const OurServices = () => {
  const galleryRef = useRef<HTMLElement>(null);
  const annotationPath = "M61.9499 126.019C129.419 134.323 205.111 131.946 269.179 107.397C287.878 100.232 312.661 88.4955 307.573 64.3267C301.574 35.835 261.103 20.5501 236.856 13.8731C190.969 1.23754 142.979 0.450446 96.0779 7.22801C75.3721 10.2202 54.4734 14.7152 35.0413 22.6512C24.1049 27.1176 1.84994 37.8503 3.04637 53.0054C3.93896 64.3117 19.7218 75.4778 28.068 80.8164C50.3829 95.0898 77.4888 103.502 102.805 110.596C157.283 125.862 212.697 134.798 268.687 142.263";

  useEffect(() => {
    // Temporarily disabled animations
  }, []);

  const serviceGalleryImages = [
    { src: "/images/service/tech-team.png", alt: "Tech Team" },
    { src: "/images/service/abstract-tech.png", alt: "Abstract Technology" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop", alt: "Digital Innovation" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", alt: "Global Connectivity" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", alt: "Microchip Tech" },
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", alt: "Cyber Security" },
    { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop", alt: "Modern UI" },
    { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop", alt: "AI Robotics" },
  ];

  return (
    <Layout header={1} footer={1} video={0}>
      <ServiceBanner title="Our Premium Digital Services" subtitle="Our Services" />
      
      {/* Immersive Dark Section */}
      <div className="bg-(--black)! position-relative overflow-hidden min-vh-100">
        <NetworkGrid />
        
        {/* Content Layers */}
        <div className="position-relative z-1">
          <ServiceHeader />
          <ServiceMain />
          
          {/* Gallery Section */}
          <section ref={galleryRef} className="service-gallery-wrap bg-(--black)! py-10! position-relative">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 text-center mb-5">
                  <h2 className="gallery-title display-4 fw-900 text-white text-uppercase ls-1">
                    <span className="position-relative d-inline-block px-3">
                      Visual
                    </span>{" "}
                    <span className="text-primary">Ecosystem</span>
                  </h2>
                  <p className="gallery-subtitle text-slate-400">Explore the digital landscape we've built for our clients.</p>
                </div>
              </div>
            </div>

            <div className="dome-container position-relative" style={{ width: '100%', height: '100vh', perspective: '1200px' }}>
              <div className="absolute inset-0 bg-(--black)" />
              <DomeGallery
                images={serviceGalleryImages}
                fit={0.7}
                minRadius={600}
                maxVerticalRotationDeg={10}
                segments={40}
                dragDampening={2.5}
                grayscale={false}
                imageBorderRadius="15px"
              />
            </div>
          </section>

          {/* <UxProcessTwo /> */}
          <HomeTestimonialThree />
          {/* <CtaTwo /> */}
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
        .from-primary-900\/10 { --tw-gradient-from: rgba(0, 114, 237, 0.1); }
        .to-transparent { --tw-gradient-to: transparent; }
        .ls-1 { letter-spacing: 1px; }
      `}</style>
    </Layout>
  );
};

export default OurServices;
