// lib/constants.ts

export const COMPANY_INFO = {
  name: "Crown",
  fullName: "Crown Agency",
  tagline: "Where Brands Become Royalty",
  description:
    "Crown Agency is a marketing and software development company helping brands grow through strategy, design, content, and digital products.",
  shortDescription:
    "Crown Agency — Marketing & Software Solutions for modern brands.",
  founded: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://crown-agency.com",
  logo: "/images/logo.png",
  ogImage: "/images/og-image.png",

  // ✅ Real Data
  email: "", // Not available yet
  phone: "+201000308057",
  whatsapp: "201000308057",

  address: {
    street: "Villa 1, Misr Lel-Tayaran St., Near City Centre Almaza, Suez Rd",
    city: "Cairo",
    country: "Egypt",
    full: "Villa 1, Misr Lel-Tayaran St., Near City Centre Almaza, Suez Rd, Cairo, Egypt",
  },

  social: {
    facebook: "https://www.facebook.com/crowndigitalsolution1",
    instagram: "https://www.instagram.com/crown_digital_solutions/?hl=ar",
    linkedin: "https://www.linkedin.com/in/crown-digital-solution-582b80403/",
    twitter: "",
    behance: "",
    youtube: "",
    tiktok: "",
  },

  analytics: {
    googleAnalyticsId: "",
    googleTagManagerId: "",
    metaPixelId: "",
  },

  keywords: [
    "Crown Agency",
    "Marketing Agency Cairo",
    "Software Development Egypt",
    "Branding Agency",
    "Web Development",
    "Mobile App Development",
    "SEO Services",
    "Digital Marketing",
    "Content Creation",
    "Cairo Agency",
  ],
};

export const SERVICES_DATA = {
  programming: {
    title: "Software & Development",
    subtitle: "Engineering Digital Excellence",
    services: [
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        shortDesc:
          "Crafting intuitive and inspiring digital experiences that balance flawless usability with modern aesthetics.",
        icon: "Palette",
        color: "#0072ed",
        features: [
          "User Research & Analysis",
          "Wireframing & Information Architecture",
          "Interactive Visual Design",
          "Prototyping & User Testing",
        ],
      },
      {
        slug: "web-development",
        title: "Web Development",
        shortDesc:
          "Engineering high-performance, visually stunning websites designed to convert visitors into loyal customers.",
        icon: "Code2",
        color: "#6366f1",
        features: [
          "Corporate Website Development",
          "E-commerce Solutions",
          "Landing Page Optimization",
          "CMS Integration & Web Security",
        ],
      },
      {
        slug: "mobile-application",
        title: "Mobile Application",
        shortDesc: "Developing smart, intuitive mobile applications that deliver a seamless user experience across all platforms.",
        icon: "Smartphone",
        color: "#ec4899",
        features: [
          "iOS & Android Development",
          "UI/UX Design & Prototyping",
          "Cross-platform Solutions",
          "Maintenance & App Updates",
        ],
      },
    ],
  },
  marketing: {
    title: "Marketing & Growth",
    subtitle: "Scaling Brands With Strategy",
    services: [
      {
        slug: "seo-jeo",
        title: "SEO & JEO",
        shortDesc: "Securing your brand’s dominance across traditional search engines and AI-driven generative platforms.",
        icon: "Search",
        color: "#10b981",
        features: [
          "Search Engine Optimization (SEO)",
          "Generative Engine Optimization (JEO)",
          "Advanced Keyword Strategy",
          "Authority Building & Brand Visibility",
        ],
      },
      {
        slug: "social-media-management",
        title: "Social Media Management",
        shortDesc: "Crafting a premier digital presence through strategic storytelling and impactful engagement.",
        icon: "Share2",
        color: "#f97316",
        features: [
          "Strategic Roadmapping",
          "Creative Content Creation",
          "Community Management",
          "Performance Analytics",
        ],
      },
      {
        slug: "performance-marketing-ads",
        title: "Performance Marketing & Ads",
        shortDesc: "Data-driven advertising strategies designed to maximize your ROI and accelerate business scaling.",
        icon: "TrendingUp",
        color: "#eab308",
        features: [
          "Social Media Ads (Meta, TikTok, Snapchat)",
          "Search Engine Marketing (Google Ads)",
          "Precision Retargeting",
          "Conversion Rate Optimization (CRO)",
        ],
      },
      {
        slug: "media-production-video-editing",
        title: "Media Production & video editing",
        shortDesc: "Blending cinematic artistry with AI technology to create future-ready visual experiences.",
        icon: "Camera",
        color: "#06b6d4",
        features: [
          "Cinematic Videography & Photography",
          "Motion Graphics & 3D Animation",
          "AI-Powered Content Production",
          "Advanced Post-Production & VFX",
        ],
      },
    ],
  },
};

// Helper: Get all services as flat array
export const getAllServices = () => {
  return [
    ...SERVICES_DATA.programming.services,
    ...SERVICES_DATA.marketing.services,
  ];
};

// Helper: Get service by slug
export const getServiceBySlug = (slug: string) => {
  return getAllServices().find((service) => service.slug === slug);
};
