import React from "react";
import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";

const BlogDetailsPremium = dynamic(() => import("@/components/containers/blog/BlogDetailsPremium"), { ssr: false });

const BlogSingle = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <BlogDetailsPremium />
    </Layout>
  );
};

export default BlogSingle;
