import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag, Share2 } from "lucide-react";
import NetworkGrid from "../../layout/NetworkGrid";
import Particles from "../../Particles";
import AnimateSvg from "../../AnimateSvg";
import LightPillar from "../../LightPillar";

const BlogPremium = () => {
  const annotationPath =
    "M61.9499 126.019C129.419 134.323 205.111 131.946 269.179 107.397C287.878 100.232 312.661 88.4955 307.573 64.3267C301.574 35.835 261.103 20.5501 236.856 13.8731C190.969 1.23754 142.979 0.450446 96.0779 7.22801C75.3721 10.2202 54.4734 14.7152 35.0413 22.6512C24.1049 27.1176 1.84994 37.8503 3.04637 53.0054C3.93896 64.3117 19.7218 75.4778 28.068 80.8164C50.3829 95.0898 77.4888 103.502 102.805 110.596C157.283 125.862 212.697 134.798 268.687 142.263";

  // 👑 Crown Agency Blog Posts 2026
  const blogs = [
    {
      id: 1,
      title: "The Future of AI-Driven Marketing in 2026",
      excerpt:
        "Exploring how AI is reshaping marketing strategies, customer engagement, and brand storytelling in the new era.",
      date: "Jan 15, 2026",
      author: "Crown Team",
      category: "Marketing",
      image: "/images/news/blog-1-real.png",
    },
    {
      id: 2,
      title: "Why Every Brand Needs a Mobile-First Strategy",
      excerpt:
        "With over 60% of traffic on mobile, here's how Crown builds web & mobile experiences that convert at scale.",
      date: "Jan 10, 2026",
      author: "Crown Team",
      category: "Development",
      image: "/images/news/blog-2-real.png",
    },
    {
      id: 3,
      title: "Branding in 2026: Beyond the Logo",
      excerpt:
        "Modern branding isn't a logo — it's a system. Learn how Crown crafts identities that stand the test of time.",
      date: "Jan 5, 2026",
      author: "Crown Team",
      category: "Branding",
      image: "/images/news/blog-3-real.png",
    },
  ];

  return (
    <section
      id="blog-list"
      className="blog-premium-section bg-(--black)! relative overflow-hidden py-10!"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={250}
          speed={0.1}
          sizeRandomness={6}
          particleColors={["#0072ed", "#ffffff"]}
        />
        <NetworkGrid />
      </div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="blog-section-title fw-900 text-white text-uppercase mb-3">
              <span className="position-relative d-inline-block px-2">
                <span className="text-primary">Latest</span>
                <div
                  className="position-absolute top-50 start-50 translate-middle pointer-events-none"
                  style={{
                    width: "150%",
                    height: "140%",
                    minWidth: "180px",
                  }}
                >
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
              Crown Insights
            </h2>
            <p className="text-slate-400 fs-5 mt-4">
              Deep dives into marketing, software, design, and the digital
              ecosystem from Crown Agency.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="col-12 col-md-6 col-lg-4">
              <article className="blog-card-v4 h-100 position-relative transition-all duration-500">
                {/* Image Wrap with Skew/Reveal effect */}
                <div className="blog-image-wrap position-relative rounded-4 overflow-hidden mb-4 shadow-2xl">
                  <Link
                    href="/blog-single"
                    aria-label={`Read article: ${blog.title}`}
                  >
                    <Image
                      src={blog.image}
                      alt={`${blog.title} - Crown Agency`}
                      width={600}
                      height={400}
                      className="img-fluid transition-all duration-700 hover-zoom"
                    />
                  </Link>
                  <div className="blog-category position-absolute top-0 end-0 m-3 p-3 rounded-pill glassy-badge small fw-black ls-1 uppercase text-primary">
                    {blog.category}
                  </div>
                </div>

                {/* Content Wrap with Overlap effect */}
                <div className="blog-content-v4 p-4 rounded-4 border border-white-10 glassy-card-v4 position-relative">
                  <div className="blog-meta-v4 d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2 text-slate-500 tiny fw-bold ls-1 uppercase">
                      <Calendar size={12} className="text-primary" />{" "}
                      {blog.date}
                    </div>
                    <button
                      className="share-trigger text-slate-600 hover-text-primary transition-all cursor-pointer bg-transparent border-0 p-0"
                      aria-label="Share article"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>

                  <h3 className="text-white fw-800 mb-3 title-v4 blog-card-title">
                    <Link
                      href="/blog-single"
                      className="text-decoration-none text-inherit transition-all"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-slate-400 small mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <Link
                    href="/blog-single"
                    className="read-more-v4 d-flex align-items-center gap-2 text-white text-decoration-none fw-bold small ls-1 uppercase"
                  >
                    Read Article{" "}
                    <div className="arrow-box">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>

                {/* Decorative background glow */}
                <div className="card-glow position-absolute top-50 start-50 translate-middle opacity-0 transition-all duration-500" />
              </article>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 w-fit mx-auto text-center mt-5">
            <Link
              href="/blog"
              className="btn-v4-pill border p-3 rounded-full border-primary text-(--black)"
            >
              EXPLORE FULL <ArrowRight size={20} className="ms-2" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-premium-section {
          background: #050505;
        }

        /* Section Title - Responsive */
        .blog-section-title {
          font-size: clamp(1.75rem, 4vw, 3rem);
        }

        .blog-card-title {
          font-size: clamp(1.1rem, 1.5vw, 1.4rem);
          line-height: 1.3;
        }

        /* Card Design V4 */
        .blog-card-v4:hover {
          transform: translateY(-10px);
        }
        .blog-card-v4:hover .card-glow {
          opacity: 0.15;
          width: 120%;
          height: 120%;
        }

        .blog-image-wrap {
          aspect-ratio: 16/10;
          transition: transform 0.5s ease;
        }
        .blog-card-v4:hover .blog-image-wrap {
          transform: scale(0.98);
        }
        .hover-zoom {
          transform: scale(1.05);
        }
        .blog-card-v4:hover .hover-zoom {
          transform: scale(1.15);
        }

        .glassy-card-v4 {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          margin-top: -60px;
          margin-left: 20px;
          margin-right: 20px;
          z-index: 2;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }
        .blog-card-v4:hover .glassy-card-v4 {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 114, 237, 0.3);
          margin-top: -70px;
        }

        .title-v4:hover {
          color: var(--primary-color) !important;
        }

        .glassy-badge {
          background: rgba(5, 5, 5, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .read-more-v4 {
          transition: all 0.3s ease;
        }
        .arrow-box {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .read-more-v4:hover .arrow-box {
          background: var(--primary-color);
          border-color: var(--primary-color);
          transform: translateX(5px);
        }

        .card-glow {
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            var(--primary-color) 0%,
            transparent 70%
          );
          filter: blur(60px);
          z-index: 0;
        }

        .btn-v4-pill {
          display: inline-flex;
          align-items: center;
          padding: 16px 40px;
          background: transparent;
          color: white;
          border: 1.5px solid var(--primary-color);
          border-radius: 100px;
          font-weight: 800;
          letter-spacing: 2px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-v4-pill:hover {
          background: var(--primary-color);
          box-shadow: 0 0 30px rgba(0, 114, 237, 0.4);
          transform: scale(1.05);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ls-1 {
          letter-spacing: 1px;
        }
        .tiny {
          font-size: 10px;
        }
        .uppercase {
          text-transform: uppercase;
        }
        .border-white-10 {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* ============================================ */
        /* RESPONSIVE                                   */
        /* ============================================ */

        @media (max-width: 767px) {
          .glassy-card-v4 {
            margin-left: 12px;
            margin-right: 12px;
            margin-top: -50px;
            padding: 1.25rem !important;
          }
          .blog-card-v4:hover .glassy-card-v4 {
            margin-top: -55px;
          }
        }

        @media (max-width: 575px) {
          .btn-v4-pill {
            padding: 14px 30px;
            font-size: 13px;
            letter-spacing: 1.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogPremium;
