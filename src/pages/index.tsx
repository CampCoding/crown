import React from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/Seo";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import { COMPANY_INFO } from "@/lib/constants";

const Home = () => {
  // 🎯 Homepage Schema for Google Rich Results
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${COMPANY_INFO.url}/#organization`,
        name: COMPANY_INFO.fullName,
        alternateName: COMPANY_INFO.name,
        url: COMPANY_INFO.url,
        logo: {
          "@type": "ImageObject",
          url: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
          width: 512,
          height: 512,
        },
        description: COMPANY_INFO.description,
        foundingDate: COMPANY_INFO.founded.toString(),
        slogan: COMPANY_INFO.tagline,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_INFO.address.street,
          addressLocality: COMPANY_INFO.address.city,
          addressCountry: COMPANY_INFO.address.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY_INFO.phone,
          contactType: "customer service",
          email: COMPANY_INFO.email,
          availableLanguage: ["English", "Arabic"],
        },
        sameAs: Object.values(COMPANY_INFO.social).filter(
          (url) => typeof url === "string" && url.startsWith("http")
        ),
      },
      {
        "@type": "WebSite",
        "@id": `${COMPANY_INFO.url}/#website`,
        url: COMPANY_INFO.url,
        name: COMPANY_INFO.name,
        description: COMPANY_INFO.shortDescription,
        publisher: {
          "@id": `${COMPANY_INFO.url}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${COMPANY_INFO.url}/#webpage`,
        url: COMPANY_INFO.url,
        name: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
        isPartOf: {
          "@id": `${COMPANY_INFO.url}/#website`,
        },
        about: {
          "@id": `${COMPANY_INFO.url}/#organization`,
        },
        description: COMPANY_INFO.description,
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <Layout header={1} footer={1} video={true}>
      <SEO
        title="Home"
        description="Crown Agency — A creative marketing & software agency. We craft branding, design, content, web & mobile apps that help brands lead in 2026. Let's build something royal."
        keywords={[
          "Crown Agency",
          "Marketing Agency",
          "Creative Agency 2026",
          "Software Development",
          "Branding Agency",
          "Web Development",
          "Mobile Apps",
          "Digital Marketing",
          "Content Creation",
          "UI UX Design",
          "SEO Services",
          "Cairo Agency",
        ]}
        schema={homepageSchema}
      />

      <HomeOneBanner />
      <Agency />
      {/* <PortfolioText /> */}
      <HomeOffer />
      <HomeTestimonial />
      <HomeBlog />
      <HomeSponsor />
      {/* <NextPage /> */}
    </Layout>
  );
};

export default Home;
