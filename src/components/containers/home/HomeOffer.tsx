import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import shooting from "public/images/offer/shooting.png";
import branding from "public/images/offer/branding.png";
import contentImg from "public/images/offer/content.png";
import business from "public/images/offer/business.png";
import star from "public/images/offer/star.png";
import gsap from "gsap";

// Crown's Top 6 Featured Services on Homepage
const serviceData = [
  {
    id: "01",
    title: "UI/UX Design",
    image: shooting,
    slug: "ui-ux-design",
  },
  {
    id: "02",
    title: "Web & Mobile Development",
    image: branding,
    slug: "web-development",
  },
  {
    id: "03",
    title: "Branding & Identity",
    image: contentImg,
    slug: "branding-identity",
  },
  {
    id: "04",
    title: "Performance Marketing",
    image: business,
    slug: "performance-marketing",
  },
  {
    id: "05",
    title: "Content Creation",
    image: shooting,
    slug: "content-creation",
  },
  {
    id: "06",
    title: "SEO Optimization",
    image: branding,
    slug: "seo-optimization",
  },
];

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.querySelector(
            ".offer-thumb-hover"
          ) as HTMLElement;
          if (thirdChild) {
            gsap.to(thirdChild, {
              x: dx,
              y: dy,
              rotation: 10,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(28, 42, 51, 0.9), rgba(28, 42, 51, 0.5)), url('/images/Untitled design - 2026-04-27T170151.794.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="section bg-(--black)! offer fade-wrapper overflow-hidden position-relative"
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content fade-top">
              <span className="sub-title text-white!">
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim text-white!">
                Empowering Your Brand with Marketing & Software Excellence
              </h2>
              <div className="paragraph">
                <p className="text-lg">
                  Crown Agency provides a comprehensive suite of marketing &
                  software services designed to elevate your business. From
                  professional design and modern branding to performance
                  marketing and full-stack development, we bring your vision to
                  life.
                </p>
              </div>
              <div className="section__content-cta fade-top mt-10">
                <Link
                  href="/our-services"
                  className="btn btn--secondary hover:bg-primary hover:text-white! transition-all duration-300"
                >
                  view all services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              {serviceData.map((service) => (
                <div
                  className="offer__cta-single fade-top border-b border-white/10 py-8! group relative transition-all duration-500 hover:pl-4"
                  key={service.id}
                >
                  <div className="flex items-center gap-6">
                    <span className="sub-title text-primary font-bold text-xl!">
                      {service.id}
                    </span>
                    <h2 className="mb-0">
                      <div
                        // href={`/service-single?service=${service.slug}`}
                        className="text-white! group-hover:text-primary! transition-all duration-300"
                        data-cursor="view"
                      >
                        {service.title}
                        <i className="fa-sharp fa-solid fa-arrow-up-right opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"></i>
                      </div>
                    </h2>
                  </div>
                  <div className="offer-thumb-hover d-none d-md-block pointer-events-none z-50">
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      className="rounded-2xl shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="decorative star" className="star opacity-20" />
      <div className="lines d-none d-lg-flex opacity-10">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeOffer;
