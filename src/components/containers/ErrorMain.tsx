import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ArrowRight, MessageCircle, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import NetworkGrid from "@/components/layout/NetworkGrid";
import Particles from "@/components/Particles";
import { COMPANY_INFO } from "@/lib/constants";
import error404 from "public/images/error-thumb.png";

const ErrorMain = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Crown Agency, I reached a missing page and need help."
  );

  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-[#050505] text-white min-h-screen flex items-center py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={220}
          speed={0.08}
          sizeRandomness={6}
          particleColors={["#0072ed", "#ffffff"]}
        />
        <NetworkGrid opacity={0.12} />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#0072ed]/20 blur-[90px]" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#0072ed]/10 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Visual */}
            <div className="order-1 order-lg-1">
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0072ed]/10 to-transparent pointer-events-none" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                  <Image
                    src={error404}
                    alt="404 Error - Crown Agency"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-2 order-lg-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0072ed]/20 bg-[#0072ed]/10 px-4 py-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-[#0072ed]" />
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#7ec0ff]">
                  404 Error
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-5">
                Page Not <span className="text-primary">Found</span>
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-8 max-w-xl mb-8">
                Looks like this page went off-grid. Let&apos;s get you back to
                Crown Agency and point you in the right direction.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0072ed] px-6! py-4! font-bold uppercase tracking-[0.08em] text-white no-underline transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_30px_rgba(0,114,237,0.35)]"
                >
                  <Home size={18} />
                  Back Home
                </Link>

                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6! py-4! font-bold uppercase tracking-[0.08em] text-white no-underline transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Link>

                {COMPANY_INFO.social.facebook && (
                  <Link
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6! py-4! font-bold uppercase tracking-[0.08em] text-white no-underline transition-all duration-300 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10"
                  >
                    <FaFacebookF size={16} />
                    Facebook
                  </Link>
                )}
              </div>

              {/* Small note */}
              <div className="mt-6">
                <p className="text-white/35 text-sm mb-0">
                  If you still can&apos;t find what you need, message us
                  directly and we&apos;ll help you fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorMain;
