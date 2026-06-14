"use client";
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aura Coffee & Wellness",
    url: "https://aura-coffee-demo.vercel.app",
    logo: "https://aura-coffee-demo.vercel.app/logo.png",
    sameAs: ["https://www.facebook.com/share/17mSYUDRA6/"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
