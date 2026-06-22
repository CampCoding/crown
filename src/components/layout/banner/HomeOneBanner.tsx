// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// // import bannerNew from "public/images/banner/banner-new.png";
// // import star from "public/images/star.png";
// // import videoframe from "public/images/video-frame.png";
// // import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

// // import LightPillar from "../../LightPillar";
// // import NetworkGrid from "../NetworkGrid";
// // import { COMPANY_INFO } from "@/lib/constants";

// // gsap.registerPlugin(ScrollTrigger);

// // const HomeOneBanner = () => {
// //   const [videoActive, setVideoActive] = useState(false);

// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       const device_width = window.innerWidth;

// //       if (
// //         document.querySelectorAll(".g-ban-one").length > 0 &&
// //         device_width > 576
// //       ) {
// //         const tl = gsap.timeline({
// //           scrollTrigger: {
// //             trigger: ".banner",
// //             start: "center center",
// //             end: "+=100%",
// //             scrub: true,
// //             pin: false,
// //           },
// //         });

// //         tl.set(".g-ban-one", {
// //           y: "-10%",
// //         });

// //         tl.to(".g-ban-one", {
// //           opacity: 0,
// //           scale: 2,
// //           y: "100%",
// //           zIndex: -1,
// //           duration: 2,
// //         });
// //       }
// //     }
// //   }, []);

// //   return (
// //     <>
// //       <section className="banner fade-wrapper overflow-hidden">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="banner__content">
// //                 <h1 className="text-uppercase font-normal! text-start fw-9 mb-0 title-anim">
// //                   We are
// //                   <span className="text-stroke">creative</span>
// //                   <span className="interval">
// //                     <i className="icon-arrow-top-right"></i> digital agency
// //                   </span>
// //                 </h1>
// //                 <div className="banner__content-inner fade-top">
// //                   <p>
// //                     Crown Agency is a modern marketing & software company built
// //                     to help brands lead, not follow. We combine creativity,
// //                     strategy, and technology to create impactful campaigns and
// //                     digital products that grow your presence and elevate your
// //                     brand.
// //                   </p>
// //                   <div className="cta section__content-cta">
// //                     <div className="single">
// //                       <h5 className="fw-7">12+</h5>
// //                       <p className="fw-5">years of experience</p>
// //                     </div>
// //                     <div className="single">
// //                       <h5 className="fw-7">25k</h5>
// //                       <p className="fw-5">completed projects</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <Image
// //           src={bannerNew}
// //           alt="Crown Agency Banner"
// //           className="banner-one-thumb d-none d-sm-block g-ban-one"
// //         />
// //         <Image src={star} alt="decorative star" className="star" />

// //         {/* Left side - Phone & WhatsApp */}
// //         <div className="banner-left-text banner-social-text d-none d-md-flex">
// //           <Link
// //             href={`tel:${COMPANY_INFO.phone}`}
// //             aria-label="Call Crown Agency"
// //           >
// //             Call : {COMPANY_INFO.phone}
// //           </Link>
// //           <Link
// //             href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             aria-label="WhatsApp Crown Agency"
// //           >
// //             WhatsApp : {COMPANY_INFO.phone}
// //           </Link>
// //         </div>

// //         {/* Right side - Social Links (only available ones) */}
// //         <div className="banner-right-text banner-social-text d-none d-md-flex">
// //           {COMPANY_INFO.social.facebook && (
// //             <Link
// //               href={COMPANY_INFO.social.facebook}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="Crown Agency on Facebook"
// //             >
// //               facebook
// //             </Link>
// //           )}
// //           {COMPANY_INFO.social.instagram && (
// //             <Link
// //               href={COMPANY_INFO.social.instagram}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="Crown Agency on Instagram"
// //             >
// //               instagram
// //             </Link>
// //           )}
// //           {COMPANY_INFO.social.linkedin && (
// //             <Link
// //               href={COMPANY_INFO.social.linkedin}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="Crown Agency on LinkedIn"
// //             >
// //               linkedin
// //             </Link>
// //           )}
// //         </div>

