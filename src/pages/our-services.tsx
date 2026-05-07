"use client";
import React, { useRef } from "react";
import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import SEO from "@/components/Seo";
import { COMPANY_INFO } from "@/lib/constants";

const ServiceHeader = dynamic(
  () => import("@/components/containers/service/ServiceHeader"),
  { ssr: false }
);
const ServiceMain = dynamic(
  () => import("@/components/containers/ServiceMain"),
  { ssr: false }
);
const DomeGallery = dynamic(() => import("../components/DomeGallery"), {
  ssr: false,
});
const ServiceBanner = dynamic(
  () => import("@/components/containers/service/ServiceBanner"),
  { ssr: false }
);
const NetworkGrid = dynamic(() => import("../components/layout/NetworkGrid"), {
  ssr: false,
});
const HomeTestimonialThree = dynamic(
  () => import("@/components/containers/home-three/HomeTestimonialThree"),
  { ssr: false }
);

const OurServices = () => {
  const galleryRef = useRef<HTMLElement>(null);

  const serviceGalleryImages = [
    { src: "/images/service/tech-team.png", alt: "Crown Tech Team" },
    {
      src: "/images/service/abstract-tech.png",
      alt: "Crown Software Solutions",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      alt: "Crown Digital Marketing",
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      alt: "Web Development Services",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      alt: "Mobile App Development",
    },
    {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      alt: "SEO Services Egypt",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop",
      alt: "UI UX Design",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
      alt: "Branding Agency Cairo",
    },
  ];

  // 🎯 Service Schema for Rich Results
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marketing & Software Development Services",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.fullName,
      url: COMPANY_INFO.url,
      logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Crown Services 2026",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "Human-centered interface design that converts visitors into customers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Modern, scalable web applications built with Next.js, React, and cutting-edge tech",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Native iOS, Android and cross-platform apps with React Native ",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description:
              "Technical SEO, keyword strategy, and link building to rank higher",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            description:
              "Build communities that drive real business growth across platforms",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Marketing",
            description:
              "Data-driven Meta, Google, and TikTok ad campaigns with measurable ROI",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Identity",
            description:
              "Build a brand worthy of a Crown — strategy, identity, and guidelines",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Creation",
            description:
              "Photography, videography, reels, copywriting, and motion graphics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Media Production",
            description:
              "Cinematic-grade commercial shoots, product photography, and post-production",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Strategy",
            description:
              "Market research, business development, and sales funnel optimization",
          },
        },
      ],
    },
  };

  return (
    <Layout header={1} footer={1} video={0}>
      <SEO
        title="Our Services — Marketing & Software Solutions"
        description="Crown delivers premium digital services in 2026: UI/UX Design, Web & Mobile Development, SEO, Branding, Performance Marketing, Social Media, Content Creation & Growth Strategy. Scale your brand with the Crown."
        keywords={[
          "Crown Services",
          "Marketing Services 2026",
          "Web Development Agency",
          "Mobile App Development Egypt",
          "SEO Services",
          "UI UX Agency Cairo",
          "Branding Services",
          "Digital Marketing 2026",
          "Performance Marketing",
          "Social Media Marketing Agency",
          "Content Creation",
          "Growth Strategy",
        ]}
        schema={servicesSchema}
      />

      <ServiceBanner
        title="Crown Marketing & Software Solutions"
        subtitle="Our Services 2026"
      />

      {/* Immersive Dark Section */}
      <div className="bg-(--black)! position-relative overflow-hidden min-vh-100">
        <NetworkGrid />

        {/* Content Layers */}
        <div className="position-relative z-1">
          <ServiceHeader />
          <ServiceMain />

          {/* Gallery Section */}
          <section
            ref={galleryRef}
            className="service-gallery-wrap bg-(--black)! py-10! position-relative"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 text-center mb-5">
                  <h2 className="gallery-title display-4 fw-900 text-white text-uppercase ls-1">
                    <span className="position-relative d-inline-block px-3">
                      Visual
                    </span>{" "}
                    <span className="text-primary">Ecosystem</span>
                  </h2>
                  <p className="gallery-subtitle text-slate-400">
                    Explore the digital landscape Crown has built for global
                    brands.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="dome-container position-relative"
              style={{ width: "100%", height: "100vh", perspective: "1200px" }}
            >
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

          <HomeTestimonialThree />
        </div>
      </div>

      <style jsx>{`
        .ls-1 {
          letter-spacing: 1px;
        }
      `}</style>
    </Layout>
  );
};

export default OurServices;
