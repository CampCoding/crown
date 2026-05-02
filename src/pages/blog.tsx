import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import dynamic from "next/dynamic";

const BlogPremium = dynamic(() => import("@/components/containers/blog/BlogPremium"), { ssr: false });
const BlogBanner = dynamic(() => import("@/components/containers/blog/BlogBanner"), { ssr: false });

const BlogPage = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      
      <BlogBanner />
      <BlogPremium />
    </Layout>
  );
};

export default BlogPage;