// //         <button
// //           className="video-frame video-btn"
// //           onClick={() => setVideoActive(true)}
// //           aria-label="Play Crown Agency intro video"
// //         >
// //           <Image src={videoframe} alt="Watch video" priority />
// //           <i className="fa-sharp fa-solid fa-play"></i>
// //         </button>
// //         <NetworkGrid />
// //       </section>
// //       <div
// //         className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
// //         onClick={() => setVideoActive(false)}
// //       >
// //         <div className="video-inner">
// //           <div
// //             className="video-container"
// //             onClick={(e: any) => e.stopPropagation()}
// //           >
// //             {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
// //             <button
// //               aria-label="close video popup"
// //               className="close-video-popup"
// //               onClick={() => setVideoActive(false)}
// //             >
// //               <i className="fa-solid fa-xmark"></i>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default HomeOneBanner;

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import bannerNew from "public/images/banner/banner-new.png";
// import star from "public/images/star.png";
// import videoframe from "public/images/video-frame.png";
// // تغيير اسم المكون ليعبر عن الفيديو المحلي
// import LocalVideoEmbed from "@/components/youtube/YoutubeEmbed"; 

// import LightPillar from "../../LightPillar";
// import NetworkGrid from "../NetworkGrid";
// import { COMPANY_INFO } from "@/lib/constants";

// gsap.registerPlugin(ScrollTrigger);

// const HomeOneBanner = () => {
//   const [videoActive, setVideoActive] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const device_width = window.innerWidth;

//       if (
//         document.querySelectorAll(".g-ban-one").length > 0 &&
//         device_width > 576
//       ) {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".banner",
//             start: "center center",
//             end: "+=100%",
//             scrub: true,
//             pin: false,
//           },
//         });

//         tl.set(".g-ban-one", {
//           y: "-10%",
//         });

//         tl.to(".g-ban-one", {
//           opacity: 0,
//           scale: 2,
//           y: "100%",
//           zIndex: -1,
//           duration: 2,
//         });
//       }
//     }
//   }, []);

//   return (
//     <>
//       <section className="banner fade-wrapper overflow-hidden">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="banner__content">
//                 <h1 className="text-uppercase font-normal! text-start fw-9 mb-0 title-anim">
//                   We are
//                   <span className="text-stroke">creative</span>
//                   <span className="interval">
//                     <i className="icon-arrow-top-right"></i> digital agency
//                   </span>
//                 </h1>
//                 <div className="banner__content-inner fade-top">
//                   <p>
//                     Crown Agency is a modern marketing & software company built
//                     to help brands lead, not follow. We combine creativity,
//                     strategy, and technology to create impactful campaigns and
//                     digital products that grow your presence and elevate your
//                     brand.
//                   </p>
//                   <div className="cta section__content-cta">
//                     <div className="single">
//                       <h5 className="fw-7">12+</h5>
//                       <p className="fw-5">years of experience</p>
//                     </div>
//                     <div className="single">
//                       <h5 className="fw-7">25k</h5>
//                       <p className="fw-5">completed projects</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Image
//           src={bannerNew}
//           alt="Crown Agency Banner"
//           className="banner-one-thumb d-none d-sm-block g-ban-one"
//         />
//         <Image src={star} alt="decorative star" className="star" />

//         {/* Left side */}
//         <div className="banner-left-text banner-social-text d-none d-md-flex">
//           <Link href={`tel:${COMPANY_INFO.phone}`} aria-label="Call Crown Agency">
//             Call : {COMPANY_INFO.phone}
//           </Link>
//           <Link
//             href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="WhatsApp Crown Agency"
//           >
//             WhatsApp : {COMPANY_INFO.phone}
//           </Link>
//         </div>

