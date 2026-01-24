"use client";
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brightway2Deutschland",
    url: "https://brightway2deutschland.com",
    logo: "https://brightway2deutschland.com/logo.png",
    sameAs: [
      "https://www.facebook.com/share/17mSYUDRA6/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
