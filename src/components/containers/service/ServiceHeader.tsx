import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimateSvg from "@/components/AnimateSvg";

const ServiceHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const annotationPath = "M61.9499 126.019C129.419 134.323 205.111 131.946 269.179 107.397C287.878 100.232 312.661 88.4955 307.573 64.3267C301.574 35.835 261.103 20.5501 236.856 13.8731C190.969 1.23754 142.979 0.450446 96.0779 7.22801C75.3721 10.2202 54.4734 14.7152 35.0413 22.6512C24.1049 27.1176 1.84994 37.8503 3.04637 53.0054C3.93896 64.3117 19.7218 75.4778 28.068 80.8164C50.3829 95.0898 77.4888 103.502 102.805 110.596C157.283 125.862 212.697 134.798 268.687 142.263";

  useEffect(() => {
    // Temporarily disabled animations
  }, []);

  return (
    <div ref={containerRef} className="service-header-section py-0! pb-5! position-relative z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            {/* Badge */}
            <div className="service-badge d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-white-5 border border-white-10 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white small fw-bold text-uppercase ls-2">Our Services</span>
            </div>

            {/* Main Heading */}
            <h1 className="service-title display-3 fw-900 text-white text-uppercase mb-4 ls-1 leading-tight">
              We{" "}
              <span className="position-relative d-inline-block px-2">
                <span className="text-primary">Always</span>
                <div className="position-absolute top-50 start-50 translate-middle w-120 h-140 pointer-events-none" style={{ minWidth: '150%' }}>
                  <AnimateSvg
                    path={annotationPath}
                    viewBox="0 0 311 145"
                    strokeColor="#fff"
                    strokeWidth={4}
                    animationDuration={1.5}
                    animationDelay={0.5}
                    enableHoverAnimation={true}
                  />
                </div>
              </span>{" "}
              try to introduce <br className="d-none d-md-block" />
              the best{" "}
              <span className="position-relative d-inline-block px-2">
                <span className="text-primary">services</span>
                <div className="position-absolute top-50 start-50 translate-middle w-120 h-140 pointer-events-none" style={{ minWidth: '150%' }}>
                  <AnimateSvg
                    path={annotationPath}
                    viewBox="0 0 311 145"
                    strokeColor="#fff"
                    strokeWidth={4}
                    animationDuration={1.5}
                    animationDelay={1}
                    enableHoverAnimation={true}
                  />
                </div>
              </span>
            </h1>

            {/* Description */}
            <p className="service-desc text-slate-300 fs-5 mx-auto max-w-700 leading-relaxed opacity-80">
              A premium stack of services designed for speed, clarity, and real outcomes 
              — built with modern systems and a clean user experience.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-header-section {
          background: transparent;
        }
        .bg-white-5 { background: rgba(255, 255, 255, 0.05); }
        .border-white-10 { border: 1px solid rgba(255, 255, 255, 0.1); }
        .ls-2 { letter-spacing: 2px; }
        .ls-1 { letter-spacing: 1px; }
        .leading-tight { line-height: 1.1; }
        .max-w-700 { max-width: 700px; }
        .w-120 { width: 120%; }
        .h-140 { height: 140%; }
        
        @media (max-width: 767px) {
          .display-3 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default ServiceHeader;
