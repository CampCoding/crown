import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import shooting from "public/images/offer/shooting.png";
import branding from "public/images/offer/branding.png";
import contentImg from "public/images/offer/content.png";
import business from "public/images/offer/business.png";

const serviceData = [
  {
    id: "01",
    title: "Shooting",
    image: shooting,
  },
  {
    id: "02",
    title: "Branding & Design",
    image: branding,
  },
  {
    id: "03",
    title: "Content Creation",
    image: contentImg,
  },
  {
    id: "04",
    title: "Business Development",
    image: business,
  },
];

const HomeTwoOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                what we offer
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">our main services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-two__slider-w" dir="rtl">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider"
        >
          {serviceData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="offer-two__slider-single offer__cta">
                <div className="offer__cta-single">
                  <span className="sub-title">
                    {service.id}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h2>
                    <Link href="service-single">{service.title}</Link>
                  </h2>
                  <div className="offer-thumb-hover d-none d-md-block">
                    <Image src={service.image} alt="Image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="offer-two__slider-rtl-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider-rtl"
        >
          {serviceData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="offer-two__slider-single offer__cta">
                <div className="offer__cta-single">
                  <span className="sub-title">
                    {service.id}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h2>
                    <Link href="service-single">{service.title}</Link>
                  </h2>
                  <div className="offer-thumb-hover d-none d-md-block">
                    <Image src={service.image} alt="Image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTwoOffer;
