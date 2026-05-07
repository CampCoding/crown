// lib/constants.ts

export const COMPANY_INFO = {
  name: "Crown",
  fullName: "Crown Marketing & Software Agency",
  tagline: "Where Brands Become Royalty",
  description:
    "Crown is a full-service marketing and software development agency founded in 2026. We craft digital experiences, build powerful web & mobile applications, and scale brands with data-driven marketing strategies.",
  shortDescription:
    "Crown — Marketing & Software Agency. We build, brand, and scale.",
  founded: 2026,
  url: "https://crown-agency.com", // 🔧 PLACEHOLDER
  logo: "/images/logo.png",
  ogImage: "/images/og-image.png",
  email: "info@crown-agency.com", // 🔧 PLACEHOLDER
  phone: "+201000000000", // 🔧 PLACEHOLDER
  whatsapp: "201000000000", // 🔧 PLACEHOLDER (بدون +)
  address: {
    street: "Cairo Business District",
    city: "Cairo",
    country: "Egypt",
    full: "Cairo Business District, Cairo, Egypt",
  },
  social: {
    facebook: "https://facebook.com", // 🔧 PLACEHOLDER
    instagram: "https://instagram.com", // 🔧 PLACEHOLDER
    linkedin: "https://linkedin.com", // 🔧 PLACEHOLDER
    whatsapp: "201000000000", // 🔧 PLACEHOLDER (رقم فقط)
    // Optional - سيبهم فاضيين لو مش موجودين
    twitter: "",
    behance: "",
    youtube: "",
    tiktok: "",
  },
  // Analytics & Tracking (PLACEHOLDERS)
  analytics: {
    googleAnalyticsId: "", // مثال: "G-XXXXXXXXXX"
    googleTagManagerId: "", // مثال: "GTM-XXXXXXX"
    metaPixelId: "", // مثال: "123456789012345"
  },
  keywords: [
    "Crown Agency",
    "Crown Marketing",
    "Marketing Agency 2026",
    "Software Development Agency",
    "Web Development",
    "Mobile App Development",
    "UI UX Design",
    "SEO Services",
    "Digital Marketing",
    "Branding Agency",
    "Social Media Marketing",
    "Performance Marketing",
    "Content Creation",
    "Cairo Marketing Agency",
    "Egypt Software Company",
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
          "Human-centered interfaces that convert visitors into customers.",
        icon: "Palette",
        color: "#0072ed",
        features: [
          "User Research & Personas",
          "Wireframing & Prototyping",
          "Design Systems",
          "Mobile-First Design",
          "Usability Testing",
          "Interaction Design",
        ],
      },
      {
        slug: "web-development",
        title: "Web Development",
        shortDesc:
          "Lightning-fast, scalable websites built with modern frameworks.",
        icon: "Code2",
        color: "#6366f1",
        features: [
          "Next.js & React Apps",
          "E-commerce Platforms",
          "Custom CMS Solutions",
          "API Integration",
          "Performance Optimization",
          "Progressive Web Apps",
        ],
      },
      {
        slug: "mobile-development",
        title: "Mobile Development",
        shortDesc: "Native and cross-platform apps for iOS & Android.",
        icon: "Smartphone",
        color: "#ec4899",
        features: [
          "iOS Native (Swift)",
          "Android Native (Kotlin)",
          "React Native",
          "App Store Optimization",
          "Push Notifications",
          "Offline-First Architecture",
        ],
      },
      {
        slug: "seo-optimization",
        title: "SEO Optimization",
        shortDesc: "Rank higher, attract better, convert more.",
        icon: "Search",
        color: "#10b981",
        features: [
          "Technical SEO Audit",
          "Keyword Research & Strategy",
          "On-Page Optimization",
          "Link Building",
          "Local SEO",
          "Content SEO",
        ],
      },
    ],
  },
  marketing: {
    title: "Marketing & Growth",
    subtitle: "Scaling Brands With Strategy",
    services: [
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        shortDesc: "Build communities that drive real business growth.",
        icon: "Share2",
        color: "#f97316",
        features: [
          "Content Calendar",
          "Community Management",
          "Influencer Partnerships",
          "Analytics & Reporting",
          "Trend Research",
          "Multi-Platform Strategy",
        ],
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing",
        shortDesc: "Data-driven ad campaigns with measurable ROI.",
        icon: "TrendingUp",
        color: "#eab308",
        features: [
          "Meta Ads (Facebook/Instagram)",
          "Google Ads & Display",
          "TikTok Ads",
          "Conversion Tracking",
          "A/B Testing",
          "Funnel Optimization",
        ],
      },
      {
        slug: "branding-identity",
        title: "Branding & Identity",
        shortDesc: "Build a brand that people remember and trust.",
        icon: "Crown",
        color: "#8b5cf6",
        features: [
          "Brand Strategy",
          "Logo & Visual Identity",
          "Brand Guidelines",
          "Brand Voice & Messaging",
          "Rebranding",
          "Packaging Design",
        ],
      },
      {
        slug: "content-creation",
        title: "Content Creation",
        shortDesc: "Stories that captivate, content that converts.",
        icon: "Sparkles",
        color: "#ec4899",
        features: [
          "Photography & Videography",
          "Reels & Short Videos",
          "Podcast Production",
          "Copywriting",
          "Graphic Design",
          "Motion Graphics",
        ],
      },
      {
        slug: "media-production",
        title: "Media Production",
        shortDesc: "Cinematic-grade production for modern brands.",
        icon: "Camera",
        color: "#06b6d4",
        features: [
          "Commercial Shoots",
          "Product Photography",
          "Behind-the-Scenes",
          "Models & Styling",
          "Studio & On-Location",
          "Post-Production",
        ],
      },
      {
        slug: "growth-strategy",
        title: "Growth Strategy",
        shortDesc: "Scale with clarity, not chaos.",
        icon: "BarChart3",
        color: "#22c55e",
        features: [
          "Market Research",
          "Competitor Analysis",
          "Business Development",
          "Sales Funnel Strategy",
          "CRM Integration",
          "Customer Retention",
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
