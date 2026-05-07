// components/SEO.tsx
import Head from "next/head";
import { useRouter } from "next/router";
import { COMPANY_INFO } from "@/lib/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  schema?: Record<string, any>;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  noIndex = false,
  schema,
}: SEOProps) => {
  const router = useRouter();
  const canonicalUrl = `${COMPANY_INFO.url}${router.asPath.split("?")[0]}`;

  const pageTitle = title
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`;

  const pageDescription = description || COMPANY_INFO.description;
  const pageKeywords = keywords
    ? [...keywords, ...COMPANY_INFO.keywords].join(", ")
    : COMPANY_INFO.keywords.join(", ");
  const pageImage = image || `${COMPANY_INFO.url}${COMPANY_INFO.ogImage}`;

  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.fullName,
    alternateName: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    description: COMPANY_INFO.description,
    foundingDate: COMPANY_INFO.founded.toString(),
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
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={COMPANY_INFO.name} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Mobile */}
      <meta name="theme-color" content="#0072ed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || defaultSchema),
        }}
      />
    </Head>
  );
};

export default SEO;
