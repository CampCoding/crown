import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import serviceBg from "public/images/service/service-bg.png";

const CtaTwo = () => {
  return (
    <section className="cta-v2 py-100! position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="cta-v2__wrapper position-relative rounded-5 overflow-hidden p-5 p-md-6 border border-white-10">
              
              {/* Background Image Layer */}
              <div className="position-absolute inset-0 z-0">
                <Image 
                  src={serviceBg} 
                  alt="CTA Background" 
                  fill 
                  className="object-fit-cover opacity-50"
                />
                <div className="position-absolute inset-0 bg-gradient-to-r from-black via-black/80 to-primary-900/40" />
              </div>

              <div className="row gaper align-items-center position-relative z-1">
                <div className="col-12 col-lg-8">
                  <div className="cta-v2__content text-center text-lg-start">
                    <span className="text-primary fw-bold text-uppercase ls-2 mb-3 d-block">Ready to Transform?</span>
                    <h2 className="display-4 fw-900 text-white text-uppercase mb-4 ls-1 leading-tight">
                      Let&apos;s Build the <span className="text-primary-glow">Next Big Thing</span> Together
                    </h2>
                    <p className="text-slate-300 fs-5 mb-5 max-w-600">
                      Our elite team is ready to scale your digital presence with industry-defining innovation and precision.
                    </p>
                    
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                      <div className="w-12 h-12 rounded-circle bg-primary-20 d-flex align-items-center justify-content-center border border-primary-40">
                        <ArrowUpRight size={20} className="text-primary" />
                      </div>
                      <h4 className="mb-0">
                        <Link href="tel:+193265003420" className="text-white text-decoration-none hover-primary transition-all fw-bold fs-3">
                          +19 3265 003 420
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 text-center text-lg-end mt-5 mt-lg-0">
                  <Link href="/contact-us" className="btn-primary-pill-lg">
                    START A PROJECT <ChevronRight size={24} className="ms-2" />
                  </Link>
                </div>
              </div>

              {/* Decorative Corner Lights */}
              <div className="corner-glow top-right" />
              <div className="corner-glow bottom-left" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-v2 {
          background: transparent;
        }
        .cta-v2__wrapper {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          box-shadow: 0 40px 100px -30px rgba(0, 0, 0, 0.8);
        }

        .text-primary-glow {
          color: var(--primary-color);
          text-shadow: 0 0 20px rgba(0, 114, 237, 0.4);
        }
        .ls-2 { letter-spacing: 2px; }
        .ls-1 { letter-spacing: 1px; }
        .leading-tight { line-height: 1.1; }
        .max-w-600 { max-width: 600px; }

        .btn-primary-pill-lg {
          display: inline-flex;
          align-items: center;
          padding: 20px 45px;
          background: var(--primary-color);
          color: white;
          font-weight: 800;
          text-transform: uppercase;
          border-radius: 60px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 30px -5px rgba(0, 114, 237, 0.4);
          font-size: 1.1rem;
        }
        .btn-primary-pill-lg:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 25px 40px -5px rgba(0, 114, 237, 0.5);
          filter: brightness(1.1);
        }

        .bg-primary-20 { background: rgba(0, 114, 237, 0.1); }
        .border-primary-40 { border: 1px solid rgba(0, 114, 237, 0.3); }

        .hover-primary:hover {
          color: var(--primary-color) !important;
        }

        .corner-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
        }
        .top-right {
          top: -150px;
          right: -150px;
          background: var(--primary-color);
        }
        .bottom-left {
          bottom: -150px;
          left: -150px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 991px) {
          .cta-v2__wrapper {
            padding: 3rem !important;
          }
          .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default CtaTwo;
