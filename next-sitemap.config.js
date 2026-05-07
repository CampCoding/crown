// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://crown-agency.com", // 🔧 PLACEHOLDER
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  // ✅ Default values (لو الصفحة مش معرّفة في transform)
  changefreq: "monthly",
  priority: 0.5,

  // ❌ استبعد كل الصفحات اللي مش شغالين فيها أو الـ templates
  exclude: [
    // الـ templates الإضافية (مش بنستخدمها)
    "/index-light",
    "/index-two",
    "/index-two-light",
    "/index-three",
    "/index-three-light",
    "/index-four",
    "/index-four-light",
    "/index-five",
    "/index-five-light",

    // صفحات لسه مش شغالين فيها
    "/service-single",
    "/our-projects",
    "/project-single",
    "/portfolio",
    "/our-story",
    "/our-teams",
    "/team-single",
    "/client-feedback",
    "/faq",

    // مش لازم تظهر للجوجل
    "/404",
    "/api/*",
  ],

  // ✅ تخصيص كل صفحة على حدة
  transform: async (config, path) => {
    // ============================================
    // الصفحات الشغالة بس
    // ============================================

    // 1. الـ Home — أهم صفحة
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // 2. Our Services — صفحة مهمة جداً
    if (path === "/our-services") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // 3. About Us
    if (path === "/about-us") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // 4. Contact Us
    if (path === "/contact-us") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // 5. Blog (الـ list page)
    if (path === "/blog") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // 6. Blog Single
    if (path === "/blog-single") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // أي صفحة تانية - default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  // ✅ إعدادات robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/404",
          // الـ templates
          "/index-light",
          "/index-two",
          "/index-two-light",
          "/index-three",
          "/index-three-light",
          "/index-four",
          "/index-four-light",
          "/index-five",
          "/index-five-light",
          // صفحات لسه مش جاهزة
          "/service-single",
          "/our-projects",
          "/project-single",
          "/portfolio",
          "/our-story",
          "/our-teams",
          "/team-single",
          "/client-feedback",
          "/faq",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://crown-agency.com/sitemap.xml", // 🔧 PLACEHOLDER
    ],
  },
};
