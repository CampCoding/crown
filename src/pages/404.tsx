import React from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/Seo";
import ErrorMain from "@/components/containers/ErrorMain";

const ErrorPage = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <SEO
        title="404 - Page Not Found"
        description="Oops! This page doesn't exist on Crown Agency. Let's get you back on track."
        noIndex={true}
      />
      <ErrorMain />
    </Layout>
  );
};

export default ErrorPage;
