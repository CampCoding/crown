import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/sponsor/one-new.png";
import two from "public/images/sponsor/two-new.png";
import three from "public/images/sponsor/three-new.png";
import four from "public/images/sponsor/four-new.png";
import five from "public/images/sponsor/five-new.png";
import Link from "next/link";

interface SponsorData  {
  id: number ,
  img : string,
  link: string
}

const data :SponsorData[]  = [
  {
    id:1,
    img: '/images/sydlylmlny.jpeg',
    link: "https://www.instagram.com/sydlylmlny?igsh=M2p3bWEwemphbGI2",

  },
  {
    id:2,
    img: '/images/rawafd.jpeg',
    link: "https://www.instagram.com/r4rec00?igsh=eTYyM2w2NTlyODB2",

  },
  {
    id:3,
    img: '/images/الخارجية  (15).jpg.jpeg',
    link: "https://www.instagram.com/alkhibra.alkharijia?igsh=MXZidnpncTFxN3IwbQ==",

  },
  {
    id:4,
    img: '/images/medarena.jpeg',
    link: "https://www.instagram.com/medarena.iq?igsh=Z3Uwbjl5b3pxdWRl",

  },
  {
    id:5,
    img: '/images/cadia.jpeg',
    link: "https://www.instagram.com/cadia_home?igsh=YjJydTQ1MW54d3dt",

  },
  {
    id:6,
    img: '/images/nourmaison.webp',
    link: "https://www.instagram.com/nourmaisonuk?igsh=MXBxbXJ1cTF1YmNpMQ==",

  },
  {
    id:7,
    img:"/images/ahmedgame3.jpeg",
    link :'https://www.facebook.com/share/1BpiDPmVLe/'
  },
  {
    id:8,
    img:"/images/mustafaabbas.jpeg",
    link :'https://www.instagram.com/dr.mustafaabbasclinic?igsh=MTR2dzhqbWJueDdnbg=='
  },
  {
    id:9,
    img:"/images/greens.jpeg",
    link :'https://www.instagram.com/greens.pharmacies.tanta?igsh=MTN3OHhjaHhvbzJ3'
  },
  {
    id:10,
    img:"/images/flyvia.png",
    link :'https://www.instagram.com/flyvia.services?igsh=MXZxdjBndXE3Mjl3cA=='
  },
  {
    id:11,
    img:"/images/soundmind.jpeg",
    link :'https://www.instagram.com/sound_mind_24?igsh=MWNvejBtOGNzcHBqaw=='
  },
  {
    id:12,
    img:"/images/1918.jpeg",
    link :'https://www.instagram.com/1918.eg?igsh=MThjMGhqZjF4bHVheA=='
  }

]

const HomeSponsor = () => {
  const logos = [one, two, three, four, five, one];
  return (
    <div className="sponsor section  pb-0 fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header text-center fade-top">
              <span className="sub-title text-white!">
                Our Partners
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w fade-top">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                {data?.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <a href={logo?.link} target="_blank" className="sponsor__slider-item rounded-full!">
                      <Image
                        src={logo?.img}
                        alt={`Crown Agency Partner ${index + 1}`}
                        width={200}
                        height={200}
                        className="rounded-full!"
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeSponsor;
