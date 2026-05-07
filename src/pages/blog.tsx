import React from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/Seo";
import dynamic from "next/dynamic";
import { COMPANY_INFO } from "@/lib/constants";

const BlogPremium = dynamic(
  () => import("@/components/containers/blog/BlogPremium"),
  { ssr: false }
);
const BlogBanner = dynamic(
  () => import("@/components/containers/blog/BlogBanner"),
  { ssr: false }
);

const BlogPage = () => {
  // 🎯 Blog Page Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${COMPANY_INFO.name} Blog`,
    description: `Latest insights from ${COMPANY_INFO.name} on marketing, software, branding, design & growth.`,
    url: `${COMPANY_INFO.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
      },
    },
    inLanguage: "en-US",
  };

  return (
    <Layout header={1} footer={1} video={0}>
      <SEO
        title="Blog & Insights"
        description="Crown Agency blog — insights on marketing, software, design, branding & growth strategy. Stay ahead in 2026."
        keywords={[
          "Crown Agency Blog",
          "Marketing Insights 2026",
          "Software Trends",
          "Design Articles",
          "Branding Tips",
          "Digital Marketing Blog",
          "Tech Insights",
          "Growth Strategy",
        ]}
        schema={blogSchema}
      />

      <BlogBanner />
      <BlogPremium />
    </Layout>
  );
};

export default BlogPage;
