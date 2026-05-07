import React from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/Seo";
import dynamic from "next/dynamic";
import { COMPANY_INFO } from "@/lib/constants";

const BlogDetailsPremium = dynamic(
  () => import("@/components/containers/blog/BlogDetailsPremium"),
  { ssr: false }
);

const BlogSingle = () => {
  // 🎯 Article Schema for Google Rich Results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Modern Brands Dominate Search and Convert Like Never Before",
    description:
      "AI-driven content, performance SEO, and precision paid media are converging. Here's the playbook top agencies use in 2026.",
    image: `${COMPANY_INFO.url}/images/news/blog-1-real.png`,
    datePublished: "2026-04-22T08:00:00+02:00",
    dateModified: "2026-04-22T08:00:00+02:00",
    author: {
      "@type": "Person",
      name: "Rachel Jensen",
      jobTitle: "Head of Strategy",
      worksFor: {
        "@type": "Organization",
        name: COMPANY_INFO.fullName,
      },
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY_INFO.url}/blog-single`,
    },
    keywords: [
      "SEO 2026",
      "Performance Marketing",
      "Paid Media",
      "Growth Strategy",
      "AI Marketing",
    ].join(", "),
    articleSection: "Growth Strategy",
    inLanguage: "en-US",
  };

  return (
    <Layout header={1} footer={1} video={0}>
      <SEO
        title="How Modern Brands Dominate Search & Convert"
        description="Crown Agency's 2026 playbook on AI-driven SEO, performance paid media & growth — used by top brands today."
        keywords={[
          "SEO 2026",
          "Performance Marketing",
          "Paid Media Strategy",
          "AI Marketing",
          "Growth Hacking",
          "Crown Agency Blog",
          "Marketing Playbook",
        ]}
        image="/images/news/blog-1-real.png"
        schema={articleSchema}
      />
      <BlogDetailsPremium />
    </Layout>
  );
};

export default BlogSingle;