//         {/* Right side */}
//         <div className="banner-right-text banner-social-text d-none d-md-flex">
//           {COMPANY_INFO.social.facebook && (
//             <Link
//               href={COMPANY_INFO.social.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Crown Agency on Facebook"
//             >
//               facebook
//             </Link>
//           )}
//           {COMPANY_INFO.social.instagram && (
//             <Link
//               href={COMPANY_INFO.social.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Crown Agency on Instagram"
//             >
//               instagram
//             </Link>
//           )}
//           {COMPANY_INFO.social.linkedin && (
//             <Link
//               href={COMPANY_INFO.social.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Crown Agency on LinkedIn"
//             >
//               linkedin
//             </Link>
//           )}
//         </div>

//         <button
//           className="video-frame video-btn"
//           onClick={() => setVideoActive(true)}
//           aria-label="Play Crown Agency intro video"
//         >
//           <Image src={videoframe} alt="Watch video" priority />
//           <i className="fa-sharp fa-solid fa-play"></i>
//         </button>
//         <NetworkGrid />
//       </section>

//       {/* Video Popup Backdrop */}
//       <div
//         className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
//         onClick={() => setVideoActive(false)}
//       >
//         <div className="video-inner">
//           <div
//             className="video-container"
//             onClick={(e: any) => e.stopPropagation()}
//           >
//             {/* استدعاء الفيديو المحلي وتمرير المسار من مجلد public مباشرة */}
//             {videoActive && <LocalVideoEmbed src="/images/banner-video.mp4" />}
            
//             <button
//               aria-label="close video popup"
//               className="close-video-popup"
//               onClick={() => setVideoActive(false)}
//             >
//               <i className="fa-solid fa-xmark"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeOneBanner;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import bannerNew from "public/images/banner/banner-new.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
// استيراد المكون الجديد للفيديو المحلي
import {LocalVideoEmbed} from "@/components/youtube/YoutubeEmbed"; 

import LightPillar from "../../LightPillar";
import NetworkGrid from "../NetworkGrid";
import { COMPANY_INFO } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner fade-wrapper overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase font-normal! text-start fw-9 mb-0 title-anim">
                  We are
                  <span className="text-stroke">creative</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> digital agency
                  </span>
                </h1>
                <div className="banner__content-inner fade-top">
                  <p>
                    Crown Agency is a modern marketing & software company built
                    to help brands lead, not follow. We combine creativity,
                    strategy, and technology to create impactful campaigns and
                    digital products that grow your presence and elevate your
                    brand.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">12+</h5>
                      <p className="fw-5">years of experience</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">25k</h5>
                      <p className="fw-5">completed projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={bannerNew}
          alt="Crown Agency Banner"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="decorative star" className="star" />

        {/* Left side */}
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href={`tel:${COMPANY_INFO.phone}`} aria-label="Call Crown Agency">
            Call : {COMPANY_INFO.phone}
          </Link>
          <Link
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Crown Agency"
          >
            WhatsApp : {COMPANY_INFO.phone}
          </Link>
        </div>

        {/* Right side */}
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          {COMPANY_INFO.social.facebook && (
            <Link
              href={COMPANY_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crown Agency on Facebook"
            >
              facebook
            </Link>
          )}
          {COMPANY_INFO.social.instagram && (
            <Link
              href={COMPANY_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crown Agency on Instagram"
            >
              instagram
            </Link>
          )}
          {COMPANY_INFO.social.linkedin && (
            <Link
              href={COMPANY_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crown Agency on LinkedIn"
            >
              linkedin
            </Link>
          )}
        </div>

        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
          aria-label="Play Crown Agency intro video"
        >
          <Image src={videoframe} alt="Watch video" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
        <NetworkGrid />
      </section>

      {/* Video Popup Backdrop */}
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {/* ✅ التغيير هنا: استخدام LocalVideoEmbed بدلاً من YoutubeEmbed */}
            {videoActive && <LocalVideoEmbed src="/images/banner-video.mp4" />}
            
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default HomeOneBanner;