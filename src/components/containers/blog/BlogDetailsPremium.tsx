import React from 'react';
import Head from 'next/head';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  TrendingUp, 
  BarChart, 
  Link as LinkIcon 
} from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import AnimateSvg from '../../AnimateSvg';

const BlogDetail = () => {
    const annotationPath = "M61.9499 126.019C129.419 134.323 205.111 131.946 269.179 107.397C287.878 100.232 312.661 88.4955 307.573 64.3267C301.574 35.835 261.103 20.5501 236.856 13.8731C190.969 1.23754 142.979 0.450446 96.0779 7.22801C75.3721 10.2202 54.4734 14.7152 35.0413 22.6512C24.1049 27.1176 1.84994 37.8503 3.04637 53.0054C3.93896 64.3117 19.7218 75.4778 28.068 80.8164C50.3829 95.0898 77.4888 103.502 102.805 110.596C157.283 125.862 212.697 134.798 268.687 142.263";

  return (
    // FIXED: Corrected background syntax and added linear-gradient overlay
    <div
    style={{
      background : 'linear-gradient(to bottom, rgba(0,0,0, 0.52), rgba(0,0,0, 0.73)) ,  url(/images/Untitled%20design%20-%202026-04-27T170151.794.png)',
      backgroundSize : "cover",
      backgroundPosition : "center",
      backgroundRepeat : "no-repeat",
      backgroundAttachment : "fixed",
    }}
    className="min-h-screen bg-[#05070a]  text-[#f0f4f8] font-sans selection:bg-blue-500/30">
      <Head>
        <title>How Modern Brands Dominate Search | Crown Agency</title>
      </Head>

      {/* MESH BACKGROUND EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-blue-600/05 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <header className="relative z-10 pt-40! container pb-12!  mx-auto px-6">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
          <span>Blog</span>
          <div className="w-1 h-1 rounded-full bg-blue-400/60" />
          <span>Growth Strategy</span>
        </div>

        <h1 className="text-4xl! md:text-6xl! font-extrabold tracking-tighter leading-[1.1] mb-8! max-w-4xl">
          How Modern Brands Dominate Search — and <span className="relative px-2! text-primary inline-block">
            Convert
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '150%', height: '140%', minWidth: '120px' }}>
                  <AnimateSvg
                    path={annotationPath}
                    viewBox="0 0 311 145"
                    strokeColor="#3b82f6"
                    strokeWidth={4}
                    animationDuration={1.5}
                    animationDelay={0.5}
                    enableHoverAnimation={true}
                  />
                </div>
            </span> Like Never Before
        </h1>
        
        <p className="text-[#f0f0f0b3] text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12!">
          AI-driven content, performance SEO, and precision paid media are converging. Here&apos;s the playbook top agencies use in 2026.
        </p>

        {/* META ROW */}
        <div className="flex flex-wrap items-center gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-sm">RJ</div>
            <div>
              <p className="text-sm font-bold">Rachel Jensen</p>
              <p className="text-[10px] text-white/30 uppercase tracking-wider">Head of Strategy</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Calendar size={14} /> April 22, 2026
          </div>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Clock size={14} /> 8 min read
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="relative z-10 container mx-auto px-6! py-20! grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* ARTICLE BODY */}
        <div className="lg:col-span-8">
          
          {/* UPDATED FEATURED CARD: Added background image, spacing, and hover effects */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 h-[450px] mb-20! group transition-all duration-500 hover:border-blue-500/30">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                    alt="Data dashboard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/80 to-transparent" />
            </div>
            
            <div className="relative z-20 h-full p-12! flex flex-col justify-end">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-4! block">2026 Benchmark Report</span>
              <h2 className="text-4xl font-bold mb-8! tracking-tight">The Integrated Growth Stack</h2>
              
              <div className="flex flex-wrap gap-12!">
                <StatItem val="3.7×" label="Avg. ROAS lift" />
                <StatItem val="+214%" label="Organic reach" />
                <StatItem val="62%" label="Lower CPL" />
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <article className="prose prose-invert max-w-none">
            <h3 className="text-3xl font-bold mb-8! mt-4!">The New Rules of Search Visibility</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8! font-light">
              The landscape shifted fast. Google&apos;s Search Generative Experience now answers queries before users ever click — which means brands that relied purely on ranking keywords are watching traffic quietly evaporate. 
            </p>

            <div className="bg-blue-500/5 border-l-4 border-blue-500 p-10! my-14! rounded-r-2xl italic text-white/90 font-light">
              &quot;Brands that build genuine topical authority will consistently outrank generative summaries — because search engines surface them as the source, not the echo.&quot;
              <div className="not-italic text-blue-400 text-xs font-bold mt-6! uppercase tracking-widest">— Google Quality Update 2026</div>
            </div>

            <h3 className="text-3xl font-bold mb-8! mt-20!">Performance Paid Media</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6! my-12!">
              <StrategyCard 
                icon={<Star size={20} />} 
                title="Hook-First Scripting" 
                desc="The first 1.5 seconds decide everything. Pattern interrupts over logos." 
              />
              <StrategyCard 
                icon={<CheckCircle size={20} />} 
                title="AI Creative Briefs" 
                desc="We use AI to generate 40+ briefs, human strategists pick the winning 8." 
              />
              <StrategyCard 
                icon={<TrendingUp size={20} />} 
                title="Iteration Sprints" 
                desc="Winners scaled in 7 days. Losers killed by day 5. Pure signal." 
              />
              <StrategyCard 
                icon={<BarChart size={20} />} 
                title="Platform Native" 
                desc="Vertical for TikTok, Carousels for Meta. No format is an afterthought." 
              />
            </div>

            {/* RESULTS BAR SECTION */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-10! my-20!">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-10! block">Revenue Attribution — Blended Average</span>
              <ResultBar label="Organic Search" val={38} />
              <ResultBar label="Paid Social" val={29} />
              <ResultBar label="Google Ads" val={21} />
              <ResultBar label="Email/Retention" val={12} />
            </div>
          </article>

          {/* CTA BLOCK */}
          <div className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 rounded-[3rem] p-16! text-center mt-24!">
            <h3 className="text-4xl font-bold mb-6!">Ready to build your growth stack?</h3>
            <p className="text-white/50 mb-12! text-lg max-w-md mx-auto font-light">Get a complimentary audit of your current SEO and paid media infrastructure.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6!">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20">
                Book a Free Audit <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto border border-white/10 hover:border-white/20 px-10! py-5! rounded-full! font-bold text-white/60 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-16!">
            
            {/* TOC */}
            <div>
              <SidebarLabel label="Table of Contents" />
              <nav className="flex flex-col gap-2!">
                <TocItem num="01" label="Search Visibility" active />
                <TocItem num="02" label="Performance Paid Media" />
                <TocItem num="03" label="Measuring Results" />
                <TocItem num="04" label="Retention Strategy" />
              </nav>
            </div>

            {/* SHARE */}
            <div>
              <SidebarLabel label="Share Article" />
              <div className="flex gap-4 mt-6!">
                <ShareBtn icon={<FaLinkedin size={18} />} />
                <ShareBtn icon={<FaTwitter size={18} />} />
                <ShareBtn icon={<FaFacebook size={18} />} />
                <ShareBtn icon={<LinkIcon size={18} />} />
              </div>
            </div>

            {/* RELATED */}
            <div>
              <SidebarLabel label="Related Articles" />
              <div className="space-y-8!">
                <RelatedCard tag="SEO" title="Topical Authority: The 2026 Framework" />
                <RelatedCard tag="Paid Media" title="Why Your Best Creative Performs Worst" />
                <RelatedCard tag="CRO" title="Landing Page Psychology Principles" />
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

// --- SUBCOMPONENTS (Updated for better spacing) ---

const SidebarLabel = ({ label }: { label: string }) => (
  <div className="text-[11px] font-bold text-white uppercase tracking-[0.25em] mb-8 pb-3 border-b border-white/10">
    {label}
  </div>
);

const StatItem = ({ val, label }: { val: string; label: string }) => (
  <div className="flex flex-col gap-1">
    <span className="block text-4xl font-bold text-blue-400 tracking-tight">{val}</span>
    <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const StrategyCard = ({ icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8! hover:bg-white/[0.06] hover:border-blue-500/40 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-bold text-lg mb-3!">{title}</h4>
    <p className="text-sm text-white/50 leading-relaxed font-light">{desc}</p>
  </div>
);

const ResultBar = ({ label, val }: { label: string; val: number }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between text-xs font-bold mb-3">
      <span className="text-white/60 uppercase tracking-widest">{label}</span>
      <span className="text-blue-400">{val}%</span>
    </div>
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${val}%` }} />
    </div>
  </div>
);

const TocItem = ({ num, label, active = false }: { num: string; label: string; active?: boolean }) => (
  <a href="#" className={`group flex items-center gap-5 py-3 transition-all ${active ? 'text-blue-400' : 'text-white/40 hover:text-white'}`}>
    <span className={`text-[10px] font-bold ${active ? 'opacity-100' : 'opacity-30'}`}>{num}</span>
    <span className="text-base font-medium tracking-tight">{label}</span>
    {active && <ChevronRight size={14} className="ml-auto" />}
  </a>
);

const ShareBtn = ({ icon }: { icon: any }) => (
  <button className="w-12 h-12 rounded-2xl! bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all">
    {icon}
  </button>
);

const RelatedCard = ({ tag, title }: { tag: string; title: string }) => (
  <div className="group cursor-pointer">
    <span className="text-[10px] font-bold text-blue-400/80 uppercase tracking-widest mb-2 block">{tag}</span>
    <h4 className="text-base font-semibold leading-snug group-hover:text-blue-400 transition-colors">{title}</h4>
  </div>
);

export default BlogDetail;