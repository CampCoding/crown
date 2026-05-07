import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Mail } from "lucide-react";
import thumb from "public/images/error-thumb.png";
import { COMPANY_INFO } from "@/lib/constants";

const ErrorMain = () => {
  return (
    <section className="section error fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="error__content text-center fade-top">
              <span className="secondary-text">404 ERROR</span>
              <div className="thumb">
                <Image src={thumb} alt="Page not found - Crown Agency" />
              </div>
              <h1 className="error-title">Page Not Found</h1>
              <p className="text-slate-400 mb-4 mt-3 mx-auto error-desc">
                Sorry, the page you&apos;re looking for doesn&apos;t exist or
                has been moved. Let&apos;s get you back to the{" "}
                {COMPANY_INFO.name} world.
              </p>
              <div className="section__content-cta d-flex flex-wrap justify-content-center gap-3 mt-4">
                <Link href="/" className="btn btn--secondary">
                  <Home size={16} className="me-2" />
                  Back to Home
                </Link>
                <Link href="/contact-us" className="btn btn--primary">
                  <Mail size={16} className="me-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .error-title {
          font-size: clamp(2rem, 5vw, 3rem);
          text-transform: capitalize;
          margin-bottom: 0;
        }

        .error-desc {
          max-width: 500px;
          font-size: 1rem;
          line-height: 1.7;
        }

        @media (max-width: 575px) {
          .error-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ErrorMain;
