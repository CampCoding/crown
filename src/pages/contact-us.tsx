import React from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/Seo";
import dynamic from "next/dynamic";
import { COMPANY_INFO } from "@/lib/constants";

const ContactPremium = dynamic(
  () => import("@/components/containers/ContactPremium"),
  { ssr: false }
);

const ContactUs = () => {
  // 🎯 Contact Page Schema for Google
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${COMPANY_INFO.name}`,
    description: `Get in touch with ${COMPANY_INFO.name} — talk to our team about marketing, software, branding & growth.`,
    url: `${COMPANY_INFO.url}/contact-us`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_INFO.fullName,
      url: COMPANY_INFO.url,
      logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: COMPANY_INFO.phone,
          contactType: "customer service",
          email: COMPANY_INFO.email,
          availableLanguage: ["English", "Arabic"],
          areaServed: "Worldwide",
        },
        {
          "@type": "ContactPoint",
          telephone: `+${COMPANY_INFO.whatsapp}`,
          contactType: "sales",
          contactOption: "TollFree",
          availableLanguage: ["English", "Arabic"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY_INFO.address.street,
        addressLocality: COMPANY_INFO.address.city,
        addressCountry: COMPANY_INFO.address.country,
      },
    },
  };

  return (
    <Layout header={1} footer={1} video={0}>
      <SEO
        title="Contact Us"
        description="Talk to Crown Agency — get a quote, ask a question, or start your next project. We reply fast on email & WhatsApp."
        keywords={[
          "Contact Crown Agency",
          "Get a Quote",
          "Marketing Agency Contact",
          "Software Agency Egypt",
          "Crown WhatsApp",
          "Hire Marketing Agency",
        ]}
        schema={contactSchema}
      />
      <ContactPremium />
    </Layout>
  );
};

export default ContactUs;
