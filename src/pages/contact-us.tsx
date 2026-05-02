import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import dynamic from "next/dynamic";

const ContactPremium = dynamic(() => import("@/components/containers/ContactPremium"), { ssr: false });

const ContactUs = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <ContactPremium />
    </Layout>
  );
};

export default ContactUs;
