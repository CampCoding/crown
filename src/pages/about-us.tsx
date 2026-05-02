import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import AboutUsBanner from "../components/containers/about/aboutBanner";

const AboutUs = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      {/* <CmnBanner title="About Us" navigation="About Us" /> */}
      {/* <HomeTwoModal /> */}
      <AboutUsBanner/>
      <Agency />
      <TeamMembers />
      <HomeTestimonial />
      <AboutSponsor />
      {/* <AboutCta /> */}
    </Layout>
  );
};

export default AboutUs;
