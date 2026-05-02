import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, Home, Info, Briefcase, 
  Layers, Newspaper, Users, ArrowUpRight 
} from "lucide-react";
import logo from "public/images/logo.png";


interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

  let logoSrc = logo;


const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  useEffect(() => {
    const handleResizeHeader = () => setOpenNav(false);
    window.addEventListener("resize", handleResizeHeader);
    return () => window.removeEventListener("resize", handleResizeHeader);
  }, [setOpenNav]);

  const closeNav = () => setOpenNav(false);

  const menuItems = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About Us", href: "/about", icon: <Info size={20} /> },
    { name: "Services", href: "/services", icon: <Briefcase size={20} /> },
    { name: "Our projects", href: "/projects", icon: <Layers size={20} /> },
    { name: "Blogs", href: "/blog", icon: <Newspaper size={20} /> },
    { name: "Careers", href: "/careers", icon: <Users size={20} /> },
  ];

  return (
    <div className={`fixed inset-0 z-[9999]  p-4! transition-all duration-500 ${openNav ? "visible" : "invisible pointer-events-none"}`}>
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 ${openNav ? "opacity-100" : "opacity-0"}`} onClick={closeNav} />
      
      {/* Main Container */}
      <div className={`absolute top-0 left-0 h-full w-full max-w-[1100px] bg-[#0a0a0a] flex transition-transform duration-700 ease-in-out ${openNav ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* Left Side: Navigation (The Sidebar) */}
        <div className="w-full md:w-[50%] h-full p-6 md:p-10 flex flex-col bg-[#111827]/30 border-r border-white/5 relative">
          
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-10">
          <div className="navbar__logo p-2!">
                              <Link href="/" aria-label="go to home">
                                <Image src={logoSrc} alt="Image" priority width={100} height={30} />
                              </Link>
                            </div>
            <button onClick={closeNav} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <X className="text-white" size={20} />
            </button>
          </div>

          {/* Nav List */}
          <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                onClick={closeNav}
                className="group flex items-center justify-between p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 no-underline"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="text-white/60 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-white text-lg font-bold tracking-tight">{item.name}</span>
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </Link>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-6 lg:hidden">
            <Link 
              href="contact-us" 
              onClick={closeNav} 
              className="group relative w-full py-6 rounded-3xl flex items-center justify-center gap-4 overflow-hidden border border-primary/50 transition-all hover:border-primary no-underline"
            >
              <span className="relative z-10 text-white font-black uppercase tracking-[4px] text-xs">Get a Proposal</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={18} className="text-white" />
              </div>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </Link>
          </div>
        </div>

        {/* Right Side: Visual Teaser (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 relative bg-[#0f172a] p-12 flex-col justify-between overflow-hidden">
          {/* Abstract background graphics */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
          
          <div className="flex justify-end relative z-10">
            <Link 
              href="contact-us" 
              onClick={closeNav}
              className="group relative px-8 py-4 border border-primary/50 rounded-full flex items-center gap-3 overflow-hidden transition-all hover:border-primary no-underline"
            >
              <span className="relative z-10 text-white font-black text-[10px] uppercase tracking-[4px]">Get a Proposal</span>
              <div className="relative z-10 w-7 h-7 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={14} className="text-white" />
              </div>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </Link>
          </div>

          <div className="relative z-10">
            {/* Mockup Image Area */}
            <div className="relative w-full aspect-video mb-10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
                <div className="w-full h-full border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/news/blog-details-hero.png" 
                      alt="Showcase" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-xl font-bold">01 / 04</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter">
              Building <br />
              <span className="text-primary">Digital</span> <br />
              Futures
            </h2>
            <p className="text-white/40 mt-4 max-w-sm text-sm leading-relaxed">
                We partner with forward-thinking brands to build software that scales and design that converts.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--primary-color);
        }
        .ease-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </div>
  );
};

export default Offcanvas;