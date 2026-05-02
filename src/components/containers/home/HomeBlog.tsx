import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/blog/one-new.png";
import two from "public/images/blog/two-new.png";

const HomeBlog = () => {
  return (
    <section className="section blog  py-0! fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center fade-top">
              <span className="sub-title text-white!">
                news & Blog
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">what&apos;s new in blog</h2>
            </div>
          </div>
        </div>
        <div className="blog__list mt-10">
          <div className="blog__single row gaper align-items-center mb-24! fade-top group">
            <div className="col-12 col-lg-6">
              <div className="blog__single-thumb overflow-hidden rounded-3xl relative">
                <Link href="blog-single" data-cursor="read">
                  <Image src={one} alt="Image" className="w-full h-[400px]! object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="blog__single-content lg:pl-10">
                <div className="blog__single-meta mb-6">
                  <Link href="blog" className="sub-title text-primary font-bold! tracking-widest uppercase">
                    Branding
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  <span className="text-white/40 ml-6 font-medium">APRIL 27, 2026</span>
                </div>
                <h2 className="mb-8">
                  <Link href="blog-single" className="text-white! hover:text-primary! transition-all duration-300 title-anim">
                    The Ultimate Creative Marketing Checklist for 2026
                  </Link>
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-lg">
                  Elevate your brand with our comprehensive marketing checklist designed for the modern digital landscape.
                </p>
                <Link href="blog-single" className="btn btn--secondary hover:bg-primary hover:text-white! transition-all duration-300">
                  Read Article
                  <i className="fa-sharp fa-solid fa-arrow-up-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="blog__single row gaper align-items-center fade-top group flex-row-reverse">
            <div className="col-12 col-lg-6">
              <div className="blog__single-thumb overflow-hidden rounded-3xl relative">
                <Link href="blog-single" data-cursor="read">
                  <Image src={two} alt="Image" className="w-full h-[400px]! object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="blog__single-content lg:pr-10">
                <div className="blog__single-meta mb-6">
                  <Link href="blog" className="sub-title text-primary font-bold! tracking-widest uppercase">
                    Strategy
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  <span className="text-white/40 ml-6 font-medium">APRIL 27, 2026</span>
                </div>
                <h2 className="mb-8">
                  <Link href="blog-single" className="text-white! hover:text-primary! transition-all duration-300 title-anim">
                    Transforming Your Brand with High-Impact Content
                  </Link>
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-lg">
                  Learn how to create content that resonates and drives meaningful engagement with your target audience.
                </p>
                <Link href="blog-single" className="btn btn--secondary hover:bg-primary hover:text-white! transition-all duration-300">
                  Read Article
                  <i className="fa-sharp fa-solid fa-arrow-up-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
