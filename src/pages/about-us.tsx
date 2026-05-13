import React from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/Seo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import AboutUsBanner from "../components/containers/about/aboutBanner";
import { COMPANY_INFO } from "@/lib/constants";

const AboutUs = () => {
  // 🎯 About Page Schema for Google
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${COMPANY_INFO.name}`,
    description: `Learn about ${COMPANY_INFO.name} — a creative marketing & software agency founded in ${COMPANY_INFO.founded}.`,
    url: `${COMPANY_INFO.url}/about-us`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_INFO.fullName,
      alternateName: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
      logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
      description: COMPANY_INFO.description,
      foundingDate: COMPANY_INFO.founded.toString(),
      slogan: COMPANY_INFO.tagline,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_INFO.address.city,
        addressCountry: COMPANY_INFO.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.phone,
        contactType: "customer service",
        email: COMPANY_INFO.email,
      },
      sameAs: Object.values(COMPANY_INFO.social).filter(
        (url) => typeof url === "string" && url.startsWith("http")
      ),
    },
  };

  return (
    <Layout header={1} footer={1} video={0}>
      <SEO
        title="About Us"
        description="Crown Agency — A creative marketing & software team building bold brands and powerful digital products since 2026."
        keywords={[
          "About Crown Agency",
          "Crown Marketing Team",
          "Software Agency Egypt",
          "Creative Agency Cairo",
          "Branding Team",
          "Crown Story",
          "Marketing Experts",
        ]}
        schema={aboutSchema}
      />

      {/* <CmnBanner title="About Us" navigation="About Us" /> */}
      {/* <HomeTwoModal /> */}
      <AboutUsBanner />
      <Agency />
      {/* <TeamMembers /> */}
      <HomeTestimonial />
      <AboutSponsor />
      {/* <AboutCta /> */}
    </Layout>
  );
};

export default AboutUs;
