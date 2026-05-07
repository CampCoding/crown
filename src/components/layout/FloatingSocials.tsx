import React from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import { COMPANY_INFO } from "@/lib/constants";

type SocialItem = {
  icon: IconType;
  href: string;
  color: string;
  label: string;
};

const socials: SocialItem[] = [
  COMPANY_INFO.social.facebook && {
    icon: FaFacebookF,
    href: COMPANY_INFO.social.facebook,
    color: "#1877F2",
    label: "Facebook",
  },
  COMPANY_INFO.social.instagram && {
    icon: FaInstagram,
    href: COMPANY_INFO.social.instagram,
    color: "#E4405F",
    label: "Instagram",
  },
  COMPANY_INFO.social.linkedin && {
    icon: FaLinkedinIn,
    href: COMPANY_INFO.social.linkedin,
    color: "#0A66C2",
    label: "LinkedIn",
  },
  COMPANY_INFO.whatsapp && {
    icon: FaWhatsapp,
    href: `https://wa.me/${COMPANY_INFO.whatsapp}`,
    color: "#25D366",
    label: "WhatsApp",
  },
].filter(Boolean) as SocialItem[];

const whatsappMessage = encodeURIComponent(
  `Hello ${COMPANY_INFO.name}! I'm interested in your services.`
);
const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

const FloatingSocials = () => {
  return (
    <>
      {/* ============================================ */}
      {/* Desktop Dock (XL screens only) - Original   */}
      {/* ============================================ */}
      <div className="fixed right-3 bottom-8 z-[999] hidden xl:flex flex-col items-center">
        {/* Top Line */}
        <div className="mb-0 h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-white/10" />

        {/* Social Dock */}
        <div className="relative flex flex-col items-center gap-3 rounded-[28px] border border-white/10 bg-[#07141b]/70 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          {/* Soft Glow Behind Dock */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-primary/10 blur-2xl" />

          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={
                  {
                    "--social-color": social.color,
                  } as React.CSSProperties
                }
                className="group relative flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] text-white/45 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[var(--social-color)] hover:text-[var(--social-color)] hover:bg-white/[0.08]"
              >
                {/* Tooltip */}
                <span className="pointer-events-none absolute right-[62px] top-1/2 flex -translate-y-1/2 translate-x-4 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#07141b]/95 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: social.color }}
                  />
                  {social.label}
                </span>

                {/* Tooltip Arrow */}
                <span className="pointer-events-none absolute right-[54px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-white/10 bg-[#07141b]/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <Icon className="relative z-10 text-[18px] transition-all duration-300 group-hover:scale-110" />

                {/* Colored Glow */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
                  style={{ backgroundColor: social.color }}
                />

                {/* Inner Shine */}
                <span className="pointer-events-none absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className="mt-4 h-16 w-px bg-gradient-to-b from-white/10 via-primary/40 to-transparent" />

        {/* Small Label */}
        <span className="mt-2 rotate-90 text-[10px] font-black uppercase tracking-[0.35em] text-white/25">
          Follow
        </span>
      </div>

      {/* ============================================ */}
      {/* Mobile/Tablet WhatsApp Button (always visible below xl) */}
      {/* ============================================ */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 left-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 xl:hidden!"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 animate-ping rounded-full border-2 border-[#25D366] opacity-60" />

        {/* Icon */}
        <FaWhatsapp className="relative z-10 text-[26px]" />

        {/* Tooltip (visible on tablet+) */}
        <span className="pointer-events-none absolute right-[70px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#07141b]/95 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Chat with us
        </span>
      </Link>
    </>
  );
};

export default FloatingSocials;
