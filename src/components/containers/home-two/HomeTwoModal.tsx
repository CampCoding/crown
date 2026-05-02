import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Play, X } from "lucide-react";
import modalbg from "public/images/modal-bg.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);

const HomeTwoModal = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (document.querySelector(".modal-bg-v2")) {
        gsap.to(".modal-bg-v2", {
          opacity: 0.3,
          scale: 1.1,
          scrollTrigger: {
            trigger: ".video-modal-v2",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="video-modal-v2 py-100! position-relative overflow-hidden">
        <div className="container position-relative z-1">
          <div className="video-inner-wrapper mx-auto position-relative rounded-5 overflow-hidden shadow-3xl border border-white-10" style={{ maxWidth: '1000px', aspectRatio: '21/9' }}>
            <Image src={modalbg} alt="Background" fill className="modal-bg-v2 object-fit-cover opacity-60" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 d-flex align-items-center justify-content-center">
              <button
                className="play-btn-v2 d-flex align-items-center justify-content-center rounded-circle"
                onClick={() => setVideoActive(true)}
              >
                <div className="play-ripple" />
                <div className="play-ripple delay-1" />
                <div className="play-ripple delay-2" />
                <Play size={32} fill="white" className="text-white position-relative z-1" />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 p-3 bg-black-40 backdrop-blur rounded-3 border border-white-10">
              <p className="text-white fw-bold mb-0 text-uppercase ls-2 small">Experience Our Innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Backdrop Modal */}
      <div
        className={`video-backdrop-v2 ${videoActive ? "active" : ""}`}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner p-3 p-md-5">
          <div
            className="video-container-v2 rounded-4 overflow-hidden border border-white-10 shadow-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video"
              className="close-btn-v2 position-absolute top-3 right-3"
              onClick={() => setVideoActive(false)}
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-modal-v2 {
          background: transparent;
        }
        .bg-black-40 { background: rgba(0, 0, 0, 0.4); }
        .backdrop-blur { backdrop-filter: blur(10px); }
        .ls-2 { letter-spacing: 2px; }

        .play-btn-v2 {
          width: 100px;
          height: 100px;
          background: var(--primary-color);
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        .play-btn-v2:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(0, 114, 237, 0.6);
        }

        .play-ripple {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--primary-color);
          opacity: 0.3;
          animation: ripple 3s infinite;
        }
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .video-backdrop-v2 {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video-backdrop-v2.active {
          opacity: 1;
          visibility: visible;
        }

        .video-container-v2 {
          width: 90vw;
          max-width: 1200px;
          aspect-ratio: 16/9;
          background: black;
          position: relative;
        }

        .close-btn-v2 {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }
        .close-btn-v2:hover {
          background: var(--primary-color);
          transform: rotate(90deg);
        }

        @media (max-width: 767px) {
          .video-inner-wrapper { aspect-ratio: 16/9; }
          .play-btn-v2 { width: 70px; height: 70px; }
        }
      `}</style>
    </>
  );
};

export default HomeTwoModal;
