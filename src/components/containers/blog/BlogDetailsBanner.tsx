import React from 'react';
import {  ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function AgencyBlogBanner() {
  return (
    <section
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Gemini_Generated_Image_25fo7825fo7825fo (2).png')",
      }}
    >
      {/* 1. Gradient Overlay: Darker at the bottom for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#0a0a0a] z-0" />

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
       

        {/* Title: Scaled down for a more "Editorial" feel */}
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Scaling Digital Ecosystems 
        </h1>

        {/* Smaller, concise description */}
        <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed mb-8 font-light">
          From algorithmic optimization to high-conversion storytelling. Discover how we helped 50+ brands achieve a 300% ROAS increase using our proprietary &quot;Momentum&quot; framework.
        </p>
        {/* 3. Minimalist Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Decorative Blur Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full" />
    </section>
  );
}