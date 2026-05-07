import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Home,
  Info,
  Briefcase,
  Layers,
  Newspaper,
  Users,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "public/images/logo.png";
import { COMPANY_INFO } from "@/lib/constants";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  useEffect(() => {
    const handleResizeHeader = () => setOpenNav(false);
    window.addEventListener("resize", handleResizeHeader);
    return () => window.removeEventListener("resize", handleResizeHeader);
  }, [setOpenNav]);

  // Lock body scroll when open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  const closeNav = () => setOpenNav(false);

  const menuItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About Us", href: "/about-us", icon: <Info size={18} /> },
    { name: "Services", href: "/our-services", icon: <Briefcase size={18} /> },
    { name: "Our Projects", href: "/our-projects", icon: <Layers size={18} /> },
    { name: "Blog", href: "/blog", icon: <Newspaper size={18} /> },
    { name: "Contact Us", href: "/contact-us", icon: <Users size={18} /> },
  ];

  const socials = [
    {
      icon: <FaFacebookF size={14} />,
      href: COMPANY_INFO.social.facebook,
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: <FaInstagram size={14} />,
      href: COMPANY_INFO.social.instagram,
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedinIn size={14} />,
      href: COMPANY_INFO.social.linkedin,
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: <FaWhatsapp size={14} />,
      href: `https://wa.me/${COMPANY_INFO.whatsapp}`,
      label: "WhatsApp",
      color: "#25D366",
    },
  ].filter((s) => s.href);

  return (
    <div
      className={`offcanvas-root fixed inset-0 z-[9999] transition-all duration-500 ${
        openNav ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          openNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeNav}
      />

      {/* Main Container */}
      <div
        className={`offcanvas-panel absolute top-0 left-0 h-full w-full max-w-[1100px] bg-[#0a0a0a] flex transition-transform duration-700 ease-out shadow-[0_0_80px_rgba(0,0,0,0.6)] ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Decorative gradient overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        {/* ============================================ */}
        {/* LEFT SIDE — Navigation                       */}
        {/* ============================================ */}
        <div className="relative w-full md:w-[55%] lg:w-[50%] h-full flex flex-col bg-[#0a0a0a]/80 backdrop-blur-xl border-r border-white/5">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-5 sm:px-7 lg:px-10 pt-5 sm:pt-7 pb-4 sm:pb-6 border-b border-white/5">
            <Link
              href="/"
              aria-label="Crown - go to home"
              onClick={closeNav}
              className="block"
            >
              <Image
                src={logo}
                alt="Crown Agency Logo"
                priority
                width={100}
                height={30}
                className="object-contain"
              />
            </Link>

            {/* 🔥 Premium Close Button */}
            <button
              onClick={closeNav}
              aria-label="Close menu"
              className="close-btn-premium group"
            >
              <span className="close-bg" />
              <X
                className="relative z-10 text-white transition-transform duration-300 group-hover:rotate-90"
                size={18}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Section Label */}
          <div className="flex-shrink-0 px-5 sm:px-7 lg:px-10 pt-5 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[3px] text-white/40">
                Navigation
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          </div>

          {/* Menu List */}
          <div className="flex-1 overflow-y-auto px-3 sm:px-4 lg:px-6 custom-scrollbar pb-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeNav}
                  className="menu-link group relative flex items-center gap-4 justify-between py-4 px-4 sm:px-5 rounded-2xl hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 no-underline overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Hover Glow */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                      <span className="text-white/60 group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-white text-base sm:text-lg font-bold tracking-tight truncate">
                      {item.name}
                    </span>
                  </div>

                  <div className="relative w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-primary transition-all duration-300">
                    <ArrowUpRight
                      className="text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={16}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Area: Contact + CTA */}
          <div className="flex-shrink-0 px-5 sm:px-7 lg:px-10 pb-5 sm:pb-7 pt-4 border-t border-white/5 space-y-4">
            {/* Quick Contact */}
            <div className="hidden sm:flex flex-col gap-2">
              <Link
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-xs transition-colors no-underline"
              >
                <Mail size={14} className="text-primary flex-shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </Link>
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-xs transition-colors no-underline"
              >
                <Phone size={14} className="text-primary flex-shrink-0" />
                <span className="truncate">{COMPANY_INFO.phone}</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 my-2 justify-end">
              {socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ "--c": social.color } as React.CSSProperties}
                  className="social-mini group w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-white hover:border-[var(--c)] hover:bg-[var(--c)]/10 transition-all duration-300 no-underline"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              onClick={closeNav}
              className="cta-premium group relative w-full overflow-hidden rounded-2xl flex items-center justify-center gap-3 py-4 sm:py-5 no-underline"
            >
              <span className="cta-bg" />
              <span className="relative z-10 text-white font-black uppercase tracking-[3px] text-[11px] sm:text-xs">
                Get a Proposal
              </span>
              <div className="relative z-10 w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={14} className="text-[#0072ed]" />
              </div>
            </Link>
          </div>
        </div>

        {/* ============================================ */}
        {/* RIGHT SIDE — Visual (Desktop only)           */}
        {/* ============================================ */}
        <div className="hidden md:flex relative flex-1 bg-[#0f172a] flex-col justify-between overflow-hidden">
          {/* Background graphics */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[-15%] right-[-15%] w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
          </div>

          {/* Top: CTA */}
          <div className="relative z-10 flex justify-end p-6 lg:p-10">
            <Link
              href="/contact-us"
              onClick={closeNav}
              className="group relative px-5 lg:px-6 py-3 border border-white/15 hover:border-primary rounded-full flex items-center gap-3 overflow-hidden transition-all duration-300 no-underline backdrop-blur-md bg-white/[0.03]"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-white font-black text-[10px] uppercase tracking-[3px]">
                Get a Proposal
              </span>
              <div className="relative z-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowUpRight
                  size={12}
                  className="text-white group-hover:text-primary transition-colors"
                />
              </div>
            </Link>
          </div>

          {/* Bottom: Showcase */}
          <div className="relative z-10 px-6 lg:px-10 pb-6 lg:pb-10">
            {/* Mockup Image */}
            <div className="relative w-full aspect-video mb-6 lg:mb-8 group rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-purple-500/20 z-10 pointer-events-none" />
              <Image
                src="/images/news/blog-details-hero.png"
                alt="Crown Showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Counter */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-lg lg:text-xl font-black">
                01 / 04
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-tight uppercase tracking-tight">
              Building <br />
              <span className="text-primary">Digital</span> <br />
              Futures
            </h2>

            <p className="text-white/40 mt-3 max-w-sm text-xs lg:text-sm leading-relaxed">
              {COMPANY_INFO.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ============================================ */
        /* 🔥 PREMIUM CLOSE BUTTON                      */
        /* ============================================ */
        :global(.close-btn-premium) {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        :global(.close-btn-premium:hover) {
          border-color: rgba(239, 68, 68, 0.4);
          transform: rotate(90deg) scale(1.05);
        }

        :global(.close-btn-premium .close-bg) {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ef4444, #f97316);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        :global(.close-btn-premium:hover .close-bg) {
          opacity: 0.2;
        }

        @media (max-width: 575px) {
          :global(.close-btn-premium) {
            width: 38px;
            height: 38px;
            border-radius: 11px;
          }
        }

        /* ============================================ */
        /* 🔥 PREMIUM CTA BUTTON                        */
        /* ============================================ */
        :global(.cta-premium) {
          background: linear-gradient(135deg, #0072ed, #6366f1);
          box-shadow: 0 10px 30px -10px rgba(0, 114, 237, 0.5);
          transition: all 0.4s ease;
        }

        :global(.cta-premium .cta-bg) {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        :global(.cta-premium:hover) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px -10px rgba(0, 114, 237, 0.7);
        }

        :global(.cta-premium:hover .cta-bg) {
          opacity: 1;
        }

        /* ============================================ */
        /* MENU LINK ANIMATION                          */
        /* ============================================ */
        .offcanvas-root :global(.menu-link) {
          opacity: 0;
          transform: translateX(-20px);
        }

        .offcanvas-root.visible :global(.menu-link) {
          animation: slideInFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideInFade {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ============================================ */
        /* SCROLLBAR                                    */
        /* ============================================ */
        :global(.custom-scrollbar)::-webkit-scrollbar {
          width: 4px;
        }
        :global(.custom-scrollbar)::-webkit-scrollbar-track {
          background: transparent;
        }
        :global(.custom-scrollbar)::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }
        :global(.custom-scrollbar)::-webkit-scrollbar-thumb:hover {
          background: var(--primary-color, #0072ed);
        }
      `}</style>
    </div>
  );
};

export default Offcanvas;
